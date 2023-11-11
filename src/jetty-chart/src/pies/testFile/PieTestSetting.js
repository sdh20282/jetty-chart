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
  const [pieBackgroundColor, setPieBackgroundColor] = useState(generalSettings.pieBackgroundColor);
  const [donutBackgroundColor, setDonutBackgroundColor] = useState(
    generalSettings.donutBackgroundColor
  );
  const [padding, setPadding] = useState(generalSettings.padding);

  const [color, setColor] = useState(pieSettings.color);
  const [strokeColor, setStrokeColor] = useState(pieSettings.strokeColor);
  const [strokeWidth, setStrokeWidth] = useState(pieSettings.strokeWidth);
  const [startAngle, setStartAngle] = useState(pieSettings.startAngle);
  const [padAngle, setPadAngle] = useState(pieSettings.padAngle);
  const [pieRadius, setPieRadius] = useState(pieSettings.pieRadius);
  const [innerRadius, setInnerRadius] = useState(pieSettings.innerRadius);
  const [cornerRadius, setCornerRadius] = useState(pieSettings.cornerRadius);
  const [testToggle, setTestToggle] = useState(true);
  const [useAngle, setUseAngle] = useState(pieSettings.useAngle);
  const [sortByValue, setSortByValue] = useState(pieSettings.sortByValue);
  const colorOption = [
    { value: "transparent", name: "▨투명" },
    { value: "black", name: "⬛검정" },
    { value: "gray", name: " 🏽회색" },
    { value: "white", name: "⬜하양" },
    { value: "red", name: "🟥빨강" },
    { value: "blue", name: "🟦파랑" },
    { value: "green", name: "🟩초록" },
    { value: "yellow", name: "🟨노랑" },
    { value: "orange", name: "🟧오렌지" },
    { value: "purple", name: "🟪보라" },
    { value: "brown", name: "🟫갈색" },
  ];
  useEffect(() => {
    changeNewGeneralSettings({
      width,
      height,
      backgroundColor,
      padding,
      pieBackgroundColor,
      donutBackgroundColor,
    });
    changeNewPieSettings({
      strokeColor,
      color,
      startAngle,
      padAngle,
      pieRadius,
      innerRadius,
      cornerRadius,
      strokeWidth,
      useAngle,
      sortByValue,
    });
  }, [
    testToggle,
    backgroundColor,
    useAngle,
    strokeWidth,
    strokeColor,
    color,
    startAngle,
    padAngle,
    pieRadius,
    innerRadius,
    cornerRadius,
    width,
    height,
    padding,
    pieBackgroundColor,
    donutBackgroundColor,
    sortByValue,
    changeNewGeneralSettings,
    changeNewPieSettings,
  ]);
  return (
    <>
      <div>
        <p>Pie Test</p>
        <div>
          <label style={{ color: "black" }}>width</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <label style={{ color: "black" }}>height</label>
          <input
            size={5}
            style={{ margin: "10px" }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label style={{ color: "black" }}>bgcolor</label>
          <select
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            style={{ margin: "10px" }}
          >
            {colorOption.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
          <label style={{ color: "black" }}>pieColor</label>
          <select
            value={pieBackgroundColor}
            onChange={(e) => setPieBackgroundColor(e.target.value)}
            style={{ margin: "10px" }}
          >
            {colorOption.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
          <label style={{ color: "black" }}>donutColor</label>
          <select
            value={donutBackgroundColor}
            onChange={(e) => setDonutBackgroundColor(e.target.value)}
            style={{ margin: "10px" }}
          >
            {colorOption.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
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
          <br />
          <label style={{ color: "black" }}>startAngle</label>
          <input
            type={"range"}
            min={"0"}
            max={"360"}
            step={"1"}
            style={{ margin: "10px" }}
            value={startAngle}
            onChange={(e) => {
              setStartAngle(e.target.value);
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={startAngle}
            onChange={(e) => {
              setStartAngle(e.target.value);
            }}
          />
          <br />
          <label style={{ color: "black" }}>useAngle</label>
          <input
            type={"range"}
            min={"0"}
            max={"360"}
            step={"1"}
            style={{ margin: "10px" }}
            value={useAngle}
            onChange={(e) => {
              setUseAngle(e.target.value);
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={useAngle}
            onChange={(e) => {
              setUseAngle(e.target.value);
            }}
          />
          <br />
          <label>padAngle</label>
          <input
            type={"range"}
            min={"0"}
            max={"100"}
            step={"0.01"}
            style={{ margin: "10px" }}
            value={padAngle}
            onChange={(e) => {
              setPadAngle(Number(e.target.value));
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={padAngle}
            onChange={(e) => {
              setPadAngle(Number(e.target.value));
            }}
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
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={pieRadius}
            onChange={(e) => {
              setPieRadius(Number(e.target.value));
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
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={innerRadius}
            onChange={(e) => {
              setInnerRadius(Number(e.target.value));
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
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={cornerRadius}
            onChange={(e) => {
              setCornerRadius(Number(e.target.value));
            }}
          />
          <br />
          <label>strokeWidth</label>
          <input
            type={"range"}
            min="0"
            max={"0.1"}
            step={"0.01"}
            style={{ margin: "10px" }}
            value={strokeWidth}
            onChange={(e) => {
              setStrokeWidth(Number(e.target.value));
            }}
          />
          <input
            size={5}
            style={{ margin: "10px" }}
            value={strokeWidth}
            onChange={(e) => {
              setStrokeWidth(Number(e.target.value));
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
            }}
          />
          <label>sortByValue</label>
          <input
            type={"checkbox"}
            name={"sortByValue"}
            value={false}
            onChange={() => {
              setSortByValue(!sortByValue);
            }}
          />
        </div>
        <button style={{ margin: "10px" }} onClick={() => setTestToggle(!testToggle)}>
          Test
        </button>
      </div>
    </>
  );
};

export default PieTestSetting;
