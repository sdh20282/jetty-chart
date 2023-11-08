import { getCoordinatesForRatio, getCoordinatesVertex } from "./utils/getCoordinates";
import { getCoordinatesCalcPos } from "./utils/getCoordinatesCalcPos";
import { getCoordinatesNear } from "./utils/getCoordinatesNear";
import { getInnerCornerCandidates } from "./utils/getInnerCornerCandidates";
import { getOuterCornerCandidates } from "./utils/getOuterCornerCandidates";
import { getReferenceCoordinates } from "./utils/getReferenceCoordinates";
import { getInnerTangentCircle } from "./utils/getInnerTangentCircle";
import { getOuterTangentLine } from "./utils/getOuterTangentLine";
import { getInnerTangentLine } from "./utils/getInnerTangentLine";
import { getOuterTangentCircle } from "./utils/getOuterTangentCircle";
import { exceptionCornerRadius } from "./exceptions/exceptionCornerRadius";
import { getIsLargeArc } from "./utils/getIsLargeArc";

const getPiePiece = ({ data, pieRadius, innerRadius, cornerRadius, startAngle }) => {
  let accumulatedAngle = startAngle % 360;
  const pieceData = data.map(({ value, ratio, label }) => {
    const vertex = getCoordinatesVertex({
      ratio,
      startAngle: accumulatedAngle % 360,
      pieRadius,
      innerRadius,
    });
    const cornerInnerRadius = exceptionCornerRadius({
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
    });
    const cornerOuterRadius = exceptionCornerRadius({
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
    });

    const tangentLineCoordinate1 = getInnerTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      angle: (accumulatedAngle + ratio * 360) % 360,
    });
    const tangentLineCoordinate2 = getInnerTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      angle: accumulatedAngle % 360,
    });
    const tangentLineCoordinate3 = getOuterTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      angle: (accumulatedAngle + ratio * 360) % 360,
    });
    const tangentLineCoordinate4 = getOuterTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      angle: accumulatedAngle % 360,
    });
    const candidates1 = getInnerCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      refAngle: (accumulatedAngle + ratio * 360) % 360,
      tangentX: tangentLineCoordinate1.x,
      tangentY: tangentLineCoordinate1.y,
    });
    const candidates2 = getInnerCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerInnerRadius,
      refAngle: accumulatedAngle % 360,
      tangentX: tangentLineCoordinate2.x,
      tangentY: tangentLineCoordinate2.y,
    });
    const candidates3 = getOuterCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      refAngle: (accumulatedAngle + ratio * 360) % 360,
      tangentX: tangentLineCoordinate3.x,
      tangentY: tangentLineCoordinate3.y,
    });
    const candidates4 = getOuterCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius: cornerOuterRadius,
      refAngle: accumulatedAngle % 360,
      tangentX: tangentLineCoordinate4.x,
      tangentY: tangentLineCoordinate4.y,
    });
    const referenceCoordinates = getReferenceCoordinates({
      startAngle: accumulatedAngle,
      percent: ratio,
      pieRadius,
    });
    const cornerCoordinate1 = getCoordinatesNear({
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
    const cornerCoordinate2 = getCoordinatesNear({
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
    const cornerCoordinate3 = getCoordinatesNear({
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
    const cornerCoordinate4 = getCoordinatesNear({
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
    const tangentCircleCoordinate1 = getInnerTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: innerRadius,
      },
      circle2: {
        x: cornerCoordinate1.x,
        y: cornerCoordinate1.y,
        r: cornerInnerRadius,
      },
    });
    const tangentCircleCoordinate2 = getInnerTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: innerRadius,
      },
      circle2: {
        x: cornerCoordinate2.x,
        y: cornerCoordinate2.y,
        r: cornerInnerRadius,
      },
    });
    const tangentCircleCoordinate3 = getOuterTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: pieRadius,
      },
      circle2: {
        x: cornerCoordinate3.x,
        y: cornerCoordinate3.y,
        r: cornerOuterRadius,
      },
    });
    const tangentCircleCoordinate4 = getOuterTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: pieRadius,
      },
      circle2: {
        x: cornerCoordinate4.x,
        y: cornerCoordinate4.y,
        r: cornerOuterRadius,
      },
    });
    const calcPos = getCoordinatesCalcPos({
      tangentCircleCoordinate1,
      tangentCircleCoordinate2,
      tangentCircleCoordinate3,
      tangentCircleCoordinate4,
    });

    const isLargeArcInner = getIsLargeArc({
      ratio,
      x1: vertex.pos3.x,
      y1: vertex.pos3.y,
      x2: calcPos.pos3.x,
      y2: calcPos.pos3.y,
    });

    const isLargeArcOuter = getIsLargeArc({
      ratio,
      x1: vertex.pos1.x,
      y1: vertex.pos1.y,
      x2: calcPos.pos1.x,
      y2: calcPos.pos1.y,
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
      tangentLineCoordinate1,
      tangentLineCoordinate2,
      tangentLineCoordinate3,
      tangentLineCoordinate4,
      tangentCircleCoordinate1,
      tangentCircleCoordinate2,
      tangentCircleCoordinate3,
      tangentCircleCoordinate4,
      cornerCoordinate1,
      cornerCoordinate2,
      cornerCoordinate3,
      cornerCoordinate4,
      referenceCoordinates,
      accumulatedAngle,
      isLargeArcInner,
      isLargeArcOuter,
      calcPos,
      value,
      ratio,
      label,
    };
  });

  return pieceData;
};

export default getPiePiece;
