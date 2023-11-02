export const findReferenceCoordinates = ({ startAngle, percent, pieRadius }) => {
  const angleInDegrees = startAngle + percent * 180;
  const angleInRadians = angleInDegrees * (Math.PI / 180);

  // 극좌표계(polar coordinate system)를 사용하여 좌표를 찾습니다.
  const x = pieRadius * Math.cos(angleInRadians);
  const y = pieRadius * Math.sin(angleInRadians);

  return { x, y };
};
