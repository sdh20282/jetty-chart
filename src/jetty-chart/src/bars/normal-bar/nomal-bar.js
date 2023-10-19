import { BarCommon } from "../bar-common/bar-common";

import { getLevelAutoScope, getLevelCalculatedScope } from "../../common/utils/level/calculate-level";
import { checkBarBorderRadius } from "../../common/utils/exception/check-common-exception";
import { checkNormalBar } from "../../common/utils/exception/check-normal-bar-exception";

const NormalBar = ({ data, generalSettings, lineSettings, levelSettings, barSettings, categotySettings }) => {
  const result = checkNormalBar({ generalSettings, lineSettings, levelSettings, barSettings, categotySettings });

  const { width, height, padding, reverse, horizontal, chartPadding } = result.generalSettings;
  const { levelAutoScope, levelMaxScope, levelMinScope } = result.levelSettings;
  const { barGap, useBarBorderRadius, barBorderRadius, barColor, barOnlyUpperRadus, useBarBorder, barBorderWidth, barBorderColor } =
    result.barSettings;

  const levelResult = levelAutoScope ? getLevelAutoScope({ data }) : getLevelCalculatedScope({ maxScope: levelMaxScope, minScope: levelMinScope });

  if (reverse) {
    levelResult.level.reverse();
  }

  const chartAreaWidth = (horizontal ? height - padding.bottom - padding.top : width - padding.left - padding.right) - chartPadding - chartPadding;
  const chartAreaHeight = horizontal ? width - padding.left - padding.right : height - padding.bottom - padding.top;
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

  return (
    <BarCommon
      data={data}
      generalSettings={{ ...result.generalSettings, level: levelResult.level }}
      lineSettings={{ ...result.lineSettings }}
      levelSettings={{ ...result.levelSettings }}
      categorySettings={{ ...result.categorySettings }}
    >
      <g transform={horizontal ? `translate(0,${chartPadding})` : `translate(${chartPadding})`}>
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const center = (chartAreaWidth / data.length) * idx + chartAreaWidth / data.length / 2;
          const height = (Math.abs(nowData.value) / (levelResult.maxScope - levelResult.minScope)) * chartAreaHeight;
          const realHeight = height >= barBorderRadius ? height - barBorderRadius : height;
          const borderRadius = useBarBorderRadius ? checkBarBorderRadius({ halfWidth, realHeight, borderRadius: barBorderRadius }) : 0;
          const totalWidth = halfWidth + halfWidth;
          const realWidth = halfWidth + halfWidth - borderRadius - borderRadius;

          return (
            <g
              key={"data-" + nowData.label + "-" + idx}
              transform={
                horizontal
                  ? `translate(${zeroLocation},${center - halfWidth})`
                  : `translate(${center - halfWidth},${chartAreaHeight - height - zeroLocation})`
              }
            >
              {barOnlyUpperRadus && useBarBorderRadius ? (
                <path
                  d={
                    horizontal
                      ? nowData.value >= 0
                        ? `
                          M 0,0
                          h ${realHeight}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${realWidth}
                          q 0,${borderRadius} -${borderRadius},${borderRadius}
                          h -${realHeight}
                          v -${totalWidth}
                          z`
                        : `
                          M 0,0
                          h -${realHeight}
                          q -${borderRadius},0 -${borderRadius},${borderRadius}
                          v ${realWidth}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${realHeight}
                          v -${totalWidth}
                          z`
                      : nowData.value >= 0
                      ? `
                          M 0,${height}
                          v -${realHeight}
                          q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                          h ${realWidth}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${realHeight}
                          h -${totalWidth}
                          z`
                      : `
                          M 0,${height}
                          v ${realHeight}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${realWidth}
                          q ${borderRadius},0 ${borderRadius},-${borderRadius}
                          v -${realHeight}
                          h -${totalWidth}
                          z`
                  }
                  fill={barColor}
                  stroke={useBarBorder ? barBorderColor : ""}
                  strokeWidth={useBarBorder ? barBorderWidth : "0"}
                />
              ) : (
                <rect
                  width={horizontal ? height : halfWidth + halfWidth}
                  height={horizontal ? halfWidth + halfWidth : height}
                  transform={horizontal ? `translate(${nowData.value >= 0 ? 0 : -height})` : `translate(0,${nowData.value >= 0 ? 0 : height})`}
                  fill={barColor}
                  rx={borderRadius}
                  ry={borderRadius}
                  stroke={useBarBorder ? barBorderColor : ""}
                  strokeWidth={useBarBorder ? barBorderWidth : "0"}
                ></rect>
              )}
            </g>
          );
        })}
      </g>
    </BarCommon>
  );
};

export { NormalBar };
