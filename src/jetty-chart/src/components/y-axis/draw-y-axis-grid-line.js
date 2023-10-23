export const DrawYAxisGridLine = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
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
              x1={horizontal ? location : "0"}
              x2={horizontal ? location : width}
              y1={horizontal ? "0" : location}
              y2={horizontal ? width : location}
              stroke={lineColor}
              strokeOpacity={lineOpacity}
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
