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
    const vertex = getCoordinateVertexGroup({
      ratio,
      startAngle: accumulatedAngle % 360,
      pieRadius,
      innerRadius,
    });
    const { cornerInnerRadius, cornerOuterRadius } = getCornerRadius({
      pieRadius,
      innerRadius,
      cornerRadius,
      vertex,
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

    const calcVertex = getCoordinateCalcVertexGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      cornerCircleGroup,
    });

    const isLargeArcGroup = getIsLargeArcGroup({ ratio, vertex, calcVertex });

    accumulatedAngle += ratio * 360;
    // const isLargeArcFlag = ratio > 0.5 ? "1" : "0";
    // const targetRad = 2 * Math.PI * ratio * (1 - pieSettings.padSpace / 100);
    // const targetSpace = (2 * Math.PI * ratio * pieSettings.padSpace) / 100 / 2;
    // const targetRestRad = 2 * Math.PI * (1 - ratio);

    return {
      vertex,
      cornerInnerRadius,
      cornerOuterRadius,
      innerRadius,
      pieRadius,
      tangentLineCoordinate1: tangentLineGroup[0],
      tangentLineCoordinate2: tangentLineGroup[1],
      tangentLineCoordinate3: tangentLineGroup[2],
      tangentLineCoordinate4: tangentLineGroup[3],
      tangentCircleCoordinate1: calcVertex[0],
      tangentCircleCoordinate2: calcVertex[1],
      tangentCircleCoordinate3: calcVertex[2],
      tangentCircleCoordinate4: calcVertex[3],
      cornerCoordinate1: cornerCircleGroup[0],
      cornerCoordinate2: cornerCircleGroup[1],
      cornerCoordinate3: cornerCircleGroup[2],
      cornerCoordinate4: cornerCircleGroup[3],
      referenceCoordinate,
      accumulatedAngle,
      isLargeArcGroup,
      calcVertex,
      value,
      ratio,
      label,
    };
  });

  return pieceData;
};

export default getPiePiece;
