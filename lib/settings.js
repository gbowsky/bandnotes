import { DEFAULT_SETTINGS } from "./defaults";
import { FsUtils } from "./fs";

const SETTINGS_PATH = "/storage/bn_settings.json";

export function loadSettings() {
  let result;

  try {
    result = FsUtils.fetchJSON(SETTINGS_PATH);
  } catch {
    result = DEFAULT_SETTINGS;
    FsUtils.writeText(SETTINGS_PATH, JSON.stringify(DEFAULT_SETTINGS));
  }

  return result;
}

export function saveSettings({
  fontSize,
  caffeinate,
  contrast,
}) {
  const newSettings = {
    contrast,
    fontSize,
    caffeinate,
  };

  FsUtils.writeText(SETTINGS_PATH, JSON.stringify(newSettings));
}