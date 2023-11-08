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
    cornerInnerRadius: exceptionCornerRadius({
      r: innerRadius,
      x: vertexGroup.pos4.x,
      y: vertexGroup.pos4.y,
      ratio,
      startAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
      plusAngle: accumulatedAngle,
      isInner: true,
    }),
    cornerOuterRadius: exceptionCornerRadius({
      r: pieRadius,
      x: vertexGroup.pos1.x,
      y: vertexGroup.pos1.y,
      ratio,
      startAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
      plusAngle: accumulatedAngle,
      isInner: false,
    }),
  };
};
