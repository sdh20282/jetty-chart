import { DrawYAxisGridLine } from "../y-axis/draw-y-axis-grid-line";
import { DrawXAxisGridLine } from "../x-axis/draw-x-axis-grid-line";
import { DrawYAxisLabel } from "../y-axis/draw-y-axis-label";
import { DrawXAxisLabel } from "../x-axis/draw-x-axis-label";
import { DrawYAxisLegend } from "../y-axis/draw-y-axis-legend";
import { DrawXAxisLegend } from "../x-axis/draw-x-axis-legend";
import { DrawLegends } from "../legend/draw-legends";

const LabelValueCommon = ({
  keys,
  xAxis,
  yAxis,
  xLegend,
  yLegend,
  normalSettings: {
    width,
    height,
    backgroundColor,
    margin,
    innerMargin,
    padding,
    reverse,
    horizontal,
    totalWidth,
    totalHeight,
    xAxisInitialPosition,
    xAxisWidth,
    yAxisHeight,
    showTopScope,
    colorPalette,
  },
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  leftLegendSettings,
  rightLegendSettings,
  bottomLegendSettings,
  topLegendSettings,
  legendSettings,
  animationSettings,
  children,
}) => {
  if (horizontal) {
    yAxis.reverse();
  }

  innerMargin ??= { top: 0, bottom: 0 };

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={leftLegendSettings} />
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={rightLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={bottomLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={topLegendSettings} />
          <g
            transform={
              horizontal
                ? `translate(${reverse ? innerMargin.top : innerMargin.bottom},0)`
                : `translate(0,${reverse ? innerMargin.bottom : innerMargin.top})`
            }
          >
            {/* Y축 라인 그리기 */}
            <DrawYAxisGridLine
              normalSettings={{
                horizontal,
                yAxis,
                width: totalWidth,
                yAxisHeight,
                showTopScope,
              }}
              lineSettings={axisYGridLineSettings}
              animationSettings={animationSettings.axisYGridLineSettings}
            />
            {/* 왼쪽 라벨 그리기 */}
            <DrawYAxisLabel
              normalSettings={{
                horizontal,
                yAxis,
                width: totalWidth,
                yAxisHeight,
                showTopScope,
              }}
              labelSettings={leftLabelSettings}
              animationSettings={animationSettings.axisYLabelSettings}
            />
            {/* 오른쪽 라벨 그리기 */}
            <DrawYAxisLabel
              normalSettings={{
                horizontal,
                yAxis,
                width: totalWidth,
                yAxisHeight,
                showTopScope,
              }}
              labelSettings={rightLabelSettings}
              animationSettings={animationSettings.axisYLabelSettings}
            />
          </g>
          <g>
            {/* X축 라인 그리기 */}
            <DrawXAxisGridLine
              normalSettings={{
                xAxis,
                horizontal,
                width: totalWidth,
                height: totalHeight,
                padding,
                xAxisInitialPosition,
                xAxisWidth,
              }}
              lineSettings={axisXGridLineSettings}
              animationSettings={animationSettings.axisXGridLineSettings}
            />
            {/* 아래쪽 라벨 그리기 */}
            <DrawXAxisLabel
              normalSettings={{
                xAxis,
                horizontal,
                height: totalHeight,
                padding,
                xAxisInitialPosition,
                xAxisWidth,
              }}
              labelSettings={bottomLabelSettings}
              animationSettings={animationSettings.axisXLabelSettings}
            />
            {/* 오른쪽 라벨 그리기 */}
            <DrawXAxisLabel
              normalSettings={{
                xAxis,
                horizontal,
                height: totalHeight,
                padding,
                xAxisInitialPosition,
                xAxisWidth,
              }}
              labelSettings={topLabelSettings}
              animationSettings={animationSettings.axisXLabelSettings}
            />
          </g>
          {/* 전달 받은 자식 요소 그리기 */}
          {children}
        </g>
        {/* 설명 그리기 */}
        <DrawLegends keys={keys} normalSettings={{ width, height, margin, colorPalette }} legendSettings={legendSettings} />
      </svg>
    </div>
  );
};

export { LabelValueCommon };
