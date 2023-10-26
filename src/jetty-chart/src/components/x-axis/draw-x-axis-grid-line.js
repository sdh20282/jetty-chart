import styles from "./x-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawXAxisGridLine = ({
  normalSettings: { xAxis, horizontal, width, height, padding, xAxisInitialPosition, xAxisWidth },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound, showEndLine },
  animationSettings: { useAnimation, type, duration, startDelay, itemDelay, startFrom }
}) => {
  const animationXAxisStart = startFrom.split("-")[0];
  const animationYAxisStart = startFrom.split("-")[1];

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  console.log(startDelay + itemDelay * (animationXAxisStart === "left" ? xAxis.length + 1 : 0));

  return (
    <g>
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
            className={useAnimation ? (type === "draw" ? styles.drawLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
              }px`,
              "--animation-duration": `${duration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${startDelay + itemDelay * (animationXAxisStart === "left" ? 0 : xAxis.length + 1)}s`
            }}
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
                className={useAnimation ? (type === "draw" ? styles.drawLine : "") : ""}
                style={{
                  "--line-width": `${height}px`,
                  "--line-offset": `${
                    (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
                  }px`,
                  "--animation-duration": `${duration}s`,
                  "--animation-timing-function": "ease",
                  "--animation-delay": `${
                    startDelay + itemDelay * (animationXAxisStart === "left" ? idx : xAxis.length - 1 - idx) + (showEndLine ? itemDelay : 0)
                  }s`
                }}
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
            className={useAnimation ? (type === "draw" ? styles.drawLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
              }px`,
              "--animation-duration": `${duration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${startDelay + itemDelay * (animationXAxisStart === "left" ? xAxis.length + 1 : 0)}s`
            }}
          ></line>
        </g>
      )}
    </g>
  );
};
/* eslint-enable complexity */
