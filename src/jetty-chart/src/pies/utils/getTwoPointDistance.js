export const getTwoPointDistance = ({ point1, point2 }) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
