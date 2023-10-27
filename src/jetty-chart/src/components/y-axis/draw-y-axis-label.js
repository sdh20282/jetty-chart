import { useRef } from "react";

import styles from "./y-axis-label.module.css";

/* eslint-disable complexity */
export const DrawYAxisLabel = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  labelSettings: {
    useLabel,
    labelOnLeft,
    labelMargin,
    labelSize,
    labelWeight,
    labelOpacity,
    labelColor,
    labelRotate,
    labelMove,
    sideLineSize,
    sideLineVisible,
    sideLineOpacity,
    sideLineColor,
    sideLineWidth
  },
  animationSettings: {
    useAnimation,
    appearType,
    appearDuration,
    appearStartDelay,
    appearItemDelay,
    appearTimingFunction,
    appearStartFrom,
    moveLable,
    moveDuration,
    moveStartDelay,
    moveItemDelay,
    moveTimingFunction
  }
}) => {
  const prevYAxis = useRef({});
  const prevYAxisTemp = useRef({});

  if (!useLabel) {
    return;
  }

  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = width + totalLabelMargin;
  const prevYAxisKeys = Object.keys(prevYAxis.current);
  const ms = new Date().valueOf();

  if (moveLable) {
    prevYAxis.current = { ...prevYAxisTemp.current };
    prevYAxisTemp.current = [];
  }

  return (
    <g
      transform={
        horizontal
          ? `translate(0,${labelOnLeft ? -totalLabelMargin : labelLocation})`
          : `translate(${labelOnLeft ? -totalLabelMargin : labelLocation})`
      }
    >
      {yAxis.map((c, idx) => {
        if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
          return;
        }

        const location = yAxisHeight * idx;

        // 현재 위치 정보 저장
        prevYAxisTemp.current[c] = location;

        // 라인 리렌더링을 안할 경우
        let useMove = false;
        let move = 0;

        if (moveLable) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (prevYAxisKeys.includes(String(c))) {
            move = location - prevYAxis.current[c];
            useMove = true;
          }
        }

        return (
          <g
            key={"level-" + ms + "-" + c}
            transform={horizontal ? `translate(${location - move})` : `translate(0,${location - move})`}
            className={useAnimation ? (useMove ? styles.moveLabel : appearType === "fade" ? styles.fadeLabel : "") : ""}
            style={{
              "--animation-duration": `${useMove ? moveDuration : appearDuration}s`,
              "--animation-timing-function": useMove ? moveTimingFunction : appearType === "typing" ? "steps(3, end)" : appearTimingFunction,
              "--animation-delay": `${
                (useMove ? moveStartDelay : appearStartDelay) +
                (useMove ? moveItemDelay : appearItemDelay) *
                  ((!horizontal && appearStartFrom === "bottom") || (horizontal && appearStartFrom !== "bottom") ? yAxis.length - 1 - idx : idx)
              }s`,
              "--move-from": horizontal ? `${location - move}px` : `0px,${location - move}px`,
              "--move-to": horizontal ? `${location}px` : `0px,${location}px`
            }}
          >
            <g transform={`translate(${horizontal ? labelMove : 0},${horizontal ? 0 : -labelMove}) rotate(${labelRotate})`}>
              <text
                dominantBaseline={horizontal ? (labelOnLeft ? "ideographic" : "hanging") : "hanging"}
                textAnchor={
                  horizontal
                    ? labelRotate === 0
                      ? "middle"
                      : labelRotate < 0
                      ? labelOnLeft
                        ? "start"
                        : "end"
                      : labelOnLeft
                      ? "end"
                      : "start"
                    : labelOnLeft
                    ? "end"
                    : "start"
                }
                height={labelSize}
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                opacity={labelOpacity}
                transform={`translate(0,${horizontal ? 0 : -labelSize / 2})`}
              >
                {c}
              </text>
            </g>
            {sideLineVisible && (
              <line
                x1={horizontal ? "0" : labelOnLeft ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize}
                x2={horizontal ? "0" : labelOnLeft ? totalLabelMargin : -totalLabelMargin}
                y1={horizontal ? (labelOnLeft ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize) : "0"}
                y2={horizontal ? (labelOnLeft ? totalLabelMargin : -totalLabelMargin) : "0"}
                stroke={sideLineColor}
                strokeOpacity={sideLineOpacity}
                strokeWidth={sideLineWidth}
              ></line>
            )}
          </g>
        );
      })}
    </g>
  );
};
/* eslint-enable complexity */
