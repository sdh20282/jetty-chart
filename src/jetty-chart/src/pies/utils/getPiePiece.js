// 파이 조각을 구성하는 데이터를 계산하여 반환하는 함수
import {
  getCoordinateVertexGroup,
  getCoordinateCalcVertexGroup,
  getCoordinateTangentLineGroup,
  getCoordinateReference,
  getCoordinateCornerCircleCandidateGroup,
  getCoordinateCornerCircleGroup,
} from "./getCoordinate";
import { getIsLargeArcGroup } from "./getIsLargeArc";
import { getCornerRadius } from "./getCornerRadius";

const getPiePiece = ({ data, pieRadius, innerRadius, cornerRadius, startAngle }) => {
  let accumulatedAngle = startAngle % 360;
  const pieceData = data.map(({ value, ratio, label }) => {
    const vertexGroup = getCoordinateVertexGroup({
      ratio,
      startAngle: accumulatedAngle % 360,
      pieRadius,
      innerRadius,
    });
    const { cornerInnerRadius, cornerOuterRadius } = getCornerRadius({
      pieRadius,
      innerRadius,
      cornerRadius,
      vertexGroup,
      ratio,
      startAngle,
      accumulatedAngle,
    });
    const tangentLineGroup = getCoordinateTangentLineGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius: cornerInnerRadius,
      cornerOuterRadius: cornerOuterRadius,
      ratio,
      accumulatedAngle,
    });
    const candidatesGroup = getCoordinateCornerCircleCandidateGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      accumulatedAngle,
      tangentLineGroup,
      ratio,
    });
    const referenceCoordinate = getCoordinateReference({
      startAngle: accumulatedAngle,
      percent: ratio,
      pieRadius,
    });
    const cornerCircleGroup = getCoordinateCornerCircleGroup({
      candidatesGroup,
      referenceCoordinate,
    });

    const calcVertexGroup = getCoordinateCalcVertexGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      cornerCircleGroup,
    });

    const isLargeArcGroup = getIsLargeArcGroup({ ratio, vertexGroup, calcVertexGroup });

    accumulatedAngle += ratio * 360;
    // const isLargeArcFlag = ratio > 0.5 ? "1" : "0";
    // const targetRad = 2 * Math.PI * ratio * (1 - pieSettings.padSpace / 100);
    // const targetSpace = (2 * Math.PI * ratio * pieSettings.padSpace) / 100 / 2;
    // const targetRestRad = 2 * Math.PI * (1 - ratio);
    return {
      pieRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      innerRadius,
      vertexGroup,
      tangentLineGroup,
      calcVertexGroup,
      cornerCircleGroup,
      accumulatedAngle,
      isLargeArcGroup,
      referenceCoordinate,
      value,
      ratio,
      label,
    };
  });

  return pieceData;
};

export default getPiePiece;
