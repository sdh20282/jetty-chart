export const getSortedColor = ({ data, color }) => {
  const sortedColors = data.map((item) => {
    // color 배열의 길이를 넘어서는 index에 대해 순환적으로 색상 선택
    return color[item.index % color.length];
  });

  return sortedColors;
};
