// 라운딩을 위한 꼭지점 최대 반지름을 넘지 않게 예외처리 하는 함수
import { getCoordinateRatio } from "../utils/getCoordinate";
import { exceptionFloatingPointSlice } from "./exceptionFloatingPoint";

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
  if (exceptionFloatingPointSlice({ num: calcPos.x }) === 0) {
    console.log("exceptionCornerRadiusWidth", calcPos);
    calcPos = getCoordinateRatio({
      ratio: ratio / 2,
      startAngle: startAngle + plusAngle + (45 % 360),
      radius: pieRadius,
    });
  }
  const m = calcPos.y / calcPos.x;
  const alpha = ((x ** 2 + y ** 2) * (1 + m ** 2)) / (y - x * m) ** 2;
  const result =
    (minus * 2 * r + Math.sqrt(4 * r ** 2 + 4 * (alpha - 1) * r ** 2)) / (2 * alpha - 2);

  console.log(calcPos, m, alpha, result);

  console.log("exceptionCornerRadiusWidth", calcPos, m, alpha, result);
  return result;
};

const exceptionCornerRadiusHeight = ({ pieRadius, innerRadius, cornerRadius }) => {
  if (cornerRadius > (pieRadius - innerRadius) / 2) {
    console.log("exceptionCornerRadiusHeight", pieRadius, innerRadius, cornerRadius);
    return (pieRadius - innerRadius) / 2;
  }
  console.log("exceptionCornerRadiusHeight", pieRadius, innerRadius, cornerRadius);
  return cornerRadius;
};

const exceptionCornerRadiusInnerNatural = ({ innerRadius, radius, isInner }) => {
  if (innerRadius < radius && isInner) {
    console.log("exceptionCornerRadiusInnerNatural", innerRadius, radius);
    return innerRadius;
  }
  console.log("exceptionCornerRadiusInnerNatural", innerRadius, radius);
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
  console.log(
    "!!",
    r,
    x,
    y,
    ratio,
    startAngle,
    plusAngle,
    pieRadius,
    cornerRadius,
    innerRadius,
    isInner
  );
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
