// 꼭지점에 위치할 수 있는 원의 후보들을 구함
import {
  exceptionFloatingPointCompare,
  exceptionFloatingPointSliceCheck,
} from "../exceptions/exceptionFloatingPoint";

export const calcCornerCircleCandidate = ({ r1, r2, a, b }) => {
  const alpha = a ** 2 + b ** 2 + r2 ** 2 - r1 ** 2;
  const xp = {
    plus:
      (a * alpha +
        Math.sqrt(a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * r2 ** 2))) /
      (2 * (a ** 2 + b ** 2)),
    minus:
      (a * alpha -
        Math.sqrt(a ** 2 * alpha ** 2 - (a ** 2 + b ** 2) * (alpha ** 2 - 4 * b ** 2 * r2 ** 2))) /
      (2 * (a ** 2 + b ** 2)),
  };
  const yp = {
    plus: Math.sqrt(r2 ** 2 - xp.plus ** 2),
    minus: Math.sqrt(r2 ** 2 - xp.minus ** 2),
  };
  const checkX = [];
  const checkY = [];
  console.log([
    { x: xp.plus, y: yp.plus },
    { x: xp.plus, y: yp.minus },
    { x: xp.minus, y: yp.plus },
    { x: xp.minus, y: yp.minus },
    { x: xp.plus, y: -yp.plus },
    { x: xp.plus, y: -yp.minus },
    { x: xp.minus, y: -yp.plus },
    { x: xp.minus, y: -yp.minus },
  ]);
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
      const x = exceptionFloatingPointSliceCheck({ num: candidate.x });
      const y = exceptionFloatingPointSliceCheck({ num: candidate.y });

      for (let i = 0; i < checkX.length; i++) {
        if (
          exceptionFloatingPointCompare({ num1: x, num2: checkX[i] }) &&
          exceptionFloatingPointCompare({ num1: y, num2: checkY[i] })
        ) {
          console.log("CHECK1 FALSE");
          return false;
        }
      }
      checkX.push(x);
      checkY.push(y);
      console.log("CHECK1 TRUE");
      return true;
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSliceCheck({
        num: (a - candidate.x) ** 2 + (b - candidate.y) ** 2,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r1 ** 2,
      });

      console.log(
        "CHECK2",
        candidate.x ** 2 + candidate.y ** 2,
        r2 ** 2,
        result,
        target,
        exceptionFloatingPointCompare({ num1: result, num2: target })
      );
      return exceptionFloatingPointCompare({ num1: result, num2: target });
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSliceCheck({
        num: candidate.x ** 2 + candidate.y ** 2,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r2 ** 2,
      });

      console.log(
        "CHECK3",
        candidate.x ** 2 + candidate.y ** 2,
        r2 ** 2,
        result,
        target,
        exceptionFloatingPointCompare({ num1: result, num2: target })
      );
      return exceptionFloatingPointCompare({ num1: result, num2: target });
    });
  console.log("CANDIDATES", candidates);
  if (candidates.length === 0) {
    console.error("CANNOT FIND CANDIDATE1");
    return { x1: 0, y1: 0, x2: 0, y2: 0 };
  }
  if (candidates.length === 1) {
    console.error("CANNOT FIND CANDIDATE2");
    return { x1: 0, y1: 0, x2: 0, y2: 0 };
  }
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
    r1: cornerOuterRadius,
    r2: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[0].x,
    b: tangentLineGroup[0].y,
  });
  candidates[1] = calcCornerCircleCandidate({
    r1: cornerOuterRadius,
    r2: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[1].x,
    b: tangentLineGroup[1].y,
  });
  candidates[2] = calcCornerCircleCandidate({
    r1: cornerInnerRadius,
    r2: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[2].x,
    b: tangentLineGroup[2].y,
  });
  candidates[3] = calcCornerCircleCandidate({
    r1: cornerInnerRadius,
    r2: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[3].x,
    b: tangentLineGroup[3].y,
  });

  return candidates;
};
