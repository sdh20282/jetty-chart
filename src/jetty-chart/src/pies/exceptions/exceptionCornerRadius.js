import { getCoordinatesForRatio } from "../utils/getCoordinates";

const exceptionCornerRadiusWidth = ({
  innerRadius,
  x,
  y,
  ratio,
  startAngle,
  pieRadius,
  plusAngle,
}) => {
  const r = innerRadius;
  const calcPos = getCoordinatesForRatio({
    ratio: ratio / 2,
    startAngle: (startAngle + plusAngle) % 360,
    radius: pieRadius,
  });
  const m = calcPos.y / calcPos.x;

  const alpha = ((x ** 2 + y ** 2) * (1 + m ** 2)) / (y - x * m) ** 2;
  const result = (2 * r + Math.sqrt(4 * r ** 2 + 4 * (alpha - 1) * r ** 2)) / (2 * alpha - 2);

  return result;
};

const exceptionCornerRadiusHeight = ({ pieRadius, innerRadius, cornerRadius }) => {
  if (cornerRadius > (pieRadius - innerRadius) / 2) {
    return (pieRadius - innerRadius) / 2;
  } else {
    return cornerRadius;
  }
};

export const exceptionCornerRadius = ({
  innerRadius,
  x,
  y,
  ratio,
  startAngle,
  pieRadius,
  plusAngle,
  cornerRadius,
}) => {
  return Math.min(
    exceptionCornerRadiusWidth({
      innerRadius,
      x,
      y,
      ratio,
      startAngle,
      pieRadius,
      plusAngle,
    }),
    exceptionCornerRadiusHeight({ pieRadius, innerRadius, cornerRadius })
  );
};
