import { useRef } from "react";

import styles from "./y-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawYAxisGridLine = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound },
  animationSettings: {
    useAnimation,
    appearType,
    appearDuration,
    appearStartDelay,
    appearItemDelay,
    appearTimingFunction,
    appearStartFrom,
    moveLine,
    moveDuration,
    moveStartDelay,
    moveItemDelay,
    moveTimingFunction
  }
}) => {
  const prevYAxis = useRef({});
  const prevYAxisTemp = useRef({});

  if (!lineVisible) {
    return;
  }

  const animationXAxisStart = appearStartFrom.split("-")[0];
  const animationYAxisStart = appearStartFrom.split("-")[1];
  const prevYAxisKeys = Object.keys(prevYAxis.current);
  const ms = new Date().valueOf();

  if (moveLine) {
    prevYAxis.current = { ...prevYAxisTemp.current };
    prevYAxisTemp.current = [];
  }

  return (
    <g>
      {yAxis.map((c, idx) => {
        if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
          return;
        }

        // 현재 위치 계산
        const location = yAxisHeight * idx;

        // 현재 위치 정보 저장
        prevYAxisTemp.current[c] = location;

        // 라인 리렌더링을 안할 경우
        let useMove = false;
        let move = 0;

        if (moveLine) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (prevYAxisKeys.includes(String(c))) {
            move = location - prevYAxis.current[c];
            useMove = true;
          }
        }

        let linePath = "";

        if (lineDash) {
          let path = horizontal ? `M ${location - move},0 ` : `M 0,${location - move} `;
          let pathLength = 0;

          while (pathLength < width) {
            if (pathLength + lineDashWidth + lineDashGap <= width) {
              path += horizontal ? `v ${lineDashWidth} m 0 ${lineDashGap} ` : `h ${lineDashWidth} m ${lineDashGap} 0 `;
            } else if (pathLength + lineDashWidth <= width) {
              path += horizontal ? `v ${lineDashWidth}` : `h ${lineDashWidth}`;
            } else {
              path += horizontal ? `v ${width - pathLength}` : `h ${width - pathLength}`;
            }

            pathLength += lineDashWidth + lineDashGap;
          }

          linePath = path;
        } else {
          linePath = horizontal
            ? `
            M ${location - move},0
            v ${width}
          `
            : `
            M 0,${location - move}
            h ${width}
          `;
        }

        return (
          <path
            key={"background-line-y-" + ms + "-" + c}
            d={linePath}
            stroke={lineColor}
            strokeOpacity={lineOpacity}
            strokeWidth={lineWidth}
            strokeLinecap={lineRound ? "round" : ""}
            className={
              useAnimation ? (useMove ? styles.moveLine : appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""
            }
            style={{
              "--line-width": `${width}px`,
              "--line-offset": `${lineDash ? -lineDashWidth : animationXAxisStart === "left" ? width : -width}px`,
              "--animation-duration": `${useMove ? moveDuration : appearDuration}s`,
              "--animation-timing-function": useMove ? moveTimingFunction : appearTimingFunction,
              "--animation-delay": `${
                (useMove ? moveStartDelay : appearStartDelay) +
                (useMove ? moveItemDelay : appearItemDelay) *
                  ((!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                    ? yAxis.length - 1 - idx
                    : idx)
              }s`,
              "--height-offset": horizontal ? `${move}px` : `0px,${move}px`
            }}
          ></path>
        );
      })}
    </g>
  );
};
/* eslint-enable complexity */
