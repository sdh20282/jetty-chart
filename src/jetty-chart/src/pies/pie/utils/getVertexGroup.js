// 파이 조각의 기본 좌표를 구하는 함수
import { getCoordinateRatio } from "./getCoordinate";

export const getVertexGroup = ({ ratio, startAngle, pieRadius, innerRadius }) => {
  const vertexGroup = [];
  vertexGroup[0] = getCoordinateRatio({ ratio: 0, startAngle, radius: pieRadius });
  vertexGroup[1] = getCoordinateRatio({ ratio, startAngle, radius: pieRadius });
  vertexGroup[2] = getCoordinateRatio({
    ratio,
    startAngle,
    radius: innerRadius,
  });
  vertexGroup[3] = getCoordinateRatio({ ratio: 0, startAngle, radius: innerRadius });

  return vertexGroup;
};
