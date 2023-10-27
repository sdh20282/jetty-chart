import { checkMargin, checkSize } from "./check-common-exception";

const normalPointSetting = {
  // 기본 세팅
  normalSettings: {
    width: 400,
    height: 280,
    backgroundColor: "#fff",
    margin: { top: 50, bottom: 40, left: 60, right: 60 },
    padding: 0,
    xReverse: false,
    yReverse: false,
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
    lineVisible: true,
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
  pointSettings: {
    pointSize: 1,
    pointColor: "#8EA3BC",
    pointBorderColor: "#666",
    pointBorderWidth: 2,
    enablePointLabel: true,
    pointLabelColor: "#666",
    pointLabelSize: 8,
    pointLabelOffsetX: 0,
    pointLabelOffsetY: -10,
    pointLabelWeight: 500,
    enableArea: false,
    areaOpacity: 0.5
  }
};

export const checkNormalPoint = ({
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  pointSettings
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
    pointSettings
  };

  Object.keys(normalPointSetting).forEach((setting) => {
    result[setting] ??= {};

    Object.keys(normalPointSetting[setting]).forEach((detail) => {
      result[setting][detail] ??= normalPointSetting[setting][detail];
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
