export const calculateIntersection = (x3, y3, r1, r2) => {
  const d = Math.sqrt(x3 ** 2 + y3 ** 2);

  const a = (r1 ** 2 - r2 ** 2 + d ** 2) / (2 * d);
  const h = Math.sqrt(r1 ** 2 - a ** 2);

  const x0 = a * (x3 / d);
  const y0 = a * (y3 / d);

  const rx = -h * (y3 / d);
  const ry = h * (x3 / d);

  const x1 = x0 + rx;
  const y1 = y0 + ry;

  const x2 = x0 - rx;
  const y2 = y0 - ry;

  console.log(`Point 1: (${x1.toFixed(2)}, ${y1.toFixed(2)})`);
  console.log(`Point 2: (${x2.toFixed(2)}, ${y2.toFixed(2)})`);

  return { x1, y1, x2, y2 };
};
