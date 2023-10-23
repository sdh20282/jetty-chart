import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { BarCommon } from "../../bars/bar-common/bar-common";
import { getAutoScope, getCalculatedScope } from "../../common/utils/scope/calculate-scope";

const MultiLine = ({
  multiData,
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
    lineColor,
    lineWidth,
    pointSize,
    pointColor,
    pointBorderColor,
    pointBorderWidth,
    valueTextColor,
    valueTextSize,
    valueTextOffsetX,
    valueTextOffsetY,
    valueTextWeight
  } = result.lineSettings;

  let combinedData = [];

  multiData.forEach((element) => {
    combinedData = combinedData.concat(element.data);
    console.log(element);
  });
  console.log(combinedData);

  const scopeResult = autoScope ? getAutoScope({ data: multiData[0].data }) : getCalculatedScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const AreaWidth = drawWidth / multiData[0].data.length;
  const halfAreaWidth = AreaWidth / 2;
  const pointGapWidth = halfAreaWidth * 3;

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

  return (
    <BarCommon
      data={combinedData}
      normalSettings={{
        ...result.normalSettings,
        scope: scopeResult.scope,
        totalWidth,
        totalHeight,
        drawWidth,
        xAxisInitialPosition: halfAreaWidth,
        xAxisWidth: AreaWidth,
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
      {multiData.map((data, index) => {
        const dataLength = data.data.length;
        return (
          <g key={"data-" + data.id + "-" + index} transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
            {data.data.map((d, idx) => {
              const nowData = { ...d };
              const nextData = { ...data.data[idx + 1] };

              if (reverse) {
                nowData.value = -nowData.value;
                nextData.value = -nextData.value;
              }

              const center = (drawWidth / dataLength) * idx + drawWidth / dataLength / 2;
              const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

              const nextHeight = (nextData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

              const differentHeight = height - nextHeight;

              console.log(idx);
              console.log(center);
              console.log("now", nowData.value, height);
              console.log("next", nextData.value, nextHeight);

              return (
                <g
                  key={"data-" + nowData.label + "-" + idx}
                  transform={
                    horizontal
                      ? `translate(${zeroHeight + height},${center - halfAreaWidth})`
                      : `translate(${center - halfAreaWidth},${totalHeight - height - zeroHeight})`
                  }
                >
                  {!(idx === dataLength - 1) && (
                    <line
                      x1={horizontal ? 0 : halfAreaWidth}
                      y1={horizontal ? halfAreaWidth : 0}
                      x2={horizontal ? -differentHeight : pointGapWidth}
                      y2={horizontal ? pointGapWidth : differentHeight}
                      stroke={lineColor}
                      strokeWidth={lineWidth}
                      strokeLinecap={"round"}
                    />
                  )}

                  <circle
                    cx={horizontal ? 0 : halfAreaWidth}
                    cy={horizontal ? halfAreaWidth : 0}
                    r={pointSize}
                    fill={pointColor}
                    stroke={pointBorderColor}
                    strokeWidth={pointBorderWidth}
                  />
                  <text
                    transform={
                      horizontal
                        ? `translate(${valueTextOffsetX},${valueTextOffsetY})`
                        : `translate(${halfAreaWidth + valueTextOffsetX},${valueTextOffsetY})`
                    }
                    dominantBaseline={"alphabetic"}
                    textAnchor="middle"
                    fontSize={valueTextSize}
                    fontWeight={valueTextWeight}
                    fill={valueTextColor}
                  >
                    {d.value}
                  </text>
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
