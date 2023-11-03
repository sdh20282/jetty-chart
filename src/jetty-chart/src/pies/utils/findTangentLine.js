export const findTangentLine = ({ angle, pieRadius, innerRadius, cornerRadius }) => {
  const r1 = pieRadius; // 파이 반지름
  const r2 = innerRadius; // 내부원 반지름
  const r3 = cornerRadius; // 두번째 원 반지름

  const len = Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(r3, 2));
  const a = Math.cos(angle * (Math.PI / 180)) * len;
  const b = Math.sin(angle * (Math.PI / 180)) * len;

  return { x: a, y: b };
};
