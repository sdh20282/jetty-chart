export const getOuterCornerCandidates = ({
  pieRadius,
  innerRadius,
  refAngle,
  tangentX,
  tangentY,
  cornerRadius,
}) => {
  const r1 = pieRadius; // 파이 반지름
  const r2 = cornerRadius; // 두번째 원 반지름
  // const angle = refAngle; // 파이 각도
  // const x1 = Math.cos((angle * Math.PI) / 180); // 파이 r1 위치 x
  // const y1 = Math.sin((angle * Math.PI) / 180); // 파이 r1 위치 y
  // const x2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 x
  // const y2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 y
  const a = tangentX; // 두번째 좌표와 기울기가 만나는 지점 x
  const b = tangentY; // 두번째 좌표와 기울기가 만나는 지점 y

  const alpha = a ** 2 + b ** 2 + (r1 - r2) ** 2 - r2 ** 2;

  const xp = {
    plus:
      (a * alpha +
        Math.sqrt(
          a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * (r1 - r2) ** 2)
        )) /
      (2 * (a ** 2 + b ** 2)),
    minus:
      (a * alpha -
        Math.sqrt(
          a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * (r1 - r2) ** 2)
        )) /
      (2 * (a ** 2 + b ** 2)),
  };
  const yp = {
    plus: Math.sqrt((r1 - r2) ** 2 - xp.plus ** 2),
    minus: Math.sqrt((r1 - r2) ** 2 - xp.minus ** 2),
  };

  const check = [];
  const candidates = [
    { x: xp.plus, y: yp.plus },
    { x: xp.plus, y: yp.minus },
    { x: xp.minus, y: yp.plus },
    { x: xp.minus, y: yp.minus },
    { x: xp.plus, y: -yp.plus },
    { x: xp.plus, y: -yp.minus },
    { x: xp.minus, y: -yp.plus },
    { x: xp.minus, y: -yp.minus },
  ]
    .filter((candidate) => {
      const checkStr = candidate.x + "_" + candidate.y;

      if (check.includes(checkStr)) {
        return false;
      }

      check.push(checkStr);
      return true;
    })
    .filter((candidate) => {
      const result = Math.round(((a - candidate.x) ** 2 + (b - candidate.y) ** 2) * 10000);
      const target = Math.round(r2 ** 2 * 10000);

      return result === target;
    })
    .filter((candidate) => {
      const result = Math.round((candidate.x ** 2 + candidate.y ** 2) * 10000);
      const target = Math.round((r1 - r2) ** 2 * 10000);

      return result === target;
    });

  return candidates;
};
