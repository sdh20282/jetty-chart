export const DrawYAxisGridLine = ({
  normalSettings: { yAxis, width, yAxisHeight, showTopScope },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound }
}) => {
  return (
    lineVisible && (
      <g>
        {yAxis.map((c, idx) => {
          if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
            return;
          }

          const location = yAxisHeight * idx;

          return (
            <line
              key={"background-line-" + c + "-" + idx}
              opacity={lineOpacity}
              x1={"0"}
              x2={width}
              y1={location}
              y2={location}
              stroke={lineColor}
              strokeWidth={lineWidth}
              strokeDasharray={lineDash && c !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
              strokeLinecap={lineRound ? "round" : ""}
            ></line>
          );
        })}
      </g>
    )
  );
};
