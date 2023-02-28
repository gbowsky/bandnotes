import { CONTRAST } from "../lib/defaults";
import { loadSettings } from "../lib/settings";
import { Header } from "../lib/ui";

class NotePage {
  constructor(index) {
    this.start(__$$app$$__.app.globalData.notes[index]);
  }

  start(note) {
    const { fontSize, contrast } = loadSettings();
    const { name, content } = note;
    const { height } = hmUI.getTextLayout(content, {
      text_size: fontSize,
      text_width: 192,
      wrapped: 1,
    });

    Header({
      title: name,
      leftIcon: true,
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 96,
      h: height + 96,
      w: 192,
      text: content,
      color: CONTRAST[contrast],
      text_size: fontSize,
      text_style: hmUI.text_style.WRAP,
    });
  }
}

let __$$app$$__ = __$$hmAppManager$$__.currentApp;
__$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(index) {
    new NotePage(index);
  },
});
