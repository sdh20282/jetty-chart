// import { useRef } from "react";

// import { LabelValueCommon } from "../../components/label-value-common/label-value-common";

// import { checkStackedBar } from "../../common/bar-common/exception/check-stacked-bar-exception";
// import { getAutoScope, getUserScope } from "../../common/utils/scope/calculate-scope";
// import { calculateBase, calculateBarBase, calculateLabelLocation } from "../../common/bar-common/utils/calculate-base-values";

// const StackedBar = ({
//   data,
//   keys,
//   xLegend,
//   yLegend,
//   normalSettings,
//   scopeSettings,
//   axisXGridLineSettings,
//   axisYGridLineSettings,
//   leftLabelSettings,
//   rightLabelSettings,
//   bottomLabelSettings,
//   topLabelSettings,
//   leftLegendSettings,
//   rightLegendSettings,
//   legendSettings,
//   barSettings,
//   animationSettings
// }) => {
//   const prevBars = useRef({});
//   const prevBarsTemp = useRef({});

//   if (!data || data.length === 0) {
//     return;
//   }

//   const result = checkStackedBar({
//     normalSettings,
//     scopeSettings,
//     axisXGridLineSettings,
//     axisYGridLineSettings,
//     leftLabelSettings,
//     rightLabelSettings,
//     bottomLabelSettings,
//     topLabelSettings,
//     leftLegendSettings,
//     rightLegendSettings,
//     legendSettings,
//     barSettings,
//     animationSettings
//   });

//   const { width, height, margin, innerMargin, padding, reverse, horizontal, colorPalette, useVariousColors } = result.normalSettings;
//   const { autoScope, maxScope, minScope } = result.scopeSettings;
//   let { showTopScope } = result.scopeSettings;
//   const {
//     barOpacity,
//     barGap,
//     barOnlyUpperRadius,
//     barBorderRadius,
//     useBarBorder,
//     barBorderWidth,
//     barBorderColor,
//     barBorderOpacity,
//     useMinHeight,
//     minHeight,
//     useLabel,
//     labelPosition,
//     labelMargin,
//     labelSize,
//     labelWeight,
//     labelOpacity,
//     labelColor,
//     labelInvisibleHeight
//   } = result.barSettings;

//   const {
//     useAnimation,
//     renderType,
//     renderDuration,
//     renderStartDelay,
//     renderItemDelay,
//     renderTimingFunction,
//     renderStartFrom,
//     textRender,
//     textRenderType,
//     textRenderDuration,
//     textRenderStartDelay,
//     textRenderItemDelay,
//     textRenderTimingFunction,
//     textRenderStartFrom,
//     translateBar,
//     translateDuration,
//     translateStartDelay,
//     translateItemDelay,
//     translateTimingFunction
//   } = result.animationSettings.barSettings;

//   const scopeResult = autoScope
//     ? getAutoScope({
//         data: data.map((d) =>
//           d.value.reduce((acc, cur) => {
//             return acc + cur;
//           }, 0)
//         )
//       })
//     : getUserScope({ maxScope, minScope });
//   let display = true;

//   if (reverse) {
//     scopeResult.scope.reverse();
//   }

//   if (!autoScope && !scopeResult.display) {
//     display = false;
//     showTopScope = false;
//   }

//   const { totalWidth, totalHeight, totalScope, drawWidth, drawHeight, lineHeight, barWidth, halfBarWidth, halfBarRealWidth, zeroHeight } =
//     calculateBase({ horizontal, height, margin, width, scopeResult, autoScope, innerMargin, padding, length: data.length, barGap });

//   const prevBarsKeys = Object.keys(prevBars.current);
//   const ms = new Date().valueOf();

//   if (translateBar) {
//     prevBars.current = { ...prevBarsTemp.current };
//     prevBarsTemp.current = [];
//   }

//   return (
//     <LabelValueCommon
//       keys={keys}
//       xAxis={data.map((d) => d.label)}
//       yAxis={scopeResult.scope}
//       xLegend={xLegend}
//       yLegend={yLegend}
//       normalSettings={{
//         ...result.normalSettings,
//         totalWidth,
//         totalHeight,
//         xAxisInitialPosition: halfBarWidth,
//         xAxisWidth: barWidth,
//         yAxisHeight: lineHeight,
//         showTopScope
//       }}
//       axisXGridLineSettings={result.axisXGridLineSettings}
//       axisYGridLineSettings={result.axisYGridLineSettings}
//       leftLabelSettings={result.leftLabelSettings}
//       rightLabelSettings={result.rightLabelSettings}
//       bottomLabelSettings={result.bottomLabelSettings}
//       topLabelSettings={result.topLabelSettings}
//       leftLegendSettings={result.leftLegendSettings}
//       rightLegendSettings={result.rightLegendSettings}
//       bottomLegendSettings={result.bottomLegendSettings}
//       topLegendSettings={result.topLegendSettings}
//       legendSettings={result.legendSettings}
//       animationSettings={result.animationSettings}
//     ></LabelValueCommon>
//   );
// };

// export { StackedBar };
