// 라운딩을 위한 꼭지점 최대 반지름을 넘지 않게 예외처리 하는 함수
import { MAX_PERCENT, MIN_PERCENT } from "../constants/pieException";
import { getCoordinateRatio } from "../utils/getCoordinate";

const exceptionCornerRadiusWidth = ({ r, ratio, pieRadius, minus, exceptionAngle = 0 }) => {
  const x = Math.cos(45 * (Math.PI / 180));
  const y = Math.sin(45 * (Math.PI / 180));
  const startAngle = ratio >= 0.5 ? exceptionAngle : 45 + exceptionAngle;

  let calcPos = getCoordinateRatio({
    ratio: ratio / 2,
    startAngle,
    radius: pieRadius,
  });

  const m = calcPos.y / calcPos.x;
  const alpha = ((x ** 2 + y ** 2) * (1 + m ** 2)) / (y - x * m) ** 2;
  const result =
    (minus * 2 * r + Math.sqrt(4 * r ** 2 + 4 * (alpha - 1) * r ** 2)) / (2 * alpha - 2);

  if (exceptionAngle > 360) {
    return;
  }
  if (
    result === Infinity ||
    isNaN(result) ||
    Math.abs(x) < MIN_PERCENT ||
    Math.abs(y) < MIN_PERCENT ||
    Math.abs(x) > MAX_PERCENT ||
    Math.abs(y) > MAX_PERCENT ||
    Math.abs(y - x * m) < MIN_PERCENT ||
    Math.abs(4 * r ** 2 + 4 * (alpha - 1) * r ** 2) < 0
  ) {
    return exceptionCornerRadiusWidth({
      r,
      ratio,
      pieRadius,
      minus,
      exceptionAngle: exceptionAngle + 1,
    });
  }

  return result < MIN_PERCENT ? MIN_PERCENT : result;
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
  // if (innerRadius * 2 < radius && !isInner) {
  //   return innerRadius * 2;
  // }
  return radius;
};

export const exceptionCornerRadius = ({
  r,
  x,
  y,
  ratio,
  startAngle,
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
      innerRadius,
      minus: isInner ? 1 : -1,
    }),
    exceptionCornerRadiusHeight({ pieRadius, innerRadius, cornerRadius })
  );

  return exceptionCornerRadiusInnerNatural({ innerRadius, radius: newCornerRadius, isInner });
};
