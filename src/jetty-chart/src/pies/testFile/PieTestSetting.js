// 파이 차트를 페이지에서 테스트 할 수 있도록 하는 컴포넌트
import { useState, useEffect } from "react";

const PieTestSetting = ({
  generalSettings,
  pieSettings,
  changeNewGeneralSettings,
  changeNewPieSettings,
  changeDebugTool,
}) => {
  const [width, setWidth] = useState(generalSettings.width);
  const [height, setHeight] = useState(generalSettings.height);
  const [backgroundColor, setBackgroundColor] = useState(generalSettings.backgroundColor);
  const [padding, setPadding] = useState(generalSettings.padding);
  const [color, setColor] = useState(pieSettings.color);
  const [startAngle, setStartAngle] = useState(pieSettings.startAngle);
  const [padAngle, setPadAngle] = useState(pieSettings.padAngle);
  const [pieRadius, setPieRadius] = useState(pieSettings.pieRadius);
  const [innerRadius, setInnerRadius] = useState(pieSettings.innerRadius);
  const [cornerRadius, setCornerRadius] = useState(pieSettings.cornerRadius);
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
      padAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
    });
  }, [testToggle]);
  return (
    <>
      <p>Pie Test</p>
      <div>
        <div>
          <label style={{ color: "red" }}>width</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <label style={{ color: "red" }}>height</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label style={{ color: "red" }}>backgroundColor</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div>
          <label>padding</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padding.top}
            onChange={(e) => setPadding({ ...padding, top: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padding.bottom}
            onChange={(e) => setPadding({ ...padding, bottom: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padding.left}
            onChange={(e) => setPadding({ ...padding, left: e.target.value })}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padding.right}
            onChange={(e) => setPadding({ ...padding, right: e.target.value })}
          />
        </div>
        <div>
          <label style={{ color: "red" }}>startAngle</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={startAngle}
            onChange={(e) => setStartAngle(e.target.value)}
          />
          <label>padAngle</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padAngle}
            onChange={(e) => setPadAngle(e.target.value)}
          />
          <br />
          <label>pieRadius</label>
          <input
            type={"range"}
            min="0"
            max={"1"}
            step={"0.01"}
            style={{ margin: "10px" }}
            value={pieRadius}
            onChange={(e) => {
              setPieRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <input
            style={{ margin: "10px" }}
            value={pieRadius}
            onChange={(e) => {
              setPieRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <br />
          <label>innerRadius</label>
          <input
            type={"range"}
            min="0"
            max={"1"}
            step={"0.01"}
            style={{ margin: "10px" }}
            value={innerRadius}
            onChange={(e) => {
              setInnerRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <input
            style={{ margin: "10px" }}
            value={innerRadius}
            onChange={(e) => {
              setInnerRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <br />
          <label>cornerRadius</label>
          <input
            type={"range"}
            min="0"
            max={"1"}
            step={"0.01"}
            style={{ margin: "10px" }}
            value={cornerRadius}
            onChange={(e) => {
              setCornerRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <input
            style={{ margin: "10px" }}
            value={cornerRadius}
            onChange={(e) => {
              setCornerRadius(Number(e.target.value));
              setTestToggle(!testToggle);
            }}
          />
          <br />
          <label>Debug</label>
          <input
            type={"checkbox"}
            name={"debug"}
            value={false}
            onChange={() => {
              changeDebugTool();
              setTestToggle(!testToggle);
            }}
          />
        </div>
      </div>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setTestToggle(!testToggle)}>
          Test
        </button>
      </div>
    </>
  );
};

export default PieTestSetting;
