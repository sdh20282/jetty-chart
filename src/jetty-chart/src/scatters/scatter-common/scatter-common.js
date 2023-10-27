import { DrawYAxisGridLine } from "../y-axis/draw-y-axis-grid-line";
import { DrawXAxisGridLine } from "../x-axis/draw-x-axis-grid-line";
import { DrawYAxisLabel } from "../y-axis/draw-y-axis-label";
import { DrawXAxisLabel } from "../x-axis/draw-x-axis-label";
import { DrawXAxisLegend } from "../x-axis/draw-x-axis-legend";
import { DrawYAxisLegend } from "../y-axis/draw-y-axis-legend";
import { DrawLegends } from "../legend/draw-legends";

const ScatterCommon = ({
  normalSettings: {
    width,
    height,
    backgroundColor,
    margin,
    padding,
    xScope,
    yScope,
    totalWidth,
    totalHeight,
    xAxisWidth,
    yAxisHeight,
    showTopScope,
    colorPalette
  },
  xLegend,
  yLegend,
  keys,
  legendSettings,
  leftLegendSettings,
  rightLegendSettings,
  bottomLegendSettings,
  topLegendSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  children
}) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight }} legendSettings={leftLegendSettings} />
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight }} legendSettings={rightLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight }} legendSettings={bottomLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight }} legendSettings={topLegendSettings} />
          {/* Y축 라인 그리기 */}
          <DrawYAxisGridLine
            normalSettings={{
              yAxis: yScope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            lineSettings={axisYGridLineSettings}
          />
          {/* X축 라인 그리기 */}
          <DrawXAxisGridLine
            normalSettings={{
              xAxis: xScope,
              height: totalHeight,
              xAxisWidth,
              showTopScope
            }}
            lineSettings={axisXGridLineSettings}
          />
          {/* 왼쪽 라벨 그리기 */}
          <DrawYAxisLabel
            normalSettings={{
              yAxis: yScope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            labelSettings={leftLabelSettings}
          />
          {/* 오른쪽 라벨 그리기 */}
          <DrawYAxisLabel
            normalSettings={{
              yAxis: yScope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            labelSettings={rightLabelSettings}
          />
          {/* 아래쪽 라벨 그리기 */}
          <DrawXAxisLabel
            normalSettings={{
              xAxis: xScope,
              height: totalHeight,
              padding,
              xAxisWidth
            }}
            labelSettings={bottomLabelSettings}
          />
          {/* 위쪽 라벨 그리기 */}
          <DrawXAxisLabel
            normalSettings={{
              xAxis: xScope,
              height: totalHeight,
              padding,
              xAxisWidth
            }}
            labelSettings={topLabelSettings}
          />
          {/* 전달 받은 자식 요소 그리기 */}
          {children}
          {/* 설명 그리기 */}
          <DrawLegends keys={keys} normalSettings={{ width, height, margin, colorPalette }} legendSettings={legendSettings} />
        </g>
      </svg>
    </div>
  );
};

export { ScatterCommon };
