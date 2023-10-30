export const getCoordinatesForPercent = ({ percent, startAngle, radius }) => {
  const x = Math.cos(2 * Math.PI * percent + (Math.PI * startAngle) / 180) * radius;
  const y = Math.sin(2 * Math.PI * percent + (Math.PI * startAngle) / 180) * radius;

  return { x, y };
};

export const getCoordinatesForPosition = (percent, startAngle, range) => {
  const x1 = Math.cos((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
  const y1 =
    (Math.sin((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180) *
      (100 - range)) /
    100;
  const x2 = Math.cos((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
  const y2 =
    (Math.sin((2 * Math.PI * percent * (100 - range)) / 100 + (Math.PI * startAngle) / 180) *
      (100 - range)) /
    100;

  return { x1, x2, y1, y2 };
};
