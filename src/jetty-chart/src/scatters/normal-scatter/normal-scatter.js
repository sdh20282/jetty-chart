import { checkNormalPoint } from "../../common/utils/exception/check-point-exception";
import { ScatterCommon } from "../scatter-common/scatter-common";
import { getAutoScope, getUserScope } from "../scope/calculate-scope";
import { useState, useEffect } from "react";

function calculateXPosition(value, scopeResult, totalWidth, xReverse) {
  const { minScope, maxScope } = scopeResult;
  if (xReverse) {
    return totalWidth - ((value - minScope) / (maxScope - minScope)) * totalWidth;
  }

  return ((value - minScope) / (maxScope - minScope)) * totalWidth;
}

function calculateYPosition(value, scopeResult, totalHeight, yReverse) {
  const { minScope, maxScope } = scopeResult;
  if (yReverse) {
    return ((value - minScope) / (maxScope - minScope)) * totalHeight;
  }

  return totalHeight - ((value - minScope) / (maxScope - minScope)) * totalHeight;
}

function CircleWithTooltip({ x, y, group, pointSize, groupColor, pointBorderWidth }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    fontSize: "10px", // 원하는 글씨 크기로 조절하세요
    backgroundColor: "blue",
    color: "black",
    padding: "5px",
    borderRadius: "5px",
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`
  };

  return (
    <g transform={`translate(${x},${y})`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <circle cx={0} cy={0} r={pointSize} fill={groupColor} stroke={groupColor} strokeWidth={pointBorderWidth} />
      {showTooltip && <text style={tooltipStyle}>{`${group.id}, x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`}</text>}
    </g>
  );
}

const NormalScatter = ({
  data,
  normalSettings,
  scopeSettings,
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
  pointSettings
}) => {
  const result = checkNormalPoint({
    normalSettings,
    scopeSettings,
    xLegend,
    yLegend,
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
    pointSettings
  });

  const { width, height, margin, padding, xReverse, yReverse } = result.normalSettings;
  const { xAutoScope, yAutoScope, xMaxScope, xMinScope, yMaxScope, yMinScope } = result.scopeSettings;
  // let { showTopScope } = result.scopeSettings;

  const xScopeResult = xAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.x)) })
    : getUserScope({ maxScope: xMaxScope, minScope: xMinScope });
  const yScopeResult = yAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.y)) })
    : getUserScope({ maxScope: yMaxScope, minScope: yMinScope });

  const { pointSize, pointBorderWidth } = result.pointSettings;
  // let display = true;

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

  const availableColors = ["#93c5fd", "#fdba74", "#fca5a5", "#cbd5e1", "#86efac"];

  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    if (renderedData.length < data.length) {
      const timer = setTimeout(() => {
        setRenderedData((prevData) => [...prevData, data[prevData.length]]);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [renderedData, data]);

  return (
    <ScatterCommon
      data={data}
      xLegend={xLegend}
      yLegend={yLegend}
      keys={keys}
      normalSettings={{
        ...result.normalSettings,
        xScope: xScopeResult.scope,
        yScope: yScopeResult.scope,
        totalWidth,
        totalHeight,
        xAxisWidth: AreaWidth,
        yAxisHeight: lineHeight
        // showTopScope
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
    >
      <g transform={`translate(${padding})`}>
        {renderedData.flatMap((group, groupIdx) => {
          // 그룹에 색상 할당
          const groupColor = availableColors[groupIdx % availableColors.length];

          return group.data.map((item, idx) => {
            const xPos = calculateXPosition(item.x, xScopeResult, totalWidth, xReverse);
            const yPos = calculateYPosition(item.y, yScopeResult, totalHeight, yReverse);

            return (
              <CircleWithTooltip
                key={"data-" + groupIdx + idx}
                x={xPos}
                y={yPos}
                group={{ id: group.id }}
                pointSize={pointSize}
                groupColor={groupColor}
                pointBorderWidth={pointBorderWidth}
              />
            );
          });
        })}
      </g>
    </ScatterCommon>
  );
};

export { NormalScatter };
