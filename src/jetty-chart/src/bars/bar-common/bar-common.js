import { DrawBackgroundLevel } from "../../common/utils/level/draw-background-level";
import { DrawTextLevel } from "../../common/utils/level/draw-text-level";
import { DrawTextCategory } from "../../common/utils/category/draw-text-category";

const BarCommon = ({
  data,
  generalSettings: { width, height, backgroundColor, padding },
  levelSettings: {
    level,
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
  },
  categorySettings: {
    categoryPadding,
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
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.bottom - padding.top;
  const categoryAreaWidth = width - padding.left - padding.right - categoryPadding - categoryPadding;
  const categoryAreaLocation = chartHeight + parseInt(categoryTextGap, 10);

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${padding.left},${padding.top})`}>
          <DrawBackgroundLevel
            chartWidth={chartWidth}
            chartHeight={chartHeight}
            level={level}
            lineVisible={lineVisible}
            lineOpacity={lineOpacity}
            lineColor={lineColor}
            lineWidth={lineWidth}
            showTopLevel={showTopLevel}
          />
          <DrawTextLevel
            chartHeight={chartHeight}
            level={level}
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
            categoryAreaWidth={categoryAreaWidth}
            categoryAreaLocation={categoryAreaLocation}
            categoryPadding={categoryPadding}
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
