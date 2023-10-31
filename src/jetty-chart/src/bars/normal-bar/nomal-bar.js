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

  const {
    useAnimation,
    renderType,
    renderDuration,
    renderStartDelay,
    renderItemDelay,
    renderTimingFunction,
    renderStartFrom,
    textRender,
    textRenderType,
    textRenderDuration,
    textRenderStartDelay,
    textRenderItemDelay,
    textRenderTimingFunction,
    textRenderStartFrom,
    translateBar,
    translateDuration,
    translateStartDelay,
    translateItemDelay,
    translateTimingFunction
  } = result.animationSettings.barSettings;

  const scopeResult = autoScope ? getAutoScope({ data: data.map((d) => d.value) }) : getUserScope({ maxScope, minScope });
  let display = true;

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

          const borderRadius = checkBarBorderRadius({ halfWidth: halfBarRealWidth, height: barHeightWithoutRadius, borderRadius: barBorderRadius });
          const barTotalWidth = halfBarRealWidth + halfBarRealWidth;
          const realHeight = barHeightWithoutRadius + borderRadius;

          prevBarsTemp.current[nowData.label] = { center, halfWidth: halfBarRealWidth, height: barHeightWithoutRadius, zeroHeight };

          let useTranslate = false;
          let translate = { center: 0, halfWidth: 0, height: 0 };

          if (translateBar) {
            if (prevBarsKeys.includes(String(nowData.label))) {
              translate = {
                center: center - prevBars.current[nowData.label].center,
                halfWidth: prevBars.current[nowData.label].halfWidth,
                height: prevBars.current[nowData.label].height,
                zeroHeight: zeroHeight - prevBars.current[nowData.label].zeroHeight
              };
              useTranslate = true;
            }
          }

          if (useTranslate) {
            console.log(translate, prevBars.current[nowData.label]);
          }

          const rectWidth = horizontal ? barHeight + (barOnlyUpperRadius ? borderRadius : 0) : barTotalWidth;
          const rectHeight = horizontal ? barTotalWidth : barHeight + (barOnlyUpperRadius ? borderRadius : 0);
          const checkPositive = nowData.value > 0 || (!reverse && nowData.value === 0);
          const horizontalLabelLocation =
            labelPosition === "over"
              ? (checkPositive ? realHeight : 0) + labelMargin
              : labelPosition === "under"
              ? (checkPositive ? 0 : -realHeight) - labelMargin
              : checkPositive
              ? realHeight / 2
              : -realHeight / 2;
          const verticalLabelLocation =
            labelPosition === "over"
              ? barHeight - (checkPositive ? realHeight : 0) - labelMargin
              : labelPosition === "under"
              ? barHeight + (checkPositive ? 0 : realHeight) + labelMargin
              : barHeight + (checkPositive ? -realHeight / 2 : realHeight / 2);

          return (
            display && (
              <g
                key={"data-" + ms + "-" + nowData.label}
                transform={
                  useAnimation && useTranslate
                    ? ""
                    : useAnimation && renderType.includes("grow")
                    ? horizontal
                      ? `translate(${zeroHeight},${center - halfBarRealWidth})`
                      : `translate(${center - halfBarRealWidth})`
                    : horizontal
                    ? `translate(${zeroHeight},${center - halfBarRealWidth})`
                    : `translate(${center - halfBarRealWidth},${drawHeight - barHeight - zeroHeight})`
                }
                className={useAnimation && useTranslate ? styles.translateGroup : ""}
                style={{
                  "--group-from": horizontal
                    ? `${zeroHeight - translate.zeroHeight}px,${center - translate.center - halfBarRealWidth}px`
                    : `${center - translate.center - halfBarRealWidth}px,${drawHeight - barHeight - zeroHeight - translate.zeroHeight}px`,
                  "--group-to": horizontal
                    ? `${zeroHeight}px,${center - halfBarRealWidth}px`
                    : `${center - halfBarRealWidth}px,${drawHeight - barHeight - zeroHeight}px`,
                  "--animation-duration": `${translateDuration}s`,
                  "--animation-timing-function": translateTimingFunction,
                  "--animation-delay": `${translateStartDelay + translateItemDelay * (renderStartFrom === "left" ? idx : data.length - 1 - idx)}s`
                }}
              >
                <rect
                  width={rectWidth}
                  height={rectHeight}
                  clipPath={
                    barOnlyUpperRadius
                      ? horizontal
                        ? checkPositive
                          ? `inset(0px 0px 0px ${borderRadius}px)`
                          : `inset(0px ${borderRadius}px 0px 0px)`
                        : checkPositive
                        ? `inset(0px 0px ${borderRadius}px 0px)`
                        : `inset(${borderRadius}px 0px 0px 0px)`
                      : ""
                  }
                  transform={
                    useAnimation && renderType.includes("grow")
                      ? ""
                      : horizontal
                      ? `translate(${checkPositive ? (barOnlyUpperRadius ? -borderRadius : 0) : -barHeight})`
                      : `translate(0,${checkPositive ? 0 : barHeight - (barOnlyUpperRadius ? borderRadius : 0)})`
                  }
                  fill={colorPalette[0]}
                  opacity={barOpacity}
                  rx={borderRadius}
                  ry={borderRadius}
                  stroke={useBarBorder ? barBorderColor : ""}
                  strokeOpacity={barBorderOpacity}
                  strokeWidth={useBarBorder ? barBorderWidth : "0"}
                  className={
                    useAnimation
                      ? useTranslate
                        ? styles.translateBar
                        : renderType.includes("grow")
                        ? styles.growBar
                        : renderType === "fade"
                        ? styles.fadeBar
                        : ""
                      : ""
                  }
                  style={{
                    "--bar-from": horizontal
                      ? `${barOnlyUpperRadius ? (checkPositive ? -borderRadius : borderRadius) : 0}px,0px`
                      : `0px,${drawHeight - zeroHeight + (barOnlyUpperRadius ? (checkPositive ? borderRadius : -borderRadius) : 0)}px`,
                    "--bar-to": horizontal
                      ? `${checkPositive ? (barOnlyUpperRadius ? -borderRadius : 0) : -barHeight}px,0px`
                      : `0px,${drawHeight - zeroHeight - (checkPositive ? barHeight : barOnlyUpperRadius ? borderRadius : 0)}px`,
                    "--width-from": useTranslate ? `${translate.halfWidth + translate.halfWidth}px` : horizontal ? `0px` : `${rectWidth}px`,
                    "--width-to": horizontal ? `${rectWidth}px` : `${rectWidth}px`,
                    "--height-from": useTranslate ? `${translate.height}px` : horizontal ? `${rectHeight}px` : `0px`,
                    "--height-to": horizontal ? `${rectHeight}px` : `${rectHeight}px`,
                    "--animation-duration": `${renderType === "grow" ? renderDuration * valueRatio : renderDuration}s`,
                    "--animation-delay": `${renderStartDelay + renderItemDelay * (renderStartFrom === "left" ? idx : data.length - 1 - idx)}s`,
                    "--animation-timing-function": renderTimingFunction
                  }}
                ></rect>
                {useLabel && realHeight > labelInvisibleHeight && (
                  <g
                    transform={
                      horizontal
                        ? `translate(${horizontalLabelLocation},${halfBarRealWidth})`
                        : `translate(${halfBarRealWidth},${
                            verticalLabelLocation + (useAnimation && renderType.includes("grow") ? drawHeight - barHeight - zeroHeight : 0)
                          })`
                    }
                  >
                    <text
                      fontSize={labelSize}
                      fontWeight={labelWeight}
                      fill={labelColor}
                      opacity={labelOpacity}
                      dominantBaseline={
                        horizontal ? "middle" : labelPosition === "over" ? "ideographic" : labelPosition === "under" ? "hanging" : "middle"
                      }
                      textAnchor={horizontal ? (labelPosition === "over" ? "start" : labelPosition === "under" ? "end" : "middle") : "middle"}
                      className={
                        textRender
                          ? useTranslate
                            ? ""
                            : textRenderType.includes("grow")
                            ? styles.growText
                            : textRenderType === "fade"
                            ? styles.fadeText
                            : ""
                          : ""
                      }
                      style={{
                        "--text-from": horizontal
                          ? labelPosition === "over"
                            ? `${checkPositive ? -barHeight : 0}px,0px`
                            : labelPosition === "under"
                            ? `${checkPositive ? 0 : barHeight}px,0px`
                            : `${checkPositive ? -barHeight / 2 : barHeight / 2}px,0px`
                          : labelPosition === "over"
                          ? `0px,${checkPositive ? barHeight : 0}px`
                          : labelPosition === "under"
                          ? `0px,${checkPositive ? 0 : -barHeight}px`
                          : `0px,${checkPositive ? barHeight / 2 : -barHeight / 2}px`,
                        "--text-to": `0px,0px`,
                        "--animation-duration": `${renderType === "grow" ? textRenderDuration * valueRatio : textRenderDuration}s`,
                        "--animation-delay": `${
                          textRenderStartDelay + textRenderItemDelay * (textRenderStartFrom === "left" ? idx : data.length - 1 - idx)
                        }s`,
                        "--animation-timing-function": textRenderTimingFunction
                      }}
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
