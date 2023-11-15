import { useRef } from "react";

import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

import { checkStackedBar } from "../../common/bar-common/exception/check-stacked-bar-exception";
import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
import {
  calculateBase,
  calculateBarBase,
  calculateStackedBarBase,
  calculateStackedLabelLocation,
} from "../../common/bar-common/utils/calculate-base-values";
import {
  calculateWarpperTransform,
  calculateBarWrapperTransform,
  calculateBarWrapperFrom,
  calculateBarWrapperTo,
  calculateBarTransform,
  calculateBarTo,
  calculateLabelTransform,
  calculateStackedBarFrom,
  calculateStackedLabelFrom,
  calculateStackedLabelTo,
} from "../../common/bar-common/utils/calculate-bar-positions";

import styles from "./stacked-bar.module.css";

/* eslint-disable complexity */
const StackedBar = ({
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
  bottomLegendSettings,
  topLegendSettings,
  legendSettings,
  barSettings,
  animationSettings,
}) => {
  const prevBars = useRef({});
  const prevBarsTemp = useRef({});

  const pervBarItem = useRef({});
  const prevBarItemTemp = useRef({});

  if (!data || data.length === 0) {
    return;
  }

  const result = checkStackedBar({
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
    bottomLegendSettings,
    topLegendSettings,
    legendSettings,
    barSettings,
    animationSettings,
  });

  const { width, height, margin, innerMargin, padding, reverse, horizontal, colorPalette, reverseOrder } = result.normalSettings;
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
    ? getAutoScope({
        data: data.map((d) =>
          d.value.reduce((acc, cur) => {
            return acc + cur;
          }, 0)
        ),
      })
    : getUserScope({ maxScope, minScope });
  let display = true;

  if (reverse) {
    scopeResult.scope.reverse();
  }

  if (!autoScope && !scopeResult.display) {
    display = false;
    showTopScope = false;
  }

  const { totalWidth, totalHeight, totalScope, drawWidth, drawHeight, lineHeight, barWidth, halfBarWidth, halfBarRealWidth, zeroHeight } =
    calculateBase({ horizontal, height, margin, width, scopeResult, autoScope, innerMargin, padding, length: data.length, barGap });

  const ms = new Date().valueOf();

  if (translateBar) {
    prevBars.current = { ...prevBarsTemp.current };
    prevBarsTemp.current = [];
    pervBarItem.current = { ...prevBarItemTemp.current };
    prevBarItemTemp.current = [];
  }

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
      <g transform={calculateWarpperTransform({ horizontal, reverse, innerMargin, padding })} className={styles.container}>
        {data.map((d, index) => {
          const nowData = { ...d };

          let nowTotalValue = nowData.value.reduce((acc, cur) => {
            return acc + cur;
          }, 0);

          if (reverse) {
            nowTotalValue = -nowTotalValue;
          }

          const { center, valueRatio, barHeight, borderRadius, realHeight, rectWidth, rectHeight, checkPositive } = calculateBarBase({
            horizontal,
            reverse,
            value: nowTotalValue,
            length: data.length,
            idx: index,
            drawWidth,
            drawHeight,
            useMinHeight: false,
            minHeight,
            totalScope,
            barBorderRadius: 0,
            barOnlyUpperRadius,
            halfBarRealWidth,
          });

          const nowGroupKey = `group-${index}`;

          prevBarsTemp.current[nowGroupKey] = {
            center,
            width: rectWidth,
            height: rectHeight,
            zeroHeight,
          };

          let useTranslate = false;
          let translate = { center: 0, width: 0, height: 0, zeroHeight: 0 };

          if (translateBar && useAnimation) {
            if (Object.keys(prevBars.current).includes(String(nowGroupKey))) {
              translate = {
                center: center - prevBars.current[nowGroupKey].center,
                width: rectWidth - prevBars.current[nowGroupKey].width,
                height: rectHeight - prevBars.current[nowGroupKey].height,
                zeroHeight: zeroHeight - prevBars.current[nowGroupKey].zeroHeight,
              };
              useTranslate = true;
            }
          }

          return (
            display && (
              <g
                key={"group-" + ms + "-" + index}
                transform={calculateBarWrapperTransform({
                  useAnimation,
                  useTranslate,
                  renderType,
                  horizontal,
                  zeroHeight,
                  center,
                  halfBarRealWidth,
                  drawHeight,
                  barHeight,
                })}
                className={useAnimation && useTranslate ? styles.translateGroup : ""}
                style={{
                  "--group-from": calculateBarWrapperFrom({
                    horizontal,
                    zeroHeight,
                    translate,
                    borderRadius,
                    center,
                    rectHeight,
                    rectWidth,
                    drawHeight,
                    barHeight,
                  }),
                  "--group-to": calculateBarWrapperTo({ horizontal, zeroHeight, translate, center, drawHeight, barHeight, halfBarRealWidth }),
                  "--animation-duration": `${translateDuration}s`,
                  "--animation-timing-function": translateTimingFunction,
                  "--animation-delay": `${translateStartDelay + translateItemDelay * (renderStartFrom === "left" ? index : data.length - 1 - index)}s`,
                }}
              >
                {nowData.value.map((d, idx) => {
                  let { nowHeight, nowPosition } = calculateStackedBarBase({
                    rectHeight: horizontal ? rectWidth : rectHeight,
                    values: nowData.value,
                    idx: horizontal ? nowData.value.length - 1 - idx : idx,
                    totalValue: nowTotalValue,
                    reverseOrder,
                  });

                  if (nowTotalValue < 0) {
                    nowPosition = -nowPosition;
                  }

                  if (reverse) {
                    nowPosition = -nowPosition;
                  }

                  const nowRectWidth = Math.abs(horizontal ? nowHeight : rectWidth);
                  const nowRectHeight = Math.abs(horizontal ? rectHeight : nowHeight);

                  const { horizontalLabelLocation, verticalLabelLocation } = calculateStackedLabelLocation({
                    barHeight,
                    realHeight,
                    checkPositive,
                    labelPosition,
                    labelMargin,
                    rectWidth: nowRectWidth,
                    rectHeight: nowRectHeight,
                    nowPosition,
                  });

                  const nowBarKey = `bar-${index}-${idx}`;

                  prevBarItemTemp.current[nowBarKey] = {
                    center,
                    width: nowRectWidth,
                    height: nowRectHeight,
                    zeroHeight,
                    position: nowPosition,
                    totalHeight: barHeight,
                  };

                  let useTranslate = false;
                  let translate = { center: 0, width: 0, height: 0, zeroHeight: 0, position: 0, totalHeight: 0 };

                  if (translateBar && useAnimation) {
                    if (Object.keys(pervBarItem.current).includes(nowBarKey)) {
                      translate = {
                        center: center - pervBarItem.current[nowBarKey].center,
                        width: nowRectWidth - pervBarItem.current[nowBarKey].width,
                        height: nowRectHeight - pervBarItem.current[nowBarKey].height,
                        zeroHeight: zeroHeight - pervBarItem.current[nowBarKey].zeroHeight,
                        position: nowPosition - pervBarItem.current[nowBarKey].position,
                        totalHeight: barHeight - pervBarItem.current[nowBarKey].totalHeight,
                      };
                      useTranslate = true;
                    }
                  }

                  return (
                    <g key={"rect-" + ms + "-" + index + "-" + idx}>
                      <rect
                        width={nowRectWidth}
                        height={nowRectHeight}
                        transform={calculateBarTransform({
                          useAnimation,
                          renderType,
                          useTranslate,
                          horizontal,
                          checkPositive,
                          barOnlyUpperRadius,
                          borderRadius,
                          barHeight,
                          nowPosition,
                        })}
                        fill={colorPalette[idx % colorPalette.length]}
                        fillOpacity={barOpacity}
                        rx={barBorderRadius}
                        ry={barBorderRadius}
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
                          "--bar-from": calculateStackedBarFrom({
                            useTranslate,
                            horizontal,
                            checkPositive,
                            borderRadius,
                            rectWidth,
                            translate,
                            barHeight,
                            barOnlyUpperRadius,
                            drawHeight,
                            zeroHeight,
                            nowPosition,
                          }),
                          "--bar-to": calculateBarTo({
                            useTranslate,
                            horizontal,
                            checkPositive,
                            borderRadius,
                            rectWidth,
                            translate,
                            barHeight,
                            barOnlyUpperRadius,
                            drawHeight,
                            zeroHeight,
                            nowPosition,
                          }),
                          "--width-from": useTranslate ? `${nowRectWidth - translate.width}px` : horizontal ? `0px` : `${nowRectWidth}px`,
                          "--width-to": `${nowRectWidth}px`,
                          "--height-from": useTranslate ? `${nowRectHeight - translate.height}px` : horizontal ? `${nowRectHeight}px` : `0px`,
                          "--height-to": `${nowRectHeight}px`,
                          "--animation-duration": useTranslate
                            ? `${translateDuration}s`
                            : `${renderType === "grow" ? renderDuration * valueRatio : renderDuration}s`,
                          "--animation-delay": `${
                            (useTranslate ? translateStartDelay : renderStartDelay) +
                            (useTranslate ? translateItemDelay : renderItemDelay) * (renderStartFrom === "left" ? index : data.length - 1 - index)
                          }s`,
                          "--animation-timing-function": useTranslate ? translateTimingFunction : renderTimingFunction,
                        }}
                      ></rect>
                      {useLabel && realHeight > labelInvisibleHeight && (
                        <g
                          transform={calculateLabelTransform({
                            useAnimation,
                            useTranslate,
                            horizontal,
                            horizontalLabelLocation,
                            halfBarRealWidth,
                            verticalLabelLocation,
                            renderType,
                            drawHeight,
                            barHeight,
                            zeroHeight,
                          })}
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
                              textRender && useAnimation
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
                              "--text-from": calculateStackedLabelFrom({
                                useTranslate,
                                horizontal,
                                labelPosition,
                                checkPositive,
                                rectWidth: nowRectWidth,
                                rectHeight: nowRectHeight,
                                translate,
                                barBorderRadius,
                                labelMargin,
                                borderRadius,
                                barHeight,
                                nowPosition,
                              }),
                              "--text-to": calculateStackedLabelTo({
                                useTranslate,
                                horizontal,
                                labelPosition,
                                checkPositive,
                                barHeight,
                                labelMargin,
                                translate,
                                halfBarRealWidth,
                                nowPosition,
                                rectWidth: nowRectWidth,
                                rectHeight: nowRectHeight,
                              }),
                              "--animation-duration": useTranslate
                                ? `${translateDuration}s`
                                : `${renderType === "grow" ? textRenderDuration * valueRatio : textRenderDuration}s`,
                              "--animation-delay": `${
                                (useTranslate ? translateStartDelay : textRenderStartDelay) +
                                (useTranslate ? translateItemDelay : textRenderItemDelay) *
                                  (textRenderStartFrom === "left" ? index : data.length - 1 - index)
                              }s`,
                              "--animation-timing-function": useTranslate ? translateTimingFunction : textRenderTimingFunction,
                            }}
                          >
                            {nowData.value[idx]}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            )
          );
        })}
      </g>
    </LabelValueCommon>
  );
};

export { StackedBar };
