import { BarCommon } from "../bar-common/bar-common";

import { checkNormalBar } from "../../common/utils/exception/check-normal-bar-exception";
import { getAutoScope, getCalculatedScope } from "../../common/utils/scope/calculate-scope";
import { checkBarBorderRadius } from "../../common/utils/exception/check-common-exception";

const NormalBar = ({
  data,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  barSettings
}) => {
  const result = checkNormalBar({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    barSettings
  });

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;
  const { autoScope, maxScope, minScope, showTopScope } = result.scopeSettings;
  const { barColor, barGap, barOnlyUpperRadius, useBarBorderRadius, barBorderRadius, useBarBorder, barBorderWidth, barBorderColor } =
    result.barSettings;

  const scopeResult = autoScope ? getAutoScope({ data }) : getCalculatedScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const barWidth = drawWidth / data.length;
  const halfBarWidth = barWidth / 2;
  const halfBarRealWidth = halfBarWidth - barGap * halfBarWidth;

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
      data={data}
      normalSettings={{
        ...result.normalSettings,
        scope: scopeResult.scope,
        totalWidth,
        totalHeight,
        drawWidth,
        xAxisInitialPosition: halfBarWidth,
        xAxisWidth: barWidth,
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
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const center = (drawWidth / data.length) * idx + drawWidth / data.length / 2;
          const barHeight = (Math.abs(nowData.value) / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;
          const barHeightWithoutRadius = barHeight >= barBorderRadius ? barHeight - barBorderRadius : barHeight;

          const borderRadius = useBarBorderRadius
            ? checkBarBorderRadius({ halfWidth: halfBarRealWidth, height: barHeightWithoutRadius, borderRadius: barBorderRadius })
            : 0;

          const barTotalWidth = halfBarRealWidth + halfBarRealWidth;
          const barWidthWithoutRadius = barTotalWidth - borderRadius - borderRadius;

          return (
            <g
              key={"data-" + nowData.label + "-" + idx}
              transform={
                horizontal
                  ? `translate(${zeroHeight},${center - halfBarRealWidth})`
                  : `translate(${center - halfBarRealWidth},${totalHeight - barHeight - zeroHeight})`
              }
            >
              {barOnlyUpperRadius && useBarBorderRadius ? (
                <path
                  d={
                    horizontal
                      ? nowData.value >= 0
                        ? `
                          M 0,0
                          h ${barHeightWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${barWidthWithoutRadius}
                          q 0,${borderRadius} -${borderRadius},${borderRadius}
                          h -${barHeightWithoutRadius}
                          v -${barTotalWidth}
                          z`
                        : `
                          M 0,0
                          h -${barHeightWithoutRadius}
                          q -${borderRadius},0 -${borderRadius},${borderRadius}
                          v ${barWidthWithoutRadius}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${barHeightWithoutRadius}
                          v -${barTotalWidth}
                          z`
                      : nowData.value >= 0
                      ? `
                          M 0,${barHeight}
                          v -${barHeightWithoutRadius}
                          q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                          h ${barWidthWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${barHeightWithoutRadius}
                          h -${barTotalWidth}
                          z`
                      : `
                          M 0,${barHeight}
                          v ${barHeightWithoutRadius}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${barWidthWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},-${borderRadius}
                          v -${barHeightWithoutRadius}
                          h -${barTotalWidth}
                          z`
                  }
                  fill={barColor}
                  stroke={useBarBorder ? barBorderColor : ""}
                  strokeWidth={useBarBorder ? barBorderWidth : "0"}
                />
              ) : (
                <rect
                  width={horizontal ? height : halfBarRealWidth + halfBarRealWidth}
                  height={horizontal ? halfBarRealWidth + halfBarRealWidth : height}
                  transform={horizontal ? `translate(${nowData.value >= 0 ? 0 : -height})` : `translate(0,${nowData.value >= 0 ? 0 : height})`}
                  fill={barColor}
                  rx={borderRadius}
                  ry={borderRadius}
                  stroke={useBarBorder ? barBorderColor : ""}
                  strokeWidth={useBarBorder ? barBorderWidth : "0"}
                ></rect>
              )}
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalBar };
