import { DrawYAxisGridLine } from "../../components/y-axis/draw-y-axis-grid-line";
import { DrawXAxisGridLine } from "../../components/x-axis/draw-x-axis-grid-line";
import { DrawYAxisLabel } from "../../components/y-axis/draw-y-axis-label";
import { DrawXAxisLabel } from "../../components/x-axis/draw-x-axis-label";

const BarCommon = ({
  data,
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
    showTopScope
  },
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
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
      </svg>
    </div>
  );
};

export { BarCommon };
