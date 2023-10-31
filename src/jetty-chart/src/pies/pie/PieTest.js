import { calculateInputData } from "../utils/calculateIntersection";
import { getCoordinatesForVertex } from "../utils/getCoordinates";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";
import PieTestPoint from "./PieTestPoint";

const PieTest = () => {
  const percent = 0.5;
  const startAngle = 0;
  const pieRadius = 1;
  const innerRadius = 0.14;
  const borderRadius = 0.05;
  const debugPointView = !!true;
  const vertex = getCoordinatesForVertex({
    percent,
    startAngle,
    pieRadius,
    innerRadius,
  });
  const calcPos = calculateInputData({ vertex, pieRadius, innerRadius, borderRadius });
  console.log(vertex);
  return (
    <>
      <svg width="500" height="500" viewBox="-1 -1 2 2" style={{ backgroundColor: "black" }}>
        <path
          d={`          
            M ${pointBetweenTwoPoints({
              x1: vertex.pos1.x,
              y1: vertex.pos1.y,
              x2: vertex.pos4.x,
              y2: vertex.pos4.y,
              borderRadius,
            })}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x},${calcPos.pos2.y}
            A ${borderRadius},${borderRadius},0,0,1,${pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            borderRadius,
          })}
            L ${pointBetweenTwoPoints({
              x1: vertex.pos3.x,
              y1: vertex.pos3.y,
              x2: vertex.pos2.x,
              y2: vertex.pos2.y,
              borderRadius,
            })}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${borderRadius},${borderRadius},0,0,1,${pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            borderRadius,
          })}
            Z
            `}
          fill="#bae7ff"
        />
        {debugPointView && (
          <PieTestPoint vertex={vertex} calcPos={calcPos} borderRadius={borderRadius} />
        )}
      </svg>
    </>
  );
};

export default PieTest;
