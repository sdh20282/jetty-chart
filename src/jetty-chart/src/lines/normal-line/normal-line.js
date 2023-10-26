import { checkNormalLine } from "../../common/utils/exception/check-line-exception";
import { BarCommon } from "../../bars/bar-common/bar-common";
import { getAutoScope, getCalculatedScope } from "../../common/utils/scope/calculate-scope";

export const getOpposedLine = (pointA, pointB, angleDegree) => {
  const xLength = pointB[0] - pointA[0];
  const yLength = pointB[1] - pointA[1];

  const zLength = Math.sqrt(xLength ** 2 + yLength ** 2);
  const angle = Math.atan2(yLength, xLength) * angleDegree;

  return { length: zLength, angle };
};

export const getControlPoint = (prev, curr, next, options, isEndControlPoint = false) => {
  const p = prev || curr;
  const n = next || curr;

  const o = getOpposedLine(p, n, options.angleDegree);

  const angle = o.angle + (isEndControlPoint ? Math.PI : 0);
  const length = o.length * options.smoothDegree;

  const x = curr[0] + Math.cos(angle) * length;
  const y = curr[1] + Math.sin(angle) * length;

  return [x, y];
};

const NormalLine = ({
  data,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  lineSettings
}) => {
  const result = checkNormalLine({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    lineSettings
  });

  const { width, height, margin, padding, reverse, horizontal } = result.normalSettings;

  const { autoScope, maxScope, minScope, showTopScope } = result.scopeSettings;

  const {
    lineColor,
    lineOpacity,
    lineWidth,
    enablePoint,
    pointSize,
    pointColor,
    pointBorderColor,
    pointBorderWidth,
    enablePointLabel,
    pointLabelColor,
    pointLabelSize,
    pointLabelOffsetX,
    pointLabelOffsetY,
    pointLabelWeight,
    enableArea,
    areaOpacity,
    enableCurve,
    smoothDegree,
    angleDegree,
    strokeLinejoin,
    strokeLinecap
  } = result.lineSettings;

  const scopeResult = autoScope ? getAutoScope({ data }) : getCalculatedScope({ maxScope, minScope });

  if (reverse) {
    scopeResult.scope.reverse();
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;

  const drawWidth = totalWidth - padding - padding;
  const lineHeight = totalHeight / (scopeResult.scope.length - 1);

  const areaWidth = drawWidth / data.length;
  const pointGapWidth = drawWidth / (data.length - 1);

  const halfAreaWidth = areaWidth / 2;

  const zeroHeight =
    scopeResult.scope.reduce((acc, cur) => {
      if (cur !== 0) {
        acc += 1;
      }

      if (cur === 0) {
        acc = 0;
      }

      return acc;
    }, 0) * lineHeight;

  const coords = data.map((element, idx) => {
    const nowData = { ...element };

    if (reverse) {
      nowData.value = -nowData.value;
    }

    const center = pointGapWidth * idx;
    const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

    if (horizontal) {
      return [totalHeight + height - zeroHeight, center];
    }

    return [center, totalHeight - height - zeroHeight];
  });

  let pathString = ``;
  let areaPathString = "";

  if (enableCurve) {
    pathString = coords.reduce((acc, curr, idx, arr) => {
      const isFirstPoint = idx === 0;

      if (isFirstPoint) return acc + `${curr[0]},${curr[1]}`;

      const [cpsX, cpsY] = getControlPoint(arr[idx - 2], arr[idx - 1], curr, { smoothDegree, angleDegree });
      const [cpeX, cpeY] = getControlPoint(arr[idx - 1], curr, arr[idx + 1], { smoothDegree, angleDegree }, true);
      return `${acc} C ${cpsX}, ${cpsY}, ${cpeX}, ${cpeY} ${curr[0]}, ${curr[1]}`;
    }, "");
  } else {
    pathString = coords.reduce((acc, curr, idx) => {
      const isFirstPoint = idx === 0;

      let tempPath = "";

      if (!isFirstPoint) tempPath += ` L`;

      tempPath += ` ${curr[0]} ${curr[1]}`;
      return acc + tempPath;
    }, "");
  }

  const zeroHeightFromTop = totalHeight - zeroHeight;

  if (enableArea) {
    areaPathString = horizontal
      ? `M ${zeroHeightFromTop} ${0} L` + pathString + `L ${zeroHeightFromTop} ${drawWidth}`
      : `M ${0} ${zeroHeightFromTop} L` + pathString + `L ${drawWidth} ${zeroHeightFromTop}`;
  }

  pathString = "M " + pathString;

  return (
    <BarCommon
      data={data}
      normalSettings={{
        ...result.normalSettings,
        scope: scopeResult.scope,
        totalWidth,
        totalHeight,
        drawWidth,
        xAxisInitialPosition: 0,
        xAxisWidth: pointGapWidth,
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
      <g
        transform={horizontal ? `translate(0,${padding})` : `translate(${padding})`}
        onClick={() => {
          const path = document.getElementById("myPath");
          const length = path.getTotalLength();

          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;

          path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
            duration: 2000, // 애니메이션 지속 시간 (2초)
            easing: "ease-in-out",
            iterations: 1, // 애니메이션을 1번만 실행
            fill: "forwards" // 애니메이션 종료 후 최종 프레임 유지
          });
        }}
      >
        <path
          id="myPath"
          d={pathString}
          stroke={lineColor}
          strokeWidth={lineWidth}
          strokeOpacity={lineOpacity}
          strokeLinejoin={strokeLinejoin}
          strokeLinecap={strokeLinecap}
          fillOpacity={0}
        />
        {enableArea && (
          <path
            d={areaPathString}
            fill={lineColor}
            strokeLinejoin={strokeLinejoin}
            strokeLinecap={strokeLinecap}
            fillOpacity={enableArea ? areaOpacity : 0}
          />
        )}
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const center = pointGapWidth * idx;
          const height = (nowData.value / (scopeResult.maxScope - scopeResult.minScope)) * totalHeight;

          return (
            <g
              key={"data-" + nowData.label + "-" + idx}
              transform={
                horizontal
                  ? `translate(${zeroHeight + height},${center - halfAreaWidth})`
                  : `translate(${center - halfAreaWidth},${totalHeight - height - zeroHeight})`
              }
            >
              {enablePoint && (
                <circle
                  cx={horizontal ? 0 : halfAreaWidth}
                  cy={horizontal ? halfAreaWidth : 0}
                  r={pointSize}
                  fill={pointColor}
                  stroke={pointBorderColor}
                  strokeWidth={pointBorderWidth}
                />
              )}
              {enablePointLabel && (
                <text
                  transform={
                    horizontal
                      ? `translate(${pointLabelOffsetX},${pointLabelOffsetY})`
                      : `translate(${halfAreaWidth + pointLabelOffsetX},${pointLabelOffsetY})`
                  }
                  dominantBaseline={"alphabetic"}
                  textAnchor="middle"
                  fontSize={pointLabelSize}
                  fontWeight={pointLabelWeight}
                  fill={pointLabelColor}
                >
                  {d.value}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalLine };