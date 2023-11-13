import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_PIE_BACKGROUND_COLOR,
  DEFAULT_DONUT_BACKGROUND_COLOR,
  DEFAULT_PADDING,
} from "../constants/generalSettings";

import {
  DEFAULT_COLOR,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_INNER_RADIUS,
  DEFAULT_PAD_ANGLE,
  DEFAULT_PIE_RADIUS,
  DEFAULT_SORT_BY_VALUE,
  DEFAULT_START_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_OPACITY,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_USE_ANGLE,
  DEFAULT_DEBUG_TOOL,
} from "../constants/pieSetting";

import {
  DEFAULT_LABEL_COLOR,
  DEFAULT_LABEL_DEGREES,
  DEFAULT_LABEL_DISTANCE,
  DEFAULT_LABEL_FONT_FAMILY,
  DEFAULT_LABEL_FONT_SIZE,
  DEFAULT_LABEL_FONT_STYLE,
  DEFAULT_LABEL_FONT_WEIGHT,
  DEFAULT_LABEL_IS_ROTATE,
  DEFAULT_LABEL_IS_USE,
  DEFAULT_LABEL_MOVE_X,
  DEFAULT_LABEL_MOVE_Y,
  DEFAULT_LABEL_OPACITY,
  DEFAULT_LABEL_SKIP_RATIO,
  DEFAULT_LABEL_TEXT,
} from "../constants/labelSettings";

export const setDefaultGeneralSettings = () => {
  return {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    pieBackgroundColor: DEFAULT_PIE_BACKGROUND_COLOR,
    donutBackgroundColor: DEFAULT_DONUT_BACKGROUND_COLOR,
    padding: {
      top: DEFAULT_PADDING,
      bottom: DEFAULT_PADDING,
      left: DEFAULT_PADDING,
      right: DEFAULT_PADDING,
    },
  };
};

export const setDefaultPieSettings = () => {
  return {
    color: DEFAULT_COLOR,
    pieRadius: DEFAULT_PIE_RADIUS, // 파이 반지름, default 1
    innerRadius: DEFAULT_INNER_RADIUS, // 내부원 크기, default 0
    cornerRadius: DEFAULT_CORNER_RADIUS, // 조각 둥글기, default 0
    startAngle: DEFAULT_START_ANGLE, // 시작 위치 각도, default 0
    padAngle: DEFAULT_PAD_ANGLE, // 조각 크기, default 100
    strokeColor: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    strokeOpacity: DEFAULT_STROKE_OPACITY,
    useAngle: DEFAULT_USE_ANGLE,
    sortByValue: DEFAULT_SORT_BY_VALUE,
    debugTool: DEFAULT_DEBUG_TOOL,
  };
};

export const setDefaultLabelSettings = () => {
  return {
    labelColor: DEFAULT_LABEL_COLOR,
    labelFontSize: DEFAULT_LABEL_FONT_SIZE,
    labelFontWeight: DEFAULT_LABEL_FONT_WEIGHT,
    labelFontFamily: DEFAULT_LABEL_FONT_FAMILY,
    labelFontStyle: DEFAULT_LABEL_FONT_STYLE,
    labelMoveY: DEFAULT_LABEL_MOVE_Y,
    labelMoveX: DEFAULT_LABEL_MOVE_X,
    labelDistance: DEFAULT_LABEL_DISTANCE,
    labelIsRotate: DEFAULT_LABEL_IS_ROTATE,
    labelText: DEFAULT_LABEL_TEXT,
    labelSkipRatio: DEFAULT_LABEL_SKIP_RATIO,
    labelIsUse: DEFAULT_LABEL_IS_USE,
    labelDegrees: DEFAULT_LABEL_DEGREES,
    labelOpacity: DEFAULT_LABEL_OPACITY,
  };
};
