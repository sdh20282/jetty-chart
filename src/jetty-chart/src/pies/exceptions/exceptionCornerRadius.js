// 라운딩을 위한 꼭지점 최대 반지름을 넘지 않게 예외처리 하는 함수
import { getCoordinateRatio } from "../utils/getCoordinate";
import { exceptionFloatingPointSliceCheck } from "./exceptionFloatingPoint";

const exceptionCornerRadiusWidth = ({
  r,
  x,
  y,
  ratio,
  startAngle,
  pieRadius,
  plusAngle,
  minus,
}) => {
  console.log(
    "exceptionCornerRadiusWidth",
    r,
    x,
    y,
    ratio,
    startAngle,
    pieRadius,
    plusAngle,
    minus
  );
  let calcPos = getCoordinateRatio({
    ratio: ratio / 2,
    startAngle: (startAngle + plusAngle) % 360,
    radius: pieRadius,
  });
  if (exceptionFloatingPointSliceCheck({ num: calcPos.x }) === 0) {
    console.log("EXCEPTION!");
    calcPos = getCoordinateRatio({
      ratio: ratio / 2,
      startAngle: (startAngle + plusAngle + 45) % 360,
      radius: pieRadius,
    });
  }
  const m = calcPos.y / calcPos.x;
  const alpha = ((x ** 2 + y ** 2) * (1 + m ** 2)) / (y - x * m) ** 2;
  const result =
    (minus * 2 * r + Math.sqrt(4 * r ** 2 + 4 * (alpha - 1) * r ** 2)) / (2 * alpha - 2);
  // console.log("(y-x*m)", (y - x * m) ** 2);
  // console.log("y", y, "x", x, "m", m, "x*m", x * m, "(y-x*m)**2", (y - x * m) ** 2);

  // console.log("ALPHA, RESULT", alpha, result);
  // if (
  //   result === Infinity ||
  //   isNaN(result) ||
  //   exceptionFloatingPointSliceCheck({ num: y - x * m }) === 0
  // ) {
  //   console.log("EXCEPTION2!");
  //   const newPos = getCoordinateRatio({ ratio, startAngle: startAngle + 20, radius: pieRadius });
  //   return exceptionCornerRadiusWidth({
  //     r,
  //     x: newPos.x,
  //     y: newPos.y,
  //     ratio,
  //     startAngle: (startAngle + 20) % 360,
  //     pieRadius,
  //     plusAngle,
  //     minus,
  //   });
  // }
  return result;
};

const exceptionCornerRadiusHeight = ({ pieRadius, innerRadius, cornerRadius }) => {
  if (cornerRadius > (pieRadius - innerRadius) / 2) {
    return (pieRadius - innerRadius) / 2;
  }
  return cornerRadius;
};

const exceptionCornerRadiusInnerNatural = ({ innerRadius, radius, isInner }) => {
  if (innerRadius < radius && isInner) {
    return innerRadius;
  }
  return radius;
};

export const exceptionCornerRadius = ({
  r,
  x,
  y,
  ratio,
  startAngle,
  plusAngle,
  pieRadius,
  cornerRadius,
  innerRadius,
  isInner,
}) => {
  const newCornerRadius = Math.min(
    exceptionCornerRadiusWidth({
      r,
      x,
      y,
      ratio,
      startAngle,
      pieRadius,
      plusAngle,
      minus: isInner ? 1 : -1,
    }),
    exceptionCornerRadiusHeight({ pieRadius, innerRadius, cornerRadius })
  );

  return exceptionCornerRadiusInnerNatural({ innerRadius, radius: newCornerRadius, isInner });
};
