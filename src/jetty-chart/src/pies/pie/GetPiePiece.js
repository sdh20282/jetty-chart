import { checkRangePadSize } from "../utils/checkValue";
import getCoordinatesForPercent, {
  getCoordinatesForPosition,
} from "../utils/getCoordinatesForPercent";
import PiePiece from "./PiePiece";

const GetPiePiece = ({ data, pieSettings }) => {
  let accumulatedPercent = 0;
  return data.map(({ value, label }, index) => {
    const [startX, startY] = getCoordinatesForPercent(accumulatedPercent, pieSettings.startAngle);
    const startRadiusPos = getCoordinatesForPosition(
      accumulatedPercent,
      pieSettings.startAngle,
      pieSettings.cornerRadius
    );
    const startInnerPos = getCoordinatesForPosition(
      accumulatedPercent,
      pieSettings.startAngle,
      pieSettings.innerWidth
    );
    value *= checkRangePadSize(pieSettings.padSize) / 100;
    accumulatedPercent += value;
    const [endX, endY] = getCoordinatesForPercent(accumulatedPercent, pieSettings.startAngle);
    const endRadiusPos = getCoordinatesForPosition(
      accumulatedPercent,
      pieSettings.startAngle,
      pieSettings.cornerRadius
    );
    const endInnerPos = getCoordinatesForPosition(
      accumulatedPercent,
      pieSettings.startAngle,
      pieSettings.innerWidth
    );
    const isLargeArcFlag = value > 0.5 ? "1" : "0";
    return (
      <PiePiece
        startX={startX}
        startY={startY}
        startRadiusPos={startRadiusPos}
        endRadiusPos={endRadiusPos}
        startInnerPos={startInnerPos}
        endInnerPos={endInnerPos}
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
