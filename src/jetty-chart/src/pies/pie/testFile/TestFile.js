import { useState, useEffect } from "react";

const Test = ({ generalSettings, pieSettings, changeNewGeneralSettings, changeNewPieSettings }) => {
  const [width, setWidth] = useState(generalSettings.width);
  const [height, setHeight] = useState(generalSettings.height);
  const [backgroundColor, setBackgroundColor] = useState(generalSettings.backgroundColor);
  const [padding, setPadding] = useState(generalSettings.padding);
  const [color, setColor] = useState(pieSettings.color);
  const [startAngle, setStartAngle] = useState(pieSettings.startAngle);
  const [padSize, setPadSize] = useState(pieSettings.padSize);
  const [padAngle, setPadAngle] = useState(pieSettings.padAngle);
  const [innerWidth, setInnerWidth] = useState(pieSettings.innerWidth);
  const [testToggle, setTestToggle] = useState(true);
  useEffect(() => {
    changeNewGeneralSettings({
      width,
      height,
      backgroundColor,
      padding,
    });
    changeNewPieSettings({
      color,
      startAngle,
      padSize,
      padAngle,
      innerWidth,
    });
  }, [testToggle]);
  return (
    <>
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
      <button style={{ margin: "10px" }} onClick={() => setTestToggle(!testToggle)}>
        Test
      </button>
    </>
  );
};

export default Test;
