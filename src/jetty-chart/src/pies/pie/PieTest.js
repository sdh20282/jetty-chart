import { calculateInputData } from "../utils/calculateIntersection";
import { findBorderCandidates } from "../utils/findBorderCandidates";
import { findCoordinatesNear } from "../utils/findCoordinatesNear";
import { findReferenceCoordinates } from "../utils/findReferenceCoordinates";
import { findTangentCircle } from "../utils/findTangentCircle";
import { findTangentLine } from "../utils/findTangentLine";
import { getCoordinatesForVertex } from "../utils/getCoordinates";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";
import { PieDebugMode } from "./PieDebugMode";

const PieTest = () => {
  const width = 550;
  const height = 550;
  const percent = 0.3;
  const startAngle = 0;
  const pieRadius = 1;
  const innerRadius = 0.5;
  const borderRadius = 0.2;
  const debugPointView = !!true;
  const tangentLineCoordinate1 = findTangentLine({
    pieRadius,
    innerRadius,
    borderRadius,
    angle: (startAngle + percent * 360) % 360,
  });
  const tangentLineCoordinate2 = findTangentLine({
    pieRadius,
    innerRadius,
    borderRadius,
    angle: startAngle,
  });
  const candidates1 = findBorderCandidates({
    pieRadius,
    innerRadius,
    borderRadius,
    refAngle: (startAngle + percent * 360) % 360,
    tangentX: tangentLineCoordinate1.x,
    tangentY: tangentLineCoordinate1.y,
  });
  const candidates2 = findBorderCandidates({
    pieRadius,
    innerRadius,
    borderRadius,
    refAngle: startAngle,
    tangentX: tangentLineCoordinate2.x,
    tangentY: tangentLineCoordinate2.y,
  });
  const referenceCoordinates = findReferenceCoordinates({ startAngle, percent, pieRadius });

  const borderCoordinate1 = findCoordinatesNear({
    circle1: { x: candidates1[0].x, y: candidates1[0].y },
    circle2: { x: candidates1[1].x, y: candidates1[1].y },
    referenceCoordinates,
  });
  const borderCoordinate2 = findCoordinatesNear({
    circle1: { x: candidates2[0].x, y: candidates2[0].y },
    circle2: { x: candidates2[1].x, y: candidates2[1].y },
    referenceCoordinates,
  });

  const tangentCircleCoordinate1 = findTangentCircle({
    circle1: { x: 0, y: 0, r: innerRadius },
    circle2: { x: borderCoordinate1.x, y: borderCoordinate1.y, r: borderRadius },
  });
  const tangentCircleCoordinate2 = findTangentCircle({
    circle1: { x: 0, y: 0, r: innerRadius },
    circle2: { x: borderCoordinate2.x, y: borderCoordinate2.y, r: borderRadius },
  });
  const vertex = getCoordinatesForVertex({
    percent,
    startAngle,
    pieRadius,
    innerRadius,
    tangentLineCoordinate1,
    tangentLineCoordinate2,
  });
  const calcPos = calculateInputData({
    vertex,
    pieRadius,
    innerRadius,
    borderRadius,
    tangentCircleCoordinate1,
    tangentCircleCoordinate2,
  });

  return (
    <>
      <svg width={width} height={height} viewBox="-1 -1 2 2" style={{ backgroundColor: "black" }}>
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
            L ${tangentLineCoordinate1.x},${tangentLineCoordinate1.y}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${borderRadius},${borderRadius},0,0,1,${tangentLineCoordinate2.x},${
            tangentLineCoordinate2.y
          }
            Z
            `}
          fill="#bae7ff"
        />
        {debugPointView && (
          <PieDebugMode
            startAngle={startAngle}
            percent={percent}
            vertex={vertex}
            calcPos={calcPos}
            borderRadius={borderRadius}
            innerRadius={innerRadius}
            borderCoordinate1={borderCoordinate1}
            borderCoordinate2={borderCoordinate2}
            referenceCoordinates={referenceCoordinates}
          />
        )}
      </svg>
    </>
  );
};

export default PieTest;
