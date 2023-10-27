import { DrawYAxisGridLine } from "../y-axis/draw-y-axis-grid-line";
import { DrawXAxisGridLine } from "../x-axis/draw-x-axis-grid-line";
import { DrawYAxisLabel } from "../y-axis/draw-y-axis-label";
import { DrawXAxisLabel } from "../x-axis/draw-x-axis-label";

const ScatterCommon = ({
  data,
  normalSettings: {
    width,
    height,
    backgroundColor,
    margin,
    padding,
    horizontal,
    xScope,
    yScope,
    totalWidth,
    totalHeight,
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
    yScope.reverse();
    xScope.reverse();
    console.log(data);
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
              horizontal,
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
              horizontal,
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
              horizontal,
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
              horizontal,
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
              horizontal,
              height: totalHeight,
              padding,
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

export { ScatterCommon };
