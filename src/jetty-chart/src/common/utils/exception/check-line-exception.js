import { checkSize } from "./check-common-exception";

const checkMargin = ({ margin }) => {
  margin.top ??= 60;
  margin.bottom ??= 70;
  margin.left ??= 80;
  margin.right ??= 120;

  return margin;
};

const checkInnerMargin = ({ innerMargin }) => {
  innerMargin.top ??= 0;
  innerMargin.bottom ??= 0;

  return innerMargin;
};

const normalLineSetting = {
  // 기본 세팅
  normalSettings: {
    width: 500,
    height: 400,
    backgroundColor: "#fff",
    margin: { top: 60, bottom: 70, left: 80, right: 100 },
    innerMargin: { top: 0, bottom: 0 },
    colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
    padding: 0,
    reverse: false,
    horizontal: false,
  },
  // 범위 세팅
  scopeSettings: {
    autoScope: true,
    maxScope: 700,
    minScope: -100,
    showTopScope: false,
  },
  // y축 라인 세팅
  axisYGridLineSettings: {
    lineVisible: true,
    lineOpacity: 1,
    lineColor: "#d4d4d4",
    lineWidth: 1,
    lineDash: false,
    lineDashWidth: 5,
    lineDashGap: 3,
    lineRound: false,
  },
  // x축 라인 세팅
  axisXGridLineSettings: {
    lineVisible: true,
    lineOpacity: 1,
    lineColor: "#d4d4d4",
    lineWidth: 1,
    lineDash: false,
    lineDashWidth: 5,
    lineDashGap: 3,
    lineRound: false,
    showEndLine: false,
  },
  // 왼쪽 라벨 세팅
  leftLabelSettings: {
    useLabel: true,
    labelOnLeft: true,
    labelMargin: 5,
    labelSize: 12,
    labelWeight: 500,
    labelOpacity: 1,
    labelColor: "#777",
    labelRotate: 0,
    labelMove: 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 오른쪽 라벨 세팅
  rightLabelSettings: {
    useLabel: false,
    labelOnLeft: false,
    labelMargin: 5,
    labelSize: 12,
    labelWeight: 500,
    labelOpacity: 1,
    labelColor: "#777",
    labelRotate: 0,
    labelMove: 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 아래쪽 라벨 세팅
  bottomLabelSettings: {
    useLabel: true,
    labelOnBottom: true,
    labelMargin: 5,
    labelSize: 12,
    labelWeight: 500,
    labelOpacity: 1,
    labelColor: "#777",
    labelRotate: 0,
    labelMove: 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 위쪽 라벨 세팅
  topLabelSettings: {
    useLabel: false,
    labelOnBottom: false,
    labelMargin: 5,
    labelSize: 12,
    labelWeight: 500,
    labelOpacity: 1,
    labelColor: "#777",
    labelRotate: 0,
    labelMove: 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 왼쪽 설명 세팅
  leftLegendSettings: {
    useLegend: true,
    legendOnLeft: true,
    legendMargin: 50,
    legendSize: 14,
    legendWeight: 700,
    legendOpacity: 1,
    legendColor: "#333",
    legendReverse: false,
    legendMove: 0,
  },
  // 오른쪽 설명 세팅
  rightLegendSettings: {
    useLegend: false,
    legendOnLeft: false,
    legendMargin: 40,
    legendSize: 14,
    legendWeight: 700,
    legendOpacity: 1,
    legendColor: "#333",
    legendReverse: false,
    legendMove: 0,
  },
  // 아래쪽 설명 세팅
  bottomLegendSettings: {
    useLegend: true,
    legendOnBottom: true,
    legendMargin: 40,
    legendSize: 14,
    legendWeight: 700,
    legendOpacity: 1,
    legendColor: "#333",
    legendReverse: false,
    legendMove: 0,
  },
  // 위쪽 설명 세팅
  topLegendSettings: {
    useLegend: false,
    legendOnBottom: false,
    legendMargin: 40,
    legendSize: 14,
    legendWeight: 700,
    legendOpacity: 1,
    legendColor: "#333",
    legendReverse: false,
    legendMove: 0,
  },
  // 설명 세팅
  legendSettings: {
    useLegend: true,
    position: "bottom-right", // bottom center top - left center right
    xLocation: 20,
    yLocation: 0,
    directionColumn: true,
    itemWidth: 80,
    itemMargin: 2,
    symbolSize: 16,
    symbolRadius: 3,
    symbolMargin: 5,
    symbolOpacity: 1,
    legendSize: 12,
    legendWeight: 400,
    legendOpacity: 1,
    legendColor: "#aaa",
    legendOnStart: true,
  },
  // 라인 세팅
  lineSettings: {
    lineOpacity: 1,
    lineWidth: 2,
    enablePoint: true,
    pointColor: null,
    pointSize: 2,
    pointBorderColor: "#666",
    pointBorderWidth: 2,
    enablePointLabel: false,
    showLabelOnHover: false,
    pointLabelColor: "#000",
    pointLabelSize: 12,
    pointLabelOffsetX: 0,
    pointLabelOffsetY: -10,
    pointLabelWeight: 500,
    enableArea: false,
    areaColor: null,
    areaOpacity: 0.5,
    enableCurve: false,
    smoothDegree: 0.15,
    angleDegree: 1,
    strokeLinejoin: "miter", // "miter" | "round" | "bevel"
    strokeLinecap: "butt", // "butt" | "round" | "square"
  },
  animationSettings: {
    axisYGridLineSettings: {
      useAnimation: true,
      renderType: "draw",
      renderDuration: 0.4,
      renderStartDelay: 0,
      renderItemDelay: 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: "left-bottom",
      translateLine: true,
      translateDuration: 0.3,
      translateStartDelay: 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXGridLineSettings: {
      useAnimation: true,
      renderType: "draw", // draw, fade
      renderDuration: 0.4,
      renderStartDelay: 0,
      renderItemDelay: 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: "left-bottom",
      translateLine: true,
      translateDuration: 0.3,
      translateStartDelay: 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisYLabelSettings: {
      useAnimation: true,
      renderType: "fade", // fade
      renderDuration: 0.4,
      renderStartDelay: 0,
      renderItemDelay: 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: "bottom",
      translateLabel: true,
      translateDuration: 0.3,
      translateStartDelay: 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXLabelSettings: {
      useAnimation: true,
      renderType: "fade", // fade
      renderDuration: 0.4,
      renderStartDelay: 0,
      renderItemDelay: 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: "left",
      translateLabel: true,
      translateDuration: 0.3,
      translateStartDelay: 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    generalSettings: {
      useAnimation: true,
      useGridAnimation: true,
      renderReverse: false,
      // renderLineSingly: true,
      translateReverse: false,
    },
    lineSettings: {
      useLineAnimation: true,
      lineRenderType: "draw",
      lineRenderDuration: 1,
      lineRenderStartDelay: 0,
      lineRenderItemDelay: 0,
      lineRenderTimingFunction: "ease",
      translateLine: true,
      translateLineItemDelay: 0,
      translateLineDuration: 0.5,
      translateLineStartDelay: 0,
      translateLineTimingFunction: "ease",
    },
    pointSettings: {
      usePointAnimation: true,
      pointRenderType: "draw",
      pointRenderDuration: 0.5,
      pointLineRenderDuration: 1,
      pointRenderStartDelay: 0,
      pointRenderItemDelay: 0,
      pointRenderTimingFunction: "ease",
      translatePoint: true,
      translatePointItemDelay: 0,
      translatePointDuration: 0.5,
      translatePointStartDelay: 0,
      translatePointTimingFunction: "ease",
    },
    areaSettings: {
      useAreaAnimation: true,
      areaRenderType: "draw",
      areaRenderDuration: 1,
      areaRenderStartDelay: 0,
      areaRenderItemDelay: 0,
      areaRenderTimingFunction: "ease",
      translateArea: true,
      translateAreaItemDelay: 0,
      translateAreaDuration: 0.5,
      translateAreaStartDelay: 0,
      translateAreaTimingFunction: "ease",
    },
  },
};

export const checkNormalLine = ({
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
  lineSettings,
  animationSettings,
}) => {
  const result = {
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
    lineSettings,
    animationSettings,
  };

  Object.keys(normalLineSetting).forEach((setting) => {
    result[setting] ??= {};

    if (setting === "animationSettings") {
      Object.keys(normalLineSetting[setting]).forEach((animation) => {
        result[setting][animation] ??= {};

        Object.keys(normalLineSetting[setting][animation]).forEach((detail) => {
          result[setting][animation][detail] ??= normalLineSetting[setting][animation][detail];
        });
      });
    } else {
      Object.keys(normalLineSetting[setting]).forEach((detail) => {
        result[setting][detail] ??= normalLineSetting[setting][detail];
      });
    }
  });

  result.normalSettings.margin = checkMargin({ margin: result.normalSettings.margin });
  result.normalSettings.innerMargin = checkInnerMargin({ innerMargin: result.normalSettings.innerMargin });

  const checkedSize = checkSize({
    width: result.normalSettings.width,
    height: result.normalSettings.height,
    margin: result.normalSettings.margin,
    padding: result.normalSettings.padding,
  });

  result.normalSettings.width = checkedSize.width;
  result.normalSettings.height = checkedSize.height;
  result.normalSettings.margin = checkedSize.margin;
  result.normalSettings.padding = checkedSize.padding;

  return result;
};
