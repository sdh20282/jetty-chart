import { checkPadding, checkSize } from "./check-common-exception";

/* eslint-disable complexity */
export const checkNormalBar = ({ generalSettings, levelSettings, barSettings }) => {
  if (generalSettings === undefined) {
    generalSettings = {};
  }

  if (generalSettings.width === undefined) {
    generalSettings.width = 500;
  }

  if (generalSettings.height === undefined) {
    generalSettings.height = 300;
  }

  if (generalSettings.backgroundColor === undefined) {
    generalSettings.backgroundColor = "#ffffff";
  }

  if (generalSettings.padding === undefined) {
    generalSettings.padding = {};
  }

  if (levelSettings === undefined) {
    levelSettings = {};
  }

  if (levelSettings.lineVisible === undefined) {
    levelSettings.lineVisible = true;
  }

  if (levelSettings.lineOpacity === undefined) {
    levelSettings.lineOpacity = 1;
  }

  if (levelSettings.lineColor === undefined) {
    levelSettings.lineColor = "#c4c4c4";
  }

  if (levelSettings.lineWidth === undefined) {
    levelSettings.lineWidth = 1;
  }

  if (levelSettings.levelAutoScope === undefined) {
    levelSettings.levelAutoScope = true;
  }

  if (levelSettings.levelMaxScope === undefined) {
    levelSettings.levelMaxScope = 100;
  }

  if (levelSettings.levelMinScope === undefined) {
    levelSettings.levelMinScope = 0;
  }

  if (levelSettings.levelTextGap === undefined) {
    levelSettings.levelTextGap = 10;
  }

  if (levelSettings.levelTextSize === undefined) {
    levelSettings.levelTextSize = 11;
  }

  if (levelSettings.levelTextWeight === undefined) {
    levelSettings.levelTextWeight = 400;
  }

  if (levelSettings.levelTextColor === undefined) {
    levelSettings.levelTextColor = "#777";
  }

  if (levelSettings.levelTextMargin === undefined) {
    levelSettings.levelTextMargin = 3;
  }

  if (levelSettings.levelLineVisible === undefined) {
    levelSettings.levelLineVisible = true;
  }

  if (levelSettings.levelLineOpacity === undefined) {
    levelSettings.levelLineOpacity = 1;
  }

  if (levelSettings.levelLineColor === undefined) {
    levelSettings.levelLineColor = "#aaa";
  }

  if (levelSettings.levelLineWidth === undefined) {
    levelSettings.levelLineWidth = 2;
  }

  if (levelSettings.showTopLevel === undefined) {
    levelSettings.showTopLevel = true;
  }

  if (barSettings === undefined) {
    barSettings = {};
  }

  if (barSettings.chartPadding === undefined) {
    barSettings.chartPadding = 5;
  }

  if (barSettings.barColor === undefined) {
    barSettings.barColor = "#8EA3BC";
  }

  if (barSettings.barGap === undefined) {
    barSettings.barGap = 0.15;
  }

  if (barSettings.barOnlyUpperRadius === undefined) {
    barSettings.barOnlyUpperRadius = true;
  }

  if (barSettings.barBorderRadius === undefined) {
    barSettings.barBorderRadius = 0;
  }

  if (barSettings.categoryTextGap === undefined) {
    barSettings.categoryTextGap = 14;
  }

  if (barSettings.categoryTextSize === undefined) {
    barSettings.categoryTextSize = 11;
  }

  if (barSettings.categoryTextWeight === undefined) {
    barSettings.categoryTextWeight = 500;
  }

  if (barSettings.categoryTextColor === undefined) {
    barSettings.categoryTextColor = "#777";
  }

  if (barSettings.categoryTextMargin === undefined) {
    barSettings.categoryTextMargin = 8;
  }

  if (barSettings.categoryLineVisible === undefined) {
    barSettings.categoryLineVisible = true;
  }

  if (barSettings.categoryLineOpacity === undefined) {
    barSettings.categoryLineOpacity = 1;
  }

  if (barSettings.categoryLineColor === undefined) {
    barSettings.categoryLineColor = "#aaa";
  }

  if (barSettings.categoryLineWidth === undefined) {
    barSettings.categoryLineWidth = 2;
  }

  generalSettings.padding = checkPadding({ padding: generalSettings.padding });

  const checkedSize = checkSize({
    width: generalSettings.width,
    height: generalSettings.height,
    padding: generalSettings.padding,
    chartPadding: barSettings.chartPadding
  });

  generalSettings.width = checkedSize.width;
  generalSettings.height = checkedSize.height;
  generalSettings.padding = checkedSize.padding;
  barSettings.chartPadding = checkedSize.chartPadding;

  return { generalSettings, levelSettings, barSettings };
};
/* eslint-enable complexity */
