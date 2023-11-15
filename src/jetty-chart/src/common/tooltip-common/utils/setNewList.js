export const setNewList = ({
  list,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  fontColor,
  fontOpacity,
  textAnchor,
  lineSize,
}) => {
  return list.map((item) => {
    return {
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      fontColor,
      fontOpacity,
      textAnchor,
      lineSize,
      ...item,
    };
  });
};
