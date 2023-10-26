import { useRef } from "react";
import styles from "./y-axis-grid-line.module.css";

/* eslint-disable complexity */
export const DrawYAxisGridLine = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound },
  animationSettings: { useAnimation, type, duration, startDelay, itemDelay, startFrom }
}) => {
  const prevYAxis = useRef({});
  const prevYAxisTemp = useRef({});
  const animationXAxisStart = startFrom.split("-")[0];
  const animationYAxisStart = startFrom.split("-")[1];

  const prevYAxisKeys = Object.keys(prevYAxis.current);

  console.log(prevYAxisKeys);

  return (
    lineVisible && (
      <g>
        {yAxis.map((c, idx) => {
          if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
            return;
          }

          // 현재 위치 계산
          const location = yAxisHeight * idx;

          // 현재 위치 정보 저장
          prevYAxisTemp.current[c] = location;

          if (idx === yAxis.length - 1) {
            prevYAxis.current = { ...prevYAxisTemp.current };
            prevYAxisTemp.current = [];
          }

          // 이전 위치에 현재 위치가 포함되는지 확인
          console.log(prevYAxisKeys.includes(String(c)), String(c));

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
              className={useAnimation ? (type === "draw" ? styles.drawLine : type === "fade" ? styles.fadeLine : "") : ""}
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
/* eslint-enable complexity */
