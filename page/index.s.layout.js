import * as hmUI from "@zos/ui";
import { px } from "@zos/utils";

import {
  DEFAULT_COLOR,
  DEFAULT_COLOR_TRANSPARENT,
  WHITE,
} from "../utils/config/constants";
import { DEVICE_WIDTH } from "../utils/config/device";

export const FETCH_BUTTON = (label) => ({
  x: (DEVICE_WIDTH - px(340)) / 2,
  y: px(280),
  w: px(340),
  h: px(80),
  text_size: px(36),
  radius: px(12),
  normal_color: WHITE,
  press_color: DEFAULT_COLOR_TRANSPARENT,
  text: label,
  color: DEFAULT_COLOR,
});

export const FETCH_RESULT_TEXT = {
  x: px(50),
  y: px(100),
  w: DEVICE_WIDTH - 2 * px(50),
  h: px(160),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
};

export const BG_IMAGE = {
  src: 'icon.png',
  x: 0,
  y: 0,
  auto_scale: true,
  w: "470",
  h: "470",
};