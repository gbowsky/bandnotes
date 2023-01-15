import { TouchEventManager } from './touch';
import { 
  UI_HEADER_GROUP_WIDGET_STYLE,
  UI_HEADER_TITLE_FULL_WIDGET_STYLE,
  UI_HEADER_SUBTITLE_WIDGET_STYLE,
  UI_HEADER_TITLE_ONLY_WIDGET_STYLE,
  UI_SIMPLELIST_DIMENS_STYLE,
  UI_SIMPLELIST_CONTROL_SETTINGS,
  UI_ASSET_SETTINGS_56,
  UI_ASSET_ACCEPT_56,
  UI_ASSET_CANCEL_56,
  UI_ICON_56_BOTTOM_DIMENS,
  UI_BUTTON_WIDGET_STYLE
} from './ui.styles';

export function Header({
  title = 'Title',
  subtitle,
  onBack,
}) {
  const group = hmUI.createWidget(hmUI.widget.GROUP, UI_HEADER_GROUP_WIDGET_STYLE);
  
  if (subtitle) {
    group.createWidget(hmUI.widget.TEXT, {
      ...UI_HEADER_TITLE_FULL_WIDGET_STYLE,
      text: title,
    });

    group.createWidget(hmUI.widget.TEXT, {
      ...UI_HEADER_SUBTITLE_WIDGET_STYLE,
      text: subtitle,
    });

    return group;
  }

  if (onBack) {
    group.createWidget(hmUI.widget.IMG, {
      x: 6,
      y: 70,
      w: 10,
      h: 18,
      src: 'icons/chevron_back.png'
    });

    group.createWidget(hmUI.widget.TEXT, {
      ...UI_HEADER_TITLE_ONLY_WIDGET_STYLE,
      x: 16,
      w: 192 - 16,
      text: title,
    });

    const tappable = group.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 192,
      h: 96,
      src: '',
    });

    const touchManager = new TouchEventManager(tappable);
    touchManager.ontouch = onBack;

    return group;
  }

  group.createWidget(hmUI.widget.TEXT, {
    ...UI_HEADER_TITLE_ONLY_WIDGET_STYLE,
    text: title,
  });
  
  return group;
}

export function Bottom({ icon, onClick }) {
  let style = {
    text: '',
    click_func: onClick,
    ...UI_ICON_56_BOTTOM_DIMENS,
  }

  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    ...UI_ICON_56_BOTTOM_DIMENS,
  })

  switch (icon) {
    case 'settings':
      style.normal_src = UI_ASSET_SETTINGS_56;
      style.press_src = UI_ASSET_SETTINGS_56;
      break;
    case 'cancel':
      style.normal_src = UI_ASSET_CANCEL_56;
      style.press_src = UI_ASSET_CANCEL_56;
      break;
    default:
      style.normal_src = UI_ASSET_ACCEPT_56; 
      style.press_src = UI_ASSET_ACCEPT_56; 
  }

  return hmUI.createWidget(hmUI.widget.BUTTON, style);
}

export function SimpleList(
  list = [],
  onClick = (list, index) => { console.log(index) },
  paddingTop = 0,
  paddingBottom = 0,
) {
  return hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
    ...UI_SIMPLELIST_DIMENS_STYLE({ paddingTop, paddingBottom }),
    ...UI_SIMPLELIST_CONTROL_SETTINGS,
    data_array: list,
    data_count: list.length,
    item_click_func: onClick,
    data_type_config: [{
      start: 0,
      end: list.length - 1,
      type_id: 1
    }],
    data_type_config_count: 1
  });
}

export function Slider({
  x,
  y,
  mode,
  onIncrement,
  onDecrement,
}) {
  const group = hmUI.createWidget(hmUI.widget.GROUP, {
    x,
    y,
    w: 192,
    h: 64,
  });

  group.createWidget(hmUI.widget.FILL_RECT, {
    color: 0x1c1c1c,
    radius: 16,
    x: 0,
    y: 0,
    w: 192,
    h: 64,
  })

  group.createWidget(hmUI.widget.BUTTON, {
    x: 0,
    y: 0,
    w: 192 / 3,
    h: 64,
    text: '-',
    text_size: 24,
    ...UI_BUTTON_WIDGET_STYLE,
    click_func: onDecrement,
  });

  group.createWidget(hmUI.widget.FILL_RECT, {
    color: 0x3c3c3c,
    radius: 0,
    x: 192 / 3 - 2,
    y: (64 - 36) / 2,
    w: 1,
    h: 36,
  })

  switch (mode) {
    case 'size':
      group.createWidget(hmUI.widget.IMG, {
        x: 192 / 3,
        y: 0,
        w: 192 / 3,
        h: 64,
        pos_y: (64 - 19) / 2,
        pos_x: (64 - 30) / 2,
        src: 'icons/Slider/size.png'
      });
      break
    default:
    case 'contrast':
      group.createWidget(hmUI.widget.IMG, {
        x: 192 / 3,
        y: 0,
        w: 192 / 3,
        h: 64,
        pos_y: (64 - 18) / 2,
        pos_x: (64 - 34) / 2,
        src: 'icons/Slider/contrast.png'
      });
  }

  group.createWidget(hmUI.widget.FILL_RECT, {
    color: 0x3c3c3c,
    radius: 0,
    x: 192 / 3 * 2 - 1,
    y: (64 - 36) / 2,
    w: 1,
    h: 36,
  })


  group.createWidget(hmUI.widget.BUTTON, {
    x: 192 / 3 * 2,
    y: 0,
    w: 192 / 3,
    h: 64,
    text: '+',
    text_size: 24,
    ...UI_BUTTON_WIDGET_STYLE,
    click_func: onIncrement,
  });
}

export function Button(x, y, w, h, text, onClick) {
  return hmUI.createWidget(hmUI.widget.BUTTON, {
    click_func: onClick,
    text: text,
    x: x,
    y: y,
    w: w,
    h: h,
    ...UI_BUTTON_WIDGET_STYLE,
  });
}