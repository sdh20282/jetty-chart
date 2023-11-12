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
  referenceCoordinate,
  ratio,
}) => {
  const candidatesGroup = getCornerCircleCandidateGroup({
    pieRadius,
    innerRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    accumulatedAngle,
    tangentLineGroup,
    referenceCoordinate,
    ratio,
  });

  return candidatesGroup;
};

export const getLabelLocation = ({ startAngle, ratio, pieRadius, innerRadius, labelDistance }) => {
  const angleInDegree = (startAngle + ratio * 180) % 360;
  const angleInRadian = angleInDegree * (Math.PI / 180);

  const x = ((pieRadius + innerRadius) / 2) * Math.cos(angleInRadian) * labelDistance;
  const y = ((pieRadius + innerRadius) / 2) * Math.sin(angleInRadian) * labelDistance;
  const radians = Math.atan2(y, x);
  const degrees = radians * (180 / Math.PI) + 90;

  return {
    x,
    y,
    degrees,
  };
};

export const getCoordinateReference = ({ startAngle, ratio, pieRadius }) => {
  const angleInDegree = (startAngle + ratio * 180) % 360;
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

export const getRotateDegreePoint = ({ x, y, degrees }) => {
  var radians = (degrees * Math.PI) / 180;
  var xPrime = x * Math.cos(radians) - y * Math.sin(radians);
  var yPrime = x * Math.sin(radians) + y * Math.cos(radians);
  return { x: xPrime, y: yPrime };
};

export const getTwoPointDistance = ({ point1, point2 }) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
