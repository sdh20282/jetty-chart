import { DrawBackgroundLevel } from "../../components/level/draw-background-level";
import { DrawTextLevel } from "../../components/level/draw-text-level";
import { DrawTextCategory } from "../../components/category/draw-text-category";

const BarCommon = ({
  data,
  generalSettings: { width, height, backgroundColor, padding, chartPadding, horizontal, level },
  lineSettings: { lineVisible, lineOpacity, lineColor, lineWidth, lineDash, lineDashWidth, lineDashGap, lineRound },
  levelSettings: {
    levelTextOnLeft,
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
  },
  categorySettings: {
    categoryTextOnBottom,
    categoryTextGap,
    categoryTextSize,
    categoryTextWeight,
    categoryTextColor,
    categoryTextMargin,
    categoryLineVisible,
    categoryLineOpacity,
    categoryLineColor,
    categoryLineWidth
  },
  children
}) => {
  const chartWidth = horizontal ? height - padding.bottom - padding.top : width - padding.left - padding.right;
  const chartAreaHeight = horizontal ? width - padding.left - padding.right : height - padding.bottom - padding.top;
  const levelTextAreaLocation = chartWidth + levelTextGap;
  const chartAreaWidth = (horizontal ? height - padding.bottom - padding.top : width - padding.left - padding.right) - chartPadding - chartPadding;
  const categoryAreaLocation = chartAreaHeight + categoryTextGap;

  if (horizontal) {
    level.reverse();
  }

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${padding.left},${padding.top})`}>
          <DrawBackgroundLevel
            horizontal={horizontal}
            chartWidth={chartWidth}
            chartHeight={chartAreaHeight}
            level={level}
            lineVisible={lineVisible}
            lineOpacity={lineOpacity}
            lineColor={lineColor}
            lineWidth={lineWidth}
            lineDash={lineDash}
            lineDashWidth={lineDashWidth}
            lineDashGap={lineDashGap}
            lineRound={lineRound}
            showTopLevel={showTopLevel}
          />
          <DrawTextLevel
            horizontal={horizontal}
            chartHeight={chartAreaHeight}
            levelTextAreaLocation={levelTextAreaLocation}
            level={level}
            levelTextOnLeft={levelTextOnLeft}
            levelTextGap={levelTextGap}
            levelTextSize={levelTextSize}
            levelTextWeight={levelTextWeight}
            levelTextColor={levelTextColor}
            levelTextMargin={levelTextMargin}
            levelLineVisible={levelLineVisible}
            levelLineOpacity={levelLineOpacity}
            levelLineColor={levelLineColor}
            levelLineWidth={levelLineWidth}
            showTopLevel={showTopLevel}
          />
          <DrawTextCategory
            data={data}
            horizontal={horizontal}
            categoryAreaWidth={chartAreaWidth}
            categoryAreaLocation={categoryAreaLocation}
            categoryPadding={chartPadding}
            categoryTextOnBottom={categoryTextOnBottom}
            categoryTextGap={categoryTextGap}
            categoryTextSize={categoryTextSize}
            categoryTextWeight={categoryTextWeight}
            categoryTextColor={categoryTextColor}
            categoryTextMargin={categoryTextMargin}
            categoryLineVisible={categoryLineVisible}
            categoryLineOpacity={categoryLineOpacity}
            categoryLineColor={categoryLineColor}
            categoryLineWidth={categoryLineWidth}
          />
          {children}
        </g>
      </svg>
    </div>
  );
};

export { BarCommon };
