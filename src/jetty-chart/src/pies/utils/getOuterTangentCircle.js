export const getOuterTangentCircle = ({ r1, x2, y2, r2 }) => {
  const x1 = 0;
  const y1 = 0;

  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (d >= r1 || d === 0) {
    throw new Error("원 B는 원 A의 내부에 있어야 하며, 중심이 같으면 안 됩니다.");
  }

  const ux = (x2 - x1) / d;
  const uy = (y2 - y1) / d;

  const tx = x2 + r2 * ux;
  const ty = y2 + r2 * uy;

  return { x: tx, y: ty };
};
