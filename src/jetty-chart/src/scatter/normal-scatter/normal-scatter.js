import { useState, useEffect } from "react";

import { checkNormalPoint } from "../../common/scatter-common/exception/check-point-exception";
import { LabelValueCommon } from "../../components/label-value-common/label-value-common";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { calculateXPosition, calculateYPosition } from "../../common/scatter-common/utils/calculate-point-position";

const NormalScatter = ({
  data,
  xLegend,
  yLegend,
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
  animationSettings,
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
    animationSettings,
  });
  
  const { width, height, margin, padding, xReverse, yReverse, colorPalette } = result.normalSettings;
  const { xAutoScope, yAutoScope, xMaxScope, xMinScope, yMaxScope, yMinScope } = result.scopeSettings;

  const xScopeResult = xAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.x)) })
    : getUserScope({ maxScope: xMaxScope, minScope: xMinScope });
  const yScopeResult = yAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.y)) })
    : getUserScope({ maxScope: yMaxScope, minScope: yMinScope });

  const { pointSize, tooltipOn, xName, yName, pointRenderTime } = result.pointSettings;

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

  const [pointC, setPointC] = useState({})
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });

  const handleMouseEnter = (groupName, x, y, xNow, yNow) => {
    setShowTooltip(true);
    setPointC({groupName:groupName, x:x, y:y})
    setTooltipPosition({left: xNow, top: yNow})
  };

  const tooltipStyle = {
    fontSize: "10px",
    backgroundColor: "blue",
    color: "black",
    padding: "5px",
    borderRadius: "5px",
    position: "absolute",
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const [opacities, setOpacities] = useState([]);

  useEffect(() => {
    const timeouts = data.flatMap((group, groupIdx) => {
      return group.data.map((d) => {
        return setTimeout(() => {
          setOpacities(prevOpacities => {
            const newOpacities = [...prevOpacities];
            newOpacities[groupIdx] = 1;
            return newOpacities;
          });
        }, (groupIdx) * pointRenderTime * 1000);
      });
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      setOpacities([]);
    };
  }, [data, pointRenderTime]);

  return (
    <LabelValueCommon
      data={data}
      keys={data.map((d) => d.id)}
      xAxis={xScopeResult.scope}
      yAxis={yScopeResult.scope}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={{
        ...result.normalSettings,
        // xScope: newGridX.scope,
        totalWidth,
        totalHeight,
        xAxisWidth: AreaWidth,
        yAxisHeight: lineHeight,
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
          const opacity = opacities[groupIdx] || 0;

          const pointStyle = {
            opacity,
          };
          
          
          return group.data.map((item, idx) => {
            const xPos = calculateXPosition(item.x, xScopeResult, totalWidth, xReverse);
            const yPos = calculateYPosition(item.y, yScopeResult, totalHeight, yReverse);
            
            
            return (
              <g transform={`translate(${xPos},${yPos})`} key={"data-" + groupIdx + idx} onMouseEnter={() => handleMouseEnter(group.id, item.x, item.y, xPos, yPos)} onMouseLeave={handleMouseLeave}>
                <circle style={pointStyle} cx={0} cy={0} r={pointSize} fill={groupColor} stroke={groupColor} />
              </g>
            );
          });
        })}
        {tooltipOn && showTooltip && (
          <text style={{ ...tooltipStyle,  transform: `translate(${tooltipPosition.left}px, ${tooltipPosition.top}px)` }}>{`${pointC.groupName}, ${xName ? xName : xLegend ? xLegend : "x"}: ${pointC.x.toFixed(1)}, ${
            yName ? yName : yLegend ? yLegend : "y"
          }: ${pointC.y.toFixed(1)}`}</text>
      )}
      </g>
    </LabelValueCommon>
  );
};

export { NormalScatter };
