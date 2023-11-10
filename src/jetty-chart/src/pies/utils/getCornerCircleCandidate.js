// 꼭지점에 위치할 수 있는 원의 후보들을 구함
import {
  exceptionFloatingPointCompare,
  exceptionFloatingPointSliceCheck,
} from "../exceptions/exceptionFloatingPoint";

export const calcCornerCircleCandidate = ({ r1, r2, a, b, exceptionRotate = 0 }) => {
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
  console.log("CANDIDATE", [
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
          return false;
        }
      }
      checkX.push(x);
      checkY.push(y);
      return true;
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSliceCheck({
        num: (a - candidate.x) ** 2 + (b - candidate.y) ** 2,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r1 ** 2,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSliceCheck({
        num: candidate.x ** 2 + candidate.y ** 2,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r2 ** 2,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
    });

  if (candidates.length === 0 || candidates.length === 1) {
    const { x: newA, y: newB } = getRotatePoint({ x: a, y: b, degrees: 5 });
    return calcCornerCircleCandidate({
      r1,
      r2,
      a: newA,
      b: newB,
      exceptionRotate: exceptionRotate + 5,
    });
  }

  return {
    x1: candidates[0].x,
    y1: candidates[0].y,
    x2: candidates[1].x,
    y2: candidates[1].y,
    exceptionRotate: exceptionRotate,
  };
};

const getRotatePoint = ({ x, y, degrees }) => {
  var radians = (degrees * Math.PI) / 180;
  var xPrime = x * Math.cos(radians) - y * Math.sin(radians);
  var yPrime = x * Math.sin(radians) + y * Math.cos(radians);
  return { x: xPrime, y: yPrime };
};

const getRotateTwoPointCounterclockwise = ({ x1, y1, x2, y2, exceptionRotate }) => {
  const { x: newX1, y: newY1 } = getRotatePoint({ x: x1, y: y1, degrees: -exceptionRotate });
  const { x: newX2, y: newY2 } = getRotatePoint({ x: x2, y: y2, degrees: -exceptionRotate });

  return { x1: newX1, y1: newY1, x2: newX2, y2: newY2 };
};

export const getCornerCircleCandidateGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  tangentLineGroup,
}) => {
  const candidates = [];
  candidates[0] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerOuterRadius,
      r2: pieRadius - cornerOuterRadius,
      a: tangentLineGroup[0].x,
      b: tangentLineGroup[0].y,
    })
  );
  candidates[1] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerOuterRadius,
      r2: pieRadius - cornerOuterRadius,
      a: tangentLineGroup[1].x,
      b: tangentLineGroup[1].y,
    })
  );
  candidates[2] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerInnerRadius,
      r2: innerRadius + cornerInnerRadius,
      a: tangentLineGroup[2].x,
      b: tangentLineGroup[2].y,
    })
  );
  candidates[3] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerInnerRadius,
      r2: innerRadius + cornerInnerRadius,
      a: tangentLineGroup[3].x,
      b: tangentLineGroup[3].y,
    })
  );

  return candidates;
};
