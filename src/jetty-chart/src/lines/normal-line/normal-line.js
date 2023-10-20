import { LineCommon } from "../line-common/line-common";

import { getLevelAutoScope, getLevelCalculatedScope } from "../../common/utils/level/calculate-level";
import { checkNormalLine } from "../../common/utils/exception/check-line-exception";

const NormalLine = ({ data, generalSettings, levelSettings, lineSettings }) => {
  const result = checkNormalLine({
    generalSettings,
    levelSettings,
    lineSettings
  });

  const { width, height, padding, reverse } = result.generalSettings;
  const { levelAutoScope, levelMaxScope, levelMinScope } = result.levelSettings;
  const { chartPadding, lineColor, lineWidth, pointSize, pointColor, pointBorderColor, pointBorderWidth, lineOnlyUpperRadius, lineBorderRadius } =
    result.lineSettings;

  const levelResult = levelAutoScope
    ? getLevelAutoScope({ data })
    : getLevelCalculatedScope({
        maxScope: levelMaxScope,
        minScope: levelMinScope
      });

  if (reverse) {
    levelResult.level.reverse();
    result.lineSettings.categoryTextOnBottom = !result.lineSettings.categoryTextOnBottom;
  }

  const chartAreaWidth = width - padding.left - padding.right - chartPadding - chartPadding;
  const chartAreaHeight = height - padding.bottom - padding.top;

  const fullAreaWidth = chartAreaWidth / data.length;
  const halfAreaWidth = fullAreaWidth / 2;
  const pointGapWidth = halfAreaWidth * 3;

  const halfWidth = halfAreaWidth;

  // console.log(result.generalSettings.horizontal);

  return (
    <LineCommon
      data={data}
      generalSettings={{ ...result.generalSettings }}
      levelSettings={{
        level: levelResult.level,
        ...result.levelSettings
      }}
      categorySettings={{
        categoryPadding: chartPadding,
        ...result.lineSettings
      }}
    >
      <g transform={`translate(${chartPadding})`}>
        {data.map((d, idx) => {
          const nowData = { ...d };
          const nextData = { ...data[idx + 1] };

          if (reverse) {
            nowData.value = -nowData.value;
            nextData.value = -nextData.value;
          }

          const x = (chartAreaWidth / data.length) * idx + chartAreaWidth / data.length / 2;
          const height = (Math.abs(nowData.value) / (levelResult.maxScope - levelResult.minScope)) * chartAreaHeight;
          const realHeight = height >= lineBorderRadius ? height - lineBorderRadius : 0;

          const nextX = (chartAreaWidth / data.length) * idx + chartAreaWidth / data.length / 2;
          const nextHeight = (Math.abs(nextData.value) / (levelResult.maxScope - levelResult.minScope)) * chartAreaHeight;
          const nextRealHeight = nextHeight >= lineBorderRadius ? nextHeight - lineBorderRadius : 0;

          const differentHeight = height - nextRealHeight - lineBorderRadius;

          console.log(idx);
          console.log(pointGapWidth);
          console.log("now", x, height, realHeight);
          console.log("next", nextX, nextHeight);
          if (idx === data.length - 1) {
            return (
              <g key={"data-" + nowData.label + "-" + idx} transform={`translate(${x - halfWidth},${chartAreaHeight - height})`}>
                <circle cx={halfWidth} cy="0" r={pointSize} fill={pointColor} stroke={pointBorderColor} strokeWidth={pointBorderWidth} />
                <text
                  transform={`translate(${halfWidth},${-10})`}
                  dominantBaseline={"alphabetic"}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={500}
                  fill={"#000"}
                >
                  {d.value}
                </text>
              </g>
            );
          }

          return (
            <g key={"data-" + nowData.label + "-" + idx} transform={`translate(${x - halfWidth},${chartAreaHeight - height})`}>
              {lineOnlyUpperRadius && lineBorderRadius !== "0" ? (
                <line
                  x1={halfWidth}
                  y1={0}
                  x2={pointGapWidth}
                  y2={differentHeight}
                  stroke={lineColor}
                  strokeWidth={lineWidth}
                  strokeLinecap="round"
                />
              ) : (
                <line x1={halfWidth} y1={0} x2={pointGapWidth} y2={differentHeight} stroke={lineColor} strokeWidth={lineWidth} />
              )}
              <circle cx={halfWidth} cy="0" r={pointSize} fill={pointColor} stroke={pointBorderColor} strokeWidth={pointBorderWidth} />
              <text
                transform={`translate(${halfWidth},${-10})`}
                dominantBaseline={"alphabetic"}
                textAnchor="middle"
                fontSize={10}
                fontWeight={500}
                fill={"#000"}
              >
                {d.value}
              </text>
            </g>
          );
        })}
      </g>
    </LineCommon>
  );
};

export { NormalLine };
