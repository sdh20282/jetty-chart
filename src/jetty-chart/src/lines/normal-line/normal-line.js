/* eslint-disable complexity */
import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import styles from "./normal-line.module.css";
import { useEffect } from "react";

export const getOpposedLine = (pointA, pointB, angleDegree) => {
  const xLength = pointB[0] - pointA[0];
  const yLength = pointB[1] - pointA[1];

  const zLength = Math.sqrt(xLength ** 2 + yLength ** 2);
  const angle = Math.atan2(yLength, xLength) * angleDegree;

  return { length: zLength, angle };
};

export const getControlPoint = (prev, curr, next, options) => {
  const p = prev || curr;
  const n = next || curr;

  const o = getOpposedLine(p, n, options.angleDegree);

  const angle = o.angle + (options.isEndControlPoint ? Math.PI : 0);
  const length = o.length * options.smoothDegree;

  const x = curr[0] + Math.cos(angle) * length;
  const y = curr[1] + Math.sin(angle) * length;

  return [x, y];
};

const NormalLine = ({
  data,
  keys,
  xLegend,
  yLegend,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  leftLegendSettings,
  rightLegendSettings,
  legendSettings,
  lineSettings,
  animationSettings
}) => {
  if (!data || data.length === 0) {
    return;
  }

  const result = checkNormalLine({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    leftLegendSettings,
    rightLegendSettings,
    legendSettings,
    lineSettings,
    animationSettings
  });

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;

  const { autoScope, maxScope, minScope, showTopScope } = result.scopeSettings;

  const {
    lineOpacity,
    lineWidth,
    enablePoint,
    pointSize,
    pointBorderColor,
    pointBorderWidth,
    enablePointLabel,
    pointLabelColor,
    pointLabelSize,
    pointLabelOffsetX,
    pointLabelOffsetY,
    pointLabelWeight,
    enableArea,
    areaOpacity,
    enableCurve,
    smoothDegree,
    angleDegree,
    strokeLinejoin,
    strokeLinecap
  } = result.lineSettings;

  const scopeResult = autoScope ? getAutoScope({ data: data.map((d) => d.value) }) : getUserScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const areaWidth = drawWidth / data.length;
  const pointGapWidth = drawWidth / (data.length - 1);

  const halfAreaWidth = areaWidth / 2;

  const zeroHeight =
    scopeResult.scope.reduce((acc, cur) => {
      if (cur !== 0) {
        acc += 1;
      }

      if (cur === 0) {
        acc = 0;
      }

      return acc;
    }, 0) * lineHeight;

  const coords = data.map((element, idx) => {
    const nowData = { ...element };

    if (reverse) {
      nowData.value = -nowData.value;
    }

    const center = pointGapWidth * idx;
    const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

    if (horizontal) {
      return [zeroHeight + height, center];
    }

    return [center, totalHeight - height - zeroHeight];
  });

  let pathString = ``;
  let areaPathString = "";
  console.log(coords);
  if (enableCurve) {
    pathString = coords.reduce((acc, curr, idx, arr) => {
      const isFirstPoint = idx === 0;

      if (isFirstPoint) return acc + `${curr[0]},${curr[1]}`;

      const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree, isEndControlPoint: false });
      const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree, isEndControlPoint: true });
      return `${acc} C ${cpsX}, ${cpsY}, ${cpeX}, ${cpeY} ${curr[0]}, ${curr[1]}`;
    }, "");
  } else {
    pathString = coords.reduce((acc, curr, idx) => {
      const isFirstPoint = idx === 0;

      let tempPath = "";

      if (!isFirstPoint) tempPath += ` L`;

      tempPath += ` ${curr[0]} ${curr[1]}`;
      return acc + tempPath;
    }, "");
  }

  const zeroHeightFromTop = totalHeight - zeroHeight;

  if (enableArea) {
    areaPathString = horizontal
      ? `M ${zeroHeight} ${0} L` + pathString + `L ${zeroHeight} ${drawWidth}`
      : `M ${0} ${zeroHeightFromTop} L` + pathString + `L ${drawWidth} ${zeroHeightFromTop}`;
  }

  pathString = "M " + pathString;

  const { useAnimation, appearType, appearDuration, appearStartDelay, appearTimingFunction } = result.animationSettings.lineSettings;

  useEffect(() => {
    const pathElement = document.getElementById(`line-path`);
    const pathLength = pathElement?.getTotalLength();
    pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
    pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
  }, [pathString]);

  const ms = new Date().valueOf();

  return (
    <LabelValueCommon
      keys={keys}
      xAxis={data.map((d) => d.label)}
      yAxis={scopeResult.scope}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={{
        ...result.normalSettings,
        totalWidth,
        totalHeight,
        xAxisInitialPosition: 0,
        xAxisWidth: pointGapWidth,
        yAxisHeight: lineHeight,
        showTopScope
      }}
      axisXGridLineSettings={result.axisXGridLineSettings}
      axisYGridLineSettings={result.axisYGridLineSettings}
      leftLabelSettings={result.leftLabelSettings}
      rightLabelSettings={result.rightLabelSettings}
      bottomLabelSettings={result.bottomLabelSettings}
      topLabelSettings={result.topLabelSettings}
      leftLegendSettings={result.leftLegendSettings}
      rightLegendSettings={result.rightLegendSettings}
      bottomLegendSettings={result.bottomLegendSettings}
      topLegendSettings={result.topLegendSettings}
      legendSettings={result.legendSettings}
      animationSettings={result.animationSettings}
    >
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
        {enableArea && (
          <g>
            <defs>
              <mask id={`mask-normal-${ms}`}>
                <path
                  d={areaPathString}
                  fill={result.normalSettings.colorPalette[0]}
                  strokeLinejoin={strokeLinejoin}
                  strokeLinecap={strokeLinecap}
                  fillOpacity={enableArea ? areaOpacity : 0}
                />
              </mask>
            </defs>
            <rect
              mask={`url(#mask-normal-${ms}`}
              x={horizontal ? 0 : totalWidth}
              y={horizontal ? 0 : totalHeight}
              rx="0"
              ry="0"
              width={totalHeight}
              height={totalHeight}
              className={
                useAnimation
                  ? appearType === "draw"
                    ? horizontal
                      ? styles.drawAreaHoriziontal
                      : styles.drawArea
                    : appearType === "fade"
                    ? styles.fadeArea
                    : ""
                  : ""
              }
              fill={result.normalSettings.colorPalette[0]}
              fillOpacity={enableArea ? areaOpacity : 0}
              style={{
                "--line-width": `${drawWidth}px`,
                "--line-heght": `${totalHeight}px`,
                "--animation-duration": `${appearDuration}s`,
                "--animation-timing-function": appearTimingFunction,
                "--animation-delay": `${appearStartDelay}s`
              }}
            />
          </g>
        )}
        <path
          id="line-path"
          className={useAnimation ? (appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""}
          d={pathString}
          stroke={result.normalSettings.colorPalette[0]}
          strokeWidth={lineWidth}
          strokeOpacity={lineOpacity}
          strokeLinejoin={strokeLinejoin}
          strokeLinecap={strokeLinecap}
          fillOpacity={0}
          style={{
            "--animation-duration": `${appearDuration}s`,
            "--animation-timing-function": appearTimingFunction,
            "--animation-delay": `${appearStartDelay}s`
          }}
        />
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const center = pointGapWidth * idx;
          const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

          return (
            <g
              key={"data-" + nowData.label + "-" + idx}
              transform={
                horizontal
                  ? `translate(${zeroHeight + height},${center - halfAreaWidth})`
                  : `translate(${center - halfAreaWidth},${totalHeight - height - zeroHeight})`
              }
            >
              {enablePoint && (
                <circle
                  cx={horizontal ? 0 : halfAreaWidth}
                  cy={horizontal ? halfAreaWidth : 0}
                  r={pointSize}
                  fill={result.normalSettings.colorPalette[0]}
                  stroke={pointBorderColor}
                  strokeWidth={pointBorderWidth}
                />
              )}
              {enablePointLabel && (
                <text
                  transform={
                    horizontal
                      ? `translate(${pointLabelOffsetX},${pointLabelOffsetY})`
                      : `translate(${halfAreaWidth + pointLabelOffsetX},${pointLabelOffsetY})`
                  }
                  dominantBaseline={"alphabetic"}
                  textAnchor="middle"
                  fontSize={pointLabelSize}
                  fontWeight={pointLabelWeight}
                  fill={pointLabelColor}
                >
                  {d.value}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </LabelValueCommon>
  );
};

export { NormalLine };
