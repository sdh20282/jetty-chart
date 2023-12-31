import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_PIE_BACKGROUND_COLOR,
  DEFAULT_DONUT_BACKGROUND_COLOR,
  DEFAULT_PADDING,
  DEFAULT_PIE_OPACITY,
  DEFAULT_CIRCLE_OPACITY,
  DEFAULT_DONUT_OPACITY,
  DEFAULT_PIECE_OPACITY,
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
import {
  DEFAULT_ARC_LINK_LABEL_FONT_SIZE,
  DEFAULT_ARC_LINK_LABEL_FONT_WEIGHT,
  DEFAULT_ARC_LINK_LABEL_FONT_FAMILY,
  DEFAULT_ARC_LINK_LABEL_FONT_STYLE,
  DEFAULT_ARC_LINK_LABEL_SKIP_ANGLE,
  DEFAULT_ARC_LINK_LABEL_LINE_DISTANCE,
  DEFAULT_ARC_LINK_LABEL_START_LINE,
  DEFAULT_ARC_LINK_LABEL_END_LINE,
  DEFAULT_ARC_LINK_LABEL_TEXT_DISTANCE,
  DEFAULT_ARC_LINK_LABEL_LINE_SIZE,
  DEFAULT_ARC_LINK_LABEL_TEXT,
  DEFAULT_ARC_LINK_LABEL_IS_USE,
  DEFAULT_ARC_LINK_LABEL_TEXT_COLOR,
  DEFAULT_ARC_LINK_LABEL_LINE_COLOR,
  DEFAULT_ARC_LINK_LABEL_LINE_OPACITY,
  DEFAULT_ARC_LINK_LABEL_TEXT_OPACITY,
} from "../constants/arcLinkLabelSettings";
import {
  DEFAULT_ANIMATION_DELAY,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_ON,
  DEFAULT_ANIMATION_SCALE,
  DEFAULT_ANIMATION_TIMING,
} from "../constants/animationSettings";
import {
  DEFAULT_LEGEND_COLOR,
  DEFAULT_LEGEND_DIRECTION_COLUMN,
  DEFAULT_LEGEND_ITEM_MARGIN,
  DEFAULT_LEGEND_ITEM_WIDTH,
  DEFAULT_LEGEND_ON_START,
  DEFAULT_LEGEND_OPACITY,
  DEFAULT_LEGEND_POSITION,
  DEFAULT_LEGEND_SIZE,
  DEFAULT_LEGEND_SYMBOL_MARGIN,
  DEFAULT_LEGEND_SYMBOL_OPACITY,
  DEFAULT_LEGEND_SYMBOL_RADIUS,
  DEFAULT_LEGEND_SYMBOL_SIZE,
  DEFAULT_LEGEND_USE,
  DEFAULT_LEGEND_WEIGHT,
  DEFAULT_LEGEND_X_LOCATION,
  DEFAULT_LEGEND_Y_LOCATION,
} from "../constants/legendSettings";

export const setDefaultGeneralSettings = () => {
  return {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    pieBackgroundColor: DEFAULT_PIE_BACKGROUND_COLOR,
    donutBackgroundColor: DEFAULT_DONUT_BACKGROUND_COLOR,
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    paddingLeft: DEFAULT_PADDING,
    paddingRight: DEFAULT_PADDING,
    pieOpacity: DEFAULT_PIE_OPACITY,
    circleOpacity: DEFAULT_CIRCLE_OPACITY,
    donutOpacity: DEFAULT_DONUT_OPACITY,
    pieceOpacity: DEFAULT_PIECE_OPACITY,
  };
};

export const setDefaultPieSettings = () => {
  return {
    color: DEFAULT_COLOR,
    pieRadius: DEFAULT_PIE_RADIUS,
    innerRadius: DEFAULT_INNER_RADIUS,
    cornerRadius: DEFAULT_CORNER_RADIUS,
    startAngle: DEFAULT_START_ANGLE,
    padAngle: DEFAULT_PAD_ANGLE,
    strokeColor: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    strokeOpacity: DEFAULT_STROKE_OPACITY,
    useAngle: DEFAULT_USE_ANGLE,
    sortByValue: DEFAULT_SORT_BY_VALUE,
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

export const setDefaultArcLinkLabelSettings = () => {
  return {
    arcLinkLabelTextColor: DEFAULT_ARC_LINK_LABEL_TEXT_COLOR,
    arcLinkLabelLineColor: DEFAULT_ARC_LINK_LABEL_LINE_COLOR,
    arcLinkLabelFontSize: DEFAULT_ARC_LINK_LABEL_FONT_SIZE,
    arcLinkLabelFontWeight: DEFAULT_ARC_LINK_LABEL_FONT_WEIGHT,
    arcLinkLabelFontFamily: DEFAULT_ARC_LINK_LABEL_FONT_FAMILY,
    arcLinkLabelFontStyle: DEFAULT_ARC_LINK_LABEL_FONT_STYLE,
    arcLinkLabelSkipAngle: DEFAULT_ARC_LINK_LABEL_SKIP_ANGLE,
    arcLinkLabelLineDistance: DEFAULT_ARC_LINK_LABEL_LINE_DISTANCE,
    arcLinkLabelStartLine: DEFAULT_ARC_LINK_LABEL_START_LINE,
    arcLinkLabelEndLine: DEFAULT_ARC_LINK_LABEL_END_LINE,
    arcLinkLabelTextDistance: DEFAULT_ARC_LINK_LABEL_TEXT_DISTANCE,
    arcLinkLabelLineSize: DEFAULT_ARC_LINK_LABEL_LINE_SIZE,
    arcLinkLabelText: DEFAULT_ARC_LINK_LABEL_TEXT,
    arcLinkLabelIsUse: DEFAULT_ARC_LINK_LABEL_IS_USE,
    arcLinkLabelLineOpacity: DEFAULT_ARC_LINK_LABEL_LINE_OPACITY,
    arcLinkLabelTextOpacity: DEFAULT_ARC_LINK_LABEL_TEXT_OPACITY,
  };
};

export const setDefaultAnimationSettings = () => {
  return {
    animationOn: DEFAULT_ANIMATION_ON,
    animationDuration: DEFAULT_ANIMATION_DURATION,
    animationDelay: DEFAULT_ANIMATION_DELAY,
    animationTiming: DEFAULT_ANIMATION_TIMING,
    animationScale: DEFAULT_ANIMATION_SCALE,
  };
};

export const setDefaultLegendSettings = () => {
  return {
    // 이후 수정 필요
    marginTop: 2.5,
    marginBottom: 0,
    marginLeft: 2.8,
    marginRight: 0,
    // 이후 수정 필요
    useLegend: DEFAULT_LEGEND_USE,
    position: DEFAULT_LEGEND_POSITION, // bottom center top - left center right
    xLocation: DEFAULT_LEGEND_X_LOCATION,
    yLocation: DEFAULT_LEGEND_Y_LOCATION,
    directionColumn: DEFAULT_LEGEND_DIRECTION_COLUMN,
    itemWidth: DEFAULT_LEGEND_ITEM_WIDTH,
    itemMargin: DEFAULT_LEGEND_ITEM_MARGIN,
    symbolSize: DEFAULT_LEGEND_SYMBOL_SIZE,
    symbolRadius: DEFAULT_LEGEND_SYMBOL_RADIUS,
    symbolMargin: DEFAULT_LEGEND_SYMBOL_MARGIN,
    symbolOpacity: DEFAULT_LEGEND_SYMBOL_OPACITY,
    legendSize: DEFAULT_LEGEND_SIZE,
    legendWeight: DEFAULT_LEGEND_WEIGHT,
    legendOpacity: DEFAULT_LEGEND_OPACITY,
    legendColor: DEFAULT_LEGEND_COLOR,
    legendOnStart: DEFAULT_LEGEND_ON_START,
  };
};

export const setDefaultTooltipSettings = () => {
  return {
    tooltipUse: true,
  };
};
