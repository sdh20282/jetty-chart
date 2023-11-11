// 꼭지점에 위치할 수 있는 원의 후보들을 구함
import {
  exceptionFloatingPointCompare,
  exceptionFloatingPointSliceCheck,
} from "../exceptions/exceptionFloatingPoint";
import { getRotateDegreePoint, getTwoPointDistance } from "./getCoordinate";

const getClosestPoints = ({ candidates, rx, ry }) => {
  if (candidates.length <= 2) {
    return candidates;
  }

  // 거리 계산 및 정렬
  candidates.sort((a, b) => {
    const distanceA = getTwoPointDistance({ point1: { x: a.x, y: a.y }, point2: { x: rx, y: ry } });
    const distanceB = getTwoPointDistance({ point1: { x: b.x, y: b.y }, point2: { x: rx, y: ry } });
    return distanceA - distanceB;
  });

  // 상위 2개 요소 반환
  return candidates.slice(0, 2);
};

export const calcCornerCircleCandidate = ({
  r1,
  r2,
  a,
  b,
  exceptionRotate = 0,
  referenceCoordinate,
}) => {
  if (exceptionRotate > 360) {
    return;
  }
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
  let candidates = [
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
        num: ((a - candidate.x) ** 2 + (b - candidate.y) ** 2) * 1000,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r1 ** 2 * 1000,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
    })
    .filter((candidate) => {
      const result = exceptionFloatingPointSliceCheck({
        num: (candidate.x ** 2 + candidate.y ** 2) * 1000,
      });
      const target = exceptionFloatingPointSliceCheck({
        num: r2 ** 2 * 1000,
      });

      return exceptionFloatingPointCompare({ num1: result, num2: target });
    });

  if (candidates.length === 0 || candidates.length === 1) {
    console.log("exceptionRotate", exceptionRotate);
    const { x: newA, y: newB } = getRotateDegreePoint({ x: a, y: b, degrees: 1 });

    return calcCornerCircleCandidate({
      r1,
      r2,
      a: newA,
      b: newB,
      exceptionRotate: exceptionRotate + 1,
      referenceCoordinate,
    });
  }

  console.log("candidates", candidates, referenceCoordinate);
  const twoCandidate = getClosestPoints({
    candidates,
    rx: referenceCoordinate.x,
    ry: referenceCoordinate.y,
  });

  return {
    x1: twoCandidate[0].x,
    y1: twoCandidate[0].y,
    x2: twoCandidate[1].x,
    y2: twoCandidate[1].y,
    exceptionRotate: exceptionRotate,
  };
};

const getRotateTwoPointCounterclockwise = ({ x1, y1, x2, y2, exceptionRotate }) => {
  const { x: newX1, y: newY1 } = getRotateDegreePoint({ x: x1, y: y1, degrees: -exceptionRotate });
  const { x: newX2, y: newY2 } = getRotateDegreePoint({ x: x2, y: y2, degrees: -exceptionRotate });

  return { x1: newX1, y1: newY1, x2: newX2, y2: newY2 };
};

export const getCornerCircleCandidateGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  tangentLineGroup,
  referenceCoordinate,
}) => {
  const candidates = [];
  candidates[0] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerOuterRadius,
      r2: pieRadius - cornerOuterRadius,
      a: tangentLineGroup[0].x,
      b: tangentLineGroup[0].y,
      referenceCoordinate,
    })
  );
  candidates[1] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerOuterRadius,
      r2: pieRadius - cornerOuterRadius,
      a: tangentLineGroup[1].x,
      b: tangentLineGroup[1].y,
      referenceCoordinate,
    })
  );
  candidates[2] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerInnerRadius,
      r2: innerRadius + cornerInnerRadius,
      a: tangentLineGroup[2].x,
      b: tangentLineGroup[2].y,
      referenceCoordinate,
    })
  );
  candidates[3] = getRotateTwoPointCounterclockwise(
    calcCornerCircleCandidate({
      r1: cornerInnerRadius,
      r2: innerRadius + cornerInnerRadius,
      a: tangentLineGroup[3].x,
      b: tangentLineGroup[3].y,
      referenceCoordinate,
    })
  );

  return candidates;
};
