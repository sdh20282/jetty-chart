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
  const prevYAxis = useRef({});
  const prevYAxisTemp = useRef({});

  if (!useLabel) {
    return;
  }

  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = width + totalLabelMargin;
  const ms = new Date().valueOf();

  if (translateLabel) {
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
      className={styles.container}
    >
      {yAxis.map((c, idx) => {
        if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
          return;
        }

        const location = yAxisHeight * idx;

        const nowKey = `y-axis-label-${c}`

        // 현재 위치 정보 저장
        prevYAxisTemp.current[nowKey] = location;

        // 라인 리렌더링을 안할 경우
        let useTranslate = false;
        let translate = 0;

        if (translateLabel) {
          // 이전 위치에 현재 위치가 포함되는지 확인
          if (Object.keys(prevYAxis.current).includes(nowKey)) {
            translate = location - prevYAxis.current[nowKey];
            useTranslate = true;
          }
        }

        return (
          <g
            key={"level-" + ms + "-" + c}
            transform={horizontal ? `translate(${location - translate})` : `translate(0,${location - translate})`}
            className={useAnimation ? (useTranslate ? styles.translateLabel : renderType === "fade" ? styles.fadeLabel : "") : ""}
            style={{
              "--animation-duration": `${useTranslate ? translateDuration : renderDuration}s`,
              "--animation-timing-function": useTranslate
                ? translateTimingFunction
                : renderType === "typing"
                ? "steps(3, end)"
                : renderTimingFunction,
              "--animation-delay": `${
                (useTranslate ? translateStartDelay : renderStartDelay) +
                (useTranslate ? translateItemDelay : renderItemDelay) *
                  ((!horizontal && renderStartFrom === "bottom") || (horizontal && renderStartFrom !== "bottom") ? yAxis.length - 1 - idx : idx)
              }s`,
              "--translate-from": horizontal ? `${location - translate}px` : `0px,${location - translate}px`,
              "--translate-to": horizontal ? `${location}px` : `0px,${location}px`,
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
