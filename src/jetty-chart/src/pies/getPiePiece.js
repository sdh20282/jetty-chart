import {
  getCoordinatesCalcVertexGroup,
  getCoordinatesTangentLineGroup,
  getCoordinatesVertexGroup,
} from "./utils/getCoordinates";
import { getCoordinatesNear } from "./utils/getCoordinatesNear";
import { getInnerCornerCandidates } from "./utils/getInnerCornerCandidates";
import { getOuterCornerCandidates } from "./utils/getOuterCornerCandidates";
import { getReferenceCoordinates } from "./utils/getReferenceCoordinates";
import { getIsLargeArc } from "./utils/getIsLargeArc";
import { getCornerRadius } from "./utils/getCornerRadius";

const getPiePiece = ({ data, pieRadius, innerRadius, cornerRadius, startAngle }) => {
  let accumulatedAngle = startAngle % 360;
  const pieceData = data.map(({ value, ratio, label }) => {
    const vertex = getCoordinatesVertexGroup({
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
    const tangetnLineGroup = getCoordinatesTangentLineGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius: cornerInnerRadius,
      cornerOuterRadius: cornerOuterRadius,
      angle: (accumulatedAngle + ratio * 360) % 360,
      ratio,
      accumulatedAngle,
    });
    const candidates1 = getInnerCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      refAngle: (accumulatedAngle + ratio * 360) % 360,
      tangentX: tangetnLineGroup[0].x,
      tangentY: tangetnLineGroup[0].y,
    });
    const candidates2 = getInnerCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      refAngle: accumulatedAngle % 360,
      tangentX: tangetnLineGroup[1].x,
      tangentY: tangetnLineGroup[1].y,
    });
    const candidates3 = getOuterCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      refAngle: (accumulatedAngle + ratio * 360) % 360,
      tangentX: tangetnLineGroup[2].x,
      tangentY: tangetnLineGroup[2].y,
    });
    const candidates4 = getOuterCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      refAngle: accumulatedAngle % 360,
      tangentX: tangetnLineGroup[3].x,
      tangentY: tangetnLineGroup[3].y,
    });
    const referenceCoordinates = getReferenceCoordinates({
      startAngle: accumulatedAngle,
      percent: ratio,
      pieRadius,
    });
    const cornerCoordinate1 = getCoordinatesNear({
      circle1: {
        x: candidates4[0].x,
        y: candidates4[0].y,
      },
      circle2: {
        x: candidates4[1].x,
        y: candidates4[1].y,
      },
      referenceCoordinates,
    });
    const cornerCoordinate2 = getCoordinatesNear({
      circle1: {
        x: candidates3[0].x,
        y: candidates3[0].y,
      },
      circle2: {
        x: candidates3[1].x,
        y: candidates3[1].y,
      },
      referenceCoordinates,
    });
    const cornerCoordinate3 = getCoordinatesNear({
      circle1: {
        x: candidates1[0].x,
        y: candidates1[0].y,
      },
      circle2: {
        x: candidates1[1].x,
        y: candidates1[1].y,
      },
      referenceCoordinates,
    });
    const cornerCoordinate4 = getCoordinatesNear({
      circle1: {
        x: candidates2[0].x,
        y: candidates2[0].y,
      },
      circle2: {
        x: candidates2[1].x,
        y: candidates2[1].y,
      },
      referenceCoordinates,
    });

    const calcVertex = getCoordinatesCalcVertexGroup({
      pieRadius,
      innerRadius,
      cornerInnerRadius,
      cornerOuterRadius,
      cornerCoordinate1,
      cornerCoordinate2,
      cornerCoordinate3,
      cornerCoordinate4,
    });

    const isLargeArcInner = getIsLargeArc({
      ratio,
      x1: vertex.pos3.x,
      y1: vertex.pos3.y,
      x2: calcVertex[2].x,
      y2: calcVertex[2].y,
    });

    const isLargeArcOuter = getIsLargeArc({
      ratio,
      x1: vertex.pos1.x,
      y1: vertex.pos1.y,
      x2: calcVertex[0].x,
      y2: calcVertex[0].y,
    });

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
      tangentLineCoordinate1: tangetnLineGroup[0],
      tangentLineCoordinate2: tangetnLineGroup[1],
      tangentLineCoordinate3: tangetnLineGroup[2],
      tangentLineCoordinate4: tangetnLineGroup[3],
      tangentCircleCoordinate1: calcVertex[0],
      tangentCircleCoordinate2: calcVertex[1],
      tangentCircleCoordinate3: calcVertex[2],
      tangentCircleCoordinate4: calcVertex[3],
      cornerCoordinate1,
      cornerCoordinate2,
      cornerCoordinate3,
      cornerCoordinate4,
      referenceCoordinates,
      accumulatedAngle,
      isLargeArcInner,
      isLargeArcOuter,
      calcVertex,
      value,
      ratio,
      label,
    };
  });

  return pieceData;
};

export default getPiePiece;
