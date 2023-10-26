import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { getControlPoint } from "../normal-line/normal-line";

const colorPallette = [
  ["#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"],
  ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"],
  ["#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444"],
  ["#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b"],
  ["#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e"]
];

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
    // pointColor,
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

  // /*데이터 셋마다 순회하는데
  //   - 첫번째 데이터셋은 그냥 자기값
  //   - 두번째 데이터셋은 처음값 + 자기값
  //   - 세번째 데이터셋은 두번째값 + 자기값

  //   새로 나온 데이터 셋을 기준으로 범위 정하고 그리기 시작

  //   물어볼 것 - 데이터 셋마다 데이터 개수, 점 찍기를 인덱스 기준으로 하고 있는데 이름 기준으로 해야하나

  //   쌓이는 순서는 사용자 영역인지

  //   라벨이 같은 데이터는 더해서 합쳐야 하는지

  // */
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

  stackedData.reverse().forEach((element) => {
    const coords = element.data.map((element, idx) => {
      const nowData = { ...element };

      if (reverse) {
        nowData.value = -nowData.value;
      }

      const center = pointGapWidth * idx;
      const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

      if (horizontal) {
        return [totalHeight + height - zeroHeight, center];
      }

      return [center, totalHeight - height - zeroHeight];
    });
    dataSetCoords.push(coords);
  });

  const linePathArray = [];

  dataSetCoords.forEach((coords) => {
    let pathString = ``;
    let areaPathString = "";

    if (enableCurve) {
      pathString = coords.reduce((acc, curr, idx, arr) => {
        const isFirstPoint = idx === 0;

        if (isFirstPoint) return acc + `${curr[0]},${curr[1]}`;

        const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree });
        const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree }, true);
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
        ? `M ${zeroHeightFromTop} ${0} L` + pathString + `L ${zeroHeightFromTop} ${drawWidth}`
        : `M ${0} ${zeroHeightFromTop} L` + pathString + `L ${drawWidth} ${zeroHeightFromTop}`;
    }

    pathString = "M " + pathString;

    linePathArray.push([pathString, areaPathString]);
  });

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
      <g transform={horizontal ? `translate(${reverse ? "" : "-"}${totalHeight},${padding})` : `translate(${padding})`}>
        {enableArea &&
          linePathArray.map((d, idx) => {
            const lineColor = colorPallette[idx][2];
            return (
              <path
                key={`area-${idArray[idx]}-idx`}
                d={d[1]}
                fill={lineColor}
                strokeLinejoin={strokeLinejoin}
                strokeLinecap={strokeLinecap}
                fillOpacity={enableArea ? areaOpacity : 0}
              />
            );
          })}
        {linePathArray.map((d, idx) => {
          const lineColor = colorPallette[idx][4];
          return (
            <path
              key={`line-${idArray[idx]}-idx`}
              d={d[0]}
              stroke={lineColor}
              strokeWidth={lineWidth}
              strokeOpacity={lineOpacity}
              strokeLinejoin={strokeLinejoin}
              strokeLinecap={strokeLinecap}
              fillOpacity={0}
            />
          );
        })}
      </g>

      {stackedData.map((data, index) => {
        const lineColor = colorPallette[index][4];
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
                      fill={lineColor}
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
        );
      })}
    </LabelValueCommon>
  );
};

export { StackedLine };
