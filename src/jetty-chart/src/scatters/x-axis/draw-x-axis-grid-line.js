export const DrawXAxisGridLine = ({
  normalSettings: { xAxis, width, height, padding, xAxisWidth },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound, showEndLine }
}) => {
  padding ??= 0;

  return (
    <>
      {lineVisible && showEndLine && (
        <g transform={`translate(0,0)`}>
          <line
            key={"background-line-" + 0 + "-" + 0}
            opacity={lineOpacity}
            x1={0}
            x2={0}
            y1={"0"}
            y2={height}
            stroke={lineColor}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
          ></line>
        </g>
      )}
      {lineVisible && (
        <g transform={`translate(${padding},0)`}>
          {xAxis.map((d, idx) => {
            const x = xAxisWidth * idx;

            return (
              <line
                key={"background-line-" + d + "-" + idx}
                opacity={lineOpacity}
                x1={x}
                x2={x}
                y1={"0"}
                y2={height}
                stroke={lineColor}
                strokeWidth={lineWidth}
                strokeDasharray={lineDash && d !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
                strokeLinecap={lineRound ? "round" : ""}
              ></line>
            );
          })}
        </g>
      )}
      {lineVisible && showEndLine && (
        <g transform={`translate(${width},0)`}>
          <line
            key={"background-line-" + 0 + "-" + 0}
            opacity={lineOpacity}
            x1={0}
            x2={0}
            y1={"0"}
            y2={height}
            stroke={lineColor}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
          ></line>
        </g>
      )}
    </>
  );
};
/* eslint-enable complexity */
