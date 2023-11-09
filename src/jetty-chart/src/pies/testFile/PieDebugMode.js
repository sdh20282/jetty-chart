// 파이 차트의 디버깅 모드를 표시하는 컴포넌트
export const PieDebugMode = ({
  debugTool,
  accumulatedAngle,
  percent,
  vertexGroup,
  calcVertexGroup,
  cornerOuterRadius,
  cornerInnerRadius,
  innerRadius,
  cornerCircleGroup,
  tangentLineGroup,
  startAngle,
  pieRadius,
  referenceCoordinate,
}) => {
  const pointSize = 0.02;
  return (
    debugTool && (
      <>
        <circle
          cx={vertexGroup[0].x}
          cy={vertexGroup[0].y}
          r={pointSize}
          fill="#FF1100"
          opacity={0.9}
        />
        <circle
          cx={vertexGroup[1].x}
          cy={vertexGroup[1].y}
          r={pointSize}
          fill="#E63A2E"
          opacity={0.9}
        />
        <circle
          cx={vertexGroup[2].x}
          cy={vertexGroup[2].y}
          r={pointSize}
          fill="#CC5A52"
          opacity={0.9}
        />
        <circle
          cx={vertexGroup[3].x}
          cy={vertexGroup[3].y}
          r={pointSize}
          fill="#B3706B"
          opacity={0.9}
        />
        <circle
          cx={calcVertexGroup[0].x}
          cy={calcVertexGroup[0].y}
          r={pointSize}
          fill="#1AFF00"
          opacity={0.9}
        />
        <circle
          cx={calcVertexGroup[1].x}
          cy={calcVertexGroup[1].y}
          r={pointSize}
          fill="#40E62E"
          opacity={0.9}
        />
        <circle
          cx={calcVertexGroup[2].x}
          cy={calcVertexGroup[2].y}
          r={pointSize}
          fill="#5ECC52"
          opacity={0.9}
        />
        <circle
          cx={calcVertexGroup[3].x}
          cy={calcVertexGroup[3].y}
          r={pointSize}
          fill="#72B36B"
          opacity={0.9}
        />

        <circle cx={0} cy={0} r={innerRadius} fill="#aaaaaa" opacity={0.2} />
        <circle cx={0} cy={0} r={0.05} fill="pink" opacity={0.5} />

        <circle
          cx={cornerCircleGroup[0].x}
          cy={cornerCircleGroup[0].y}
          r={cornerOuterRadius}
          fill={"red"}
          opacity={0.3}
        />
        <circle
          cx={cornerCircleGroup[1].x}
          cy={cornerCircleGroup[1].y}
          r={cornerOuterRadius}
          fill={"blue"}
          opacity={0.3}
        />
        <circle
          cx={cornerCircleGroup[2].x}
          cy={cornerCircleGroup[2].y}
          r={cornerInnerRadius}
          fill={"brown"}
          opacity={0.5}
        />
        <circle
          cx={cornerCircleGroup[3].x}
          cy={cornerCircleGroup[3].y}
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
        <circle cx={0} cy={0} r={pieRadius} fill="lightgray" opacity={0.1} />

        <circle
          cx={tangentLineGroup[0].x}
          cy={tangentLineGroup[0].y}
          r={0.02}
          fill={"red"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineGroup[1].x}
          cy={tangentLineGroup[1].y}
          r={0.015}
          fill={"yellow"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineGroup[2].x}
          cy={tangentLineGroup[2].y}
          r={0.02}
          fill={"red"}
          opacity={0.5}
        />
        <circle
          cx={tangentLineGroup[3].x}
          cy={tangentLineGroup[3].y}
          r={0.015}
          fill={"yellow"}
          opacity={0.5}
        />
        <circle
          cx={referenceCoordinate.x}
          cy={referenceCoordinate.y}
          r={0.05}
          fill="purple"
          opacity={0.5}
        />
      </>
    )
  );
};
