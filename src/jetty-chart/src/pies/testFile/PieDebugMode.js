// 파이 차트의 디버깅 모드를 표시하는 컴포넌트
export const PieDebugMode = ({
  debugTool,
  accumulatedAngle,
  ratio,
  vertexGroup,
  calcVertexGroup,
  cornerOuterRadius,
  cornerInnerRadius,
  innerRadius,
  cornerCircleGroup,
  tangentLineGroup,
  pieRadius,
  referenceCoordinate,
  candidatesGroup,
  labelLocation,
}) => {
  const pointSize = 0.02;
  const ToggleAll = !true;
  const TogglePieRadius = !!true && !!ToggleAll;
  const ToggleInnerRadius = !!true && !!ToggleAll;
  const ToggleCenter = !!true && !!ToggleAll;
  const ToggleLabelLocation = !!true && !!ToggleAll;
  const ToggleLine = !!true && !!ToggleAll;
  const ToggleReferenceCoordinate = !!true && !!ToggleAll;
  const ToggleVertexGroup = !!true && !!ToggleAll;
  const ToggleTangentLineGroup = !!true && !!ToggleAll;
  const ToggleCandidatesGroup = !!true && !!ToggleAll;
  const ToggleCornerCircleGroup = !!true && !!ToggleAll;
  const ToggleCalcVertexGroup = !!true && !!ToggleAll;
  console.log(labelLocation);
  return (
    debugTool && (
      <>
        {TogglePieRadius && <circle cx={0} cy={0} r={pieRadius} fill="lightgray" opacity={0.03} />}
        {ToggleInnerRadius && <circle cx={0} cy={0} r={innerRadius} fill="#dddddd" opacity={0.2} />}
        {ToggleCenter && (
          <circle
            cx={0}
            cy={0}
            r={innerRadius / 2 < 0.05 ? innerRadius / 2 : 0.05}
            fill="pink"
            opacity={0.5}
          />
        )}
        {ToggleLabelLocation && (
          <>
            <circle cx={labelLocation.x} cy={labelLocation.y} r={0.1} fill="orange" opacity={0.5} />
            <circle cx={0} cy={0} r={0.05} fill="orange" opacity={0.5} />
          </>
        )}
        {ToggleReferenceCoordinate && (
          <circle
            cx={referenceCoordinate.x}
            cy={referenceCoordinate.y}
            r={0.05}
            fill="purple"
            opacity={0.5}
          />
        )}
        {ToggleVertexGroup && (
          <>
            <circle
              cx={vertexGroup[0].x}
              cy={vertexGroup[0].y}
              r={pointSize * 1.5}
              fill="#FF0000"
              opacity={0.5}
            />
            <circle
              cx={vertexGroup[1].x}
              cy={vertexGroup[1].y}
              r={pointSize * 1.5}
              fill="#FF0000"
              opacity={0.5}
            />
            <circle
              cx={vertexGroup[2].x}
              cy={vertexGroup[2].y}
              r={pointSize * 1.5}
              fill="#FF0000"
              opacity={0.5}
            />
            <circle
              cx={vertexGroup[3].x}
              cy={vertexGroup[3].y}
              r={pointSize * 1.5}
              fill="#FF0000"
              opacity={0.5}
            />
          </>
        )}
        {ToggleCalcVertexGroup && (
          <>
            <circle
              cx={calcVertexGroup[0].x}
              cy={calcVertexGroup[0].y}
              r={pointSize}
              fill="#00FF00"
              opacity={0.9}
            />
            <circle
              cx={calcVertexGroup[1].x}
              cy={calcVertexGroup[1].y}
              r={pointSize}
              fill="#00FF00"
              opacity={0.9}
            />
            <circle
              cx={calcVertexGroup[2].x}
              cy={calcVertexGroup[2].y}
              r={pointSize}
              fill="#00FF00"
              opacity={0.9}
            />
            <circle
              cx={calcVertexGroup[3].x}
              cy={calcVertexGroup[3].y}
              r={pointSize}
              fill="#00FF00"
              opacity={0.9}
            />
          </>
        )}
        {ToggleCandidatesGroup && (
          <>
            <circle
              cx={candidatesGroup[0].x1}
              cy={candidatesGroup[0].y1}
              r={0.05}
              fill="blue"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[0].x2}
              cy={candidatesGroup[0].y2}
              r={0.05}
              fill="red"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[1].x1}
              cy={candidatesGroup[1].y1}
              r={0.05}
              fill="blue"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[1].x2}
              cy={candidatesGroup[1].y2}
              r={0.05}
              fill="red"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[2].x1}
              cy={candidatesGroup[2].y1}
              r={0.05}
              fill="blue"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[2].x2}
              cy={candidatesGroup[2].y2}
              r={0.05}
              fill="red"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[3].x1}
              cy={candidatesGroup[3].y1}
              r={0.05}
              fill="blue"
              opacity={0.5}
            />
            <circle
              cx={candidatesGroup[3].x2}
              cy={candidatesGroup[3].y2}
              r={0.05}
              fill="red"
              opacity={0.5}
            />
          </>
        )}
        {ToggleCornerCircleGroup && (
          <>
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
              fill={"green"}
              opacity={0.3}
            />
            <circle
              cx={cornerCircleGroup[3].x}
              cy={cornerCircleGroup[3].y}
              r={cornerInnerRadius}
              fill={"yellow"}
              opacity={0.3}
            />
          </>
        )}
        {ToggleLine && (
          <>
            <line
              x1={0}
              y1={0}
              x2={Math.cos((accumulatedAngle * Math.PI) / 180)}
              y2={Math.sin((accumulatedAngle * Math.PI) / 180)}
              stroke="red"
              strokeWidth="0.003"
              opacity={0.8}
            />
            <line
              x1={0}
              y1={0}
              x2={Math.cos(((accumulatedAngle + ratio * 360) * Math.PI) / 180)}
              y2={Math.sin(((accumulatedAngle + ratio * 360) * Math.PI) / 180)}
              stroke="yellow"
              strokeWidth="0.003"
              opacity={0.8}
            />
          </>
        )}
        {ToggleTangentLineGroup && (
          <>
            <circle
              cx={tangentLineGroup[0].x}
              cy={tangentLineGroup[0].y}
              r={0.05}
              fill={"blue"}
              opacity={0.2}
            />
            <circle
              cx={tangentLineGroup[1].x}
              cy={tangentLineGroup[1].y}
              r={0.05}
              fill={"blue"}
              opacity={0.2}
            />
            <circle
              cx={tangentLineGroup[2].x}
              cy={tangentLineGroup[2].y}
              r={0.05}
              fill={"blue"}
              opacity={0.2}
            />
            <circle
              cx={tangentLineGroup[3].x}
              cy={tangentLineGroup[3].y}
              r={0.05}
              fill={"blue"}
              opacity={0.2}
            />
          </>
        )}
        r
      </>
    )
  );
};
