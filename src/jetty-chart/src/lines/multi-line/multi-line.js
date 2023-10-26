import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { BarCommon } from "../../bars/bar-common/bar-common";
import { getAutoScope, getCalculatedScope } from "../../common/utils/scope/calculate-scope";
import { getControlPoint } from "../normal-line/normal-line";

const colorPallette = [
  ["#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"],
  ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"],
  ["#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444"],
  ["#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b"],
  ["#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e"]
];

const MultiLine = ({
  dataSet,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  lineSettings
}) => {
  const result = checkNormalLine({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    lineSettings
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

  let combinedData = [];
  const idArray = [];

  dataSet.forEach((element) => {
    combinedData = combinedData.concat(element.data);
    idArray.push(element.id);
  });
  console.log(autoScope);

  const scopeResult = autoScope ? getAutoScope({ data: combinedData }) : getCalculatedScope({ maxScope, minScope });
  console.log(scopeResult);
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

  dataSet.reverse().forEach((element) => {
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

        console.log(arr, idx);
        const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree });
        const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree }, true);
        return `${acc} C ${cpsX}, ${cpsY}, ${cpeX}, ${cpeY} ${curr[0]}, ${curr[1]}`;
      }, "");
      console.log(pathString);
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
    <BarCommon
      data={dataSet[0].data}
      normalSettings={{
        ...result.normalSettings,
        scope: scopeResult.scope,
        totalWidth,
        totalHeight,
        drawWidth,
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
    >
      <g transform={horizontal ? `translate(${reverse ? "" : "-"}${totalHeight},${padding})` : `translate(${padding})`}>
        {enableArea &&
          linePathArray.map((d, idx) => {
            const lineColor = colorPallette[idx][3];
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
          const lineColor = colorPallette[idx][2];
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
      {dataSet.map((data, index) => {
        // const [pathString, areaPathString] = linePathArray[index];
        // console.log(pathString, areaPathString);
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
    </BarCommon>
  );
};

export { MultiLine };
