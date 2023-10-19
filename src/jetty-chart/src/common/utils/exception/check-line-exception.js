import { checkPadding, checkSize } from "./check-common-exception";

const normalLineSetting = {
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
  lineSettings: {
    chartPadding: 5,
    lineColor: "#8EA3BC",
    lineWidth: 2,
    pointSize: 2,
    pointColor: "#8EA3BC",
    pointBorderColor: "#666",
    pointBorderWidth: 2,
    lineOnlyUpperRadius: true,
    lineBorderRadius: 5,
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

export const checkNormalLine = ({ generalSettings, levelSettings, lineSettings }) => {
  const result = { generalSettings, levelSettings, lineSettings };

  Object.keys(normalLineSetting).forEach((setting) => {
    result[setting] ??= {};

    Object.keys(normalLineSetting[setting]).forEach((detail) => {
      result[setting][detail] ??= normalLineSetting[setting][detail];
    });
  });

  result.generalSettings.padding = checkPadding({
    padding: result.generalSettings.padding
  });

  const checkedSize = checkSize({
    width: result.generalSettings.width,
    height: result.generalSettings.height,
    padding: result.generalSettings.padding,
    chartPadding: result.lineSettings.chartPadding
  });

  result.generalSettings.width = checkedSize.width;
  result.generalSettings.height = checkedSize.height;
  result.generalSettings.padding = checkedSize.padding;
  result.lineSettings.chartPadding = checkedSize.chartPadding;

  return result;
};
