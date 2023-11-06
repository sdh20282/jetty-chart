export const getOuterTangentLine = ({ angle, pieRadius, innerRadius, cornerRadius }) => {
  const r1 = pieRadius; // 파이 반지름
  const r2 = cornerRadius; // 두번째 원 반지름

  const len = Math.sqrt((r1 - r2) ** 2 - r2 ** 2);
  const tx = Math.cos(angle * (Math.PI / 180)) * len;
  const ty = Math.sin(angle * (Math.PI / 180)) * len;

  return {
    x: tx,
    y: ty,
  };
};
