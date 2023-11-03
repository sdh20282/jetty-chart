export const getTwoPointDistance = ({ point1, point2 }) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
