export const getMaxWidthRadius = ({ innerRadius, ratio }) => {
  console.log(innerRadius, ratio);
  return innerRadius / (1 - Math.cos((ratio * 360 * Math.PI) / 180));
};
