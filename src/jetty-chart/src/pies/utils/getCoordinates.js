import { getTangentCircleCoordinatesGroup } from "./getTangentCircle";
import { getTangentLineCoordinatesGroup } from "./getTangentLine";

// startAngle과 ratio에 따라 좌표 구하는 함수, radius = 크기
export const getCoordinatesForRatio = ({ ratio, startAngle, radius }) => {
  const x = Math.cos(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius;
  const y = Math.sin(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius;

  return { x, y };
};

// vertex 데이터 받아서 좌표 구하는 함수
export const getCoordinatesVertexGroup = ({ ratio, startAngle, pieRadius, innerRadius }) => {
  return {
    pos1: getCoordinatesForRatio({ ratio: 0, startAngle, radius: pieRadius }),
    pos2: getCoordinatesForRatio({ ratio, startAngle, radius: pieRadius }),
    pos3: getCoordinatesForRatio({
      ratio,
      startAngle,
      radius: innerRadius,
    }),
    pos4: getCoordinatesForRatio({ ratio: 0, startAngle, radius: innerRadius }),
  };
};

export const getCoordinatesCalcVertexGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  cornerCoordinate1,
  cornerCoordinate2,
  cornerCoordinate3,
  cornerCoordinate4,
}) => {
  const calcVertex = getTangentCircleCoordinatesGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    cornerCoordinate1,
    cornerCoordinate2,
    cornerCoordinate3,
    cornerCoordinate4,
  });

  return calcVertex;
};

export const getCoordinatesTangentLineGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  ratio,
  accumulatedAngle,
}) => {
  const tangetnLineGroup = getTangentLineCoordinatesGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    ratio,
    accumulatedAngle,
  });
  return tangetnLineGroup;
};
