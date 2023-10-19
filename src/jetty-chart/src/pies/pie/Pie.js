import PaintPie from "./PaintPie";
import { useState, useEffect } from "react";

const Pie = ({
  data,
  generalSettingss = {
    width: "200",
    height: "200",
    backgroundColor: "#777",
    padding: { top: "10", bottom: "10", left: "10", right: "10" },
  },
  pieSettingss = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    startAngle: 0, // 시작 위치 각도, default 0
    padSize: 100, // 조각 크기, default 100
    padAngle: 1, // 조각 여백 default 0
    innerWidth: 50, // 내부원 크기, default 50
    cornerRadius: 0,
  },
}) => {
  const [width, setWidth] = useState(generalSettingss.width);
  const [height, setHeight] = useState(generalSettingss.height);
  const [backgroundColor, setBackgroundColor] = useState(generalSettingss.backgroundColor);
  const [padding, setPadding] = useState(generalSettingss.padding);
  const [color, setColor] = useState(pieSettingss.color);
  const [startAngle, setStartAngle] = useState(pieSettingss.startAngle);
  const [padSize, setPadSize] = useState(pieSettingss.padSize);
  const [padAngle, setPadAngle] = useState(pieSettingss.padAngle);
  const [innerWidth, setInnerWidth] = useState(pieSettingss.innerWidth);
  const [generalSettings, setGeneralSettings] = useState(generalSettingss);
  const [pieSettings, setPieSettings] = useState(pieSettingss);
  const [test, setTest] = useState(true);
  useEffect(() => {
    setGeneralSettings({
      width,
      height,
      backgroundColor,
      padding,
    });
    setPieSettings({
      color,
      startAngle,
      padSize,
      padAngle,
      innerWidth,
    });
  }, [test]);
  return (
    <div>
      <p>Pie Test</p>
      <div>
        <div>
          <label>width</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <label>height</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label>backgroundColor</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div>
          <label>padding</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padding.top}
            onChange={(e) => setPadding({ ...padding, top: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padding.bottom}
            onChange={(e) => setPadding({ ...padding, bottom: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padding.left}
            onChange={(e) => setPadding({ ...padding, left: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padding.right}
            onChange={(e) => setPadding({ ...padding, right: e.target.value })}
          />
        </div>
        <div>
          <label>startAngle</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={startAngle}
            onChange={(e) => setStartAngle(e.target.value)}
          />
          <label>padSize</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padSize}
            onChange={(e) => setPadSize(e.target.value)}
          />
          <label>padAngle</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={padAngle}
            onChange={(e) => setPadAngle(e.target.value)}
          />
          <label>innerWidth</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            type="text"
            value={innerWidth}
            onChange={(e) => setInnerWidth(e.target.value)}
          />
        </div>
      </div>
      <button style={{ margin: "10px" }} onClick={() => setTest(!test)}>
        Test
      </button>
      <div>
        <PaintPie data={data} generalSettings={generalSettings} pieSettings={pieSettings} />
      </div>
    </div>
  );
};

export { Pie };
