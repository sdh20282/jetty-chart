import { checkBarBorderRadius } from "../../utils/exception/check-common-exception";

export const calculateBase = ({ horizontal, height, margin, width, scopeResult, autoScope, innerMargin, padding, length, barGap }) => {
  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;
  const totalScope = scopeResult.maxScope - scopeResult.minScope;

  if (!autoScope && scopeResult.display) {
    innerMargin.top = scopeResult.topMarginRatio * totalHeight;
    innerMargin.bottom = scopeResult.bottomMarginRatio * totalHeight;
  }

  const drawWidth = totalWidth - padding - padding;
  const drawHeight = totalHeight - innerMargin.top - innerMargin.bottom;
  const lineHeight = drawHeight / (scopeResult.scope.length - 1);

  const barWidth = drawWidth / length;
  const halfBarWidth = barWidth / 2;
  const halfBarRealWidth = halfBarWidth - barGap * halfBarWidth;

  const zeroHeight =
    scopeResult.scope.reduce((acc, cur) => {
      if (cur !== 0) {
        acc += 1;
      }

      if (cur === 0) {
        acc = 0;
      }

      return acc;
    }, 0) * lineHeight;

  return {
    totalWidth,
    totalHeight,
    totalScope,
    innerMargin,
    drawWidth,
    drawHeight,
    lineHeight,
    barWidth,
    halfBarWidth,
    halfBarRealWidth,
    zeroHeight,
  };
};

export const calculateBarBase = ({
  horizontal,
  reverse,
  value,
  length,
  idx,
  drawWidth,
  drawHeight,
  useMinHeight,
  minHeight,
  totalScope,
  barBorderRadius,
  barOnlyUpperRadius,
  halfBarRealWidth,
}) => {
  const center = (drawWidth / length) * idx + drawWidth / length / 2;
  const valueRatio = Math.abs(value) / totalScope;
  let barHeight = valueRatio * drawHeight;

  if (useMinHeight && barHeight < minHeight) {
    barHeight = minHeight;
  }

  let barHeightWithoutRadius = barHeight > barBorderRadius ? barHeight - barBorderRadius : barHeight;

  if (useMinHeight && barHeightWithoutRadius < minHeight) {
    barHeightWithoutRadius = minHeight;
  }

  const borderRadius = checkBarBorderRadius({ halfWidth: halfBarRealWidth, height: barHeightWithoutRadius, borderRadius: barBorderRadius });
  const barTotalWidth = halfBarRealWidth + halfBarRealWidth;
  const realHeight = barHeightWithoutRadius + borderRadius;

  const rectWidth = horizontal ? barHeight + (barOnlyUpperRadius ? borderRadius : 0) : barTotalWidth;
  const rectHeight = horizontal ? barTotalWidth : barHeight + (barOnlyUpperRadius ? borderRadius : 0);
  const checkPositive = value > 0 || (!reverse && value === 0);

  return { center, valueRatio, barHeight, barHeightWithoutRadius, borderRadius, barTotalWidth, realHeight, rectWidth, rectHeight, checkPositive };
};

export const calculateLabelLocation = ({ barHeight, realHeight, checkPositive, labelPosition, labelMargin }) => {
  const horizontalLabelLocation =
    labelPosition === "over"
      ? (checkPositive ? realHeight : 0) + labelMargin
      : labelPosition === "under"
      ? (checkPositive ? 0 : -realHeight) - labelMargin
      : checkPositive
      ? realHeight / 2
      : -realHeight / 2;
  const verticalLabelLocation =
    labelPosition === "over"
      ? barHeight - (checkPositive ? realHeight : 0) - labelMargin
      : labelPosition === "under"
      ? barHeight + (checkPositive ? 0 : realHeight) + labelMargin
      : barHeight + (checkPositive ? -realHeight / 2 : realHeight / 2);

  return { horizontalLabelLocation, verticalLabelLocation };
};

export const calculateStackedBarBase = ({ rectHeight, values, idx, totalValue, reverseOrder }) => {
  const nowHeight = (values[idx] / totalValue) * rectHeight;
  let nowPosition = 0;

  if (reverseOrder) {
    for (let index = values.length - 1; index > idx; index--) {
      nowPosition += (values[index] / totalValue) * rectHeight;
    }
  } else {
    for (let index = 0; index < idx; index++) {
      nowPosition += (values[index] / totalValue) * rectHeight;
    }
  }

  return { nowHeight, nowPosition };
};

export const calculateStackedLabelLocation = ({
  barHeight,
  realHeight,
  checkPositive,
  labelPosition,
  labelMargin,
  rectWidth,
  rectHeight,
  nowPosition,
}) => {
  const horizontalLabelLocation =
    labelPosition === "over"
      ? (checkPositive ? nowPosition : -(barHeight + nowPosition)) + rectWidth + labelMargin
      : // : labelPosition === "under"
        // ? (checkPositive ? 0 : -realHeight) - labelMargin
        (checkPositive ? nowPosition : -(barHeight + nowPosition)) + rectWidth / 2;
  const verticalLabelLocation =
    labelPosition === "over"
      ? (checkPositive ? nowPosition : barHeight - nowPosition) - labelMargin
      : labelPosition === "under"
      ? barHeight + (checkPositive ? 0 : realHeight) + labelMargin
      : (checkPositive ? nowPosition : barHeight - nowPosition) + rectHeight / 2;

  return { horizontalLabelLocation, verticalLabelLocation };
};
