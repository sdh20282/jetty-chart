export const getInnerTangentCircle = ({ r1, x2, y2, r2 }) => {
  const x1 = 0;
  const y1 = 0;

  const tx = x1 + (r1 / (r1 + r2)) * (x2 - x1);
  const ty = y1 + (r1 / (r1 + r2)) * (y2 - y1);

  return {
    x: tx,
    y: ty,
  };
};
