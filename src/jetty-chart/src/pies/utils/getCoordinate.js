// 좌표를 구하는 함수들을 모아놓은 파일
import { exceptionFloatingPointSliceSet } from "../exceptions/exceptionFloatingPoint";
import { getCornerCircleGroup } from "./getCornerCircle";
import { getCornerCircleCandidateGroup } from "./getCornerCircleCandidate";
import { getTangentCircleGroup } from "./getTangentCircle";
import { getTangentLineGroup } from "./getTangentLine";
import { getVertexGroup } from "./getVertexGroup";

// startAngle과 ratio에 따라 좌표 구하는 함수, radius = 크기
export const getCoordinateRatio = ({ ratio, startAngle, radius }) => {
  const x = exceptionFloatingPointSliceSet({
    num: Math.cos(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius,
  });
  const y = exceptionFloatingPointSliceSet({
    num: Math.sin(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius,
  });

  return { x, y };
};

// vertex 데이터 받아서 좌표 구하는 함수
export const getCoordinateVertexGroup = ({ ratio, startAngle, pieRadius, innerRadius }) => {
  const vertexGroup = getVertexGroup({ ratio, startAngle, pieRadius, innerRadius });

  return vertexGroup;
};

export const getCoordinateCalcVertexGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  cornerCircleGroup,
}) => {
  const calcVertex = getTangentCircleGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    cornerCircleGroup,
  });

  return calcVertex;
};

export const getCoordinateTangentLineGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  ratio,
  accumulatedAngle,
}) => {
  const tangentLineGroup = getTangentLineGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    ratio,
    accumulatedAngle,
  });
  return tangentLineGroup;
};
export const getCoordinateCornerCircleCandidateGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  accumulatedAngle,
  tangentLineGroup,
  ratio,
}) => {
  const candidatesGroup = getCornerCircleCandidateGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    accumulatedAngle,
    tangentLineGroup,
    ratio,
  });

  return candidatesGroup;
};

export const getCoordinateReference = ({ startAngle, percent, pieRadius }) => {
  const angleInDegree = (startAngle + percent * 180) % 360;
  const angleInRadian = angleInDegree * (Math.PI / 180);

  const x = pieRadius * Math.cos(angleInRadian);
  const y = pieRadius * Math.sin(angleInRadian);

  return {
    x,
    y,
  };
};

export const getCoordinateCornerCircleGroup = ({ candidatesGroup, referenceCoordinate }) => {
  const cornerCircleGroup = getCornerCircleGroup({
    candidatesGroup,
    referenceCoordinate,
  });

  return cornerCircleGroup;
};
