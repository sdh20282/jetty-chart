import { BarCommon } from "../bar-common/bar-common";

import { getLevelAutoScope, getLevelCalculatedScope } from "../../common/utils/level/calculate-level";
import { checkBarBorderRadius } from "../../common/utils/exception/check-common-exception";
import { checkNormalBar } from "../../common/utils/exception/check-bar-exception";

const NormalBar = ({ data, generalSettings, levelSettings, barSettings }) => {
  const result = checkNormalBar({ generalSettings, levelSettings, barSettings });

  const { width, height, padding, reverse } = result.generalSettings;
  const { levelAutoScope, levelMaxScope, levelMinScope } = result.levelSettings;
  let { barGap, barBorderRadius, chartPadding, barColor, barOnlyUpperRadus } = result.barSettings;

  const levelResult = levelAutoScope ? getLevelAutoScope({ data }) : getLevelCalculatedScope({ maxScope: levelMaxScope, minScope: levelMinScope });

  if (reverse) {
    levelResult.level.reverse();
    result.barSettings.categoryTextOnBottom = !result.barSettings.categoryTextOnBottom;
  }

  const chartAreaWidth = width - padding.left - padding.right - chartPadding - chartPadding;
  const chartAreaHeight = height - padding.bottom - padding.top;
  const halfAreaWidth = chartAreaWidth / data.length / 2;
  const halfWidth = halfAreaWidth - barGap * halfAreaWidth;
  const lineGap = chartAreaHeight / (levelResult.level.length - 1);

  const zeroLocation =
    levelResult.level.reduce((acc, cur) => {
      if (cur !== 0) {
        acc += 1;
      }

      if (cur === 0) {
        acc = 0;
      }

      return acc;
    }, 0) * lineGap;

  console.log(result.generalSettings.horizontal);

  return (
    <BarCommon
      data={data}
      generalSettings={{ ...result.generalSettings }}
      levelSettings={{
        level: levelResult.level,
        ...result.levelSettings
      }}
      categorySettings={{
        categoryPadding: chartPadding,
        ...result.barSettings
      }}
    >
      <g transform={`translate(${chartPadding})`}>
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const x = (chartAreaWidth / data.length) * idx + chartAreaWidth / data.length / 2;
          const height = (Math.abs(nowData.value) / (levelResult.maxScope - levelResult.minScope)) * chartAreaHeight;
          const realHeight = height >= barBorderRadius ? height - barBorderRadius : 0;

          barBorderRadius = checkBarBorderRadius({ halfWidth, borderRadius: barBorderRadius });

          return (
            <g key={"data-" + nowData.label + "-" + idx} transform={`translate(${x - halfWidth},${chartAreaHeight - height - zeroLocation})`}>
              {barOnlyUpperRadus && barBorderRadius !== "0" ? (
                <path
                  d={
                    nowData.value >= 0
                      ? `
                  M 0,${height}
                  l 0,-${realHeight}
                  q 0,-${barBorderRadius} ${barBorderRadius},-${barBorderRadius}
                  h ${halfWidth + halfWidth - barBorderRadius - barBorderRadius}
                  q ${barBorderRadius},0 ${barBorderRadius},${barBorderRadius}
                  l 0,${realHeight}
                  z`
                      : `
                  M 0,${height}
                  l 0,${realHeight}
                  q 0,${barBorderRadius} ${barBorderRadius},${barBorderRadius}
                  h ${halfWidth + halfWidth - barBorderRadius - barBorderRadius}
                  q ${barBorderRadius},0 ${barBorderRadius},-${barBorderRadius}
                  l 0,-${realHeight}
                  z`
                  }
                  fill={barColor}
                />
              ) : (
                <rect width={halfWidth + halfWidth} height={height} fill={barColor} rx={barBorderRadius} ry={barBorderRadius}></rect>
              )}
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalBar };
