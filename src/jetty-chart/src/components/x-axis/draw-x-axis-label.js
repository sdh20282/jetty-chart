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
    sideLineWidth,
  },
  animationSettings: {
    useAnimation,
    renderType,
    renderDuration,
    renderStartDelay,
    renderItemDelay,
    renderTimingFunction,
    renderStartFrom,
    translateLabel,
    translateDuration,
    translateStartDelay,
    translateItemDelay,
    translateTimingFunction,
  },
}) => {
  const prevXAxis = useRef({});
  const prevXAxisTemp = useRef({});

  if (!useLabel) {
    return;
  }

  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = height + totalLabelMargin;
  const ms = new Date().valueOf();

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  if (translateLabel) {
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

        const nowKey = `x-axis-label-${idx}`;

        // 현재 위치 정보 저장
        prevXAxisTemp.current[nowKey] = x;

        // 라인 리렌더링을 안할 경우
        let useTranlate = false;
        let translate = 0;

        if (translateLabel) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (Object.keys(prevXAxis.current).includes(nowKey)) {
            translate = x - prevXAxis.current[nowKey];
            useTranlate = true;
          }
        }

        return (
          <g
            key={"category-" + ms + "-" + idx}
            transform={horizontal ? `translate(0, ${x})` : `translate(${x})`}
            className={useAnimation ? (useTranlate ? styles.translateLabel : renderType === "fade" ? styles.fadeLabel : "") : ""}
            style={{
              "--animation-duration": `${useTranlate ? translateDuration : renderDuration}s`,
              "--animation-timing-function": useTranlate ? translateTimingFunction : renderType === "typing" ? "steps(3, end)" : renderTimingFunction,
              "--animation-delay": `${
                (useTranlate ? translateStartDelay : renderStartDelay) +
                (useTranlate ? translateItemDelay : renderItemDelay) * (renderStartFrom === "left" ? idx : xAxis.length - 1 - idx)
              }s`,
              "--translate-from": horizontal ? `0px,${x - translate}px` : `${x - translate}px`,
              "--translate-to": horizontal ? `0px,${x}px` : `${x}px`,
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
