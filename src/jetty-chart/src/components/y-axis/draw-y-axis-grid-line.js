import { useRef } from "react";

import styles from "./y-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawYAxisGridLine = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound },
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
    translateTimingFunction
  }
}) => {
  const prevYAxis = useRef({});
  const prevYAxisTemp = useRef({});

  if (!lineVisible) {
    return;
  }

  const animationXAxisStart = renderStartFrom.split("-")[0];
  const animationYAxisStart = renderStartFrom.split("-")[1];
  const prevYAxisKeys = Object.keys(prevYAxis.current);
  const ms = new Date().valueOf();

  if (translateLine) {
    prevYAxis.current = { ...prevYAxisTemp.current };
    prevYAxisTemp.current = [];
  }

  console.log(yAxis);

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
        let useTranslate = false;
        let translate = 0;

        if (translateLine) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (prevYAxisKeys.includes(String(c))) {
            translate = location - prevYAxis.current[c];
            useTranslate = true;
          }
        }

        let linePath = "";

        if (lineDash) {
          let path = horizontal ? `M ${location - translate},0 ` : `M 0,${location - translate} `;
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
            M ${location - translate},0
            v ${width}
          `
            : `
            M 0,${location - translate}
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
              "--line-width": `${width}px`,
              "--line-offset": `${lineDash ? -lineDashWidth : animationXAxisStart === "left" ? width : -width}px`,
              "--animation-duration": `${useTranslate ? translateDuration : renderDuration}s`,
              "--animation-timing-function": useTranslate ? translateTimingFunction : renderTimingFunction,
              "--animation-delay": `${
                (useTranslate ? translateStartDelay : renderStartDelay) +
                (useTranslate ? translateItemDelay : renderItemDelay) *
                  ((!horizontal && animationYAxisStart === "bottom") || (horizontal && animationYAxisStart !== "bottom")
                    ? yAxis.length - 1 - idx
                    : idx)
              }s`,
              "--height-offset": horizontal ? `${translate}px` : `0px,${translate}px`
            }}
          ></path>
        );
      })}
    </g>
  );
};
/* eslint-enable complexity */
