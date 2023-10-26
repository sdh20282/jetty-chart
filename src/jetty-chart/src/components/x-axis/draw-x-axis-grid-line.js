import { useRef } from "react";

import styles from "./x-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawXAxisGridLine = ({
  normalSettings: { xAxis, horizontal, width, height, padding, xAxisInitialPosition, xAxisWidth },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound, showEndLine },
  animationSettings: {
    useAnimation,
    appearType,
    appearDuration,
    appearStartDelay,
    appearItemDelay,
    appearStartFrom,
    moveLine,
    moveDuration,
    moveStartDelay,
    moveItemDelay
  }
}) => {
  const prevXAxis = useRef({});
  const prevXAxisTemp = useRef({});

  const animationXAxisStart = appearStartFrom.split("-")[0];
  const animationYAxisStart = appearStartFrom.split("-")[1];
  const prevXAxisKeys = Object.keys(prevXAxis.current);
  const ms = new Date().valueOf();

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  if (moveLine) {
    prevXAxis.current = { ...prevXAxisTemp.current };
    prevXAxisTemp.current = [];
  }

  return (
    <g>
      {lineVisible && showEndLine && (
        <g transform={horizontal ? `translate(0,0)` : `translate(0,0)`}>
          <line
            key={"background-line-x-" + 0 + "-" + 0}
            x1={horizontal ? "0" : 0}
            x2={horizontal ? height : 0}
            y1={horizontal ? 0 : "0"}
            y2={horizontal ? 0 : height}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
            className={useAnimation ? (appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
              }px`,
              "--animation-duration": `${appearDuration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${appearStartDelay + appearItemDelay * (animationXAxisStart === "left" ? 0 : xAxis.length + 1)}s`
            }}
          ></line>
        </g>
      )}
      {lineVisible && (
        <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding},0)`}>
          {xAxis.map((d, idx) => {
            const x = xAxisWidth * idx + xAxisInitialPosition;

            // 현재 위치 정보 저장
            prevXAxisTemp.current[d] = x;

            // 라인 리렌더링을 안할 경우
            let useMove = false;
            let move = 0;

            if (moveLine) {
              // 이전 위치에 현재 위치가 포함되는지 확인
              if (prevXAxisKeys.includes(String(d))) {
                move = x - prevXAxis.current[d];
                useMove = true;
              }
            }

            return (
              <line
                key={"background-line-x-" + ms + "-" + d}
                x1={horizontal ? "0" : x - (useMove && useAnimation ? move : 0)}
                x2={horizontal ? height : x - (useMove && useAnimation ? move : 0)}
                y1={horizontal ? x - (useMove && useAnimation ? move : 0) : "0"}
                y2={horizontal ? x - (useMove && useAnimation ? move : 0) : height}
                stroke={lineColor}
                strokeOpacity={lineOpacity}
                strokeWidth={lineWidth}
                strokeDasharray={lineDash && d !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
                strokeLinecap={lineRound ? "round" : ""}
                className={
                  useAnimation
                    ? useMove
                      ? styles.moveLine
                      : appearType === "draw"
                      ? styles.drawLine
                      : appearType === "fade"
                      ? styles.fadeLine
                      : ""
                    : ""
                }
                style={{
                  "--line-width": `${height}px`,
                  "--line-offset": `${
                    (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
                  }px`,
                  "--animation-duration": `${useMove ? moveDuration : appearDuration}s`,
                  "--animation-timing-function": "ease",
                  "--animation-delay": `${
                    (useMove ? moveStartDelay : appearStartDelay) +
                    (useMove
                      ? 0
                      : (useMove ? moveItemDelay : appearItemDelay) * (animationXAxisStart === "left" ? idx : xAxis.length - 1 - idx) +
                        (showEndLine && !useMove ? appearItemDelay : 0))
                  }s`,
                  "--width-offset": horizontal ? `0px,${move}px` : `${move}px`
                }}
              ></line>
            );
          })}
        </g>
      )}
      {lineVisible && showEndLine && (
        <g transform={horizontal ? `translate(0,${width})` : `translate(${width},0)`}>
          <line
            key={"background-line-x-" + 0 + "-" + 0}
            x1={horizontal ? "0" : 0}
            x2={horizontal ? height : 0}
            y1={horizontal ? 0 : "0"}
            y2={horizontal ? 0 : height}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
            className={useAnimation ? (appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom") ? -height : height
              }px`,
              "--animation-duration": `${appearDuration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${appearStartDelay + appearItemDelay * (animationXAxisStart === "left" ? xAxis.length + 1 : 0)}s`
            }}
          ></line>
        </g>
      )}
    </g>
  );
};
/* eslint-enable complexity */
