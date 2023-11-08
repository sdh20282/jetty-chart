import { getCoordinateRatio } from "../utils/getCoordinate";

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
  const calcPos = getCoordinateRatio({
    ratio: ratio / 2,
    startAngle: (startAngle + plusAngle) % 360,
    radius: pieRadius,
  });
  const m = calcPos.y / calcPos.x;
  const alpha = ((x ** 2 + y ** 2) * (1 + m ** 2)) / (y - x * m) ** 2;
  const result =
    (minus * 2 * r + Math.sqrt(4 * r ** 2 + 4 * (alpha - 1) * r ** 2)) / (2 * alpha - 2);

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
