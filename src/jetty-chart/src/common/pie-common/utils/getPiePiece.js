// 파이 조각을 구성하는 데이터를 계산하여 반환하는 함수
import {
  getCoordinateVertexGroup,
  getCoordinateCalcVertexGroup,
  getCoordinateTangentLineGroup,
  getCoordinateReference,
  getCoordinateCornerCircleCandidateGroup,
  getCoordinateCornerCircleGroup,
  getLabelLocation,
} from "./getCoordinate";
import { getIsLargeArcGroup } from "./getIsLargeArc";
import { getCornerRadius } from "./getCornerRadius";
import { getArcLinkLabelLocation } from "./getArcLinkLabelLocation";

const getPiePiece = ({
  data,
  pieRadius,
  innerRadius,
  cornerRadius,
  startAngle,
  labelDistance,
  arcLinkLabelLineDistance,
  arcLinkLabelStartLine,
  arcLinkLabelEndLine,
}) => {
  const pieceData = data.map(({ value, ratio, label, index, accumulatedAngle }) => {
    const vertexGroup = getCoordinateVertexGroup({
      ratio,
      startAngle: accumulatedAngle,
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
      accumulatedAngle: accumulatedAngle,
    });
    const referenceCoordinate = getCoordinateReference({
      startAngle: accumulatedAngle,
      ratio,
      radius: pieRadius,
    });
    const tangentLineGroup = getCoordinateTangentLineGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius: cornerInnerRadius,
      cornerOuterRadius: cornerOuterRadius,
      ratio,
      accumulatedAngle: accumulatedAngle,
    });
    const candidatesGroup = getCoordinateCornerCircleCandidateGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      accumulatedAngle: accumulatedAngle,
      tangentLineGroup,
      referenceCoordinate,
      ratio,
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
    const labelLocation = getLabelLocation({
      startAngle: accumulatedAngle,
      ratio,
      pieRadius,
      innerRadius,
      labelDistance: labelDistance,
    });
    const arcLinkLabelLocation = getArcLinkLabelLocation({
      startAngle: accumulatedAngle,
      ratio,
      pieRadius,
      arcLinkLabelLineDistance,
      arcLinkLabelStartLine,
      arcLinkLabelEndLine,
    });
    return {
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      vertexGroup,
      tangentLineGroup,
      candidatesGroup,
      calcVertexGroup,
      cornerCircleGroup,
      accumulatedAngle,
      isLargeArcGroup,
      referenceCoordinate,
      labelLocation,
      arcLinkLabelLocation,
      value,
      ratio,
      label,
      index,
    };
  });

  return pieceData;
};

export default getPiePiece;
