import React from "react";
import { checkRangePadSpace, checkRangeStrokeWidth } from "./exceptions/checkValue";

const PiePiece = ({
  startX,
  startY,
  startRoundPos,
  endRoundPos,
  startInnerPos,
  endInnerPos,
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
  console.log(
    startX,
    startY,
    startRoundPos,
    endX,
    endY,
    endRoundPos,
    targetRad,
    targetSpace,
    targetRestRad
  );
  return (
    <>
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth={pieSettings.innerRadius}
        strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path>
      <path
        d={`M ${startRoundPos.x} ${startRoundPos.y}
        A 1 1 0 0 1 ${startX} ${startY}
        A 0 0 0 1 1 ${endX} ${endY}
        A 1 1 0 0 1 ${endRoundPos.x} ${endRoundPos.y2}
      `}
      />
    </>
  );
};

export default PiePiece;
