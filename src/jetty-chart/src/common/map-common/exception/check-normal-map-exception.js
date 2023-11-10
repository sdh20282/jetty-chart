import { checkMapMargin, checkDivide, checkGagueBarSize, checkTooltip } from "../utils/calculate-map-position";


const normalMapSetting = {
  normalSetting:{
    backgroundColor: "white",
    divide: 5,
    colorCode: 0,
    width: 400,
    zoomMagnification:1.8,
    usePercentageColor: true,
    zoomOn:true,
    animationOn:true,
    marginTop:0,
    marginBottom:0,
    marginLeft:0,
    marginRight:0,
  },
  gagueBarSetting:{
    useGagueBar: true,
    useValueLavel:true,
    pointerSize: 0,
    pointerColor: "#000000",
    gagueBarWidth: 0,
    gagueBarHeight: 100,
    gagueValueFontSize: 40,
    gagueValueFontFamily:"inter",
    gagueValueFontWeight:"bold",
    valueLavel: "",
  },
  tooltipSetting:{
    useFollowColor:false,
    useKorea:true,
    tooltipWidth: 400,
    tooltipBackGroundColor: "white",
    tooltipBorderRadius: 10,
    tooltipBorder: "0.5px solid #ddd",
    tooltipBoxShadow: "none",
    cityNameFontSize: 30,
    cityNameColor: "black",
    cityNameFontWeight: "bold",
    cityValueColor: "black",
    cityValueFontWeight: "bold",
    cityValueFontSize: 30,
    descriptionColor: "black",
    descriptionFontSize: 30,
    descriptionFontWeight: "bold",
    descriptionFontFamily : "inter",
    tooltipOpacity: 1,
    useTooltipCol:true,
  },
}

export const checkMapChart = ({normalSetting, gagueBarSetting, tooltipSetting})=>{
  const result = {
      normalSetting, gagueBarSetting, tooltipSetting,
  };

  Object.keys(normalMapSetting).forEach((setting)=>{
      result[setting] ??= {};

      Object.keys(normalMapSetting[setting]).forEach((detail) => {
          result[setting][detail] ??= normalMapSetting[setting][detail];
        });
  })

  const Checkedmargin = checkMapMargin({marginTop:result.normalSetting.marginTop, marginBottom:result.normalSetting.marginBottom, marginLeft:result.normalSetting.marginLeft,marginRight:result.normalSetting.marginRight});
  const CheckedDivide = checkDivide(result.normalSetting.divide)
  const CheckedGagueBar = checkGagueBarSize(result.gagueBarSetting)
  const CheckedTooltip = checkTooltip(result.tooltipSetting)
  result.normalSetting.marginTop = Checkedmargin.marginTop
  result.normalSetting.marginRight = Checkedmargin.marginRight
  result.normalSetting.marginBottom = Checkedmargin.marginBottom
  result.normalSetting.marginLeft = Checkedmargin.marginLeft
  result.divide = CheckedDivide
  result.gagueBarSetting.gagueBarWidth = CheckedGagueBar.gagueBarWidth
  result.gagueBarSetting.gagueBarHeight = CheckedGagueBar.gagueBarHeight
  result.gagueBarSetting.gagueValueFontSize = CheckedGagueBar.gagueValueFontSize
  result.tooltipSetting.cityNameFontSize =CheckedTooltip.cityNameFontSize
  result.tooltipSetting.cityValueFontSize =CheckedTooltip.cityValueFontSize
  result.tooltipSetting.descriptionFontSize =CheckedTooltip.descriptionFontSize
  
  return result;
};