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
  const targetRad = 2 * Math.PI * value * (1 - pieSettings.padSpace / 100);
  const targetSpace = (2 * Math.PI * value * pieSettings.padSpace) / 100 / 2;
  const targetRestRad = 2 * Math.PI * (1 - value);
  console.log("HI");
  console.log(targetRad, targetRestRad);
  return (
    <path
      d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`}
      fill="none"
      stroke={pieSettings.color[index]}
      strokeWidth={checkRangeStrokeWidth(pieSettings.innerWidth)}
      strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
    ></path>
  );
};

export default PiePiece;
