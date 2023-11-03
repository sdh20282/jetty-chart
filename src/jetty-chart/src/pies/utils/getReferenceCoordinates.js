export const getReferenceCoordinates = ({ startAngle, percent, pieRadius }) => {
  const angleInDegrees = (startAngle + percent * 180) % 360;
  const angleInRadians = angleInDegrees * (Math.PI / 180);

  const x = pieRadius * Math.cos(angleInRadians);
  const y = pieRadius * Math.sin(angleInRadians);

  return { x, y };
};
