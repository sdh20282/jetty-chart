export const calculateWarpperTransform = ({ horizontal, reverse, innerMargin, padding }) => {
  return horizontal
    ? `translate(${reverse ? innerMargin.top : innerMargin.bottom},${padding})`
    : `translate(${padding}, ${reverse ? innerMargin.bottom : innerMargin.top})`;
};

export const calculateBarWrapperTransform = ({
  useAnimation,
  useTranslate,
  renderType,
  horizontal,
  zeroHeight,
  center,
  halfBarRealWidth,
  drawHeight,
  barHeight
}) => {
  return useAnimation && useTranslate
    ? "translate(0,0)"
    : useAnimation && renderType.includes("grow")
    ? horizontal
      ? `translate(${zeroHeight},${center - halfBarRealWidth})`
      : `translate(${center - halfBarRealWidth})`
    : horizontal
    ? `translate(${zeroHeight},${center - halfBarRealWidth})`
    : `translate(${center - halfBarRealWidth},${drawHeight - barHeight - zeroHeight})`;
};

export const calculateBarWrapperFrom = ({
  horizontal,
  zeroHeight,
  translate,
  borderRadius,
  center,
  rectHeight,
  rectWidth,
  drawHeight,
  barHeight
}) => {
  return horizontal
    ? `${zeroHeight - translate.zeroHeight - borderRadius}px,${center - translate.center - (rectHeight - translate.height) / 2}px`
    : `${center - translate.center - (rectWidth - translate.width) / 2}px,${drawHeight - barHeight - zeroHeight}px`;
};

export const calculateBarWrapperTo = ({ horizontal, zeroHeight, translate, center, drawHeight, barHeight, halfBarRealWidth }) => {
  return horizontal
    ? `${zeroHeight - translate.zeroHeight}px,${center - halfBarRealWidth}px`
    : `${center - halfBarRealWidth}px,${drawHeight - barHeight - zeroHeight}px`;
};

export const calculateBarTransform = ({
  useAnimation,
  renderType,
  useTranslate,
  horizontal,
  checkPositive,
  barOnlyUpperRadius,
  borderRadius,
  barHeight,
  nowPosition
}) => {
  nowPosition ??= 0;

  return (useAnimation && renderType.includes("grow")) || (useAnimation && useTranslate)
    ? ""
    : horizontal
    ? `translate(${checkPositive ? (barOnlyUpperRadius ? -borderRadius : 0) + nowPosition : -barHeight - nowPosition})`
    : `translate(0,${checkPositive ? nowPosition : barHeight - (barOnlyUpperRadius ? borderRadius : 0) - nowPosition})`;
};

export const calculateBarFrom = ({
  useTranslate,
  horizontal,
  checkPositive,
  borderRadius,
  rectWidth,
  translate,
  barHeight,
  barOnlyUpperRadius,
  drawHeight,
  zeroHeight
}) => {
  return useTranslate
    ? horizontal
      ? `${checkPositive ? 0 : borderRadius + borderRadius - rectWidth + translate.width}px`
      : `0px,${(checkPositive ? translate.height : barHeight + (barOnlyUpperRadius ? -borderRadius : 0)) + translate.zeroHeight}px`
    : horizontal
    ? `${barOnlyUpperRadius ? (checkPositive ? -borderRadius : borderRadius) : 0}px,0px`
    : `0px,${drawHeight - zeroHeight + (barOnlyUpperRadius ? (checkPositive ? borderRadius : -borderRadius) : 0)}px`;
};

export const calculateStackedBarFrom = ({
  useTranslate,
  horizontal,
  checkPositive,
  borderRadius,
  translate,
  barHeight,
  barOnlyUpperRadius,
  drawHeight,
  zeroHeight,
  nowPosition
}) => {
  return useTranslate
    ? horizontal
      ? `${checkPositive ? nowPosition - translate.position : -barHeight + translate.totalHeight - nowPosition + translate.position}px`
      : `0px,${
          checkPositive
            ? translate.totalHeight + nowPosition - translate.position
            : barHeight + (barOnlyUpperRadius ? -borderRadius : 0) + translate.zeroHeight - nowPosition + translate.position
        }px`
    : horizontal
    ? `${barOnlyUpperRadius ? (checkPositive ? -borderRadius : borderRadius) : 0}px,0px`
    : `0px,${drawHeight - zeroHeight + (barOnlyUpperRadius ? (checkPositive ? borderRadius : -borderRadius) : 0)}px`;
};

export const calculateBarTo = ({
  useTranslate,
  horizontal,
  checkPositive,
  borderRadius,
  rectWidth,
  translate,
  barHeight,
  barOnlyUpperRadius,
  drawHeight,
  zeroHeight,
  nowPosition
}) => {
  nowPosition ??= 0;

  return useTranslate
    ? horizontal
      ? `${(checkPositive ? -borderRadius + nowPosition : -rectWidth + borderRadius - nowPosition) + translate.zeroHeight}px`
      : `0px,${checkPositive ? nowPosition : barHeight - borderRadius - nowPosition}px`
    : horizontal
    ? `${checkPositive ? (barOnlyUpperRadius ? -borderRadius : 0) + nowPosition : -barHeight - nowPosition}px,0px`
    : `0px,${drawHeight - zeroHeight - (checkPositive ? barHeight - nowPosition : (barOnlyUpperRadius ? borderRadius : 0) + nowPosition)}px`;
};

export const calculateLabelTransform = ({
  useAnimation,
  useTranslate,
  horizontal,
  horizontalLabelLocation,
  halfBarRealWidth,
  verticalLabelLocation,
  renderType,
  drawHeight,
  barHeight,
  zeroHeight
}) => {
  return useAnimation && useTranslate
    ? ``
    : horizontal
    ? `translate(${horizontalLabelLocation},${halfBarRealWidth})`
    : `translate(${halfBarRealWidth},${
        verticalLabelLocation + (useAnimation && renderType.includes("grow") ? drawHeight - barHeight - zeroHeight : 0)
      })`;
};

/* eslint-disable complexity */
export const calculateLabelFrom = ({
  useTranslate,
  horizontal,
  labelPosition,
  checkPositive,
  rectWidth,
  translate,
  barBorderRadius,
  labelMargin,
  rectHeight,
  borderRadius,
  barHeight
}) => {
  return useTranslate
    ? horizontal
      ? labelPosition === "over"
        ? `${(checkPositive ? rectWidth - translate.width : barBorderRadius) + labelMargin}px,${(rectHeight - translate.height) / 2}px`
        : labelPosition === "under"
        ? `${(checkPositive ? 0 : -rectWidth + translate.width + borderRadius) + borderRadius - labelMargin}px,${
            (rectHeight - translate.height) / 2
          }px`
        : `${(checkPositive ? (barHeight - translate.width) / 2 : -(barHeight - translate.width) / 2) + borderRadius}px,${
            (rectHeight - translate.height) / 2
          }px`
      : labelPosition === "over"
      ? `${(rectWidth - translate.width) / 2}px,${(checkPositive ? translate.height : barHeight) - labelMargin + translate.zeroHeight}px`
      : labelPosition === "under"
      ? `${(rectWidth - translate.width) / 2}px,${
          (checkPositive ? barHeight : barHeight + barHeight - translate.height) + labelMargin + translate.zeroHeight
        }px`
      : `${(rectWidth - translate.width) / 2}px,${
          checkPositive
            ? translate.height + (barHeight - translate.height) / 2 + translate.zeroHeight
            : barHeight + (barHeight - translate.height) / 2 + translate.zeroHeight
        }px`
    : horizontal
    ? labelPosition === "over"
      ? `${checkPositive ? -barHeight : 0}px,0px`
      : labelPosition === "under"
      ? `${checkPositive ? 0 : barHeight}px,0px`
      : `${checkPositive ? -barHeight / 2 : barHeight / 2}px,0px`
    : labelPosition === "over"
    ? `0px,${checkPositive ? barHeight : 0}px`
    : labelPosition === "under"
    ? `0px,${checkPositive ? 0 : -barHeight}px`
    : `0px,${checkPositive ? barHeight / 2 : -barHeight / 2}px`;
};
/* eslint-enable complexity */

/* eslint-disable complexity */
export const calculateStackedLabelFrom = ({
  useTranslate,
  horizontal,
  labelPosition,
  checkPositive,
  rectWidth,
  translate,
  barBorderRadius,
  labelMargin,
  rectHeight,
  borderRadius,
  barHeight,
  nowPosition
}) => {
  nowPosition ??= 0;

  return useTranslate
    ? horizontal
      ? labelPosition === "over"
        ? `${(checkPositive ? 0 : barBorderRadius) + labelMargin}px,${(rectHeight - translate.totalHeight) / 2}px`
        : labelPosition === "under"
        ? `${(checkPositive ? 0 : -rectWidth + translate.width + borderRadius) + borderRadius - labelMargin}px,${
            (rectHeight - translate.totalHeight) / 2
          }px`
        : `${(checkPositive ? (barHeight - translate.width) / 2 : -(barHeight - translate.width) / 2) + borderRadius}px,${
            (rectHeight - translate.totalHeight) / 2
          }px`
      : labelPosition === "over"
      ? `${(rectWidth - translate.width) / 2}px,${
          (checkPositive ? translate.totalHeight + nowPosition - translate.position : barHeight - nowPosition + translate.position) -
          labelMargin +
          translate.zeroHeight
        }px`
      : labelPosition === "under"
      ? `${(rectWidth - translate.width) / 2}px,${
          (checkPositive ? barHeight : barHeight + barHeight - translate.totalHeight) + labelMargin + translate.zeroHeight
        }px`
      : `${(rectWidth - translate.width) / 2}px,${
          checkPositive
            ? translate.totalHeight + (barHeight - translate.totalHeight) / 2 + translate.zeroHeight
            : barHeight + (barHeight - translate.totalHeight) / 2 + translate.zeroHeight
        }px`
    : horizontal
    ? labelPosition === "over"
      ? `${checkPositive ? -rectHeight - labelMargin - nowPosition : labelMargin + nowPosition + rectWidth - rectHeight}px,0px`
      : labelPosition === "under"
      ? `${checkPositive ? 0 : barHeight}px,0px`
      : `${checkPositive ? -barHeight / 2 : barHeight / 2}px,0px`
    : labelPosition === "over"
    ? `0px,${checkPositive ? barHeight - nowPosition : nowPosition}px`
    : labelPosition === "under"
    ? `0px,${checkPositive ? 0 : -barHeight}px`
    : `0px,${checkPositive ? barHeight / 2 : -barHeight / 2}px`;
};
/* eslint-enable complexity */

export const calculateLabelTo = ({
  useTranslate,
  horizontal,
  labelPosition,
  checkPositive,
  barHeight,
  labelMargin,
  translate,
  halfBarRealWidth,
  nowPosition
}) => {
  nowPosition ??= 0;

  return useTranslate
    ? horizontal
      ? labelPosition === "over"
        ? `${(checkPositive ? barHeight : 0) + labelMargin + translate.zeroHeight}px,${halfBarRealWidth}px`
        : labelPosition === "under"
        ? `${(checkPositive ? 0 : -barHeight) + translate.zeroHeight - labelMargin}px,${halfBarRealWidth}px`
        : `${(checkPositive ? barHeight / 2 : -barHeight / 2) + translate.zeroHeight}px,${halfBarRealWidth}px`
      : labelPosition === "over"
      ? `${halfBarRealWidth}px,${(checkPositive ? nowPosition : barHeight - nowPosition) - labelMargin}px`
      : labelPosition === "under"
      ? `${halfBarRealWidth}px,${(checkPositive ? barHeight : barHeight + barHeight) + labelMargin}px`
      : `${halfBarRealWidth}px,${checkPositive ? barHeight / 2 : barHeight + barHeight / 2}px`
    : `0px,0px`;
};
