export const getInnerTangentLine = ({ angle, pieRadius, innerRadius, cornerRadius }) => {
  // const r1 = pieRadius; // 파이 반지름
  const r2 = innerRadius; // 내부원 반지름
  const r3 = cornerRadius; // 두번째 원 반지름

  const len = Math.sqrt((r2 + r3) ** 2 - r3 ** 2);
  const tx = Math.cos(angle * (Math.PI / 180)) * len;
  const ty = Math.sin(angle * (Math.PI / 180)) * len;

  return {
    x: tx,
    y: ty,
  };
};
