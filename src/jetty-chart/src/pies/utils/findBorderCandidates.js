export const findBorderCandidates = ({
  pieRadius,
  innerRadius,
  refAngle,
  tangentX,
  tangentY,
  borderRadius,
}) => {
  console.log(pieRadius, innerRadius, refAngle, tangentX, tangentY, borderRadius);
  // const r1 = pieRadius; // 파이 반지름
  const r2 = innerRadius; // 내부원 반지름
  const r3 = borderRadius; // 두번째 원 반지름
  // const angle = refAngle; // 파이 각도
  // const x1 = Math.cos((angle * Math.PI) / 180); // 파이 r1 위치 x
  // const y1 = Math.sin((angle * Math.PI) / 180); // 파이 r1 위치 y
  // const x2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 x
  // const y2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 y
  let a = tangentX; // 두번째 좌표와 기울기가 만나는 지점 x
  let b = tangentY; // 두번째 좌표와 기울기가 만나는 지점 y
  console.log("AB", a, b);
  const alpha = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(r2 + r3, 2) - Math.pow(r3, 2);
  console.log("Alpha", alpha);
  const xp = {
    plus:
      (a * alpha +
        Math.sqrt(
          Math.pow(a, 2) * Math.pow(alpha, 2) -
            (Math.pow(a, 2) + Math.pow(b, 2)) *
              (Math.pow(alpha, 2) - 4 * Math.pow(b, 2) * Math.pow(r2 + r3, 2))
        )) /
      (2 * (Math.pow(a, 2) + Math.pow(b, 2))),
    minus:
      (a * alpha -
        Math.sqrt(
          Math.pow(a, 2) * Math.pow(alpha, 2) -
            (Math.pow(a, 2) + Math.pow(b, 2)) *
              (Math.pow(alpha, 2) - 4 * Math.pow(b, 2) * Math.pow(r2 + r3, 2))
        )) /
      (2 * (Math.pow(a, 2) + Math.pow(b, 2))),
  };
  const yp = {
    plus: Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(xp.plus, 2)),
    minus: Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(xp.minus, 2)),
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
      const target = Math.round(r3 ** 2 * 10000);
      console.log(result, target);
      return result === target;
    })
    .filter((candidate) => {
      const result = Math.round((candidate.x ** 2 + candidate.y ** 2) * 10000);
      const target = Math.round((r2 + r3) ** 2 * 10000);

      return result === target;
    });

  console.log("!!");
  console.log(candidates);
  return candidates;
};
