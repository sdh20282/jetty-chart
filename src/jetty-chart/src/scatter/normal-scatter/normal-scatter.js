import { checkNormalPoint } from "../../common/scatter-common/exception/check-point-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { useState } from "react";

// X 좌표 위치 계산
function calculateXPosition(value, scopeResult, totalWidth, xReverse) {
  const { minScope, maxScope } = scopeResult;
  if (xReverse) {
    return totalWidth - ((value - minScope) / (maxScope - minScope)) * totalWidth;
  }

  return ((value - minScope) / (maxScope - minScope)) * totalWidth;
}

// Y 좌표 위치 계산
function calculateYPosition(value, scopeResult, totalHeight, yReverse) {
  const { minScope, maxScope } = scopeResult;
  if (yReverse) {
    return ((value - minScope) / (maxScope - minScope)) * totalHeight;
  }

  return totalHeight - ((value - minScope) / (maxScope - minScope)) * totalHeight;
}

function CircleWithTooltip({ x, y, xPos, yPos, group, pointSize, groupColor, pointBorderWidth }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    fontSize: "10px",
    backgroundColor: "blue",
    color: "black",
    padding: "5px",
    borderRadius: "5px",
    position: "absolute",
    top: `${yPos}px`,
    left: `${xPos}px`
  };

  return (
    <g transform={`translate(${xPos},${yPos})`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <circle cx={0} cy={0} r={pointSize} fill={groupColor} stroke={groupColor} strokeWidth={pointBorderWidth} />
      {showTooltip && <text style={tooltipStyle}>{`${group.id}, x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`}</text>}
    </g>
  );
}

const NormalScatter = ({
  data,
  normalSettings,
  scopeSettings,
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
  pointSettings,
  animationSettings
}) => {
  const result = checkNormalPoint({
    normalSettings,
    scopeSettings,
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
    pointSettings,
    animationSettings
  });

  const { width, height, margin, padding, xReverse, yReverse, colorPalette } = result.normalSettings;
  const { xAutoScope, yAutoScope, xMaxScope, xMinScope, yMaxScope, yMinScope } = result.scopeSettings;

  const xScopeResult = xAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.x)) })
    : getUserScope({ maxScope: xMaxScope, minScope: xMinScope });
  const yScopeResult = yAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.y)) })
    : getUserScope({ maxScope: yMaxScope, minScope: yMinScope });

  const { pointSize, pointBorderWidth } = result.pointSettings;

  if (!xReverse) {
    xScopeResult.scope.reverse();
  }

  if (yReverse) {
    yScopeResult.scope.reverse();
  }

  const totalWidth = width - margin.left - margin.right;
  const totalHeight = height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (yScopeResult.scope.length - 1);

  const AreaWidth = drawWidth / (xScopeResult.scope.length - 1);

  return (
    <LabelValueCommon
      data={data}
      keys={data.map((d) => d.id)}
      xAxis={xScopeResult.scope}
      yAxis={yScopeResult.scope}
      normalSettings={{
        ...result.normalSettings,
        // xScope: newGridX.scope,
        totalWidth,
        totalHeight,
        xAxisWidth: AreaWidth,
        yAxisHeight: lineHeight
      }}
      axisXGridLineSettings={result.axisXGridLineSettings}
      axisYGridLineSettings={result.axisYGridLineSettings}
      leftLabelSettings={result.leftLabelSettings}
      rightLabelSettings={result.rightLabelSettings}
      bottomLabelSettings={result.bottomLabelSettings}
      topLabelSettings={result.topLabelSettings}
      legendSettings={result.legendSettings}
      leftLegendSettings={result.leftLegendSettings}
      rightLegendSettings={result.rightLegendSettings}
      bottomLegendSettings={result.bottomLegendSettings}
      topLegendSettings={result.topLegendSettings}
      animationSettings={result.animationSettings}
    >
      <g transform={`translate(${padding})`}>
        {data.flatMap((group, groupIdx) => {
          // 그룹에 색상 할당
          const groupColor = colorPalette[groupIdx % colorPalette.length];
          setTimeout(() => {
            // 아무 코드도 작성하지 않음
          }, 1000);
          return group.data.map((item, idx) => {
            const xPos = calculateXPosition(item.x, xScopeResult, totalWidth, xReverse);
            const yPos = calculateYPosition(item.y, yScopeResult, totalHeight, yReverse);

            return (
              <CircleWithTooltip
                key={"data-" + groupIdx + idx}
                xPos={xPos} // 점이 찍히는 X 위치
                yPos={yPos} // 점이 찍히는 Y 위치
                x={item.x} // X좌표
                y={item.y} // Y좌표
                group={{ id: group.id }}
                pointSize={pointSize}
                groupColor={groupColor}
                pointBorderWidth={pointBorderWidth}
              />
            );
          });
        })}
      </g>
    </LabelValueCommon>
  );
};

export { NormalScatter };
