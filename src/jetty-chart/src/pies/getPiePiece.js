import { getCoordinatesForPercent, getCoordinatesForPosition } from "./utils/getCoordinates";

const getPiePiece = ({ data, pieSettings }) => {
  let accumulatedPercent = 0;
  console.log("getPiePiece", data, pieSettings);
  return data.map(({ value, label }, index) => {
    console.log("getPiePiece", index, value, label);
    const startPos = getCoordinatesForPercent({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      radius: pieSettings.pieRadius
    });
    console.log("startPos", startPos);
    const startRoundPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 1
    });
    const startInnerPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 0.1
    });
    value *= pieSettings.padSize / 100;
    accumulatedPercent += value;
    const endPos = getCoordinatesForPercent({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      radius: pieSettings.pieRadius
    });
    const endRoundPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 1
    });
    const endInnerPos = getCoordinatesForPosition({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      range: 0.1
    });
    const isLargeArcFlag = value > 0.5 ? "1" : "0";
    const targetRad = 2 * Math.PI * value * (1 - pieSettings.padSpace / 100);
    const targetSpace = (2 * Math.PI * value * pieSettings.padSpace) / 100 / 2;
    const targetRestRad = 2 * Math.PI * (1 - value);

    console.log("getPiePiece");
    console.log(startPos, startRoundPos, startInnerPos, endPos, endRoundPos, endInnerPos);
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
      targetRestRad
    };
  });
};

export default getPiePiece;
