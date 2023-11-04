import { getCoordinatesForPercent, getCoordinatesForPosition } from "./utils/getCoordinates";

const getPiePiece = ({ data, pieSettings }) => {
  let accumulatedPercent = 0;
  const pieceData = data.map(({ value, ratio, label }, index) => {
    const startPos = getCoordinatesForPercent({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      radius: pieSettings.pieRadius,
    });
    const startRoundPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 1,
    });
    const startInnerPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 0.1,
    });
    ratio *= pieSettings.padSize / 100;
    accumulatedPercent += ratio;
    const endPos = getCoordinatesForPercent({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      radius: pieSettings.pieRadius,
    });
    const endRoundPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 1,
    });
    const endInnerPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 0.1,
    });
    const isLargeArcFlag = ratio > 0.5 ? "1" : "0";
    const targetRad = 2 * Math.PI * ratio * (1 - pieSettings.padSpace / 100);
    const targetSpace = (2 * Math.PI * ratio * pieSettings.padSpace) / 100 / 2;
    const targetRestRad = 2 * Math.PI * (1 - ratio);

    return {
      startPos,
      startRoundPos,
      startInnerPos,
      endPos,
      endRoundPos,
      endInnerPos,
      isLargeArcFlag,
      targetRad,
      targetSpace,
      targetRestRad,
      ratio,
      value,
      label,
      index,
    };
  });

  return pieceData;
};

export default getPiePiece;
