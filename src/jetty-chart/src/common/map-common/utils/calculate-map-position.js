export const checkMapMargin = ({ marginTop, marginBottom, marginLeft, marginRight }) => {
  marginTop ??= 0;
  marginBottom ??= 0;
  marginLeft ??= 0;
  marginRight ??= 0;

  return { marginTop, marginBottom, marginLeft, marginRight };
};

export const checkDivide = ({ divide }) => {
  if (divide < 2) {
    divide = 2;
  }
  if (divide > 5) {
    divide = 5;
  } else {
    divide;
  }

  return divide;
};

export const checkGagueBarSize = (GagueBarSetting) => {
  if (GagueBarSetting.gagueBarWidth > 100) {
    GagueBarSetting.gagueBarWidth = 100;
  }
  if (GagueBarSetting.gagueBarWidth <= 0) {
    GagueBarSetting.gagueBarWidth = 0;
  }
  if (GagueBarSetting.gagueBarHeight >= 500) {
    GagueBarSetting.gagueBarHeight = 500;
  }
  if (GagueBarSetting.gagueBarHeight <= 0) {
    GagueBarSetting.gagueBarHeight = 0;
  }
  if (GagueBarSetting.gagueValueFontSize <= 30) {
    GagueBarSetting.gagueValueFontSize = 30;
  }
  if (GagueBarSetting.gagueValueFontSize >= 80) {
    GagueBarSetting.gagueValueFontSize = 80;
  }

  return GagueBarSetting;
};

export const checkTooltip = (tooltipSetting) => {
  if (tooltipSetting.tooltipWidth >= 700) {
    tooltipSetting.tooltipWidth = 700;
  }
  if (tooltipSetting.tooltipWidth <= 300) {
    tooltipSetting.tooltipWidth = 300;
  }
  if (tooltipSetting.tooltipBorderRadius <= 0) {
    tooltipSetting.tooltipBorderRadius = 0;
  }
  if (tooltipSetting.cityNameFontSize <= 20) {
    tooltipSetting.cityNameFontSize = 20;
  }
  if (tooltipSetting.cityValueFontSize <= 20) {
    tooltipSetting.cityValueFontSize = 20;
  }
  if (tooltipSetting.descriptionFontSize <= 20) {
    tooltipSetting.descriptionFontSize = 20;
  }
  if (tooltipSetting.cityNameFontSize >= 70) {
    tooltipSetting.cityNameFontSize = 70;
  }
  if (tooltipSetting.cityValueFontSize >= 70) {
    tooltipSetting.cityValueFontSize = 70;
  }
  if (tooltipSetting.descriptionFontSize >= 70) {
    tooltipSetting.descriptionFontSize = 70;
  }

  return tooltipSetting;
};
