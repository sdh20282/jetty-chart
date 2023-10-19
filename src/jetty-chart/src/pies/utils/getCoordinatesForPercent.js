const getCoordinatesForPercent = (percent, startAngle) => {
  const x = Math.cos(2 * Math.PI * percent + (Math.PI * startAngle) / 180);
  const y = Math.sin(2 * Math.PI * percent + (Math.PI * startAngle) / 180);

  return [x, y];
};

export default getCoordinatesForPercent;
