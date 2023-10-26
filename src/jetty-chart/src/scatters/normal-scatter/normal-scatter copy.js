import { checkNormalPoint } from "../../common/utils/exception/check-point-exception";
import { ScatterCommon } from "../scatter-common/scatter-common copy";
import { getAutoScope, getUserScope } from "../scope/calculate-scope copy";

// x 값의 스케일을 계산하는 함수
function calculateXPosition(value, scopeResult, totalWidth) {
  const { minScope, maxScope } = scopeResult;
  return ((value - minScope) / (maxScope - minScope)) * totalWidth;
}

// y 값의 스케일을 계산하는 함수
function calculateYPosition(value, scopeResult, totalHeight) {
  const { minScope, maxScope } = scopeResult;
  return totalHeight - ((value - minScope) / (maxScope - minScope)) * totalHeight; // SVG의 y 축은 위에서 아래로 증가하므로 height에서 빼줍니다.
}

const NormalScatter = ({
  data,
  normalSettings,
  scopeSettings,
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
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    pointSettings
  });

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;

  const { autoScope, maxScope, minScope, showTopScope } = result.scopeSettings;

  const {
    pointSize,
    // pointBorderColor,
    pointBorderWidth,
    enablePointLabel,
    pointLabelColor,
    pointLabelSize,
    pointLabelOffsetX,
    pointLabelOffsetY,
    pointLabelWeight
    // enableArea
  } = result.pointSettings;

  // const scopeResult = autoScope ? getAutoScope({ data: data.map((d) => d.value) }) : getUserScope({ maxScope, minScope });

  const xScopeResult = autoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.x)) })
    : getUserScope({ maxScope, minScope });
  const yScopeResult = autoScope
    ? getAutoScope({ data: data.flatMap((group) => group.data.map((item) => item.y)) })
    : getUserScope({ maxScope, minScope });

  if (reverse) {
    yScopeResult.scope.reverse();
  } else {
    xScopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (yScopeResult.scope.length - 1);

  const AreaWidth = drawWidth / (xScopeResult.scope.length - 1);

  const availableColors = ["#93c5fd", "#fdba74", "#fca5a5", "#cbd5e1", "#86efac"];

  return (
    <ScatterCommon
      data={data}
      normalSettings={{
        ...result.normalSettings,
        xScope: xScopeResult.scope,
        yScope: yScopeResult.scope,
        totalWidth,
        totalHeight,
        xAxisWidth: AreaWidth,
        yAxisHeight: lineHeight,
        showTopScope
      }}
      axisXGridLineSettings={result.axisXGridLineSettings}
      axisYGridLineSettings={result.axisYGridLineSettings}
      leftLabelSettings={result.leftLabelSettings}
      rightLabelSettings={result.rightLabelSettings}
      bottomLabelSettings={result.bottomLabelSettings}
      topLabelSettings={result.topLabelSettings}
    >
      <g transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}>
        {data.flatMap((group, groupIdx) => {
          // 그룹에 색상 할당
          const groupColor = availableColors[groupIdx % availableColors.length];

          return group.data.map((item, idx) => {
            const xPos = calculateXPosition(item.x, xScopeResult, totalWidth);
            const yPos = calculateYPosition(item.y, yScopeResult, totalHeight);
            return (
              <g key={"data-" + groupIdx + idx} transform={`translate(${xPos},${yPos})`}>
                <circle cx={0} cy={0} r={pointSize} fill={groupColor} stroke={groupColor} strokeWidth={pointBorderWidth} />
                {enablePointLabel && (
                  <text
                    transform={`translate(${pointLabelOffsetX},${pointLabelOffsetY})`}
                    dominantBaseline={"alphabetic"}
                    textAnchor="middle"
                    fontSize={pointLabelSize}
                    fontWeight={pointLabelWeight}
                    fill={pointLabelColor}
                  >
                    {/* {`(${item.x}, ${item.y})`} */}
                    {/* x, y 값을 라벨로 표시 */}
                  </text>
                )}
              </g>
            );
          });
        })}
      </g>
      {/* {scopeResult.scope.map((scope) => console.log(scope))} */}
    </ScatterCommon>
  );
};

export { NormalScatter };

// {data.map((d, idx) => {
//   // x와 y의 위치를 계산합니다.
//   const xPos = calculateXPosition(d.value, scopeResult, totalWidth);
//   const yPos = calculateYPosition(d.value, scopeResult, totalHeight);
//   console.log(xPos, yPos);

//   return (
//     <g key={"data-" + idx} transform={`translate(${xPos},${yPos})`}>
//       <circle cx={0} cy={0} r={pointSize} fill={pointColor} stroke={pointBorderColor} strokeWidth={pointBorderWidth} />
//       {enablePointLabel && (
//         <text
//           transform={`translate(${pointLabelOffsetX},${pointLabelOffsetY})`}
//           dominantBaseline={"alphabetic"}
//           textAnchor="middle"
//           fontSize={pointLabelSize}
//           fontWeight={pointLabelWeight}
//           fill={pointLabelColor}
//         >
//           {`(${d.value}, ${d.value})`}
//           {/* x, y 값을 라벨로 표시 */}
//         </text>
//       )}
//     </g>
//   );
// })}
