import { BarCommon } from "../bar-common/bar-common";

import { getLevelAutoScope, getLevelCalculatedScope } from "../../common/utils/level/calculate-level";
import { checkPadding, checkBarBorderRadius } from "../../common/utils/check-exception";

const NormalBar = ({
  data,
  generalSettings: { width = 500, height = 300, backgroundColor = "#ffffff", padding = { top: 30, bottom: 50, left: 80, right: 130 } },
  levelSettings: {
    lineVisible = true,
    lineOpacity = 1,
    lineColor = "#c4c4c4",
    lineWidth = 1,
    levelAutoScope = true,
    levelMaxScope = 100,
    levelMinScope = 0,
    levelTextGap = 10,
    levelTextSize = 11,
    levelTextWeight = 400,
    levelTextColor = "#777",
    levelTextMargin = 3,
    levelLineVisible = true,
    levelLineOpacity = 1,
    levelLineColor = "#aaa",
    levelLineWidth = 2,
    showTopLevel = true
  },
  barSettings: {
    chartPadding = 5,
    barColor = "#8EA3BC",
    barGap = 0.2,
    barOnlyUpperRadus = true,
    barBorderRadius = 0,
    categoryTextGap = 14,
    categoryTextSize = 11,
    categoryTextWeight = 500,
    categoryTextColor = "#777",
    categoryTextMargin = 8,
    categoryLineVisible = true,
    categoryLineOpacity = 1,
    categoryLineColor = "#aaa",
    categoryLineWidth = 2
  }
}) => {
  padding = checkPadding({ padding });

  const levelResult = levelAutoScope ? getLevelAutoScope({ data }) : getLevelCalculatedScope({ maxScope: levelMaxScope, minScope: levelMinScope });

  const chartAreaWidth = parseInt(width - padding.left - padding.right - chartPadding - chartPadding, 10);
  const chartAreaHeight = parseInt(height - padding.bottom - padding.top, 10);
  const halfAreaWidth = chartAreaWidth / data.length / 2;
  const halfWidth = halfAreaWidth - barGap * halfAreaWidth;
  const lineGap = chartAreaHeight / (levelResult.level.length - 1);

  const zeroLocation =
    levelResult.level.reduce((acc, cur) => {
      if (cur < 0) {
        acc += 1;
      }

      return acc;
    }, 0) * lineGap;

  console.log(data);

  return (
    <BarCommon
      data={data}
      generalSettings={{
        width,
        height,
        backgroundColor,
        padding: { top: padding.top, bottom: padding.bottom, left: padding.left, right: padding.right }
      }}
      levelSettings={{
        level: levelResult.level,
        lineVisible,
        lineOpacity,
        lineColor,
        lineWidth,
        levelTextGap,
        levelTextSize,
        levelTextWeight,
        levelTextColor,
        levelTextMargin,
        levelLineVisible,
        levelLineOpacity,
        levelLineColor,
        levelLineWidth,
        showTopLevel
      }}
      categorySettings={{
        categoryPadding: chartPadding,
        categoryTextGap,
        categoryTextSize,
        categoryTextWeight,
        categoryTextColor,
        categoryTextMargin,
        categoryLineVisible,
        categoryLineOpacity,
        categoryLineColor,
        categoryLineWidth
      }}
    >
      <g transform={`translate(${chartPadding})`}>
        {data.map((d, idx) => {
          const x = (chartAreaWidth / data.length) * idx + chartAreaWidth / data.length / 2;
          // const y = lineGap * (zeroIndex - idx);
          const height = (Math.abs(d.value) / (levelResult.maxScope - levelResult.minScope)) * chartAreaHeight;
          const realHeight = height >= barBorderRadius ? height - barBorderRadius : 0;

          barBorderRadius = checkBarBorderRadius({ halfWidth, borderRadius: barBorderRadius });

          return (
            <g key={"data-" + d.label + "-" + idx} transform={`translate(${x - halfWidth},${chartAreaHeight - height - zeroLocation})`}>
              {barOnlyUpperRadus && barBorderRadius !== "0" ? (
                <path
                  d={
                    d.value >= 0
                      ? `
                  M 0,${height}
                  l 0,-${realHeight}
                  q 0,-${barBorderRadius} ${barBorderRadius},-${barBorderRadius}
                  h ${halfWidth + halfWidth - barBorderRadius - barBorderRadius}
                  q ${barBorderRadius},0 ${barBorderRadius},${barBorderRadius}
                  l 0,${realHeight}
                  z`
                      : `
                  M 0,${height}
                  l 0,${realHeight}
                  q 0,${barBorderRadius} ${barBorderRadius},${barBorderRadius}
                  h ${halfWidth + halfWidth - barBorderRadius - barBorderRadius}
                  q ${barBorderRadius},0 ${barBorderRadius},-${barBorderRadius}
                  l 0,-${realHeight}
                  z`
                  }
                  fill={barColor}
                />
              ) : (
                <rect width={halfWidth + halfWidth} height={height} fill={barColor} rx={barBorderRadius} ry={barBorderRadius}></rect>
              )}
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalBar };
