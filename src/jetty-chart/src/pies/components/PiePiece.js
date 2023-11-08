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
  calcVertex,
  color,
  isLargeArcOuter,
  isLargeArcInner,
}) => {
  return (
    <>
      <path
        d={`
            M ${tangentLineCoordinate4.x},${tangentLineCoordinate4.y}
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,${calcVertex[0].x},${calcVertex[0].y}
            A ${pieRadius - 0},${pieRadius - 0},0,${isLargeArcOuter},1,${calcVertex[1].x},${
              calcVertex[1].y
            }
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,
            ${tangentLineCoordinate3.x},${tangentLineCoordinate3.y}
            L ${tangentLineCoordinate1.x},${tangentLineCoordinate1.y}
            A ${cornerInnerRadius},${cornerInnerRadius},0,0,1,${calcVertex[2].x},${calcVertex[2].y}
            A ${innerRadius},${innerRadius},0,${isLargeArcInner},0,${calcVertex[3].x},${
              calcVertex[3].y
            }
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
