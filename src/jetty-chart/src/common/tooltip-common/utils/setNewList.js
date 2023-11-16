export const setNewList = ({
  list,
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
  selectData,
  titleValue,
}) => {
  let cumulativeLineHeight = 0;
  let prevLineHeight = 0;
  let seletcValue = [];
  if (titleValue === "label-value") {
    seletcValue = [{ content: `${selectData.label} : ${selectData.value}` }];
  }
  const concatList = seletcValue.concat(list);
  return concatList.map((item, index) => {
    cumulativeLineHeight += prevLineHeight;
    prevLineHeight = item.lineHeight || lineHeight;

    return {
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
