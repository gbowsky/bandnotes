import { CONTRAST, PLACEHOLDER } from "../lib/defaults";
import { loadSettings, saveSettings } from "../lib/settings";
import { Bottom, Header, Slider } from "../lib/ui";

class SettingsPage {
  onSizeDecrement() {
    if (this.settings.fontSize >= 14) {
      this.settings.fontSize -= 2;
      this.text.setProperty(hmUI.prop.TEXT_SIZE, this.settings.fontSize);
    }
  }

  onSizeIncrement() {
    if (this.settings.fontSize <= 32) {
      this.settings.fontSize += 2;
      this.text.setProperty(hmUI.prop.TEXT_SIZE, this.settings.fontSize);
    }
  }

  onContrastDecrement() {
    if (this.settings.contrast - 1 >= 0) {
      this.settings.contrast --;
      this.text.setProperty(hmUI.prop.COLOR, CONTRAST[this.settings.contrast]);
    }
  }

  onContrastIncrement() {
    if (this.settings.contrast + 1 <= 4) {
      this.settings.contrast ++;
      this.text.setProperty(hmUI.prop.COLOR, CONTRAST[this.settings.contrast]);
    }
  }

  start() {
    this.settings = loadSettings();

    Header({
      title: 'Settings',
      onBack: () => hmApp.goBack(),
    })

    this.text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 96 + 12,
      h: 100,
      w: 192,
      text: PLACEHOLDER,
      text_size: this.settings.fontSize,
      color: CONTRAST[this.settings.contrast],
      text_style: hmUI.text_style.WRAP,
    });

    Slider({
      x: 0,
      y: 96 + 112 + 12,
      onIncrement: () => this.onSizeIncrement(),
      onDecrement: () => this.onSizeDecrement(),
      mode: 'size'
    })

    Slider({
      x: 0,
      y: 96 + 112 + 12 + 64 + 12,
      onIncrement: () => this.onContrastIncrement(),
      onDecrement: () => this.onContrastDecrement(),
      mode: 'contrast'
    })

    Bottom({
      onClick: () => {
        saveSettings(this.settings);
        hmApp.goBack();
      }
    });
  }
}

let __$$app$$__ = __$$hmAppManager$$__.currentApp;
__$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(p) {
    new SettingsPage().start();
  }
});