import { exceptionCornerRadius } from "../exceptions/exceptionCornerRadius";

export const getCornerRadius = ({
  pieRadius,
  innerRadius,
  cornerRadius,
  vertexGroup,
  ratio,
  startAngle,
  accumulatedAngle,
}) => {
  return {
    cornerOuterRadius: exceptionCornerRadius({
      r: pieRadius,
      x: vertexGroup[0].x,
      y: vertexGroup[0].y,
      ratio,
      startAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
      plusAngle: accumulatedAngle,
      isInner: false,
    }),
    cornerInnerRadius: exceptionCornerRadius({
      r: innerRadius,
      x: vertexGroup[3].x,
      y: vertexGroup[3].y,
      ratio,
      startAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
      plusAngle: accumulatedAngle,
      isInner: true,
    }),
  };
};
