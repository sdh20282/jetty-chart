const getCoordinatesForPercent = (percent, startAngle) => {
  const x = Math.cos(2 * Math.PI * percent + (Math.PI * startAngle) / 180);
  const y = Math.sin(2 * Math.PI * percent + (Math.PI * startAngle) / 180);

  return [x, y];
};
export const getCoordinatesForPosition = (percent, startAngle, range) => {
  const x = Math.cos((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
  const y =
    (Math.sin((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180) *
      (100 - range)) /
    100;

  return { x: x, y: y };
};

export default getCoordinatesForPercent;
