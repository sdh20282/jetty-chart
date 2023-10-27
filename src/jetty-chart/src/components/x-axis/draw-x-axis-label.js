import { useRef } from "react";

import styles from "./x-axis-label.module.css";

/* eslint-disable complexity */
export const DrawXAxisLabel = ({
  normalSettings: { xAxis, horizontal, height, padding, xAxisInitialPosition, xAxisWidth },
  labelSettings: {
    useLabel,
    labelOnBottom,
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
  const prevXAxis = useRef({});
  const prevXAxisTemp = useRef({});

  if (!useLabel) {
    return;
  }

  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = height + totalLabelMargin;
  const prevXAxisKeys = Object.keys(prevXAxis.current);
  const ms = new Date().valueOf();

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  if (moveLable) {
    prevXAxis.current = { ...prevXAxisTemp.current };
    prevXAxisTemp.current = [];
  }

  return (
    <g
      transform={
        horizontal
          ? `translate(${labelOnBottom ? -totalLabelMargin : labelLocation},${padding})`
          : `translate(${padding},${labelOnBottom ? labelLocation : -totalLabelMargin})`
      }
    >
      {xAxis.map((d, idx) => {
        const x = xAxisWidth * idx + xAxisInitialPosition;

        // 현재 위치 정보 저장
        prevXAxisTemp.current[d] = x;

        // 라인 리렌더링을 안할 경우
        let useMove = false;
        let move = 0;

        if (moveLable) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (prevXAxisKeys.includes(String(d))) {
            move = x - prevXAxis.current[d];
            useMove = true;
          }
        }

        return (
          <g
            key={"category-" + ms + "-" + d}
            transform={horizontal ? `translate(0, ${x})` : `translate(${x})`}
            className={useAnimation ? (useMove ? styles.moveLabel : appearType === "fade" ? styles.fadeLabel : "") : ""}
            style={{
              "--animation-duration": `${useMove ? moveDuration : appearDuration}s`,
              "--animation-timing-function": useMove ? moveTimingFunction : appearType === "typing" ? "steps(3, end)" : appearTimingFunction,
              "--animation-delay": `${
                (useMove ? moveStartDelay : appearStartDelay) +
                (useMove ? moveItemDelay : appearItemDelay) * (appearStartFrom === "left" ? idx : xAxis.length - 1 - idx)
              }s`,
              "--move-from": horizontal ? `0px,${x - move}px` : `${x - move}px`,
              "--move-to": horizontal ? `0px,${x}px` : `${x}px`
            }}
          >
            {sideLineVisible && (
              <line
                x1={horizontal ? (labelOnBottom ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize) : "0"}
                x2={horizontal ? (labelOnBottom ? totalLabelMargin : -totalLabelMargin) : "0"}
                y1={horizontal ? "0" : labelOnBottom ? -totalLabelMargin + sideLineSize : totalLabelMargin - sideLineSize}
                y2={horizontal ? "0" : labelOnBottom ? -totalLabelMargin : totalLabelMargin}
                stroke={sideLineColor}
                strokeOpacity={sideLineOpacity}
                strokeWidth={sideLineWidth}
              ></line>
            )}

            <g transform={`translate(${horizontal ? 0 : labelMove},${horizontal ? -labelMove : 0}) rotate(${labelRotate})`}>
              <text
                dominantBaseline={horizontal ? "hanging" : labelOnBottom ? "hanging" : "ideographic"}
                textAnchor={
                  horizontal
                    ? labelOnBottom
                      ? "end"
                      : "start"
                    : labelRotate === 0
                    ? "middle"
                    : labelRotate < 0
                    ? labelOnBottom
                      ? "end"
                      : "start"
                    : labelOnBottom
                    ? "start"
                    : "end"
                }
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                opacity={labelOpacity}
                transform={`translate(0,-${horizontal ? labelSize / 2 : 0})`}
              >
                {d}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
};
/* eslint-enable complexity */
