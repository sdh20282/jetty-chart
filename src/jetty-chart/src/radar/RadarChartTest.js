import React, { useState } from "react";
import RadarChart from "./RadarChart";

const TestPage = () => {
  const [ChartSize, setChartSize] = useState(300)
  const [Rotation, setRotation] = useState(-1)
  const [Axes, setAxes] = useState(true)
  const [Scales, setScales] = useState(3)
  const [Captions, setCaptions] = useState(true)
  const [Dots, setDots] = useState(false)
  const [Zoom, setZoom] = useState(1.2)
  const [CaptionMargin, setCaptionMargin] = useState(10)
  const [CaptionList, setCaptionList] = useState({})
  const [DataList, setDataList] = useState([])

  const Option = {
    size: ChartSize,
    axes: Axes,
    scales: Scales,
    zoomDistance: Zoom,
    captionMargin: CaptionMargin,
    rotation: Rotation,
    dots: Dots
  }


  return (
    <>
    <input type="text" id="value1"/>
    <input type="text" id="value2"/>
    <input type="text" id="value3"/>
    <RadarChart 
    captions={Captions}
    data={DataList}
    options={Option}
    size={ChartSize}/>
    </>
  )
}

export default TestPage