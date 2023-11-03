import { checkRangePadSize } from "./exceptions/checkValue";
import { getCoordinatesForPercent, getCoordinatesForPosition } from "../utils/getCoordinates";
import PiePiece from "./PiePiece";

const GetPiePiece = ({ data, pieSettings }) => {
  let accumulatedPercent = 0;
  return data.map(({ value, label }, index) => {
    const startPos = getCoordinatesForPercent({
      percent: accumulatedPercent,
      startAngle: pieSettings.startAngle,
      radius: pieSettings.pieRadius,
    });
    console.log("startPos", startPos);
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
    value *= pieSettings.padSize / 100;
    accumulatedPercent += value;
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
    const isLargeArcFlag = value > 0.5 ? "1" : "0";
    return (
      <PiePiece
        startX={startPos.x}
        startY={startPos.y}
        startRoundPos={startRoundPos}
        endRoundPos={endRoundPos}
        startInnerPos={startInnerPos}
        endInnerPos={endInnerPos}
        endX={endPos.x}
        endY={endPos.y}
        isLargeArcFlag={isLargeArcFlag}
        pieSettings={pieSettings}
        index={index}
        key={index}
        value={value}
        label={label}
      />
    );
  });
};

export default GetPiePiece;
