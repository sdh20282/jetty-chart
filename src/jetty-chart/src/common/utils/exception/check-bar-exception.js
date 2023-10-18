import { checkPadding, checkSize } from "./check-common-exception";

const normalBarSetting = {
  generalSettings: {
    width: 500,
    height: 300,
    backgroundColor: "#fff",
    padding: { top: 40, bottom: 40, left: 60, right: 60 },
    reverse: false,
    horizontal: false
  },
  levelSettings: {
    lineVisible: true,
    lineOpacity: 1,
    lineColor: "#c4c4c4",
    lineWidth: 1,
    lineDash: false,
    lineDashWidth: 5,
    lineDashGap: 3,
    levelAutoScope: true,
    levelMaxScope: 100,
    levelMinScope: 0,
    levelTextGap: 10,
    levelTextSize: 11,
    levelTextWeight: 500,
    levelTextColor: "#777",
    levelTextMargin: 4,
    levelLineVisible: true,
    levelLineOpacity: 1,
    levelLineColor: "#aaa",
    levelLineWidth: 2,
    showTopLevel: true
  },
  barSettings: {
    chartPadding: 5,
    barColor: "#8EA3BC",
    barGap: 0.15,
    barOnlyUpperRadus: true,
    barBorderRadius: 5,
    categoryTextOnBottom: true,
    categoryTextGap: 14,
    categoryTextSize: 11,
    categoryTextWeight: 500,
    categoryTextColor: "#777",
    categoryTextMargin: 8,
    categoryLineVisible: true,
    categoryLineOpacity: 1,
    categoryLineColor: "#aaa",
    categoryLineWidth: 2
  }
};

export const checkNormalBar = ({ generalSettings, levelSettings, barSettings }) => {
  const result = { generalSettings, levelSettings, barSettings };

  Object.keys(normalBarSetting).forEach((setting) => {
    result[setting] ??= {};

    Object.keys(normalBarSetting[setting]).forEach((detail) => {
      result[setting][detail] ??= normalBarSetting[setting][detail];
    });
  });

  result.generalSettings.padding = checkPadding({ padding: result.generalSettings.padding });

  const checkedSize = checkSize({
    width: result.generalSettings.width,
    height: result.generalSettings.height,
    padding: result.generalSettings.padding,
    chartPadding: result.barSettings.chartPadding
  });

  result.generalSettings.width = checkedSize.width;
  result.generalSettings.height = checkedSize.height;
  result.generalSettings.padding = checkedSize.padding;
  result.barSettings.chartPadding = checkedSize.chartPadding;

  return result;
};
