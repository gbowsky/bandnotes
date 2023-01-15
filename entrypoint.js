// Export module
let currentScreen = null;
let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(p) {
    new IndexPage().start();
  },
  onDestroy: () => {}
});
