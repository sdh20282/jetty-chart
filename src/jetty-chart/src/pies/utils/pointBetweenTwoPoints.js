export const pointBetweenTwoPoints = ({ x1, y1, x2, y2, borderRadius }) => {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const ratio = borderRadius >= distance ? 1 : borderRadius / distance;

  const newX = x1 + ratio * (x2 - x1);
  const newY = y1 + ratio * (y2 - y1);

  return newX + "," + newY;
};
