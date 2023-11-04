import { getCoordinatesVertex } from "./utils/getCoordinates";
import { getCoordinatesCalcPos } from "./utils/getCoordinatesCalcPos";
import { getCoordinatesNear } from "./utils/getCoordinatesNear";
import { getCornerCandidates } from "./utils/getCornerCandidates";
import { getReferenceCoordinates } from "./utils/getReferenceCoordinates";
import { getTangentCircle } from "./utils/getTangentCircle";
import { getTangentLine } from "./utils/getTangentLine";

const getPiePiece = ({ data, pieRadius, innerRadius, cornerRadius, startAngle }) => {
  let accumulatedPercent = startAngle;
  const pieceData = data.map(({ value, ratio, label }) => {
    const tangentLineCoordinate1 = getTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius,
      angle: (accumulatedPercent + ratio * 360) % 360,
    });
    const tangentLineCoordinate2 = getTangentLine({
      pieRadius,
      innerRadius,
      cornerRadius,
      angle: accumulatedPercent % 360,
    });
    const candidates1 = getCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius,
      refAngle: (accumulatedPercent + ratio * 360) % 360,
      tangentX: tangentLineCoordinate1.x,
      tangentY: tangentLineCoordinate1.y,
    });
    const candidates2 = getCornerCandidates({
      pieRadius,
      innerRadius,
      cornerRadius,
      refAngle: accumulatedPercent % 360,
      tangentX: tangentLineCoordinate2.x,
      tangentY: tangentLineCoordinate2.y,
    });
    const referenceCoordinates = getReferenceCoordinates({
      startAngle: accumulatedPercent,
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

    const tangentCircleCoordinate1 = getTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: innerRadius,
      },
      circle2: {
        x: cornerCoordinate1.x,
        y: cornerCoordinate1.y,
        r: cornerRadius,
      },
    });
    const tangentCircleCoordinate2 = getTangentCircle({
      circle1: {
        x: 0,
        y: 0,
        r: innerRadius,
      },
      circle2: {
        x: cornerCoordinate2.x,
        y: cornerCoordinate2.y,
        r: cornerRadius,
      },
    });
    const vertex = getCoordinatesVertex({
      percent: ratio,
      startAngle: accumulatedPercent % 360,
      pieRadius,
      innerRadius,
      tangentLineCoordinate1,
      tangentLineCoordinate2,
    });
    const calcPos = getCoordinatesCalcPos({
      vertex,
      pieRadius,
      innerRadius,
      cornerRadius,
      tangentCircleCoordinate1,
      tangentCircleCoordinate2,
    });

    accumulatedPercent += ratio * 360;
    console.log("accumulatedPercent", accumulatedPercent);
    // const isLargeArcFlag = ratio > 0.5 ? "1" : "0";
    // const targetRad = 2 * Math.PI * ratio * (1 - pieSettings.padSpace / 100);
    // const targetSpace = (2 * Math.PI * ratio * pieSettings.padSpace) / 100 / 2;
    // const targetRestRad = 2 * Math.PI * (1 - ratio);

    console.log("vertex", vertex);
    console.log("cornerRadius", cornerRadius);
    console.log("innerRadius", innerRadius);
    console.log("pieRadius", pieRadius);
    console.log("tangentLineCoordinate1", tangentLineCoordinate1);
    console.log("tangentLineCoordinate2", tangentLineCoordinate2);
    console.log("calcPos", calcPos);
    console.log(" ");

    return {
      vertex,
      cornerRadius,
      innerRadius,
      pieRadius,
      tangentLineCoordinate1,
      tangentLineCoordinate2,
      cornerCoordinate1,
      cornerCoordinate2,
      referenceCoordinates,
      accumulatedPercent,
      calcPos,
      value,
      ratio,
      label,
    };
  });

  return pieceData;
};

export default getPiePiece;
