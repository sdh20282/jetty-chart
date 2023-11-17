import { useRef } from "react";

import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

import { checkNormalPyramid } from "../../common/pyramid-common/exception/check-normal-pyramid-exception";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import { checkBarBorderRadius } from "../../common/utils/exception/check-common-exception";

import styles from "./normal-pyramid.module.css";

/* eslint-disable complexity */
const NormalPyramid = ({
  data,
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
  animationSettings,
}) => {
  const prevBars = useRef({});
  const prevBarsTemp = useRef({});

  if (!data || data.length === 0) {
    return;
  }

  const result = checkNormalPyramid({
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
    animationSettings,
  });

  const { width, height, margin, innerMargin, padding, colorPalette, xReverse, yReverse } = result.normalSettings;
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
    labelInvisibleHeight,
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
    translateTimingFunction,
  } = result.animationSettings.barSettings;

  const scopeResult = autoScope
    ? getAutoScope({ data: data.flatMap((group) => group.arr.map((d) => (d.value >= 0 ? d.value : -d.value))) })
    : getUserScope({ maxScope, minScope });
  let display = true;

  // 양쪽으로 증가하는 피라미드 차트 구조
  const newScope = [...scopeResult.scope, ...scopeResult.scope.slice(0, scopeResult.scope.length - 1).reverse()];

  scopeResult.scope = newScope;
  const scopeMaxNum = scopeResult.scope[0]

  if (!autoScope && !scopeResult.display) {
    display = false;
    showTopScope = false;
  }

  const totalWidth = height - margin.bottom - margin.top;
  const totalHeight = width - margin.left - margin.right;
  const totalScope = scopeResult.maxScope - scopeResult.minScope;

  if (!autoScope && scopeResult.display) {
    innerMargin.top = scopeResult.topMarginRatio * totalHeight;
    innerMargin.bottom = scopeResult.bottomMarginRatio * totalHeight;
  }

  const drawWidth = totalWidth - padding - padding;
  const drawHeight = totalHeight - innerMargin.top - innerMargin.bottom;
  const lineHeight = drawHeight / (scopeResult.scope.length - 1);

  const barWidth = drawWidth / data.length;
  // 중앙을 기준으로 양쪽으로 증가하기 떄문에 계산한 barHeight의 절반만 증가
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

  const modifiedData = yReverse ? data.slice().reverse() : data;

  const keys = [];
  data.forEach(group => {
    group.arr.forEach(d => {
      if (!keys.includes(d.label)) {
        keys.push(d.label);
      }
    });
  });   

  return (
    <LabelValueCommon
      keys={keys}
      xAxis={modifiedData.map((d) => d.id)}
      yAxis={scopeResult.scope}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={{
        ...result.normalSettings,
        horizontal: true,
        totalWidth,
        totalHeight,
        xAxisInitialPosition: halfBarWidth,
        xAxisWidth: barWidth,
        yAxisHeight: lineHeight,
        showTopScope,
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
      <g transform={`translate(${innerMargin.bottom},${padding})`} className={styles.container}>
        {modifiedData.flatMap((group, groupIdx) => {
          return group.arr.map((d) => {
            const nowData = { ...d };

            const center = (drawWidth / data.length) * groupIdx + drawWidth / data.length / 2;
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

            const rectWidth = (barHeight + (barOnlyUpperRadius ? borderRadius : 0)) / 2;
            // const rectFill = (barHeight + (barOnlyUpperRadius ? borderRadius : 0)) / 2;

            const rectHeight = barTotalWidth;

            let checkPositive = nowData.label === keys[0];

            if (xReverse) {
              checkPositive = nowData.label === keys[1];
            } else {
              checkPositive = nowData.label === keys[0];
            }

            const marginText = borderRadius + labelMargin
            const horizontalLabelLocation =
              labelPosition === "over"
                ? nowData.value >= 0 ? 
                  (checkPositive ? 
                    (nowData.value >= scopeMaxNum * 0.8 ? realHeight / 2 - marginText : realHeight / 2 + marginText) 
                    : (nowData.value >= scopeMaxNum * 0.8 ? -realHeight / 2 + marginText : -realHeight / 2 - marginText))
                  : (checkPositive ? 
                    (-nowData.value >= scopeMaxNum * 0.8 ? realHeight / 2 - marginText : realHeight / 2 + marginText) 
                    : (-nowData.value >= scopeMaxNum * 0.8 ? -realHeight / 2 + marginText : -realHeight / 2 - marginText))
                : labelPosition === "under"
                  ? nowData.value >= 0 ? 
                    (checkPositive ? 
                      (nowData.value <= scopeMaxNum * 0.2 ? realHeight / 2 + marginText : marginText) 
                      : (nowData.value <= scopeMaxNum * 0.2 ? -realHeight / 2 - marginText : -marginText))
                    : (checkPositive ? 
                      (-nowData.value <= scopeMaxNum * 0.2 ? realHeight / 2 + marginText : marginText) 
                      : (-nowData.value <= scopeMaxNum * 0.2 ? -realHeight / 2 - marginText : -marginText))
                : nowData.value >= 0 ? 
                  (checkPositive ? 
                    (nowData.value <= scopeMaxNum * 0.2 ? realHeight / 2 + labelMargin : realHeight / 4 - borderRadius) 
                    : (nowData.value <= scopeMaxNum * 0.2 ? -realHeight / 2 - labelMargin : -realHeight / 4 + borderRadius))
                  : (checkPositive ? 
                    (-nowData.value <= scopeMaxNum * 0.2 ? realHeight / 2 + labelMargin : realHeight / 4 - borderRadius)
                    : (-nowData.value <= scopeMaxNum * 0.2 ? -realHeight / 2 - labelMargin : -realHeight / 4 + borderRadius))

            prevBarsTemp.current[nowData.label] = {
              center,
              width: halfBarRealWidth + halfBarRealWidth,
              height: rectHeight,
              zeroHeight,
              prevPosition: `translate(${zeroHeight}px,${center - halfBarRealWidth}px)`,
            };

            let useTranslate = false;
            let translate = { center: 0, width: 0, height: 0, zeroHeight: 0, prevPosition: "0px,0px" };

            if (translateBar) {
              if (prevBarsKeys.includes(String(nowData.label))) {
                translate = {
                  center: center - prevBars.current[nowData.label].center,
                  width: rectWidth - prevBars.current[nowData.label].width,
                  height: rectHeight - prevBars.current[nowData.label].height,
                  zeroHeight: zeroHeight - prevBars.current[nowData.label].zeroHeight,
                  prevPosition: prevBars.current[nowData.label].prevPosition,
                };
                useTranslate = true;
              }
            }

            return (
              display && (
                <g
                  key={"data-" + ms + "-" + group.id + "-" + nowData.label}
                  transform={
                    useAnimation && useTranslate
                      ? `translate(0px, 0px)`
                      : useAnimation && renderType.includes("grow")
                      ? `translate(${barOnlyUpperRadius ? (checkPositive ? zeroHeight - borderRadius : zeroHeight + borderRadius) : zeroHeight},${center - halfBarRealWidth})`
                      : `translate(${barOnlyUpperRadius ? (checkPositive ? zeroHeight : zeroHeight - borderRadius) : zeroHeight},${center - halfBarRealWidth})`
                  }
                  className={useAnimation && useTranslate ? styles.translateGroup : ""}
                  style={{
                    "--group-from": `${useTranslate ? (barOnlyUpperRadius ? (zeroHeight - translate.zeroHeight - borderRadius) : (zeroHeight - translate.zeroHeight)) : zeroHeight - translate.zeroHeight}px,${center - halfBarRealWidth}px`,
                    "--group-to": `${useTranslate ? (barOnlyUpperRadius ? (checkPositive ? zeroHeight - borderRadius : zeroHeight + borderRadius) : zeroHeight) : zeroHeight}px,${center - halfBarRealWidth}px`,
                    "--animation-duration": `${translateDuration}s`,
                    "--animation-timing-function": translateTimingFunction,
                    "--animation-delay": `${
                      translateStartDelay + translateItemDelay * (renderStartFrom === "left" ? groupIdx : data.length - 1 - groupIdx)
                    }s`,
                  }}
                >
                  <rect
                    width={rectWidth + borderRadius}
                    height={rectHeight}
                    clipPath={
                      barOnlyUpperRadius ? (checkPositive ? `inset(0px 0px 0px ${borderRadius}px)` : `inset(0px ${borderRadius}px 0px 0px)`) : ""
                    }
                    transform={
                      (useAnimation && renderType.includes("grow")) || (useAnimation && useTranslate)
                        ? ``
                        : `translate(${checkPositive ? (barOnlyUpperRadius ? -borderRadius : 0) : (barOnlyUpperRadius ? -rectWidth + borderRadius : -rectWidth)})`
                    }
                    fill={nowData.label === keys[0] ? colorPalette[0] : colorPalette[1]}
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
                      "--bar-from": useTranslate
                        ? `${barOnlyUpperRadius ? (checkPositive ? -borderRadius : borderRadius) : 0}px,0px`
                        : `${barOnlyUpperRadius ? (checkPositive ? -borderRadius : 0) : 0}px,0px`,
                      "--bar-to": `${checkPositive ? 0 : -rectWidth}px,0px`,
                      "--width-from": useTranslate ? `0px` : `0px`,
                      "--width-to": `${rectWidth}px`,
                      "--height-from": `${rectHeight}px`,
                      "--height-to": `${rectHeight}px`,
                      "--animation-duration": useTranslate
                        ? `${renderType === "grow" ? renderDuration * valueRatio : translateDuration}s`
                        : `${renderType === "grow" ? renderDuration * valueRatio : renderDuration}s`,
                      "--animation-delay": `${
                        (useTranslate ? translateStartDelay : renderStartDelay) +
                        (useTranslate ? translateItemDelay : renderItemDelay) * (renderStartFrom === "left" ? groupIdx : data.length - 1 - groupIdx)
                      }s`,
                      "--animation-timing-function": useTranslate ? translateTimingFunction : renderTimingFunction,
                    }}
                  ></rect>
                  {useLabel && realHeight > labelInvisibleHeight && (
                    <g
                      transform={
                        useAnimation && useTranslate
                          ? `translate(${horizontalLabelLocation},${halfBarRealWidth})`
                          : `translate(${horizontalLabelLocation},${halfBarRealWidth})`
                      }
                    >
                      <text
                        fontSize={labelSize}
                        fontWeight={labelWeight}
                        fill={labelColor}
                        opacity={labelOpacity}
                        dominantBaseline={"middle"}
                        textAnchor={
                          labelPosition === "over"
                            ? nowData.value >= 0
                              ? checkPositive
                                ? nowData.value >= scopeMaxNum * 0.8
                                  ? "end"
                                  : "start"
                                : nowData.value >= scopeMaxNum * 0.8
                                  ? "start"
                                  : "end"
                              : checkPositive
                                ? -nowData.value >= scopeMaxNum * 0.8
                                  ? "end"
                                  : "start"
                                : -nowData.value >= scopeMaxNum * 0.8
                                  ? "start"
                                  : "end"
                            : labelPosition === "under"
                              ? nowData.value >= 0
                                ? checkPositive
                                  ? "start"
                                  : "end"
                                : checkPositive
                                  ? "start"
                                  : "end"
                              : nowData.value >= 0
                                ? checkPositive
                                  ? "start"
                                  : "end"
                                : checkPositive
                                  ? "start"
                                  : "end"
                        }
                        
                        className={
                          textRender
                            ? useTranslate
                              ? styles.translateText
                              : textRenderType.includes("grow")
                              ? styles.growText
                              : textRenderType === "fade"
                              ? styles.fadeText
                              : ""
                            : ""
                        }
                        style={{
                          "--text-from": useTranslate
                            ? ``
                            : labelPosition === "over"
                            ? `${checkPositive ? -barHeight : 0}px,0px`
                            : labelPosition === "under"
                            ? `${checkPositive ? 0 : -barHeight}px,0px`
                            : `${checkPositive ? -barHeight / 2 : barHeight / 2}px,0px`,
                          "--text-to": useTranslate ? (labelPosition === "over" ? `` : labelPosition === "under" ? `` : ``) : `0px,0px`,
                          "--animation-duration": useTranslate
                            ? `${translateDuration}s`
                            : `${renderType === "grow" ? textRenderDuration * valueRatio : textRenderDuration}s`,
                          "--animation-delay": `${
                            (useTranslate ? translateStartDelay : textRenderStartDelay) +
                            (useTranslate ? translateItemDelay : textRenderItemDelay) *
                              (textRenderStartFrom === "left" ? groupIdx : data.length - 1 - groupIdx)
                          }s`,
                          "--animation-timing-function": useTranslate ? translateTimingFunction : textRenderTimingFunction,
                        }}
                      >
                        {nowData.value}
                      </text>
                    </g>
                  )}
                </g>
              )
            );
          });
        })}
      </g>
    </LabelValueCommon>
  );
};
/* eslint-enable complexity */

export { NormalPyramid };
