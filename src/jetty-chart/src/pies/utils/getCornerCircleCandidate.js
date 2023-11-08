export const calcCornerCircleCandidate = ({ r1, r2, r3, a, b }) => {
  const alpha = a ** 2 + b ** 2 + r3 ** 2 - r2 ** 2;
  const xp = {
    plus:
      (a * alpha +
        Math.sqrt(a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * r3 ** 2))) /
      (2 * (a ** 2 + b ** 2)),
    minus:
      (a * alpha -
        Math.sqrt(a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * r3 ** 2))) /
      (2 * (a ** 2 + b ** 2)),
  };
  const yp = {
    plus: Math.sqrt(r3 ** 2 - xp.plus ** 2),
    minus: Math.sqrt(r3 ** 2 - xp.minus ** 2),
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
      const target = Math.round(r3 ** 2 * 10000);

      return result === target;
    });

  return { x1: candidates[0].x, y1: candidates[0].y, x2: candidates[1].x, y2: candidates[1].y };
};

export const getCornerCircleCandidateGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  tangentLineGroup,
}) => {
  const candidates = [];
  candidates[0] = calcCornerCircleCandidate({
    r1: innerRadius,
    r2: cornerInnerRadius,
    r3: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[0].x,
    b: tangentLineGroup[0].y,
  });
  candidates[1] = calcCornerCircleCandidate({
    r1: innerRadius,
    r2: cornerInnerRadius,
    r3: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[1].x,
    b: tangentLineGroup[1].y,
  });
  candidates[2] = calcCornerCircleCandidate({
    r1: pieRadius,
    r2: cornerOuterRadius,
    r3: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[2].x,
    b: tangentLineGroup[2].y,
  });
  candidates[3] = calcCornerCircleCandidate({
    r1: pieRadius,
    r2: cornerOuterRadius,
    r3: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[3].x,
    b: tangentLineGroup[3].y,
  });

  return candidates;
};
