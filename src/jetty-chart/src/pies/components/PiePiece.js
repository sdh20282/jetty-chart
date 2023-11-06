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

  value,
  label,
  index,

  vertex,
  cornerRadius,
  innerRadius,
  pieRadius,
  tangentLineCoordinate1,
  tangentLineCoordinate2,
  tangentLineCoordinate3,
  tangentLineCoordinate4,
  calcPos,
  color,
}) => {
  // M ${pointBetweenTwoPoints({
  //   x1: vertex.pos1.x,
  //   y1: vertex.pos1.y,
  //   x2: vertex.pos4.x,
  //   y2: vertex.pos4.y,
  //   cornerRadius,
  // })}
  // ${pointBetweenTwoPoints({
  //   x1: vertex.pos2.x,
  //   y1: vertex.pos2.y,
  //   x2: vertex.pos3.x,
  //   y2: vertex.pos3.y,
  //   cornerRadius,
  // })}

  return (
    <>
      <path
        d={`
            M ${tangentLineCoordinate4.x},${tangentLineCoordinate4.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x},${calcPos.pos2.y}
            A ${cornerRadius},${cornerRadius},0,0,1,
            ${tangentLineCoordinate3.x},${tangentLineCoordinate3.y}
            L ${tangentLineCoordinate1.x},${tangentLineCoordinate1.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${tangentLineCoordinate2.x},${tangentLineCoordinate2.y}
            Z
            `}
        fill={color}
      />
    </>
  );
};

export default PiePiece;
