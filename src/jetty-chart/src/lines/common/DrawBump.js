import { useEffect, useRef } from "react";

import { checkNormalBump } from "../../common/line-common/exception/check-bump-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

import styles from "./bump.module.css";

const DrawBump = ({
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
  const pathRefs = useRef([]);

  useEffect(() => {
    pathRefs.current?.forEach((pathElement) => {
      const pathLength = pathElement?.getTotalLength();
      pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
      pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
    });
    pathRefs.current = [];
  }, [pathRefs.current]);

  let dataSet = data;

  if (!dataSet || dataSet.length === 0) {
    dataSet =  [];
  }

  const result = checkNormalBump({
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
  result.normalSettings.padding += result.lineSettings.xOuterPadding;

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;
  const { showTopScope } = result.scopeSettings;
  const {
    lineOpacity,
    lineWidth,
    enablePoint,
    pointSize,
    pointColor,
    pointColorFollowLineColor,
    pointBorderColorFollowLineColor,
    pointBorderColor,
    pointBorderWidth,
    enableCurve,
    strokeLinejoin,
    strokeLinecap,
    xOuterPadding,
  } = result.lineSettings;

  const colorPalette = [...result.normalSettings.colorPalette];

  let combinedData = [];
  const idArray = [];

  dataSet.forEach((element) => {
    combinedData = combinedData.concat(Object.keys(element.data).map((el) => el.value));
    idArray.push(element.id);
  });

  const scopeResult = {
    scope: [...new Array(dataSet.length)].map((_, i) => i + 1),
    maxScope: dataSet.length,
    minScope: 1,
  };

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const dataLength = dataSet[0]?.data?.length;

  const totalWidth = horizontal
    ? height - margin.bottom - margin.top
    : width - margin.left - margin.right;
  const totalHeight = horizontal
    ? width - margin.left - margin.right
    : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const pointGapWidth = drawWidth / (dataLength - 1);
  const zeroHeight = 0;

  const dataSetCoords = [];

  dataSet.forEach((element) => {
    const coords = element.data.map((element, idx) => {
      const nowData = { ...element };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const center = pointGapWidth * idx;
      const height =
        ((dataSet.length - nowData.value) / (scopeResult.maxScope - scopeResult.minScope)) *
        totalHeight;
      if (horizontal) {
        return [height, center];
      }

      return [center, totalHeight - height];
    });
    dataSetCoords.push(coords);
  });

  const linePathArray = [];
  const areaPathArray = [];

  dataSetCoords.forEach((coords) => {
    let pathString = ``;
    let areaPathString = "";

    if (enableCurve) {
      pathString = coords.reduce((acc, curr, idx, arr) => {
        const isFirstPoint = idx === 0;

        if (isFirstPoint) {
          return acc + `${curr[0] - xOuterPadding},${curr[1]} L ${curr[0]},${curr[1]}`;
        }

        const midX = (arr[idx - 1][0] + curr[0]) / 2;

        const [cpsX, cpsY] = [midX, arr[idx - 1][1]];
        const [cpeX, cpeY] = [midX, curr[1]];
        return `${acc} C ${cpsX}, ${cpsY}, ${cpeX}, ${cpeY} ${curr[0]}, ${curr[1]}`;
      }, "");
    } else {
      pathString = coords.reduce((acc, curr, idx) => {
        const isFirstPoint = idx === 0;

        if (isFirstPoint) return ` ${curr[0] - xOuterPadding} ${curr[1]} L ${curr[0]} ${curr[1]}`;

        return acc + ` L ${curr[0]} ${curr[1]}`;
      }, "");
    }

    pathString =
      "M " +
      pathString +
      `L ${coords[coords.length - 1][0] + xOuterPadding},${coords[coords.length - 1][1]}`;

    linePathArray.push(pathString);
    areaPathArray.push(areaPathString);
  });

  const {
    useAnimation,
    appearType,
    appearDuration,
    appearStartDelay,
    appearItemDelay,
    appearTimingFunction,
  } = result.animationSettings.lineSettings;

  const pointPosition = Array.from({ length: dataLength }, () => []);

  dataSet.forEach((data, index) => {
    data.data.forEach((d, idx) => {
      const nowData = { ...d };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const positionX = pointGapWidth * idx;

      const height =
        ((dataSet.length - nowData.value) / (scopeResult.maxScope - scopeResult.minScope)) *
        totalHeight;

      pointPosition[idx].push({
        x: positionX,
        y: totalHeight - height - zeroHeight,
        horizontalX: zeroHeight + height,
        horizontalY: positionX,
        animationDelay:
          appearStartDelay + index * appearItemDelay + (idx * appearDuration) / dataLength,
        value: d.value,
      });
    });
  });

  const lineColors = [...Array(dataSet.length).keys()].map(
    (idx) => colorPalette[idx % colorPalette.length]
  );

  const ms = new Date().valueOf();

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
      <g
        transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}
        className={styles.container}
      >
        {linePathArray.map((d, idx) => {
          return (
            <path
              key={`line-multi-${ms}-${idx}`}
              ref={(el) => {
                pathRefs.current[idx] = el;
              }}
              d={d}
              className={
                useAnimation
                  ? appearType === "draw"
                    ? styles.drawLine
                    : appearType === "fade"
                    ? styles.fadeLine
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
                "--animation-duration": `${appearDuration}s`,
                "--animation-timing-function": appearTimingFunction,
                "--animation-delay": `${appearStartDelay + idx * appearItemDelay}s`,
              }}
            />
          );
        })}
      </g>
      {enablePoint &&
        pointPosition.map((data, index) => {
          return (
            <g
              key={`g-${ms}-${index}`}
              transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}
            >
              {data.map((d, idx) => {
                return (
                  <g
                    key={"point-multi-" + idx}
                    className={
                      useAnimation
                        ? appearType === "draw"
                          ? styles.drawPoint
                          : appearType === "fade"
                          ? styles.fadeLine
                          : ""
                        : ""
                    }
                    transform={
                      horizontal
                        ? `translate(${d.horizontalX},${d.x})`
                        : `translate(${d.horizontalY},${d.y})`
                    }
                    style={{
                      "--pos-x": `${horizontal ? d.horizontalX : d.x}px`,
                      "--pos-y": `${horizontal ? d.horizontalY : d.y}px`,
                      "--start-x-offset": `${horizontal ? d.horizontalX : d.x}px`,
                      "--start-y-offset": `${horizontal ? d.horizontalY : d.y}px`,
                      "--animation-duration": `${appearDuration / (dataLength - 1)}s`,
                      "--animation-timing-function": appearTimingFunction,
                      "--animation-delay": `${d.animationDelay}s`,
                    }}
                  >
                    <circle
                      cx={0}
                      cy={0}
                      r={pointSize}
                      fill={pointColorFollowLineColor ? lineColors[idx] : pointColor}
                      stroke={pointBorderColorFollowLineColor ? lineColors[idx] : pointBorderColor}
                      strokeWidth={pointBorderWidth}
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
    </LabelValueCommon>
  );
};

export { DrawBump };
