/* eslint-disable complexity */
import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import styles from "./normal-line.module.css";
import { useEffect, useRef } from "react";
import { getControlPoint } from "../../common/utils/curve/calulate-curve";

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
  animationSettings,
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
    animationSettings,
  });

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;

  const { autoScope, maxScope, minScope, showTopScope } = result.scopeSettings;

  const {
    lineColor,
    lineOpacity,
    lineWidth,
    enablePoint,
    pointColor,
    pointSize,
    pointBorderColor,
    pointBorderWidth,
    enablePointLabel,
    showLabelOnHover,
    pointLabelColor,
    pointLabelSize,
    pointLabelOffsetX,
    pointLabelOffsetY,
    pointLabelWeight,
    enableArea,
    areaColor,
    areaOpacity,
    enableCurve,
    smoothDegree,
    angleDegree,
    strokeLinejoin,
    strokeLinecap,
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
  let lastPoint = "";

  if (enableCurve) {
    pathString = coords.reduce((acc, curr, idx, arr) => {
      const isFirstPoint = idx === 0;

      if (isFirstPoint) return acc + `${curr[0]},${curr[1]}`;

      const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree, isEndControlPoint: false });

      const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree, isEndControlPoint: true });

      if (idx === arr.length - 1) {
        lastPoint = `C  ${curr[0]} ${curr[1]} ${curr[0]} ${curr[1]} ${curr[0]} ${curr[1]}`;
      }

      return `${acc} C ${cpsX}, ${cpsY}, ${cpeX}, ${cpeY} ${curr[0]}, ${curr[1]}`;
    }, "");
  } else {
    pathString = coords.reduce((acc, curr, idx) => {
      const isFirstPoint = idx === 0;

      let tempPath = "";

      if (!isFirstPoint) tempPath += ` L`;

      tempPath += ` ${curr[0]} ${curr[1]}`;
      if (idx === data.length - 1) lastPoint = `L ${curr[0]} ${curr[1]}`;
      return acc + tempPath;
    }, "");
  }

  const zeroHeightFromTop = totalHeight - zeroHeight;
  const startZeroPoint = horizontal ? `M ${zeroHeight} ${0} L` : `M ${0} ${zeroHeightFromTop} L`;
  const endZeroPoint = horizontal ? `L ${zeroHeight} ${drawWidth}` : `L ${drawWidth} ${zeroHeightFromTop}`;
  const areaPathString = startZeroPoint + pathString + endZeroPoint;

  const {
    useAnimation,
    renderType,
    renderDuration,
    renderStartDelay,
    renderItemDelay,
    renderTimingFunction,
    translateLine,
    translateDuration,
    translateStartDelay,
    translateTimingFunction,
  } = result.animationSettings.lineSettings;

  const prevPath = useRef({});
  const nowPath = useRef({});
  const pathRef = useRef();
  if (useAnimation) {
    prevPath.current = { ...nowPath.current };
    nowPath.current = {};
  }

  const useSmooth = useAnimation && translateLine && prevPath.current.d !== undefined;
  let prevPathString = (prevPath.current.d ??= "");

  nowPath.current = {
    d: pathString,
    lastPoint,
    startZeroPoint,
    endZeroPoint,
  };

  const prevPoints = useRef({});
  const prevPointTemp = useRef({});

  if (useAnimation) {
    prevPoints.current = { ...prevPointTemp.current };
  }
  const pointPosition = [];

  data.forEach((d, idx) => {
    const nowData = { ...d };

    if (reverse) {
      nowData.value = -nowData.value;
    }

    const positionX = pointGapWidth * idx;

    const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

    pointPosition.push({
      x: positionX,
      y: totalHeight - height - zeroHeight,
      horizontalX: zeroHeight + height,
      horizontalY: positionX,
      animationDelay: renderStartDelay + (idx * renderItemDelay) / data.length,
      value: d.value,
    });
  });

  prevPointTemp.current = { ...pointPosition };
  const ms = new Date().valueOf();

  const diffLength = data.length - Object.keys(prevPoints.current).length;
  if (diffLength > 0) {
    for (let i = 0; i < diffLength; i++) {
      prevPathString += prevPath.current.lastPoint;
    }
  } else if (diffLength < 0) {
    for (let i = 0; i < -diffLength; i++) {
      pathString += lastPoint;
    }
  }

  useEffect(() => {
    if (!pathRef.current) {
      return;
    }

    const pathElement = pathRef.current;
    const pathLength = pathElement?.getTotalLength();

    pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
    pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
  }, [data]);

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
        showTopScope,
        colorPalette: [lineColor],
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
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`} className={styles.g}>
        {enableArea && (
          <g key={`area-normal-${ms}`}>
            <defs>
              <mask id={`mask-normal-${ms}`}>
                <path
                  className={useSmooth ? `${styles.moveLine}` : ""}
                  d={areaPathString}
                  fill={areaColor}
                  strokeLinejoin={strokeLinejoin}
                  strokeLinecap={strokeLinecap}
                  // fillOpacity={enableArea ? areaOpacity : 0}
                  style={{
                    "--prev-path": `"${prevPath.current.startZeroPoint + prevPathString + prevPath.current.endZeroPoint}"`,
                    "--curr-path": `"${startZeroPoint + pathString + endZeroPoint}"`,
                    "--animation-duration": `${useSmooth ? translateDuration : renderDuration}s`,
                    "--animation-timing-function": useSmooth ? translateTimingFunction : renderTimingFunction,
                    "--animation-delay": `${useSmooth ? translateStartDelay : renderStartDelay}s`,
                  }}
                />
              </mask>
            </defs>
            <rect
              mask={`url(#mask-normal-${ms}`}
              x={0}
              y={0}
              rx={0}
              ry={0}
              width={horizontal ? totalHeight : 0}
              height={horizontal ? 0 : totalHeight}
              className={
                useSmooth
                  ? styles.moveArea
                  : useAnimation
                  ? renderType === "draw"
                    ? horizontal
                      ? styles.drawAreaHoriziontal
                      : styles.drawArea
                    : renderType === "fade"
                    ? styles.fadeArea
                    : ""
                  : ""
              }
              fill={areaColor}
              fillOpacity={enableArea ? areaOpacity : 0}
              style={{
                "--line-width": `${drawWidth}px`,
                "--line-heght": `${totalHeight}px`,
                "--animation-duration": `${renderDuration}s`,
                "--animation-timing-function": renderTimingFunction,
                "--animation-delay": `${renderStartDelay}s`,
              }}
            />
          </g>
        )}
        <path
          key={`path-normal=${ms}`}
          ref={pathRef}
          className={
            useSmooth
              ? `${styles.moveLine}`
              : useAnimation
              ? renderType === "draw"
                ? `${styles.drawLine}`
                : renderType === "fade"
                ? styles.fadeLine
                : ""
              : ""
          }
          stroke={lineColor}
          d={"M " + pathString}
          strokeWidth={lineWidth}
          strokeOpacity={lineOpacity}
          strokeLinejoin={strokeLinejoin}
          strokeLinecap={strokeLinecap}
          fillOpacity={0}
          style={{
            "--prev-path": `"${"M " + prevPathString}"`,
            "--curr-path": `"${"M " + pathString}"`,
            "--animation-duration": `${useSmooth ? translateDuration : renderDuration}s`,
            "--animation-timing-function": useSmooth ? translateTimingFunction : renderTimingFunction,
            "--animation-delay": `${useSmooth ? translateStartDelay : renderStartDelay}s`,
          }}
        />
        {pointPosition.map((d, idx) => {
          let startXoffset = useSmooth
            ? horizontal
              ? prevPoints.current[idx]?.horizontalX
              : prevPoints.current[idx]?.x
            : horizontal
            ? d.horizontalX
            : d.x;
          let startYoffset = useSmooth
            ? horizontal
              ? prevPoints.current[idx]?.horizontalY
              : prevPoints.current[idx]?.y
            : horizontal
            ? d.horizontalY
            : d.y;
          if (useAnimation) {
            let lastPos = prevPoints.current[Object.keys(prevPoints.current).length - 1];
            startXoffset ??= horizontal ? lastPos.horizontalX : lastPos.x;
            startYoffset ??= horizontal ? lastPos.horizontalY : lastPos.y;
          }
          return (
            <g
              key={"point-normal-" + ms + idx}
              className={
                useSmooth
                  ? styles.movePoint
                  : useAnimation
                  ? renderType === "draw"
                    ? styles.drawPoint
                    : renderType === "fade"
                    ? styles.fadeLine
                    : ""
                  : ""
              }
              transform={horizontal ? `translate(${d.horizontalX},${d.x + padding})` : `translate(${d.horizontalY + padding},${d.y})`}
              style={{
                "--pos-x": `${horizontal ? d.horizontalX : d.x}px`,
                "--pos-y": `${horizontal ? d.horizontalY : d.y}px`,
                "--start-x-offset": `${startXoffset}px`,
                "--start-y-offset": `${startYoffset}px`,
                "--animation-duration": `${useSmooth ? translateDuration : renderDuration * 0.1}s`,
                "--animation-timing-function": useSmooth ? translateTimingFunction : renderTimingFunction,
                "--animation-delay": `${useSmooth ? translateStartDelay : ((renderDuration * 0.9) / (data.length - 1)) * idx}s`,
              }}
            >
              {enablePoint && <circle cx={0} cy={0} r={pointSize} fill={pointColor} stroke={pointBorderColor} strokeWidth={pointBorderWidth} />}
            </g>
          );
        })}

        {enablePointLabel &&
          pointPosition.map((d, index) => {
            return (
              <g key={`debug-${index}`} className={styles.debug}>
                <text
                  key={`text-normal-${index}`}
                  transform={
                    horizontal
                      ? `translate(${pointLabelOffsetX + d.horizontalX},${halfAreaWidth + pointLabelOffsetY + d.horizontalY})`
                      : `translate(${pointLabelOffsetX + d.x},${pointLabelOffsetY + d.y})`
                  }
                  opacity={1}
                  dominantBaseline={"alphabetic"}
                  textAnchor="middle"
                  style={{
                    position: "relative",
                    transform: horizontal
                      ? `translate(${pointLabelOffsetX + d.horizontalX},${halfAreaWidth + pointLabelOffsetY + d.horizontalY})`
                      : `translate(${pointLabelOffsetX + d.x},${pointLabelOffsetY + d.y})`,
                  }}
                  fontSize={pointLabelSize}
                  fontWeight={pointLabelWeight}
                  color={pointLabelColor}
                >
                  {d.value}
                </text>

                <rect
                  x={0}
                  y={0}
                  width={horizontal ? totalHeight : pointGapWidth}
                  height={horizontal ? pointGapWidth : totalHeight}
                  strokeWidth={0}
                  opacity={0}
                  transform={
                    horizontal
                      ? `translate(${0},${pointGapWidth * index - pointGapWidth / 2 + padding})`
                      : `translate(${pointGapWidth * index - pointGapWidth / 2 + padding},${0})`
                  }
                  onMouseEnter={
                    showLabelOnHover
                      ? (event) => {
                          event.currentTarget.parentElement.style.opacity = 1;
                        }
                      : null
                  }
                  onMouseLeave={
                    showLabelOnHover
                      ? (event) => {
                          event.currentTarget.parentElement.style.opacity = 0;
                        }
                      : null
                  }
                />
              </g>
            );
          })}
      </g>
    </LabelValueCommon>
  );
};

export { NormalLine };
