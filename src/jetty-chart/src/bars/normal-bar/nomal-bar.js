import { BarCommon } from "../bar-common/bar-common";

import { getValueLevel } from "../../common/utils/value-level";
import { checkPadding } from "../../common/utils/check-exception";

const NormalBar = ({
  data,
  generalSettings: { width = "500", height = "300", backgroundColor = "#ffffff", padding = { top: "30", bottom: "50", left: "80", right: "130" } },
  levelSettings: {
    lineVisible = true,
    lineOpacity = "1",
    lineColor = "#c4c4c4",
    lineWidth = "1",
    levelTextGap = "10",
    levelTextSize = "11",
    levelTextWeight = "400",
    levelTextColor = "#777",
    levelTextMargin = "3",
    levelLineVisible = true,
    levelLineOpacity = "1",
    levelLineColor = "#aaa",
    levelLineWidth = "2",
    showTopLevel = true
  },
  barSettings: {
    chartPadding = "5",
    barColor = "#8EA3BC",
    barGap = "0.2",
    categoryTextGap = "14",
    categoryTextSize = "11",
    categoryTextWeight = "500",
    categoryTextColor = "#777",
    categoryTextMargin = "8",
    categoryLineVisible = true,
    categoryLineOpacity = "1",
    categoryLineColor = "#aaa",
    categoryLineWidth = "2"
  }
}) => {
  padding = checkPadding({ padding });

  const levelResult = getValueLevel({ data, height });

  const chartAreaWidth = width - padding.left - padding.right - chartPadding - chartPadding;
  const chartAreaHeight = height - padding.bottom - padding.top;

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
          const halfAreaWidth = chartAreaWidth / data.length / 2;
          const halfWidth = halfAreaWidth - barGap * halfAreaWidth;
          const height = ((d.value * levelResult.scale) / levelResult.maxScope) * chartAreaHeight;

          return (
            <g key={"data-" + d.label + "-" + idx} transform={`translate(${x - halfWidth},${chartAreaHeight - height})`}>
              <rect width={halfWidth + halfWidth} height={height} fill={barColor}></rect>
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalBar };
