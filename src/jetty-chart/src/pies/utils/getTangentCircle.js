export const getTangentCircle = ({ circle1, circle2 }) => {
  const { x: x1, y: y1, r: r1 } = circle1;
  const { x: x2, y: y2, r: r2 } = circle2;

  console.log(x1, y1, r1, x2, y2, r2);
  const tx = x1 + (r1 / (r1 + r2)) * (x2 - x1);
  const ty = y1 + (r1 / (r1 + r2)) * (y2 - y1);

  return {
    x: tx,
    y: ty,
  };
};
