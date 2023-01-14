class IndexPage {
    start() {
        hmUI.createWidget(hmUI.widget.TEXT, {
            x: 0,
            y: 0,
            w: 196,
            h: 96,
            text: 'hello world',
            fontSize: 16,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            color: 0xffffff,
          });
    }
}

let __$$app$$__ = __$$hmAppManager$$__.currentApp;
__$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(p) {
    new IndexPage().start();
  }
});