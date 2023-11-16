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
    useChart:false,
  },
  gagueBarSetting:{
    useGagueBar: true,
    useValueLabel:true,
    pointerSize: 0,
    pointerColor: "#000000",
    gagueBarWidth: 0,
    gagueBarHeight: 100,
    gagueValueFontSize: 40,
    gagueValueFontFamily:"",
    gagueValueFontWeight:"bold",
    valueLabel: "",
  },
  tooltipSetting:{
    useFollowColor:false,
    useKorea:true,
    tooltipWidth: 550,
    tooltipBackGroundColor: "white",
    tooltipBorderRadius: 10,
    tooltipBorder: "0.5px solid #ddd",
    tooltipBoxShadow: "none",
    cityNameFontSize: 30,
    cityNameColor: "black",
    cityNameFontWeight: "bold",
    cityValueColor: "black",
    cityValueFontSize: 30,
    cityValueFontWeight: "bold",
    descriptionColor: "black",
    descriptionFontSize: 30,
    descriptionFontWeight: "bold",
    descriptionFontFamily : "",
    tooltipOpacity: 1,
    useTooltipCol:true,
    useTooltipChart:false,
  },
  innerChartSetting:{
    innerChartText:"",
    innernormalSettings: { width: 1150, height: 1600 , margin:{top:120,bottom:120,left:150,right:50}},
    innerbarSettings: { labelSize: 55, labelWeight: "bold", useLabel: true },
    innerbottomLabelSettings: { labelSize: 55, labelWeight:"bold" },
    innerleftLabelSettings:{labelSize:55,sideLineSize:10,useLabel:true,labelWeight:"bold"},
    innerChartTitleFontSize:85,
    innerChartTitleFontWeight:"bold",
  },
  tooltipChartSetting:{
    tooltipChartnormalSettings: { width: 540, height: 470, margin:{top:70,bottom:70,left:120,right:80} },
    tooltipChartbarSettings: { labelSize: 25, labelWeight: "bold", useLabel: true },
    tooltipChartbottomLabelSettings: { labelSize: 20, labelWeight:"bold" },
    tooltipChartleftLabelSettings:{labelSize:20,sideLineSize:10,useLabel:true,labelWeight:"bold"},

  },
}


export const checkMapChart = ({normalSetting, gagueBarSetting, tooltipSetting,innerChartSetting,tooltipChartSetting})=>{
  const result = {
      normalSetting, gagueBarSetting, tooltipSetting,innerChartSetting,tooltipChartSetting,
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
  result.normalSetting.divide = CheckedDivide
  result.gagueBarSetting.gagueBarWidth = CheckedGagueBar.gagueBarWidth
  result.gagueBarSetting.gagueBarHeight = CheckedGagueBar.gagueBarHeight
  result.gagueBarSetting.gagueValueFontSize = CheckedGagueBar.gagueValueFontSize
  result.tooltipSetting.cityNameFontSize =CheckedTooltip.cityNameFontSize
  result.tooltipSetting.cityValueFontSize =CheckedTooltip.cityValueFontSize
  result.tooltipSetting.descriptionFontSize =CheckedTooltip.descriptionFontSize
  
  return result;
};