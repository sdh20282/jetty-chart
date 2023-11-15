export const setNewList = ({
  list,
  tooltipWidth,
  tooltipHeight,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  fontColor,
  fontOpacity,
  textMoveX,
  textAnchor,
  lineHeight,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  strokeRadius,
}) => {
  let cumulativeLineHeight = 0;
  let prevLineHeight = 0;
  return list.map((item, index) => {
    cumulativeLineHeight += prevLineHeight;
    prevLineHeight = item.lineHeight || lineHeight;

    return {
      list,
      tooltipWidth,
      tooltipHeight,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      fontColor,
      fontOpacity,
      textMoveX,
      textAnchor,
      strokeColor,
      strokeWidth,
      strokeOpacity,
      strokeRadius,
      ...item,
      lineHeight: cumulativeLineHeight,
    };
  });
};
