// 꼭지점 라운딩 처리를 위해 안쪽과 바깥쪽의 각각 반지름을 계산
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
      startAngle: (startAngle + accumulatedAngle) % 360,
      pieRadius,
      innerRadius,
      cornerRadius,
      isInner: false,
    }),
    cornerInnerRadius: exceptionCornerRadius({
      r: innerRadius,
      x: vertexGroup[3].x,
      y: vertexGroup[3].y,
      ratio,
      startAngle: (startAngle + accumulatedAngle) % 360,
      pieRadius,
      innerRadius,
      cornerRadius,
      isInner: true,
    }),
  };
};
