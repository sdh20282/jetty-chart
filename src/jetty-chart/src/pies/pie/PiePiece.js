import React from "react";
import { checkRangePadSpace, checkRangeStrokeWidth } from "../utils/checkValue";

const PiePiece = ({
  startX,
  startY,
  startRadiusPos,
  endRadiusPos,
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
  console.log(startInnerPos, endInnerPos);
  const targetRad = 2 * Math.PI * value * (1 - checkRangePadSpace(pieSettings.padSpace) / 100);
  const targetSpace = (2 * Math.PI * value * checkRangePadSpace(pieSettings.padSpace)) / 100 / 2;
  const targetRestRad = 2 * Math.PI * (1 - value);
  console.log("HH");
  console.log(startRadiusPos);
  return (
    <>
      {/* <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}`}
        fill="none"
        stroke={"black"}
        strokeWidth={1.1}
        strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path> */}
      {/* <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth={checkRangeStrokeWidth(pieSettings.innerWidth)}
        strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path> */}
      <path
        d={`M ${startRadiusPos.x1} ${startRadiusPos.y1}
        A 1 1 0 ${isLargeArcFlag} 1 ${startX} ${startY}
        A 0 0 0 ${isLargeArcFlag} 0 ${startRadiusPos.x2} ${startRadiusPos.y2}
        A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY}
        `}
        // d={`M ${startX} ${startY}
        // A 2 2 0 ${isLargeArcFlag} 1 ${startInnerPos.x1} ${startInnerPos.y1}
        // A 0 0 0 ${isLargeArcFlag} 0 ${endX} ${endY}
        // A 2 2 0 ${isLargeArcFlag} 1 ${endInnerPos.x1} ${endInnerPos.y1}
        // Z`}
        // A ${endRadiusPos.x1} ${endRadiusPos.y1} 0 ${isLargeArcFlag * -1}
        // 1 ${endRadiusPos.x2} ${endRadiusPos.y2}

        // L ${startInnerPos.startInner} ${startInnerPos.startRoundY1}
        // A 1 1 0 0
        // 1 ${endInnerPos.startRoundX2} ${endInnerPos.startRoundY2}
        // A ${startInnerPos.startRoundX1} ${startInnerPos.startRoundY1} 0 0
        // 0 ${startInnerPos.startRoundX2} ${startInnerPos.startRoundY2}
        // A ${startInnerPos.startRoundX1} ${startInnerPos.startRoundY1} 0 0
        // 1 ${startInnerPos.startRoundX2} ${startInnerPos.startRoundY2}
        fill={pieSettings.color[index]}
        // stroke={pieSettings.color[index]}
        // strokeWidth={checkRangeStrokeWidth(pieSettings.innerWidth)}
        // strokeDasharray={`0 ${targetSpace} ${targetRad} ${targetSpace + targetRestRad}`}
      ></path>
    </>
  );
};

export default PiePiece;
