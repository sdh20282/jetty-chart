import { checkRangePadSpace, checkRangeStrokeWidth } from "../exceptions/checkValue";

const PiePiece = ({
  data,
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
  targetRad,
  targetSpace,
  targetRestRad,
  value,
  label,
  index,
}) => {
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
