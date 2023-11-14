import { checkNormalLine } from "../../common/line-common/exception/check-line-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { getControlPoint } from "../../common/line-common/utils/calulate-curve";

import styles from "../common/line.module.css";
import { useEffect, useRef } from "react";

const MultiLine = ({
  data,
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
  const dataSet = data;
  
  if (!dataSet || dataSet.length === 0) {
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
    areaOpacity,
    enableCurve,
    smoothDegree,
    angleDegree,
    strokeLinejoin,
    strokeLinecap,
  } = result.lineSettings;

  let combinedData = [];

  const idArray = [];

  dataSet.forEach((element) => {
    combinedData = combinedData.concat(element.data);
    idArray.push(element.id);
  });

  const scopeResult = autoScope ? getAutoScope({ data: combinedData.map((d) => d.value) }) : getUserScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const dataLength = dataSet[0]?.data?.length;
  const dataSetLastIdx = dataSet.length - 1;

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const areaWidth = drawWidth / dataLength;
  const pointGapWidth = drawWidth / (dataLength - 1);

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

  const zeroHeightFromTop = totalHeight - zeroHeight;

  const dataSetCoords = [];

  dataSet.forEach((element) => {
    const coords = element.data.map((element, idx) => {
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
    dataSetCoords.push(coords);
  });

  let linePathArray = [];
  const lastPoints = [];
  const startZeroPoints = [];
  const endZeroPoints = [];

  dataSetCoords.forEach((coords) => {
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
        if (idx === coords.length - 1) lastPoint = `L ${curr[0]} ${curr[1]}`;
        if (!isFirstPoint) tempPath += ` L`;

        tempPath += ` ${curr[0]} ${curr[1]}`;
        return acc + tempPath;
      }, "");
    }

    startZeroPoints.push(horizontal ? `M ${zeroHeight} ${0} L` : `M ${0} ${zeroHeightFromTop} L`);
    endZeroPoints.push(horizontal ? `L ${zeroHeight} ${drawWidth}` : `L ${drawWidth} ${zeroHeightFromTop}`);

    linePathArray.push(pathString);
    lastPoints.push(lastPoint);
  });

  const { useAnimation, useGridAnimation, renderReverse, translateReverse } = result.animationSettings.generalSettings;

  const {
    useLineAnimation,
    lineRenderType,
    lineRenderDuration,
    lineRenderStartDelay,
    lineRenderItemDelay,
    lineRenderTimingFunction,
    translateLine,
    translateLineItemDelay,
    translateLineDuration,
    translateLineStartDelay,
    translateLineTimingFunction,
  } = result.animationSettings.lineSettings;

  const {
    usePointAnimation,
    pointRenderType,
    pointRenderDuration,
    pointLineRenderDuration,
    pointRenderStartDelay,
    pointRenderItemDelay,
    pointRenderTimingFunction,
    translatePoint,
    translatePointItemDelay,
    translatePointDuration,
    translatePointStartDelay,
    translatePointTimingFunction,
  } = result.animationSettings.pointSettings;

  const {
    useAreaAnimation,
    areaRenderType,
    areaRenderDuration,
    areaRenderStartDelay,
    areaRenderItemDelay,
    areaRenderTimingFunction,
    translateArea,
    translateAreaItemDelay,
    translateAreaDuration,
    translateAreaStartDelay,
    translateAreaTimingFunction,
  } = result.animationSettings.areaSettings;

  if (!useGridAnimation) {
    result.animationSettings.axisYGridLineSettings = { ...result.animationSettings.axisYGridLineSettings, useAnimation: useGridAnimation };
    result.animationSettings.axisXGridLineSettings = { ...result.animationSettings.axisXGridLineSettings, useAnimation: useGridAnimation };
    result.animationSettings.axisYLabelSettings = { ...result.animationSettings.axisYLabelSettings, useAnimation: useGridAnimation };
    result.animationSettings.axisXLabelSettings = { ...result.animationSettings.axisXLabelSettings, useAnimation: useGridAnimation };
  }

  const prevPath = useRef({});
  const nowPath = useRef({});
  const pathRefs = useRef([]);

  if (useAnimation) {
    prevPath.current = { ...nowPath.current };
    nowPath.current = [];
  }

  const isChanged = useAnimation && prevPath.current.dataLength != undefined;
  const useTranslateLine = translateLine && isChanged;
  const useTranslatePoint = translatePoint && isChanged;
  const useTranslateArea = translateArea && isChanged;

  nowPath.current = {
    dataLength,
    dataSetLength: dataSet.length,
    linePathArray,
    lastPoints,
    startZeroPoints,
    endZeroPoints,
  };

  const pointPosition = [];

  const prevPoints = useRef({});
  const prevPointTemp = useRef([]);

  if (useAnimation) {
    prevPoints.current = { ...prevPointTemp.current };
  }

  dataSet.forEach((data, index) => {
    data.data.forEach((d, idx) => {
      const nowData = { ...d };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const positionX = pointGapWidth * idx;

      const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

      const pos = {
        x: positionX,
        y: totalHeight - height - zeroHeight,
        horizontalX: zeroHeight + height,
        horizontalY: positionX,
        animationDelay:
          pointRenderStartDelay +
          (renderReverse ? dataSetLastIdx - index : index) * pointRenderItemDelay +
          (idx * pointLineRenderDuration) / dataLength,
        value: d.value,
      };

      pointPosition[`${idx}-${index}`] = pos;
    });
  });
  prevPointTemp.current = { ...pointPosition };

  const lineColors = [...Array(dataSet.length).keys()].map(
    (idx) => [...result.normalSettings.colorPalette][idx % result.normalSettings.colorPalette.length]
  );

  const ms = new Date().valueOf();

  const diffLength = dataLength - prevPath.current.dataLength;
  if (diffLength > 0) {
    prevPath.current.linePathArray.forEach((pathString, idx) => {
      for (let i = 0; i < diffLength; i++) {
        prevPath.current.linePathArray[idx] += prevPath.current.lastPoints[idx];
      }
    });
  } else if (diffLength < 0) {
    linePathArray = linePathArray.map((pathString, idx) => {
      let temp = pathString;
      for (let i = 0; i < -diffLength; i++) {
        temp += lastPoints[idx];
      }
      return temp;
    });
  }

  let areaPathArray = linePathArray.map((pathString, idx) => {
    return startZeroPoints[idx] + pathString + endZeroPoints[idx];
  });

  nowPath.current.areaPathArray = areaPathArray;

  useEffect(() => {
    pathRefs.current?.forEach((pathElement) => {
      const pathLength = pathElement?.getTotalLength();
      pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
      pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
    });
    pathRefs.current = [];
  }, [pathRefs.current]);
  return (
    <LabelValueCommon
      keys={idArray}
      xAxis={dataSet[0].data.map((d) => d.label)}
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
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`} className={styles.container}>
        {enableArea &&
          areaPathArray.map((d, idx) => {
            const useMove = useTranslateArea && prevPath.current.dataSetLength > idx;

            return (
              <g key={`area-multi-${ms}-${idx}`}>
                <defs>
                  <mask id={`mask-multi-${ms}-${idx}`}>
                    <path
                      className={useMove ? `${styles.moveLine}` : ""}
                      d={d}
                      fill={lineColors[idx]}
                      strokeLinejoin={strokeLinejoin}
                      strokeLinecap={strokeLinecap}
                      style={{
                        "--prev-path": `"${
                          useMove
                            ? prevPath.current?.startZeroPoints[idx] + prevPath.current?.linePathArray[idx] + prevPath.current?.endZeroPoints[idx]
                            : ""
                        }"`,
                        "--curr-path": `"${d}"`,
                        "--animation-duration": `${useMove ? translateAreaDuration : areaRenderDuration}s`,
                        "--animation-timing-function": useMove ? translateAreaTimingFunction : areaRenderTimingFunction,
                        "--animation-delay": `${
                          useMove
                            ? translateAreaStartDelay + (translateReverse ? dataSetLastIdx - idx : idx) * translateAreaItemDelay
                            : areaRenderStartDelay + (renderReverse ? dataSetLastIdx - idx : idx) * areaRenderItemDelay
                        }s`,
                      }}
                    />
                  </mask>
                </defs>
                <rect
                  mask={`url(#mask-multi-${ms}-${idx})`}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  width={width}
                  height={height}
                  className={
                    useMove
                      ? styles.moveArea
                      : useAreaAnimation && useAnimation
                      ? areaRenderType === "draw"
                        ? horizontal
                          ? styles.drawAreaHoriziontal
                          : styles.drawArea
                        : areaRenderType === "fade"
                        ? styles.fade
                        : ""
                      : ""
                  }
                  fill={lineColors[idx]}
                  fillOpacity={enableArea ? areaOpacity : 0}
                  style={{
                    "--line-width": `${totalWidth}px`,
                    "--line-heght": `${totalHeight}px`,
                    "--animation-duration": `${areaRenderDuration}s`,
                    "--animation-timing-function": areaRenderTimingFunction,
                    "--animation-delay": `${areaRenderStartDelay + (renderReverse ? dataSetLastIdx - idx : idx) * areaRenderItemDelay}s`,
                  }}
                />
              </g>
            );
          })}
        {linePathArray.map((pathString, idx) => {
          const useMove = useTranslateLine && prevPath.current.startZeroPoints.length > idx;
          return (
            <path
              key={`line-multi-${ms}-${idx}`}
              ref={(el) => {
                pathRefs.current[idx] = el;
              }}
              d={"M" + pathString}
              className={
                useMove
                  ? `${styles.moveLine}`
                  : useLineAnimation && useAnimation
                  ? lineRenderType === "draw"
                    ? `${styles.drawLine}`
                    : lineRenderType === "fade"
                    ? styles.fade
                    : ""
                  : ""
              }
              stroke={lineColors[idx]}
              strokeWidth={lineWidth}
              strokeOpacity={lineOpacity}
              strokeLinejoin={strokeLinejoin}
              strokeLinecap={strokeLinecap}
              fillOpacity={0}
              style={{
                "--prev-path": `"${useMove ? "M " + prevPath.current.linePathArray[idx] : " "}"`,
                "--curr-path": `"${"M " + pathString}"`,
                "--animation-duration": `${useMove ? translateLineDuration : lineRenderDuration}s`,
                "--animation-timing-function": useMove ? translateLineTimingFunction : lineRenderTimingFunction,
                "--animation-delay": `${
                  useMove
                    ? translateLineStartDelay + (translateReverse ? dataSetLastIdx - idx : idx) * translateLineItemDelay
                    : lineRenderStartDelay + (renderReverse ? dataSetLastIdx - idx : idx) * lineRenderItemDelay
                }s`,
              }}
            />
          );
        })}
      </g>
      {Object.keys(pointPosition).map((key) => {
        const [idx, index] = key.split("-");
        const useMove = useTranslatePoint && prevPath.current.startZeroPoints.length > index && prevPath.current.dataLength > idx;
        const d = pointPosition[key];
        let startXoffset = useMove
          ? horizontal
            ? prevPoints.current[key]?.horizontalX
            : prevPoints.current[key]?.x
          : horizontal
          ? d.horizontalX
          : d.x;
        let startYoffset = useMove
          ? horizontal
            ? prevPoints.current[key]?.horizontalY
            : prevPoints.current[key]?.y
          : horizontal
          ? d.horizontalY
          : d.y;
        if (useMove && prevPoints.current[key]) {
          let lastPos = prevPoints.current[key];
          startXoffset ??= horizontal ? lastPos.horizontalX : lastPos.x;
          startYoffset ??= horizontal ? lastPos.horizontalY : lastPos.y;
        }

        return (
          <g
            key={`point-${ms}-${index}-${idx}`}
            className={
              useMove
                ? styles.movePoint
                : usePointAnimation && useAnimation
                ? pointRenderType === "draw"
                  ? styles.drawPoint
                  : pointRenderType === "fade"
                  ? styles.fade
                  : ""
                : ""
            }
            transform={horizontal ? `translate(${d.horizontalX},${d.x + padding})` : `translate(${d.horizontalY + padding},${d.y})`}
            style={{
              "--pos-x": `${horizontal ? d.horizontalX : d.x}px`,
              "--pos-y": `${horizontal ? d.horizontalY : d.y}px`,
              "--start-x-offset": `${useMove ? startXoffset : horizontal ? d.horizontalX : d.x}px`,
              "--start-y-offset": `${useMove ? startYoffset : horizontal ? d.horizontalY : d.y}px`,
              "--animation-duration": `${useMove ? translatePointDuration : pointRenderDuration}s`,
              "--animation-timing-function": useMove ? translatePointTimingFunction : pointRenderTimingFunction,
              "--animation-delay": `${
                useMove ? translatePointStartDelay + (translateReverse ? dataSetLastIdx - index : index) * translatePointItemDelay : d.animationDelay
              }s`,
            }}
          >
            {enablePoint && (
              <circle
                cx={0}
                cy={0}
                r={pointSize}
                fill={pointColor ? pointColor : lineColors[index]}
                stroke={pointBorderColor ? pointBorderColor : lineColors[index]}
                strokeWidth={pointBorderWidth}
              />
            )}
          </g>
        );
      })}
      {enablePointLabel &&
        Array.apply(null, Array(dataLength)).map((temp, idx) => {
          return (
            <g key={`debug-${idx}`} style={{ opacity: showLabelOnHover ? 0 : 1, transition: `all 0.3s ease` }}>
              {Array.apply(null, Array(dataSet.length)).map((d, index) => {
                d = pointPosition[`${idx}-${index}`];
                return (
                  <text
                    key={`text-${d.value}-${idx}`}
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
                    fill={pointLabelColor ? pointLabelColor : lineColors[index]}
                  >
                    {d.value}
                  </text>
                );
              })}
              <rect
                x={0}
                y={0}
                width={horizontal ? totalHeight : pointGapWidth}
                height={horizontal ? pointGapWidth : totalHeight}
                strokeWidth={0}
                opacity={0}
                transform={
                  horizontal
                    ? `translate(${0},${pointGapWidth * idx - pointGapWidth / 2 + padding})`
                    : `translate(${pointGapWidth * idx - pointGapWidth / 2 + padding},${0})`
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
    </LabelValueCommon>
  );
};

export { MultiLine };
