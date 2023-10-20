import { checkMargin, checkSize } from "./check-common-exception";

const normalBarSetting = {
  // 기본 세팅
  normalSettings: {
    width: 400,
    height: 280,
    backgroundColor: "#fff",
    margin: { top: 50, bottom: 40, left: 60, right: 60 },
    padding: 10,
    reverse: false,
    horizontal: false
  },
  // 범위 세팅
  scopeSettings: {
    autoScope: true,
    maxScope: 100,
    minScope: 0,
    showTopScope: true
  },
  // y축 라인 세팅
  axisYGridLineSettings: {
    lineVisible: true,
    lineOpacity: 1,
    lineColor: "#c4c4c4",
    lineWidth: 1,
    lineDash: false,
    lineDashWidth: 5,
    lineDashGap: 3,
    lineRound: false
  },
  // x축 라인 세팅
  axisXGridLineSettings: {
    lineVisible: false,
    lineOpacity: 1,
    lineColor: "#c4c4c4",
    lineWidth: 1,
    lineDash: false,
    lineDashWidth: 5,
    lineDashGap: 3,
    lineRound: false,
    showEndLine: false
  },
  // 왼쪽 라벨 세팅
  leftLabelSettings: {
    useLabel: true,
    labelOnLeft: true,
    labelMargin: 12,
    labelSize: 11,
    labelWeight: 500,
    labelColor: "#777",
    sideLineMargin: 7,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2
  },
  // 오른쪽 라벨 세팅
  rightLabelSettings: {
    useLabel: false,
    labelOnLeft: false,
    labelMargin: 12,
    labelSize: 11,
    labelWeight: 500,
    labelColor: "#777",
    sideLineMargin: 7,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2
  },
  // 아래쪽 라벨 세팅
  bottomLabelSettings: {
    useLabel: true,
    labelOnBottom: true,
    labelMargin: 14,
    labelSize: 11,
    labelWeight: 500,
    labelColor: "#777",
    sideLineMargin: 8,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2
  },
  // 위쪽 라벨 세팅
  topLabelSettings: {
    useLabel: false,
    labelOnBottom: false,
    labelMargin: 14,
    labelSize: 11,
    labelWeight: 500,
    labelColor: "#777",
    sideLineMargin: 8,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2
  },
  // 바 세팅
  barSettings: {
    barColor: "#66d8fe",
    barGap: 0.15,
    barOnlyUpperRadus: true,
    useBarBorderRadius: true,
    barBorderRadius: 5,
    useBarBorder: false,
    barBorderWidth: 2,
    barBorderColor: "#c4c4c4"
  }
};

export const checkNormalBar = ({
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  barSettings
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
    barSettings
  };

  Object.keys(normalBarSetting).forEach((setting) => {
    result[setting] ??= {};

    Object.keys(normalBarSetting[setting]).forEach((detail) => {
      result[setting][detail] ??= normalBarSetting[setting][detail];
    });
  });

  result.normalSettings.margin = checkMargin({ margin: result.normalSettings.margin });

  const checkedSize = checkSize({
    width: result.normalSettings.width,
    height: result.normalSettings.height,
    margin: result.normalSettings.margin,
    padding: result.normalSettings.padding
  });

  result.normalSettings.width = checkedSize.width;
  result.normalSettings.height = checkedSize.height;
  result.normalSettings.margin = checkedSize.margin;
  result.normalSettings.padding = checkedSize.padding;

  return result;
};
