import { checkNormalBump } from "../../common/line-common/exception/check-bump-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

import styles from "./bump.module.css";
import { useEffect, useRef } from "react";

const BumpChart = ({
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
  // 데이터 셋으로 랭킹 재정의
  // 왼쪽에 랭킹 숫자 전부 표시
  // 라벨 붙이지 말고 선 연장해서 선 끝에 표시

  // console.log(dataSet);

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
    // enablePointLabel,
    // showLabelOnHover,
    // pointLabelColor,
    // pointLabelSize,
    // pointLabelOffsetX,
    // pointLabelOffsetY,
    // pointLabelWeight,
    enableArea,
    areaOpacity,
    enableCurve,
    strokeLinejoin,
    strokeLinecap,
    // xPadding,
    xOuterPadding,
    // yOuterPadding,
    // activeLineWidth,
    // inactiveLineWidth,
    // activeOpacity,
    // inactiveOpacity,
    // startLabel,
  } = result.lineSettings;

  const colorPalette = [...result.normalSettings.colorPalette];

  // console.log(xPadding, xOuterPadding, yOuterPadding, activeLineWidth, inactiveLineWidth, activeOpacity, inactiveOpacity, startLabel);

  let combinedData = [];
  const idArray = [];

  dataSet.forEach((element) => {
    combinedData = combinedData.concat(Object.keys(element.data).map((el) => el.value));
    idArray.push(element.id);
  });

  const scopeResult = { scope: [...new Array(dataSet.length)].map((_, i) => i + 1), maxScope: dataSet.length, minScope: 1 };
  if (reverse) {
    scopeResult.scope.reverse();
  }

  const dataLength = dataSet[0]?.data?.length;

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const pointGapWidth = drawWidth / (dataLength - 1);
  const zeroHeight = 0;

  const zeroHeightFromTop = totalHeight - zeroHeight;

  const dataSetCoords = [];

  dataSet.forEach((element) => {
    const coords = element.data.map((element, idx) => {
      const nowData = { ...element };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const center = pointGapWidth * idx;
      const height = ((dataSet.length - nowData.value) / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;
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

        if (isFirstPoint) return acc + `${curr[0] - xOuterPadding},${curr[1]} L ${curr[0]},${curr[1]}`;
        // console.log(getControlPoint.length, smoothDegree, angleDegree);

        // const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree, isEndControlPoint: false });
        // const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree, isEndControlPoint: true });

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

    if (enableArea) {
      areaPathString = horizontal
        ? `M ${zeroHeight} ${0} L` + pathString + `L ${zeroHeight} ${drawWidth}`
        : `M ${0} ${zeroHeightFromTop} L` + pathString + `L ${drawWidth} ${zeroHeightFromTop}`;
    }

    pathString = "M " + pathString + `L ${coords[coords.length - 1][0] + xOuterPadding},${coords[coords.length - 1][1]}`;

    linePathArray.push(pathString);
    areaPathArray.push(areaPathString);
  });

  const { useAnimation, appearType, appearDuration, appearStartDelay, appearItemDelay, appearTimingFunction } = result.animationSettings.lineSettings;

  const pathRefs = useRef([]);

  const pointPosition = Array.from({ length: dataLength }, () => []);

  dataSet.forEach((data, index) => {
    data.data.forEach((d, idx) => {
      const nowData = { ...d };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const positionX = pointGapWidth * idx;

      const height = ((dataSet.length - nowData.value) / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

      pointPosition[idx].push({
        x: positionX,
        y: totalHeight - height - zeroHeight,
        horizontalX: zeroHeight + height,
        horizontalY: positionX,
        animationDelay: appearStartDelay + index * appearItemDelay + (idx * appearDuration) / dataLength,
        value: d.value,
      });
    });
  });

  useEffect(() => {
    pathRefs.current?.forEach((pathElement) => {
      const pathLength = pathElement?.getTotalLength();
      pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
      pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
    });
    pathRefs.current = [];
  }, [pathRefs.current]);

  const lineColors = [...Array(dataSet.length).keys()].map((idx) => colorPalette[idx % colorPalette.length]);

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
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`} className={styles.container}>
        {enableArea &&
          areaPathArray.map((d, idx) => {
            return (
              <g key={`area-multi-${idArray[idx]}-${idx}`}>
                <defs>
                  <mask id={`mask-multi-${idArray[idx]}-${idx}`}>
                    <path d={d} fill={lineColors[idx]} />
                  </mask>
                </defs>
                <rect
                  mask={`url(#mask-multi-${idArray[idx]}-${idx})`}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  width={horizontal ? totalHeight : 0}
                  height={horizontal ? 0 : totalHeight}
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
                  fill={lineColors[idx % colorPalette.length]}
                  fillOpacity={enableArea ? areaOpacity : 0}
                  style={{
                    "--line-width": `${drawWidth}px`,
                    "--line-heght": `${totalHeight}px`,
                    "--animation-duration": `${appearDuration}s`,
                    "--animation-timing-function": appearTimingFunction,
                    "--animation-delay": `${appearStartDelay + idx * appearItemDelay}s`,
                  }}
                />
              </g>
            );
          })}
        {linePathArray.map((d, idx) => {
          return (
            <path
              key={`line-multi-${ms}-${idx}`}
              ref={(el) => {
                pathRefs.current[idx] = el;
              }}
              d={d}
              className={useAnimation ? (appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""}
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
            <g key={`g-${ms}-${index}`} transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
              {data.map((d, idx) => {
                return (
                  <g
                    key={"point-multi-" + idx}
                    className={useAnimation ? (appearType === "draw" ? styles.drawPoint : appearType === "fade" ? styles.fadeLine : "") : ""}
                    transform={horizontal ? `translate(${d.horizontalX},${d.x})` : `translate(${d.horizontalY},${d.y})`}
                    style={{
                      "--pos-x": `${horizontal ? d.horizontalX : d.x}px`,
                      "--pos-y": `${horizontal ? d.horizontalY : d.y}px`,
                      "--start-x-offset": `${horizontal ? d.horizontalX : d.x}px`,
                      "--start-y-offset": `${horizontal ? d.horizontalY : d.y}px`,
                      "--animation-duration": `${appearDuration / dataLength}s`,
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

      {/* {enablePointLabel &&
        pointPosition.map((data, index) => {
          return (
            <g key={`debug-${index}`} className={styles.debug}>
              {data.map((d, idx) => {
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
                        : `translate(${pointLabelOffsetX + d.x},${pointLabelOffsetY + d.y})`
                    }}
                    fontSize={pointLabelSize}
                    fontWeight={pointLabelWeight}
                    color={pointLabelColor}
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
        })} */}
    </LabelValueCommon>
  );
};

export { BumpChart };
