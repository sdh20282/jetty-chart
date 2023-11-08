import { checkRangePadSpace, checkRangeStrokeWidth } from "../exceptions/checkValue";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";

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

  ratio,
  value,
  label,
  index,

  vertex,
  cornerOuterRadius,
  cornerInnerRadius,
  innerRadius,
  pieRadius,
  tangentLineCoordinate1,
  tangentLineCoordinate2,
  tangentLineCoordinate3,
  tangentLineCoordinate4,
  calcPos,
  color,
}) => {
  return (
    <>
      <path
        d={`
            M ${tangentLineCoordinate4.x},${tangentLineCoordinate4.y}
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,${ratio > 0.5 ? 1 : 0},1,${calcPos.pos2.x},${
              calcPos.pos2.y
            }
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,
            ${tangentLineCoordinate3.x},${tangentLineCoordinate3.y}
            L ${tangentLineCoordinate1.x},${tangentLineCoordinate1.y}
            A ${cornerInnerRadius},${cornerInnerRadius},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${cornerInnerRadius},${cornerInnerRadius},0,0,1,${tangentLineCoordinate2.x},${
              tangentLineCoordinate2.y
            }
            Z
            `}
        fill={color}
      />
    </>
  );
};

export default PiePiece;
