import { checkNormalPoint } from "../../common/utils/exception/check-point-exception";
import { ScatterCommon } from "../scatter-common/scatter-common";
import { getAutoScope, getCalculatedScope } from "../scope/calculate-scope";

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
    pointColor,
    pointBorderColor,
    pointBorderWidth,
    enablePointLabel,
    pointLabelColor,
    pointLabelSize,
    pointLabelOffsetX,
    pointLabelOffsetY,
    pointLabelWeight
    // enableArea
  } = result.pointSettings;

  const scopeResult = autoScope ? getAutoScope({ data }) : getCalculatedScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  // const drawHeight = totalHeight - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const AreaWidth = drawWidth / data.length;
  const halfAreaWidth = AreaWidth / 2;
  // const AreaHeight = drawHeight / data.length;
  // const halfAreaHeight = AreaHeight / 2;

  // const pointGapWidth = halfAreaWidth * 3;

  // const zeroHeight =
  //   scopeResult.scope.reduce((acc, cur) => {
  //     if (cur !== 0) {
  //       acc += 1;
  //     }

  //     if (cur === 0) {
  //       acc = 0;
  //     }

  //     return acc;
  //   }, 0) * lineHeight;
  // console.log(enableArea);

  return (
    <ScatterCommon
      data={data}
      normalSettings={{
        ...result.normalSettings,
        scope: scopeResult.scope,
        totalWidth,
        totalHeight,
        xAxisInitialPosition: halfAreaWidth,
        xAxisWidth: lineHeight,
        // xAxisWidth: halfAreahHeight,

        // xAxisInitialPosition: halfAreaWidth,
        // xAxisWidth: AreaWidth,
        yAxisHeight: lineHeight,
        // yAxisHeight: halfAreaHeight,
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
        {data.map((d, idx) => {
          // x와 y의 위치를 계산합니다.
          const xPos = calculateXPosition(d.value, scopeResult, totalWidth);
          const yPos = calculateYPosition(d.value, scopeResult, totalHeight);

          return (
            <g key={"data-" + idx} transform={`translate(${xPos},${yPos})`}>
              <circle cx={0} cy={0} r={pointSize} fill={pointColor} stroke={pointBorderColor} strokeWidth={pointBorderWidth} />
              {enablePointLabel && (
                <text
                  transform={`translate(${pointLabelOffsetX},${pointLabelOffsetY})`}
                  dominantBaseline={"alphabetic"}
                  textAnchor="middle"
                  fontSize={pointLabelSize}
                  fontWeight={pointLabelWeight}
                  fill={pointLabelColor}
                >
                  {`(${d.value}, ${d.value})`}
                  {/* x, y 값을 라벨로 표시 */}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </ScatterCommon>
  );
};

export { NormalScatter };
