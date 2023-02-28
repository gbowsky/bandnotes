import { FsUtils } from "../lib/fs";
import { Bottom, Header, SimpleList } from "../lib/ui";

class IndexPage {
  openSettings() {
    hmApp.gotoPage({
      url: "page/SettingsPage",
    });
  }
  openNote(index) {
    hmApp.gotoPage({
      url: "page/NotePage",
      param: index,
    });
  }
  start() {
    /*
     * Globally store notes for perfomance reasons
     */
    if (!__$$app$$__.app.globalData.notes) {
      console.log("readop");
      __$$app$$__.app.globalData.notes = FsUtils.fetchJSON("notes.json");
    }

    Header({
      title: "BandNotes",
    });

    SimpleList(
      __$$app$$__.app.globalData.notes,
      (_, index) => {
        this.openNote(index);
      },
      0,
      96
    );

    Bottom({
      icon: "settings",
      onClick: () => {
        this.openSettings();
      },
    });
  }
}

let __$$app$$__ = __$$hmAppManager$$__.currentApp;
__$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {
    new IndexPage().start();
  },
});
