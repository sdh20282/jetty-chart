import { getCoordinatesCalcPos } from "../utils/getCoordinatesCalcPos";
import { getCornerCandidates } from "../utils/getCornerCandidates";
import { getCoordinatesNear } from "../utils/getCoordinatesNear";
import { getReferenceCoordinates } from "../utils/getReferenceCoordinates";
import { getTangentCircle } from "../utils/getTangentCircle";
import { getTangentLine } from "../utils/getTangentLine";
import { getCoordinatesVertex } from "../utils/getCoordinates";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";
import { PieDebugMode } from "./PieDebugMode";

const PieTest = () => {
  const width = 550;
  const height = 550;
  const pieRadius = 1;
  const innerRadius = 0.5;
  const cornerRadius = 0.2;
  const startAngle = 0;
  const debugTool = !!true;
  const percent = 0.3;
  const backgroundColor = "black";
  const tangentLineCoordinate1 = getTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius,
    angle: (startAngle + percent * 360) % 360,
  });
  const tangentLineCoordinate2 = getTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius,
    angle: startAngle,
  });
  const candidates1 = getCornerCandidates({
    pieRadius,
    innerRadius,
    cornerRadius,
    refAngle: (startAngle + percent * 360) % 360,
    tangentX: tangentLineCoordinate1.x,
    tangentY: tangentLineCoordinate1.y,
  });
  const candidates2 = getCornerCandidates({
    pieRadius,
    innerRadius,
    cornerRadius,
    refAngle: startAngle,
    tangentX: tangentLineCoordinate2.x,
    tangentY: tangentLineCoordinate2.y,
  });
  const referenceCoordinates = getReferenceCoordinates({ startAngle, percent, pieRadius });

  const cornerCoordinate1 = getCoordinatesNear({
    circle1: { x: candidates1[0].x, y: candidates1[0].y },
    circle2: { x: candidates1[1].x, y: candidates1[1].y },
    referenceCoordinates,
  });
  const cornerCoordinate2 = getCoordinatesNear({
    circle1: { x: candidates2[0].x, y: candidates2[0].y },
    circle2: { x: candidates2[1].x, y: candidates2[1].y },
    referenceCoordinates,
  });

  const tangentCircleCoordinate1 = getTangentCircle({
    circle1: { x: 0, y: 0, r: innerRadius },
    circle2: { x: cornerCoordinate1.x, y: cornerCoordinate1.y, r: cornerRadius },
  });
  const tangentCircleCoordinate2 = getTangentCircle({
    circle1: { x: 0, y: 0, r: innerRadius },
    circle2: { x: cornerCoordinate2.x, y: cornerCoordinate2.y, r: cornerRadius },
  });
  const vertex = getCoordinatesVertex({
    percent,
    startAngle,
    pieRadius,
    innerRadius,
    tangentLineCoordinate1,
    tangentLineCoordinate2,
  });
  const calcPos = getCoordinatesCalcPos({
    vertex,
    pieRadius,
    innerRadius,
    cornerRadius,
    tangentCircleCoordinate1,
    tangentCircleCoordinate2,
  });

  return (
    <>
      <svg width={width} height={height} viewBox="-1 -1 2 2" style={{ backgroundColor }}>
        <path
          d={`          
            M ${pointBetweenTwoPoints({
              x1: vertex.pos1.x,
              y1: vertex.pos1.y,
              x2: vertex.pos4.x,
              y2: vertex.pos4.y,
              cornerRadius,
            })}
            A ${cornerRadius},${cornerRadius},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x},${calcPos.pos2.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            cornerRadius,
          })}
            L ${tangentLineCoordinate1.x},${tangentLineCoordinate1.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${cornerRadius},${cornerRadius},0,0,1,${tangentLineCoordinate2.x},${
            tangentLineCoordinate2.y
          }
            Z
            `}
          fill="#bae7ff"
        />
        {debugTool && (
          <PieDebugMode
            startAngle={startAngle}
            percent={percent}
            vertex={vertex}
            calcPos={calcPos}
            cornerRadius={cornerRadius}
            innerRadius={innerRadius}
            cornerCoordinate1={cornerCoordinate1}
            cornerCoordinate2={cornerCoordinate2}
            referenceCoordinates={referenceCoordinates}
          />
        )}
      </svg>
    </>
  );
};

export default PieTest;
