const getCoordinatesForPercent = (percent, startAngle) => {
  const x = Math.cos(2 * Math.PI * percent + (Math.PI * startAngle) / 180);
  const y = Math.sin(2 * Math.PI * percent + (Math.PI * startAngle) / 180);

  return [x, y];
};
export const getCoordinatesForPosition = (percent, startAngle, range) => {
  const x1 = (Math.cos(2 * Math.PI * percent + (Math.PI * startAngle) / 180) * (100 - range)) / 100;
  const y1 = Math.cos((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
  const x2 = (Math.sin(2 * Math.PI * percent + (Math.PI * startAngle) / 180) * (100 - range)) / 100;
  const y2 = Math.sin((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180);

  return { x1: x1, y1: y1, x2: x2, y2: y2 };
};

export default getCoordinatesForPercent;
