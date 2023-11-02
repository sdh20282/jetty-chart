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

  // return (
  //   <g transform={`translate(${xPos},${yPos})`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  //     <circle cx={0} cy={0} r={pointSize} fill={groupColor} stroke={groupColor} strokeWidth={pointBorderWidth} />
  //     <foreignObject x="0" y="0" width={"150"} height="50">
  //       <div
  //         xmlns="http://www.w3.org/1999/xhtml"
  //         style={
  //           showTooltip
  //             ? {
  //                 width: "100%",
  //                 height: "100%",
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 justifyContent: "center",
  //                 alignItems: "center",
  //                 backgroundColor: "gray",
  //                 color: "black",
  //                 borderRadius: "5px",
  //                 border: "0.5px solid #ddd",
  //                 margin: "0px"
  //               }
  //             : { visibility: "hidden" }
  //         }
  //       >
  //         <p
  //           style={{
  //             margin: "0px",
  //             marginTop: "5px",
  //             marginBottom: "5px",
  //             color: "black",
  //             fontSize: "10px",
  //             fontWeight: "bold"
  //           }}
  //         >{`${group.id}, x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`}</p>
  //       </div>
  //     </foreignObject>
  //     {/* {showTooltip && <div style={tooltipStyle}>{`${group.id}, x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`}</div>} */}
  //   </g>
  // );
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
  pointSettings
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
    pointSettings
  });

  const { width, height, margin, padding, xReverse, yReverse } = result.normalSettings;
  const { xAutoScope, yAutoScope, xMaxScope, xMinScope, yMaxScope, yMinScope, xScopeMul, yScopeMul } = result.scopeSettings;
  // let { showTopScope } = result.scopeSettings;

  const xScopeResult = xAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.x)), scopeMul: xScopeMul })
    : getUserScope({ maxScope: xMaxScope, minScope: xMinScope });
  const yScopeResult = yAutoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.y)), scopeMul: yScopeMul })
    : getUserScope({ maxScope: yMaxScope, minScope: yMinScope });

  // const gridList = [];
  // let num = 0;

  // for (let index = 0; index < 6; index++) {
  //   gridList.push(num);
  //   num += 20;
  // }

  // for (let index = 0; index < 5; index++) {
  //   gridList.push(num);
  //   num -= 20;
  // }

  // const newGridX = { scope: gridList, maxScope: 100, minScope: 0 };
  // console.log("X", newGridX);

  const expandedScope = [
    ...yScopeResult.scope, // 주어진 초기 배열을 추가합니다.
    ...yScopeResult.scope.slice(0, yScopeResult.scope.length - 1).reverse() // 초기 배열의 두 번째 요소부터 뒤에서 두 번째 요소까지를 역순으로 추가합니다.
  ];

  console.log("Y", expandedScope);

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

  // const AreaWidth = drawWidth / (newGridX.scope.length - 1);
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
      normalSettings={{
        ...result.normalSettings,
        // xScope: newGridX.scope,
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
                xPos={xPos}
                yPos={yPos}
                x={item.x}
                y={item.y}
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
