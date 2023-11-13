import { checkChartSize, checkLimit, checkMargin, checkNegative, checkSize } from "../utils/radar-position";

const noSmoothing = points => {
  let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
  for (let i = 1; i < points.length; i++) {
    d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
  }
  return d + 'z';
};

const setViewBox = options =>
  `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${
    options.size
  }`;


const radarOptions = {
  size: 300,
  axes: true,
  scales: 3, 
  captions: true, 
  dots: true, 
  useValue: false,
  defaultValue:300,
  negativeNumber: false,
  animationOn:true,
  zoomDistance: 1.2, 
  smoothing: noSmoothing, 
  captionMargin: 10,
  setViewBox,
  axisProps: () => ({ className: 'axis' }),
  scaleProps: () => ({ className: 'scale', fill: 'none' }),
  shapeProps: () => ({ className: 'shape' }),
  dotProps: () => ({
    className: 'dot',
  }),
  captionProps: () => ({
    className: 'caption',
    textAnchor: 'middle',
    fontSize: 10,
    fontFamily: 'sans-serif',
  }),
  wrapCaptionAt: 15,
  captionLineHeight: 20,
  rotation: 0,
  marginTop:0,
  marginBottom:0,
  marginLeft:0,
  marginRight:0,
  maxValue:0,
};


const options = {
  scaleProps: () => ({
    fill: "#fafafa",
    stroke: "#999",
    strokeWidth: ".2",
  }),
  // rotation:0,
}



export const checkRadarChart = ({radarOptions, data})=>{
  const result = {
    radarOptions, data
  };

  const Checkedmargin = checkMargin({marginTop:result.radarOptions.marginTop, marginBottom:result.radarOptions.marginBottom, marginLeft:result.radarOptions.marginLeft,marginRight:result.radarOptions.marginRight});
  result.radarOptions.marginTop = Checkedmargin.marginTop
  result.radarOptions.marginRight = Checkedmargin.marginRight
  result.radarOptions.marginBottom = Checkedmargin.marginBottom
  result.radarOptions.marginLeft = Checkedmargin.marginLeft

  result.radarOptions.maxValue = checkLimit(data)


  if (result.radarOptions.useValue) {
    result.radarOptions.maxValue =  result.radarOptions.defaultValue
  }


  if (result.radarOptions.negativeNumber) {
    result.data = checkNegative({data, maxValue: result.radarOptions.maxValue})
    result.radarOptions.maxValue = checkLimit(data)
    
  }


  return result;
};