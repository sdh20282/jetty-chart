import React from "react";
import { checkRangePadSpace, checkRangeStrokeWidth } from "../utils/checkValue";

const PiePiece = ({
  startX,
  startY,
  isLargeArcFlag,
  endX,
  endY,
  pieSettings,
  index,
  value,
  label,
}) => {
  const targetRad = 2 * Math.PI * value * (1 - checkRangePadSpace(pieSettings.padSpace) / 100);
  const targetSpace = (2 * Math.PI * value * checkRangePadSpace(pieSettings.padSpace)) / 100 / 2;
  const targetRestRad = 2 * Math.PI * (1 - value);
  return (
    <>
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}`}
        fill="none"
        stroke={"black"}
        strokeWidth={1.1}
        strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path>
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth={checkRangeStrokeWidth(pieSettings.innerWidth)}
        strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path>
    </>
  );
};

export default PiePiece;
