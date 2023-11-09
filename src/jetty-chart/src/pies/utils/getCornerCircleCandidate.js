// 꼭지점에 위치할 수 있는 원의 후보들을 구함
import {
  exceptionFloatingPointCompare,
  exceptionFloatingPointSlice,
} from "../exceptions/exceptionFloatingPoint";

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
  const checkX = [];
  const checkY = [];
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
      const x = exceptionFloatingPointSlice({ num: candidate.x });
      const y = exceptionFloatingPointSlice({ num: candidate.y });

      for (let i = 0; i < checkX.length; i++) {
        if (
          exceptionFloatingPointCompare({ num1: x, num2: checkX[i] }) &&
          exceptionFloatingPointCompare({ num1: y, num2: checkY[i] })
        ) {
          return false;
        }
      }
      checkX.push(x);
      checkY.push(y);
      return true;
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSlice({
        num: (a - candidate.x) ** 2 + (b - candidate.y) ** 2,
      });
      const target = exceptionFloatingPointSlice({
        num: r2 ** 2,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSlice({
        num: candidate.x ** 2 + candidate.y ** 2,
      });
      const target = exceptionFloatingPointSlice({
        num: r3 ** 2,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
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
    r1: pieRadius,
    r2: cornerOuterRadius,
    r3: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[0].x,
    b: tangentLineGroup[0].y,
  });
  candidates[1] = calcCornerCircleCandidate({
    r1: pieRadius,
    r2: cornerOuterRadius,
    r3: pieRadius - cornerOuterRadius,
    a: tangentLineGroup[1].x,
    b: tangentLineGroup[1].y,
  });
  candidates[2] = calcCornerCircleCandidate({
    r1: innerRadius,
    r2: cornerInnerRadius,
    r3: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[2].x,
    b: tangentLineGroup[2].y,
  });
  candidates[3] = calcCornerCircleCandidate({
    r1: innerRadius,
    r2: cornerInnerRadius,
    r3: innerRadius + cornerInnerRadius,
    a: tangentLineGroup[3].x,
    b: tangentLineGroup[3].y,
  });

  return candidates;
};
