import { useCallback, useRef } from "react";

import styles from "./x-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawXAxisGridLine = ({
  normalSettings: { xAxis, horizontal, width, height, padding, xAxisInitialPosition, xAxisWidth },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound, showEndLine },
  animationSettings: {
    useAnimation,
    renderType,
    renderDuration,
    renderStartDelay,
    renderItemDelay,
    renderTimingFunction,
    renderStartFrom,
    translateLine,
    translateDuration,
    translateStartDelay,
    translateItemDelay,
    translateTimingFunction,
  },
}) => {
  const prevXAxis = useRef({});
  const prevXAxisTemp = useRef({});

  const getPath = useCallback(
    ({ location, translate }) => {
      let linePath = "";

      if (lineDash) {
        let path = horizontal ? `M 0,${location - (useAnimation ? translate : 0)} ` : `M ${location - (useAnimation ? translate : 0)},0 `;
        let pathLength = 0;

        while (pathLength < height) {
          if (pathLength + lineDashWidth + lineDashGap <= height) {
            path += horizontal ? `h ${lineDashWidth} m ${lineDashGap} 0 ` : `v ${lineDashWidth} m 0 ${lineDashGap} `;
          } else if (pathLength + lineDashWidth <= height) {
            path += horizontal ? `h ${lineDashWidth}` : `v ${lineDashWidth}`;
          } else {
            path += horizontal ? `h ${height - pathLength}` : `v ${height - pathLength}`;
          }

          pathLength += lineDashWidth + lineDashGap;
        }

        linePath = path;
      } else {
        linePath = horizontal
          ? `
        M 0,${location - (useAnimation ? translate : 0)}
        h ${height}
      `
          : `
        M ${location - (useAnimation ? translate : 0)},0
        v ${height}
      `;
      }

      return linePath;
    },
    [horizontal, height, lineDashWidth, lineDashGap]
  );

  if (!lineVisible) {
    return;
  }

  const animationXAxisStart = renderStartFrom.split("-")[0];
  const animationYAxisStart = renderStartFrom.split("-")[1];
  const ms = new Date().valueOf();

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  if (translateLine) {
    prevXAxis.current = { ...prevXAxisTemp.current };
    prevXAxisTemp.current = [];
  }

  return (
    <g className={styles.container}>
      {showEndLine && (
        <g transform={horizontal ? `translate(0,0)` : `translate(0,0)`}>
          <path
            key={"background-line-x-" + 0 + "-" + 0}
            d={getPath({ location: 0, translate: 0 })}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
            className={useAnimation ? (renderType === "draw" ? styles.drawLine : renderType === "fade" ? styles.fadeLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                lineDash
                  ? -lineDashWidth
                  : (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                  ? -height
                  : height
              }px`,
              "--animation-duration": `${renderDuration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${renderStartDelay + renderItemDelay * (animationXAxisStart === "left" ? 0 : xAxis.length + 1)}s`,
            }}
          ></path>
        </g>
      )}
      {
        <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding},0)`}>
          {xAxis.map((d, idx) => {
            const x = xAxisWidth * idx + xAxisInitialPosition;

            const nowKey = `x-axis-grid-line-${idx}`;

            // 현재 위치 정보 저장
            prevXAxisTemp.current[nowKey] = x;

            // 라인 리렌더링을 안할 경우
            let useTranslate = false;
            let translate = 0;

            if (translateLine) {
              // 이전 위치에 현재 위치가 포함되는지 확인
              if (Object.keys(prevXAxis.current).includes(nowKey)) {
                translate = x - prevXAxis.current[nowKey];
                useTranslate = true;
              }
            }

            const linePath = getPath({ location: x, translate });

            return (
              <path
                key={"x-axis-grid-line-x-" + ms + "-" + idx}
                d={linePath}
                stroke={lineColor}
                strokeOpacity={lineOpacity}
                strokeWidth={lineWidth}
                strokeLinecap={lineRound ? "round" : ""}
                className={
                  useAnimation
                    ? useTranslate
                      ? styles.translateLine
                      : renderType === "draw"
                      ? styles.drawLine
                      : renderType === "fade"
                      ? styles.fadeLine
                      : ""
                    : ""
                }
                style={{
                  "--line-width": `${height}px`,
                  "--line-offset": `${
                    lineDash
                      ? -lineDashWidth
                      : (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                      ? -height
                      : height
                  }px`,
                  "--animation-duration": `${useTranslate ? translateDuration : renderDuration}s`,
                  "--animation-timing-function": useTranslate ? translateTimingFunction : renderTimingFunction,
                  "--animation-delay": `${
                    (useTranslate ? translateStartDelay : renderStartDelay) +
                    (useTranslate ? translateItemDelay : renderItemDelay) * (animationXAxisStart === "left" ? idx : xAxis.length - 1 - idx) +
                    (showEndLine && !useTranslate ? renderItemDelay : 0)
                  }s`,
                  "--width-offset": horizontal ? `0px,${translate}px` : `${translate}px`,
                }}
              ></path>
            );
          })}
        </g>
      }
      {showEndLine && (
        <g transform={horizontal ? `translate(0,${width})` : `translate(${width},0)`}>
          <path
            key={"background-line-x-" + 0 + "-" + 0}
            d={getPath({ location: 0, translate: 0 })}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeDasharray={lineDash ? `${lineDashWidth},${lineDashGap}` : 0}
            strokeLinecap={lineRound ? "round" : ""}
            className={useAnimation ? (renderType === "draw" ? styles.drawLine : renderType === "fade" ? styles.fadeLine : "") : ""}
            style={{
              "--line-width": `${height}px`,
              "--line-offset": `${
                lineDash
                  ? -lineDashWidth
                  : (!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                  ? -height
                  : height
              }px`,
              "--animation-duration": `${renderDuration}s`,
              "--animation-timing-function": "ease",
              "--animation-delay": `${renderStartDelay + renderItemDelay * (animationXAxisStart === "left" ? xAxis.length + 1 : 0)}s`,
            }}
          ></path>
        </g>
      )}
    </g>
  );
};
/* eslint-enable complexity */
