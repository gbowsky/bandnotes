const UI_WIDTH = 192;
const UI_HEIGHT = 490;
const UI_ROUND_ZONE_HEIGHT = 96;

const UI_CHEVRON_WIDTH = 10;
const UI_CORNER_RADIUS = 16;
const UI_VERTICAL_SPACING = 12;
const UI_CONTROL_HEIGHT = 64;

const UI_TITLE_FONT_SIZE = 24;
const UI_SUBTITLE_FONT_SIZE = 20;
const UI_PRIMARY_FOREGROUND = 0xFFFFFF;
const UI_SECONDARY_FOREGROUND = 0xC1C1C1;

const UI_SECONDARY_BACKGROUND = 0x1C1C1C;
const UI_ACTIVE_BACKGROUND = 0x2C2C2C;

const UI_TITLE_TEXT_STYLE = {
  text_size: UI_TITLE_FONT_SIZE,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.BOTTOM,
  color: UI_PRIMARY_FOREGROUND,
};

const UI_SUBTITLE_TEXT_STYLE = {
  text_size: UI_SUBTITLE_FONT_SIZE,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  color: UI_SECONDARY_FOREGROUND,
};

export const UI_HEADER_GROUP_WIDGET_STYLE = {
  h: UI_ROUND_ZONE_HEIGHT,
  w: UI_WIDTH,
  x: 0,
  y: 0,
};

const UI_HEADER_TITLE_W_SUB_DIMENS_STYLE = {
  w: UI_WIDTH,
  h: UI_ROUND_ZONE_HEIGHT - UI_SUBTITLE_FONT_SIZE,
  x: 0,
  y: 0,
};

const UI_HEADER_SUBTITLE_DIMENS_STYLE = {
  w: UI_WIDTH,
  h: UI_SUBTITLE_FONT_SIZE,
  x: 0,
  y: UI_HEADER_TITLE_W_SUB_DIMENS_STYLE.h,
};

/* Header({}) */

export const UI_HEADER_TITLE_FULL_WIDGET_STYLE = {
  ...UI_TITLE_TEXT_STYLE,
  ...UI_HEADER_TITLE_W_SUB_DIMENS_STYLE,
};

export const UI_HEADER_SUBTITLE_WIDGET_STYLE = {
  ...UI_SUBTITLE_TEXT_STYLE,
  ...UI_HEADER_SUBTITLE_DIMENS_STYLE,
};

export const UI_HEADER_TITLE_ONLY_WIDGET_STYLE = {
  ...UI_TITLE_TEXT_STYLE,
  ...UI_HEADER_GROUP_WIDGET_STYLE,
};

/* SimpleList({}) */

const UI_SIMPLELIST_TEXT_VIEW_STYLE = {
  x: 0,
  y: 0,
  w: UI_WIDTH,
  h: UI_CONTROL_HEIGHT,
  key: 'name',
  color: UI_PRIMARY_FOREGROUND,
  text_size: UI_TITLE_FONT_SIZE,
}

const UI_SIMPLELIST_CONTROL_STYLE = {
  type_id: 1,
  item_bg_color: UI_SECONDARY_BACKGROUND,
  item_bg_radius: UI_CORNER_RADIUS,
  text_view: [UI_SIMPLELIST_TEXT_VIEW_STYLE],
  text_view_count: 1,
  item_height: UI_CONTROL_HEIGHT,
}

export const UI_SIMPLELIST_CONTROL_SETTINGS = {
  item_space: UI_VERTICAL_SPACING,
  item_config: [UI_SIMPLELIST_CONTROL_STYLE],
  item_config_count: 1,
}

export const UI_SIMPLELIST_DIMENS_STYLE = ({paddingTop, paddingBottom}) => ({
  x: paddingTop,
  y: 96 + paddingTop,
  h: UI_HEIGHT - UI_ROUND_ZONE_HEIGHT - paddingTop - paddingBottom,
  w: 192,
})

/* Button({}) */

export const UI_BUTTON_WIDGET_STYLE = {
  normal_color: UI_SECONDARY_BACKGROUND,
  press_color: UI_ACTIVE_BACKGROUND,
  radius: UI_CORNER_RADIUS,
}

/* Top and bottom buttons */

export const UI_ICON_56_SIZES = {
  w: 56,
  h: 56,
};

export const UI_ICON_56_TOP_DIMENS = {
  x: 68,
  y: 26,
  ...UI_ICON_56_SIZES,
};

export const UI_ICON_56_BOTTOM_DIMENS = {
  x: 0,
  y: UI_HEIGHT - UI_ROUND_ZONE_HEIGHT,
  w: UI_WIDTH,
  h: UI_ROUND_ZONE_HEIGHT,
  color: UI_SECONDARY_BACKGROUND,
};

export const UI_ASSET_CANCEL_56 = 'icons/cancel.png';
export const UI_ASSET_ACCEPT_56 = 'icons/accept.png';
export const UI_ASSET_SETTINGS_56 = 'icons/settings.png';