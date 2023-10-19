import { checkRangePadSize } from "../utils/checkValue";
import getCoordinatesForPercent from "../utils/getCoordinatesForPercent";
import PiePiece from "./PiePiece";

const GetPiePiece = ({ data, pieSettings }) => {
  let accumulatedPercent = 0;
  return data.map(({ value, label }, index) => {
    const [startX, startY] = getCoordinatesForPercent(accumulatedPercent, pieSettings.startAngle);
    value *= checkRangePadSize(pieSettings.padSize) / 100;
    accumulatedPercent += value;
    const [endX, endY] = getCoordinatesForPercent(accumulatedPercent, pieSettings.startAngle);
    const isLargeArcFlag = value > 0.5 ? "1" : "0";

    return (
      <PiePiece
        startX={startX}
        startY={startY}
        endX={endX}
        endY={endY}
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
