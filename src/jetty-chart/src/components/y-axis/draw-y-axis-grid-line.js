import styles from "./y-axis-grid-line.module.css";

export const DrawYAxisGridLine = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound },
  animationSettings: { useAnimation, duration, startDelay, itemDelay, startFrom }
}) => {
  const animationXAxisStart = startFrom.split("-")[0];
  const animationYAxisStart = startFrom.split("-")[1];

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
              className={useAnimation ? styles.drawLine : ""}
              style={{
                "--line-width": `${width}px`,
                "--line-offset": `${animationXAxisStart === "left" ? width : -width}px`,
                "--animation-duration": `${duration}s`,
                "--animation-timing-function": "ease",
                "--animation-delay": `${
                  startDelay +
                  itemDelay *
                    ((!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                      ? yAxis.length - 1 - idx
                      : idx)
                }s`
              }}
            ></line>
          );
        })}
      </g>
    )
  );
};
