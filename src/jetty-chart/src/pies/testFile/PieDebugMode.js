export const PieDebugMode = ({
  debugTool,
  accumulatedAngle,
  percent,
  vertex,
  calcVertex,
  cornerOuterRadius,
  cornerInnerRadius,
  innerRadius,
  cornerCoordinate1,
  cornerCoordinate2,
  cornerCoordinate3,
  cornerCoordinate4,
  tangentLineCoordinate1,
  tangentLineCoordinate2,
  tangentLineCoordinate3,
  tangentLineCoordinate4,
  tangentCircleCoordinate1,
  tangentCircleCoordinate2,
  tangentCircleCoordinate3,
  tangentCircleCoordinate4,
  referenceCoordinate,
}) => {
  const pointSize = 0.02;
  return (
    debugTool && (
      <>
        <circle cx={vertex.pos1.x} cy={vertex.pos1.y} r={pointSize} fill="#FF1100" opacity={0.9} />
        <circle cx={vertex.pos2.x} cy={vertex.pos2.y} r={pointSize} fill="#E63A2E" opacity={0.9} />
        <circle cx={vertex.pos3.x} cy={vertex.pos3.y} r={pointSize} fill="#CC5A52" opacity={0.9} />
        <circle cx={vertex.pos4.x} cy={vertex.pos4.y} r={pointSize} fill="#B3706B" opacity={0.9} />
        <circle
          cx={calcVertex[0].x}
          cy={calcVertex[0].y}
          r={pointSize}
          fill="#1AFF00"
          opacity={0.9}
        />
        <circle
          cx={calcVertex[1].x}
          cy={calcVertex[1].y}
          r={pointSize}
          fill="#40E62E"
          opacity={0.9}
        />
        <circle
          cx={calcVertex[2].x}
          cy={calcVertex[2].y}
          r={pointSize}
          fill="#5ECC52"
          opacity={0.9}
        />
        <circle
          cx={calcVertex[3].x}
          cy={calcVertex[3].y}
          r={pointSize}
          fill="#72B36B"
          opacity={0.9}
        />

        <circle cx={0} cy={0} r={innerRadius} fill="#aaaaaa" opacity={0.2} />
        <circle cx={0} cy={0} r={0.05} fill="pink" opacity={0.5} />

        <circle
          cx={cornerCoordinate1.x}
          cy={cornerCoordinate1.y}
          r={cornerOuterRadius}
          fill={"red"}
          opacity={0.3}
        />
        <circle
          cx={cornerCoordinate2.x}
          cy={cornerCoordinate2.y}
          r={cornerOuterRadius}
          fill={"blue"}
          opacity={0.3}
        />
        <circle
          cx={cornerCoordinate3.x}
          cy={cornerCoordinate3.y}
          r={cornerInnerRadius}
          fill={"brown"}
          opacity={0.5}
        />
        <circle
          cx={cornerCoordinate4.x}
          cy={cornerCoordinate4.y}
          r={cornerInnerRadius}
          fill={"brown"}
          opacity={0.5}
        />

        <line
          x1={0}
          y1={0}
          x2={Math.cos((((accumulatedAngle - percent * 360 + 360) % 360) * Math.PI) / 180)}
          y2={Math.sin((((accumulatedAngle - percent * 360 + 360) % 360) * Math.PI) / 180)}
          stroke="yellow"
          strokeWidth="0.003"
          opacity={0.8}
        />
        <line
          x1={0}
          y1={0}
          x2={Math.cos((accumulatedAngle * Math.PI) / 180)}
          y2={Math.sin((accumulatedAngle * Math.PI) / 180)}
          stroke="red"
          strokeWidth="0.003"
          opacity={0.8}
        />
        <circle
          cx={referenceCoordinate.x}
          cy={referenceCoordinate.y}
          r="0.03"
          fill="purple"
          opacity={0.5}
        />
        <circle
          cx={tangentCircleCoordinate1.x}
          cy={tangentCircleCoordinate1.y}
          r={0.02}
          fill="cyan"
          opacity={0.5}
        />
        <circle
          cx={tangentCircleCoordinate2.x}
          cy={tangentCircleCoordinate2.y}
          r={0.02}
          fill="cyan"
          opacity={0.5}
        />
        <circle
          cx={tangentCircleCoordinate3.x}
          cy={tangentCircleCoordinate3.y}
          r={0.02}
          fill="blue"
          opacity={0.5}
        />
        <circle
          cx={tangentCircleCoordinate4.x}
          cy={tangentCircleCoordinate4.y}
          r={0.02}
          fill="red"
          opacity={0.5}
        />
        <circle cx={0} cy={0} r={1} fill="lightgray" opacity={0.1} />

        <circle
          cx={tangentLineCoordinate1.x}
          cy={tangentLineCoordinate1.y}
          r={0.02}
          fill={"red"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineCoordinate2.x}
          cy={tangentLineCoordinate2.y}
          r={0.015}
          fill={"yellow"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineCoordinate3.x}
          cy={tangentLineCoordinate3.y}
          r={0.02}
          fill={"red"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineCoordinate4.x}
          cy={tangentLineCoordinate4.y}
          r={0.015}
          fill={"yellow"}
          opacity={0.5}
        />
      </>
    )
  );
};
