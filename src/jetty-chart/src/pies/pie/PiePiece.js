import React from "react";
import { checkRangePadAngle, checkRangeStrokeWidth } from "../utils/checkValue";

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
  const targetRad = 2 * Math.PI * value * (1 - pieSettings.padAngle);
  const targetSpace = 2 * Math.PI * pieSettings.padAngle;
  const targetRestRad = 2 * Math.PI * (1 - value);
  console.log("HI");
  console.log(targetRad, targetRestRad);
  return (
    <path
      d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`}
      fill="none"
      stroke={pieSettings.color[index]}
      strokeWidth={checkRangeStrokeWidth(pieSettings.innerWidth)}
      strokeDasharray={`${targetSpace} ${targetRad} ${targetSpace} ${targetRestRad}`}
      // strokeDasharray={`${targetRad} ${targetRestRad}`}
      strokeDashoffset={checkRangePadAngle(0.025 * pieSettings.padAngle, value)}
    ></path>
  );
};

export default PiePiece;
