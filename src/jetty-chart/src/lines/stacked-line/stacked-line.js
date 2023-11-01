import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { getControlPoint } from "../../common/utils/curve/calulate-curve";
import styles from "../multi-line/multi-line.module.css";
import { useEffect, useRef } from "react";

const StackedLine = ({
  dataSet,
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
    strokeLinecap
  } = result.lineSettings;

  const colorPalette = [...result.normalSettings.colorPalette];

  const stackedData = [];

  dataSet.forEach((element, idx) => {
    if (idx === 0) {
      stackedData.push({ ...element });
      return;
    }

    const newData = element.data.map((d, i) => {
      return { ...d, value: d.value + stackedData[idx - 1].data[i].value };
    });
    stackedData.push({ ...element, data: newData });
  });

  let combinedData = [];
  const idArray = [];

  stackedData.forEach((element) => {
    combinedData = combinedData.concat(element.data);
    idArray.push(element.id);
  });

  const scopeResult = autoScope ? getAutoScope({ data: combinedData.map((d) => d.value) }) : getUserScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const dataLength = dataSet[0]?.data.length;

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

  stackedData.forEach((element) => {
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

  const linePathArray = [];
  const areaPathArray = [];

  dataSetCoords.forEach((coords) => {
    let pathString = ``;
    let areaPathString = "";

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

    if (enableArea) {
      areaPathString = horizontal
        ? `M ${zeroHeight} ${0} L` + pathString + `L ${zeroHeight} ${drawWidth}`
        : `M ${0} ${zeroHeightFromTop} L` + pathString + `L ${drawWidth} ${zeroHeightFromTop}`;
    }

    pathString = "M " + pathString;

    linePathArray.push(pathString);
    areaPathArray.push(areaPathString);
  });

  const { useAnimation, appearType, appearDuration, appearStartDelay, appearItemDelay, appearTimingFunction } = result.animationSettings.lineSettings;

  const pathRefs = dataSet.map(() => useRef());

  useEffect(() => {
    if (!pathRefs[0].current) {
      return;
    }

    pathRefs.forEach((pathRef) => {
      const pathElement = pathRef?.current;
      const pathLength = pathElement?.getTotalLength();
      pathElement?.style.setProperty(`--line-length`, `${pathLength}px`);
      pathElement?.style.setProperty(`--line-offset`, `${pathLength}px`);
    });
  }, [dataSet]);

  const debugRef = dataSet[0].data.map(() => useRef());

  const textRefs = dataSet[0].data.map(() => {
    return dataSet.map(() => useRef());
  });

  useEffect(() => {
    if (!debugRef[0].current || !enablePointLabel || !showLabelOnHover) {
      return;
    }

    debugRef.forEach((dd, idx) => {
      dd.current.addEventListener("mouseover", () => {
        textRefs[idx].forEach((el) => {
          el.current.classList.add(styles.hovered);
          el.current.style.opacity = 1;
        });
      });
      dd.current.addEventListener("mouseout", () => {
        textRefs[idx].forEach((el) => {
          el.current.classList.remove(styles.hovered);
          el.current.style.opacity = 0;
        });
      });
    });
  }, [dataSet]);

  const lineColors = [...Array(dataSet.length).keys()].map((idx) => colorPalette[idx % colorPalette.length]);

  return (
    <LabelValueCommon
      keys={keys}
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
        {enableArea &&
          areaPathArray.reverse().map((d, idx) => {
            return (
              <g key={`area-${idArray[idx]}-${idx}`}>
                <defs>
                  <mask id={`mask-stacked-${idArray[idx]}-${idx}`}>
                    <path d={d} fill={lineColors[(dataSet.length - 1 - idx) % colorPalette.length]} />
                  </mask>
                </defs>
                <rect
                  mask={`url(#mask-stacked-${idArray[idx]}-${idx})`}
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
                  fill={lineColors[dataSet.length - 1 - idx]}
                  fillOpacity={enableArea ? areaOpacity : 0}
                  style={{
                    "--line-width": `${drawWidth}px`,
                    "--line-heght": `${totalHeight}px`,
                    "--animation-duration": `${appearDuration}s`,
                    "--animation-timing-function": appearTimingFunction,
                    "--animation-delay": `${appearStartDelay + (dataSet.length - 1 - idx) * appearItemDelay}s`
                  }}
                />
              </g>
            );
          })}
        {linePathArray.map((d, idx) => {
          return (
            <path
              id={`line-stacked-${idArray[idx]}-${idx}`}
              key={`line-stacked-${idArray[idx]}-${idx}`}
              ref={pathRefs[idx]}
              d={d}
              className={useAnimation ? (appearType === "draw" ? styles.drawLine : appearType === "fade" ? styles.fadeLine : "") : ""}
              stroke={lineColors[idx % colorPalette.length]}
              strokeWidth={lineWidth}
              strokeOpacity={lineOpacity}
              strokeLinejoin={strokeLinejoin}
              strokeLinecap={strokeLinecap}
              fillOpacity={0}
              style={{
                "--animation-duration": `${appearDuration}s`,
                "--animation-timing-function": appearTimingFunction,
                "--animation-delay": `${appearStartDelay + idx * appearItemDelay}s`
              }}
            />
          );
        })}
      </g>

      {stackedData.map((data, index) => {
        return (
          <g key={`g-${data.id}-${index}`} transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
            {data.data.map((d, idx) => {
              const nowData = { ...d };

              if (reverse) {
                nowData.value = -nowData.value;
              }

              const center = pointGapWidth * idx;
              const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

              return (
                <g
                  key={"data-" + nowData.label + "-" + idx}
                  className={useAnimation ? (appearType === "draw" ? styles.drawPoint : appearType === "fade" ? styles.fadeLine : "") : ""}
                  transform={
                    horizontal
                      ? `translate(${zeroHeight + height},${center - halfAreaWidth})`
                      : `translate(${center - halfAreaWidth},${totalHeight - height - zeroHeight})`
                  }
                  style={{
                    "--pos-x": `${horizontal ? zeroHeight + height : center - halfAreaWidth}px`,
                    "--pos-y": `${horizontal ? center - halfAreaWidth : totalHeight - height - zeroHeight}px`,
                    "--start-x-offset": `${horizontal ? zeroHeight + height - 10 : center - halfAreaWidth}px`,
                    "--start-y-offset": `${horizontal ? center - halfAreaWidth : totalHeight - height - zeroHeight - 10}px`,
                    "--animation-duration": `${appearDuration}s`,
                    "--animation-timing-function": appearTimingFunction,
                    "--animation-delay": `${appearStartDelay + index * appearItemDelay + (idx * appearItemDelay) / dataLength}s`
                  }}
                >
                  {enablePoint && (
                    <circle
                      cx={horizontal ? 0 : halfAreaWidth}
                      cy={horizontal ? halfAreaWidth : 0}
                      r={pointSize}
                      fill={lineColors[index % colorPalette.length]}
                      stroke={pointBorderColor}
                      strokeWidth={pointBorderWidth}
                    />
                  )}
                  {enablePointLabel && (
                    <text
                      ref={textRefs[idx][index]}
                      transform={
                        horizontal
                          ? `translate(${pointLabelOffsetX},${halfAreaWidth + pointLabelOffsetY})`
                          : `translate(${halfAreaWidth + pointLabelOffsetX},${pointLabelOffsetY})`
                      }
                      opacity={0}
                      dominantBaseline={"alphabetic"}
                      textAnchor="middle"
                      fontSize={pointLabelSize}
                      fontWeight={pointLabelWeight}
                      fill={pointLabelColor}
                      className={`${styles.pointLabel}`}
                    >
                      {d.value}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
      {stackedData[0]?.data?.map((d, idx) => {
        return (
          <rect
            key={`debug-${d.label}-${idx}`}
            className={styles.debug}
            ref={debugRef[idx]}
            x={0}
            y={0}
            width={horizontal ? totalHeight : pointGapWidth}
            height={horizontal ? pointGapWidth : totalHeight}
            opacity={0.1}
            fill={"#f0f"}
            strokeWidth={0}
            transform={
              horizontal
                ? `translate(${0},${pointGapWidth * idx - pointGapWidth / 2 + padding})`
                : `translate(${pointGapWidth * idx - pointGapWidth / 2 + padding},${0})`
            }
          />
        );
      })}
    </LabelValueCommon>
  );
};

StackedLine.__isStatic = true;
export { StackedLine };
