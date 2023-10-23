/* eslint-disable complexity */
export const DrawXAxisGridLine = ({
  normalSettings: { xAxis, horizontal, width, height, padding, xAxisInitialPosition, xAxisWidth },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound, showEndLine }
}) => {
  padding ??= 0;

  return (
    <>
      {lineVisible && showEndLine && (
        <g transform={horizontal ? `translate(0,0)` : `translate(0,0)`}>
          <line
            key={"background-line-" + 0 + "-" + 0}
            x1={horizontal ? "0" : 0}
            x2={horizontal ? height : 0}
            y1={horizontal ? 0 : "0"}
            y2={horizontal ? 0 : height}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
          ></line>
        </g>
      )}
      {lineVisible && (
        <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding},0)`}>
          {xAxis.map((d, idx) => {
            const x = xAxisWidth * idx + xAxisInitialPosition;

            return (
              <line
                key={"background-line-" + d + "-" + idx}
                x1={horizontal ? "0" : x}
                x2={horizontal ? height : x}
                y1={horizontal ? x : "0"}
                y2={horizontal ? x : height}
                stroke={lineColor}
                strokeOpacity={lineOpacity}
                strokeWidth={lineWidth}
                strokeDasharray={lineDash && d !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
                strokeLinecap={lineRound ? "round" : ""}
              ></line>
            );
          })}
        </g>
      )}
      {lineVisible && showEndLine && (
        <g transform={horizontal ? `translate(0,${width})` : `translate(${width},0)`}>
          <line
            key={"background-line-" + 0 + "-" + 0}
            x1={horizontal ? "0" : 0}
            x2={horizontal ? height : 0}
            y1={horizontal ? 0 : "0"}
            y2={horizontal ? 0 : height}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
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
