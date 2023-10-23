import { DrawYAxisGridLine } from "../../components/y-axis/draw-y-axis-grid-line";
import { DrawXAxisGridLine } from "../../components/x-axis/draw-x-axis-grid-line";
import { DrawYAxisLabel } from "../../components/y-axis/draw-y-axis-label";
import { DrawXAxisLabel } from "../../components/x-axis/draw-x-axis-label";
import { DrawYAxisLegend } from "../../components/y-axis/draw-y-axis-legend";
import { DrawXAxisLegend } from "../../components/x-axis/draw-x-axis-legend";
import { DrawLegends } from "../../components/legend/draw-legends";

const BarCommon = ({
  data,
  keys,
  xLegend,
  yLegend,
  normalSettings: {
    width,
    height,
    backgroundColor,
    margin,
    padding,
    horizontal,
    scope,
    totalWidth,
    totalHeight,
    xAxisInitialPosition,
    xAxisWidth,
    yAxisHeight,
    showTopScope,
    colorPalette
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
  children
}) => {
  if (horizontal) {
    scope.reverse();
  }

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={leftLegendSettings} />
          <DrawYAxisLegend yLegend={yLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={rightLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={bottomLegendSettings} />
          <DrawXAxisLegend xLegend={xLegend} normalSettings={{ totalWidth, totalHeight, horizontal }} legendSettings={topLegendSettings} />
          {/* Y축 라인 그리기 */}
          <DrawYAxisGridLine
            normalSettings={{
              horizontal,
              yAxis: scope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            lineSettings={axisYGridLineSettings}
          />
          {/* X축 라인 그리기 */}
          <DrawXAxisGridLine
            normalSettings={{
              xAxis: data.map((d) => d.value),
              horizontal,
              width: totalWidth,
              height: totalHeight,
              padding,
              xAxisInitialPosition,
              xAxisWidth
            }}
            lineSettings={axisXGridLineSettings}
          />
          {/* 왼쪽 라벨 그리기 */}
          <DrawYAxisLabel
            normalSettings={{
              horizontal,
              yAxis: scope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            labelSettings={leftLabelSettings}
          />
          {/* 오른쪽 라벨 그리기 */}
          <DrawYAxisLabel
            normalSettings={{
              horizontal,
              yAxis: scope,
              width: totalWidth,
              yAxisHeight,
              showTopScope
            }}
            labelSettings={rightLabelSettings}
          />
          {/* 아래쪽 라벨 그리기 */}
          <DrawXAxisLabel
            normalSettings={{
              xAxis: data.map((d) => d.label),
              horizontal,
              height: totalHeight,
              padding,
              xAxisInitialPosition,
              xAxisWidth
            }}
            labelSettings={bottomLabelSettings}
          />
          {/* 오른쪽 라벨 그리기 */}
          <DrawXAxisLabel
            normalSettings={{
              xAxis: data.map((d) => d.label),
              horizontal,
              height: totalHeight,
              padding,
              xAxisInitialPosition,
              xAxisWidth
            }}
            labelSettings={topLabelSettings}
          />
          {/* 전달 받은 자식 요소 그리기 */}
          {children}
        </g>
        {/* 설명 그리기 */}
        <DrawLegends keys={keys} normalSettings={{ colorPalette }} legendSettings={legendSettings} />
      </svg>
    </div>
  );
};

export { BarCommon };
