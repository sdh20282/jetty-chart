import { exceptionCornerRadius } from "../exceptions/exceptionCornerRadius";

export const getCornerRadius = ({
  pieRadius,
  innerRadius,
  cornerRadius,
  vertex,
  ratio,
  startAngle,
  accumulatedAngle,
}) => {
  return {
    cornerInnerRadius: exceptionCornerRadius({
      r: innerRadius,
      x: vertex.pos4.x,
      y: vertex.pos4.y,
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
      x: vertex.pos1.x,
      y: vertex.pos1.y,
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
