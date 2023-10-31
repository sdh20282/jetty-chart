import React from "react";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";

const PieTestPoint = ({ vertex, calcPos, borderRadius }) => {
  const pointSize = 0.03;
  return (
    <>
      <circle cx={vertex.pos1.x} cy={vertex.pos1.y} r={pointSize} fill="yellow" />
      <circle cx={vertex.pos2.x} cy={vertex.pos2.y} r={pointSize} fill="yellow" />
      <circle cx={vertex.pos3.x} cy={vertex.pos3.y} r={pointSize} fill="yellow" />
      <circle cx={vertex.pos4.x} cy={vertex.pos4.y} r={pointSize} fill="yellow" />
      <circle cx={calcPos.pos1.x} cy={calcPos.pos1.y} r={pointSize * 0.8} fill="green" />
      <circle cx={calcPos.pos2.x} cy={calcPos.pos2.y} r={pointSize * 0.8} fill="green" />
      <circle cx={calcPos.pos3.x} cy={calcPos.pos3.y} r={pointSize * 0.8} fill="green" />
      <circle cx={calcPos.pos4.x} cy={calcPos.pos4.y} r={pointSize * 0.8} fill="green" />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos1.x,
            y1: vertex.pos1.y,
            x2: vertex.pos4.x,
            y2: vertex.pos4.y,
            borderRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos1.x,
            y1: vertex.pos1.y,
            x2: vertex.pos4.x,
            y2: vertex.pos4.y,
            borderRadius,
          }).split(",")[1]
        }
        r={pointSize * 0.6}
        fill="red"
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            borderRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            borderRadius,
          }).split(",")[1]
        }
        r={pointSize * 0.6}
        fill="red"
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos3.x,
            y1: vertex.pos3.y,
            x2: vertex.pos2.x,
            y2: vertex.pos2.y,
            borderRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos3.x,
            y1: vertex.pos3.y,
            x2: vertex.pos2.x,
            y2: vertex.pos2.y,
            borderRadius,
          }).split(",")[1]
        }
        r={pointSize * 0.6}
        fill="red"
      />
      <circle
        cx={
          pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            borderRadius,
          }).split(",")[0]
        }
        cy={
          pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            borderRadius,
          }).split(",")[1]
        }
        r={pointSize * 0.6}
        fill="red"
      />
    </>
  );
};

export default PieTestPoint;
