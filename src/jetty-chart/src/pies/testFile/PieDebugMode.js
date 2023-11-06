import React from "react";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";

export const PieDebugMode = ({
  accumulatedPercent,
  percent,
  vertex,
  calcPos,
  cornerRadius,
  innerRadius,
  cornerCoordinate1,
  cornerCoordinate2,
  cornerCoordinate3,
  cornerCoordinate4,
  tangentCircleCoordinate1,
  tangentCircleCoordinate2,
  tangentCircleCoordinate3,
  tangentCircleCoordinate4,
  referenceCoordinates,
}) => {
  const pointSize = 0.02;
  return (
    <>
      <circle cx={vertex.pos1.x} cy={vertex.pos1.y} r={pointSize} fill="#FF1100" opacity={0.9} />
      <circle cx={vertex.pos2.x} cy={vertex.pos2.y} r={pointSize} fill="#E63A2E" opacity={0.9} />
      <circle cx={vertex.pos3.x} cy={vertex.pos3.y} r={pointSize} fill="#CC5A52" opacity={0.9} />
      <circle cx={vertex.pos4.x} cy={vertex.pos4.y} r={pointSize} fill="#B3706B" opacity={0.9} />
      <circle cx={calcPos.pos1.x} cy={calcPos.pos1.y} r={pointSize} fill="#1AFF00" opacity={0.9} />
      <circle cx={calcPos.pos2.x} cy={calcPos.pos2.y} r={pointSize} fill="#40E62E" opacity={0.9} />
      <circle cx={calcPos.pos3.x} cy={calcPos.pos3.y} r={pointSize} fill="#5ECC52" opacity={0.9} />
      <circle cx={calcPos.pos4.x} cy={calcPos.pos4.y} r={pointSize} fill="#72B36B" opacity={0.9} />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos1.x,
            y1: vertex.pos1.y,
            x2: vertex.pos4.x,
            y2: vertex.pos4.y,
            cornerRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos1.x,
            y1: vertex.pos1.y,
            x2: vertex.pos4.x,
            y2: vertex.pos4.y,
            cornerRadius,
          }).split(",")[1]
        }
        r={pointSize}
        fill="#FFF200"
        opacity={0.9}
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            cornerRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            cornerRadius,
          }).split(",")[1]
        }
        r={pointSize}
        fill="#E6DC2E"
        opacity={0.9}
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos3.x,
            y1: vertex.pos3.y,
            x2: vertex.pos2.x,
            y2: vertex.pos2.y,
            cornerRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos3.x,
            y1: vertex.pos3.y,
            x2: vertex.pos2.x,
            y2: vertex.pos2.y,
            cornerRadius,
          }).split(",")[1]
        }
        r={pointSize}
        fill="#CCC652"
        opacity={0.9}
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            cornerRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            cornerRadius,
          }).split(",")[1]
        }
        r={pointSize}
        fill="#B3AF6B"
        opacity={0.9}
      />
      <circle cx={0} cy={0} r={innerRadius} fill="#aaaaaa" opacity={0.2} />
      <circle cx={0} cy={0} r={0.05} fill="pink" opacity={0.5} />

      <circle
        cx={cornerCoordinate1.x}
        cy={cornerCoordinate1.y}
        r={cornerRadius}
        fill={"red"}
        opacity={0.3}
      />
      <circle
        cx={cornerCoordinate2.x}
        cy={cornerCoordinate2.y}
        r={cornerRadius}
        fill={"blue"}
        opacity={0.3}
      />
      <circle
        cx={cornerCoordinate3.x}
        cy={cornerCoordinate3.y}
        r={cornerRadius}
        fill={"brown"}
        opacity={0.5}
      />
      <circle
        cx={cornerCoordinate4.x}
        cy={cornerCoordinate4.y}
        r={cornerRadius}
        fill={"brown"}
        opacity={0.5}
      />

      <line
        x1={0}
        y1={0}
        x2={Math.cos((((accumulatedPercent - percent * 360 + 360) % 360) * Math.PI) / 180)}
        y2={Math.sin((((accumulatedPercent - percent * 360 + 360) % 360) * Math.PI) / 180)}
        stroke="yellow"
        strokeWidth="0.003"
        opacity={0.8}
      />
      <line
        x1={0}
        y1={0}
        x2={Math.cos((accumulatedPercent * Math.PI) / 180)}
        y2={Math.sin((accumulatedPercent * Math.PI) / 180)}
        stroke="red"
        strokeWidth="0.003"
        opacity={0.8}
      />
      <circle
        cx={referenceCoordinates.x}
        cy={referenceCoordinates.y}
        r="0.03"
        fill="purple"
        opacity={0.5}
      />
      <circle
        cx={tangentCircleCoordinate1.x}
        cy={tangentCircleCoordinate1.y}
        r={0.05}
        fill="cyan"
        opacity={0.5}
      />
      <circle
        cx={tangentCircleCoordinate2.x}
        cy={tangentCircleCoordinate2.y}
        r={0.05}
        fill="cyan"
        opacity={0.5}
      />
      <circle
        cx={tangentCircleCoordinate3.x}
        cy={tangentCircleCoordinate3.y}
        r={0.05}
        fill="blue"
        opacity={0.5}
      />
      <circle
        cx={tangentCircleCoordinate4.x}
        cy={tangentCircleCoordinate4.y}
        r={0.05}
        fill="red"
        opacity={0.5}
      />
      <circle cx={0} cy={0} r={1} fill="gray" opacity={0.1} />
    </>
  );
};
