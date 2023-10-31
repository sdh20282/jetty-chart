import { useRef } from "react";

import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

import { checkNormalBar } from "../../common/utils/exception/check-normal-bar-exception";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { checkBarBorderRadius } from "../../common/utils/exception/check-common-exception";

import styles from "./normal-bar.module.css";

/* eslint-disable complexity */
const NormalBar = ({
  data,
  keys,
  xLegend,
  yLegend,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  leftLegendSettings,
  rightLegendSettings,
  legendSettings,
  barSettings,
  animationSettings
}) => {
  const prevBars = useRef({});
  const prevBarsTemp = useRef({});

  if (!data || data.length === 0) {
    return;
  }

  const result = checkNormalBar({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    leftLegendSettings,
    rightLegendSettings,
    legendSettings,
    barSettings,
    animationSettings
  });

  const { width, height, margin, innerMargin, padding, reverse, horizontal, colorPalette } = result.normalSettings;
  const { autoScope, maxScope, minScope } = result.scopeSettings;
  let { showTopScope } = result.scopeSettings;
  const {
    barOpacity,
    barGap,
    barOnlyUpperRadius,
    useBarBorderRadius,
    barBorderRadius,
    useBarBorder,
    barBorderWidth,
    barBorderColor,
    barBorderOpacity,
    useMinHeight,
    minHeight,
    useLabel,
    labelPosition,
    labelMargin,
    labelSize,
    labelWeight,
    labelOpacity,
    labelColor,
    labelInvisibleHeight
  } = result.barSettings;

  const { useAnimation, renderType, renderDuration, renderStartDelay, renderItemDelay, renderTimingFunction, renderStartFrom, translateBar } =
    result.animationSettings.barSettings;

  const scopeResult = autoScope ? getAutoScope({ data: data.map((d) => d.value) }) : getUserScope({ maxScope, minScope });
  let display = true;

  console.log(renderDuration, renderStartDelay, renderItemDelay, renderTimingFunction, renderStartFrom);

  if (reverse) {
    scopeResult.scope.reverse();
  }

  if (!autoScope && !scopeResult.display) {
    display = false;
    showTopScope = false;
  }

  const totalWidth = horizontal ? height - margin.bottom - margin.top : width - margin.left - margin.right;
  const totalHeight = horizontal ? width - margin.left - margin.right : height - margin.bottom - margin.top;
  const totalScope = scopeResult.maxScope - scopeResult.minScope;

  if (!autoScope && scopeResult.display) {
    innerMargin.top = scopeResult.topMarginRatio * totalHeight;
    innerMargin.bottom = scopeResult.bottomMarginRatio * totalHeight;
  }

  const drawWidth = totalWidth - padding - padding;
  const drawHeight = totalHeight - innerMargin.top - innerMargin.bottom;
  const lineHeight = drawHeight / (scopeResult.scope.length - 1);

  const barWidth = drawWidth / data.length;
  const halfBarWidth = barWidth / 2;
  const halfBarRealWidth = halfBarWidth - barGap * halfBarWidth;

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

  const prevBarsKeys = Object.keys(prevBars.current);
  const ms = new Date().valueOf();

  if (translateBar) {
    prevBars.current = { ...prevBarsTemp.current };
    prevBarsTemp.current = [];
  }

  console.log(prevBars, prevBarsKeys);
  console.log(scopeResult.scope, zeroHeight);

  return (
    <LabelValueCommon
      keys={keys}
      xAxis={data.map((d) => d.label)}
      yAxis={scopeResult.scope}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={{
        ...result.normalSettings,
        totalWidth,
        totalHeight,
        xAxisInitialPosition: halfBarWidth,
        xAxisWidth: barWidth,
        yAxisHeight: lineHeight,
        showTopScope
      }}
      axisXGridLineSettings={result.axisXGridLineSettings}
      axisYGridLineSettings={result.axisYGridLineSettings}
      leftLabelSettings={result.leftLabelSettings}
      rightLabelSettings={result.rightLabelSettings}
      bottomLabelSettings={result.bottomLabelSettings}
      topLabelSettings={result.topLabelSettings}
      leftLegendSettings={result.leftLegendSettings}
      rightLegendSettings={result.rightLegendSettings}
      bottomLegendSettings={result.bottomLegendSettings}
      topLegendSettings={result.topLegendSettings}
      legendSettings={result.legendSettings}
      animationSettings={result.animationSettings}
    >
      <g
        transform={
          horizontal
            ? `translate(${reverse ? innerMargin.top : innerMargin.bottom},${padding})`
            : `translate(${padding}, ${reverse ? innerMargin.bottom : innerMargin.top})`
        }
      >
        {data.map((d, idx) => {
          const nowData = { ...d };

          if (reverse) {
            nowData.value = -nowData.value;
          }

          const center = (drawWidth / data.length) * idx + drawWidth / data.length / 2;
          const valueRatio = Math.abs(nowData.value) / totalScope;
          let barHeight = valueRatio * drawHeight;

          if (useMinHeight && barHeight < minHeight) {
            barHeight = minHeight;
          }

          let barHeightWithoutRadius = barHeight > barBorderRadius ? barHeight - barBorderRadius : barHeight;

          if (useMinHeight && barHeightWithoutRadius < minHeight) {
            barHeightWithoutRadius = minHeight;
          }

          const borderRadius = useBarBorderRadius
            ? checkBarBorderRadius({ halfWidth: halfBarRealWidth, height: barHeightWithoutRadius, borderRadius: barBorderRadius })
            : 0;

          const barTotalWidth = halfBarRealWidth + halfBarRealWidth;
          const barWidthWithoutRadius = barTotalWidth - borderRadius - borderRadius;
          const realHeight = barHeightWithoutRadius + borderRadius;

          prevBarsTemp.current[nowData.label] = { center, halfWidth: halfBarRealWidth, height: barHeightWithoutRadius };

          let useTranslate = false;
          let translate = { center: 0, halfWidth: 0, height: 0 };

          if (translateBar) {
            if (prevBarsKeys.includes(String(nowData.label))) {
              translate = {
                center: center - prevBars.current[nowData.label].center,
                halfWidth: halfBarRealWidth - prevBars.current[nowData.label].halfWidth,
                height: barHeightWithoutRadius - prevBars.current[nowData.label].height
              };
              useTranslate = true;
            }
          }

          console.log(translate, useTranslate);

          console.log(barHeightWithoutRadius, borderRadius);

          return (
            display && (
              <g
                key={"data-" + ms + "-" + nowData.label}
                transform={
                  useAnimation && renderType.includes("grow")
                    ? ""
                    : horizontal
                    ? `translate(${zeroHeight},${center - halfBarRealWidth})`
                    : `translate(${center - halfBarRealWidth},${drawHeight - barHeight - zeroHeight})`
                }
                className={useAnimation && renderType.includes("grow") ? styles.translateGroup : ""}
                style={{
                  "--bar-from": horizontal
                    ? nowData.value >= 0
                      ? `${zeroHeight}px,${center - halfBarRealWidth}px`
                      : `${zeroHeight}px,${center - halfBarRealWidth}px`
                    : nowData.value >= 0
                    ? `${center - halfBarRealWidth}px,${drawHeight - zeroHeight}px`
                    : `${center - halfBarRealWidth}px,${drawHeight - zeroHeight}px`,
                  "--bar-to": horizontal
                    ? nowData.value >= 0
                      ? `${zeroHeight}px,${center - halfBarRealWidth}px`
                      : `${zeroHeight}px,${center - halfBarRealWidth}px`
                    : nowData.value >= 0
                    ? `${center - halfBarRealWidth}px,${drawHeight - barHeight - zeroHeight}px`
                    : `${center - halfBarRealWidth}px,${drawHeight - zeroHeight}px`,
                  "--scale-from": horizontal ? "scaleX(0)" : "scaleY(0)",
                  "--scale-to": horizontal ? "scaleX(1)" : "scaleY(1)",
                  "--animation-duration": `${renderType === "grow" ? renderDuration * valueRatio : renderDuration}s`
                }}
              >
                {barOnlyUpperRadius && useBarBorderRadius ? (
                  <path
                    d={
                      horizontal
                        ? nowData.value > 0 || (!reverse && nowData.value === 0)
                          ? `
                          M 0,0
                          h ${barHeightWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${barWidthWithoutRadius}
                          q 0,${borderRadius} -${borderRadius},${borderRadius}
                          h -${barHeightWithoutRadius}
                          v -${barTotalWidth}
                          z`
                          : `
                          M 0,0
                          h -${barHeightWithoutRadius}
                          q -${borderRadius},0 -${borderRadius},${borderRadius}
                          v ${barWidthWithoutRadius}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${barHeightWithoutRadius}
                          v -${barTotalWidth}
                          z`
                        : nowData.value > 0 || (!reverse && nowData.value === 0)
                        ? `
                          M 0,${barHeight}
                          v -${barHeightWithoutRadius}
                          q 0,-${borderRadius} ${borderRadius},-${borderRadius}
                          h ${barWidthWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},${borderRadius}
                          v ${barHeightWithoutRadius}
                          h -${barTotalWidth}
                          z`
                        : `
                          M 0,${barHeight}
                          v ${barHeightWithoutRadius}
                          q 0,${borderRadius} ${borderRadius},${borderRadius}
                          h ${barWidthWithoutRadius}
                          q ${borderRadius},0 ${borderRadius},-${borderRadius}
                          v -${barHeightWithoutRadius}
                          h -${barTotalWidth}
                          z`
                    }
                    fill={colorPalette[0]}
                    opacity={barOpacity}
                    stroke={useBarBorder ? barBorderColor : ""}
                    strokeOpacity={barBorderOpacity}
                    strokeWidth={useBarBorder ? barBorderWidth : "0"}
                    className={useAnimation ? (renderType.includes("grow") ? styles.growBar : renderType === "fade" ? styles.fadeBar : "") : ""}
                    style={{
                      "--animation-duration": `${renderType === "grow" ? renderDuration * valueRatio : renderDuration}s`
                    }}
                  />
                ) : (
                  <rect
                    width={
                      horizontal ? (useMinHeight ? (barHeight < minHeight ? minHeight : barHeight) : barHeight) : halfBarRealWidth + halfBarRealWidth
                    }
                    height={
                      horizontal ? halfBarRealWidth + halfBarRealWidth : useMinHeight ? (barHeight < minHeight ? minHeight : barHeight) : barHeight
                    }
                    transform={
                      horizontal
                        ? `translate(${nowData.value >= 0 ? 0 : -(useMinHeight ? (barHeight < minHeight ? minHeight : barHeight) : barHeight)})`
                        : `translate(0,${nowData.value >= 0 ? 0 : useMinHeight ? (barHeight < minHeight ? minHeight : barHeight) : 0})`
                    }
                    fill={colorPalette[0]}
                    opacity={barOpacity}
                    rx={borderRadius}
                    ry={borderRadius}
                    stroke={useBarBorder ? barBorderColor : ""}
                    strokeOpacity={barBorderOpacity}
                    strokeWidth={useBarBorder ? barBorderWidth : "0"}
                  ></rect>
                )}
                {useLabel && realHeight > labelInvisibleHeight && (
                  <g>
                    <text
                      fontSize={labelSize}
                      fontWeight={labelWeight}
                      fill={labelColor}
                      opacity={labelOpacity}
                      dominantBaseline={
                        horizontal ? "middle" : labelPosition === "over" ? "ideographic" : labelPosition === "under" ? "hanging" : "middle"
                      }
                      textAnchor={horizontal ? (labelPosition === "over" ? "start" : labelPosition === "under" ? "end" : "middle") : "middle"}
                      transform={
                        horizontal
                          ? `translate(${
                              labelPosition === "over"
                                ? (nowData.value > 0 || (!reverse && nowData.value === 0) ? realHeight : 0) + labelMargin
                                : labelPosition === "under"
                                ? (nowData.value > 0 || (!reverse && nowData.value === 0) ? 0 : -realHeight) - labelMargin
                                : (nowData.value > 0 || (!reverse && nowData.value === 0) ? realHeight / 2 : -realHeight / 2) + 0
                            },${halfBarRealWidth})`
                          : `translate(${halfBarRealWidth},${
                              labelPosition === "over"
                                ? barHeight - (nowData.value > 0 || (!reverse && nowData.value === 0) ? realHeight : 0) - labelMargin
                                : labelPosition === "under"
                                ? barHeight + (nowData.value > 0 || (!reverse && nowData.value === 0) ? 0 : realHeight) + labelMargin
                                : barHeight + (nowData.value > 0 || (!reverse && nowData.value === 0) ? -realHeight / 2 : realHeight / 2)
                            })`
                      }
                    >
                      {reverse ? -nowData.value : nowData.value}
                    </text>
                  </g>
                )}
              </g>
            )
          );
        })}
      </g>
    </LabelValueCommon>
  );
};
/* eslint-enable complexity */

export { NormalBar };
