// 파이 차트를 페이지에서 테스트 할 수 있도록 하는 컴포넌트
import { useState, useEffect } from "react";
import TestRange from "./components/TestRange";
import TestInput from "./components/TestInput";
import TestSelect from "./components/TestSelect";
import TestCheckBox from "./components/TestCheckBox";

const PieTestSetting = ({
  generalSettings,
  pieSettings,
  labelSettings,
  changeNewGeneralSettings,
  changeNewPieSettings,
  changeNewLabelSettings,
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
  const [strokeOpacity, setStrokeOpacity] = useState(pieSettings.strokeOpacity);
  const [startAngle, setStartAngle] = useState(pieSettings.startAngle);
  const [padAngle, setPadAngle] = useState(pieSettings.padAngle);
  const [pieRadius, setPieRadius] = useState(pieSettings.pieRadius);
  const [innerRadius, setInnerRadius] = useState(pieSettings.innerRadius);
  const [cornerRadius, setCornerRadius] = useState(pieSettings.cornerRadius);
  const [testToggle, setTestToggle] = useState(true);
  const [useAngle, setUseAngle] = useState(pieSettings.useAngle);
  const [sortByValue, setSortByValue] = useState(pieSettings.sortByValue);
  const [labelColor, setLabelColor] = useState(labelSettings.labelColor);
  const [labelFontSize, setLabelFontSize] = useState(labelSettings.labelFontSize);
  const [labelFontWeight, setLabelFontWeight] = useState(labelSettings.labelFontWeight);
  const [labelFontFamily, setLabelFontFamily] = useState(labelSettings.labelFontFamily);
  const [labelFontStyle, setLabelFontStyle] = useState(labelSettings.labelFontStyle);
  const [labelMoveX, setLabelMoveX] = useState(labelSettings.labelMoveX);
  const [labelMoveY, setLabelMoveY] = useState(labelSettings.labelMoveY);
  const [labelDistance, setLabelDistance] = useState(labelSettings.labelDistance);
  const [labelIsRotate, setLabelIsRotate] = useState(labelSettings.labelIsRotate);
  const [labelText, setLabelText] = useState(labelSettings.labelText);
  const [labelSkipRatio, setLabelSkipRatio] = useState(labelSettings.labelSkipRatio);
  const [labelIsUse, setLabelIsUse] = useState(labelSettings.labelIsUse);
  const [labelDegrees, setLabelDegrees] = useState(labelSettings.labelDegrees);
  const [labelOpacity, setLabelOpacity] = useState(labelSettings.labelOpacity);
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
      strokeOpacity,
      useAngle,
      sortByValue,
    });
    changeNewLabelSettings({
      labelColor,
      labelFontSize,
      labelFontWeight,
      labelFontFamily,
      labelFontStyle,
      labelMoveX,
      labelMoveY,
      labelDistance,
      labelIsRotate,
      labelText,
      labelSkipRatio,
      labelIsUse,
      labelDegrees,
      labelOpacity,
    });
  }, [
    testToggle,
    backgroundColor,
    useAngle,
    strokeWidth,
    strokeColor,
    strokeOpacity,
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
    labelColor,
    labelFontSize,
    labelFontWeight,
    labelFontFamily,
    labelFontStyle,
    labelMoveX,
    labelMoveY,
    labelDistance,
    labelIsRotate,
    labelText,
    labelSkipRatio,
    labelIsUse,
    labelDegrees,
    labelOpacity,
    changeNewGeneralSettings,
    changeNewPieSettings,
    changeNewLabelSettings,
  ]);
  return (
    <>
      <div>
        <p>Pie Test</p>
        <div>
          <TestInput name={"width"} value={width} setValue={(e) => setWidth(e.target.value)} />
          <TestInput name={"height"} value={height} setValue={(e) => setHeight(e.target.value)} />
        </div>
        <div>
          <TestSelect
            name={"backgroundColor"}
            value={backgroundColor}
            setValue={(e) => setBackgroundColor(e.target.value)}
            obj={colorOption}
          />
          <TestSelect
            name={"pieColor"}
            value={pieBackgroundColor}
            setValue={(e) => setPieBackgroundColor(e.target.value)}
            obj={colorOption}
          />
          <TestSelect
            name={"donutColor"}
            value={donutBackgroundColor}
            setValue={(e) => setDonutBackgroundColor(e.target.value)}
            obj={colorOption}
          />
        </div>
        <div>
          <TestInput
            name={"pt"}
            value={padding.top}
            setValue={(e) => setPadding({ ...padding, top: e.target.value })}
          />
          <TestInput
            name={"pb"}
            value={padding.bottom}
            setValue={(e) => setPadding({ ...padding, bottom: e.target.value })}
          />
          <TestInput
            name={"pr"}
            value={padding.right}
            setValue={(e) => setPadding({ ...padding, right: e.target.value })}
          />
          <TestInput
            name={"pl"}
            value={padding.left}
            setValue={(e) => setPadding({ ...padding, left: e.target.value })}
          />
        </div>
        <div>
          <TestRange
            name={"startAngle"}
            value={startAngle}
            setValue={(e) => setStartAngle(Number(e.target.value))}
            min={0}
            max={360}
            step={1}
          />

          <TestRange
            name={"useAngle"}
            value={useAngle}
            setValue={(e) => setUseAngle(Number(e.target.value))}
            min={0}
            max={360}
            step={1}
          />
          <TestRange
            name={"padAngle"}
            value={padAngle}
            setValue={(e) => setPadAngle(Number(e.target.value))}
            min={0}
            max={100}
            step={0.01}
          />
          <TestRange
            name={"pieRadius"}
            value={pieRadius}
            setValue={(e) => setPieRadius(Number(e.target.value))}
            min={0}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"innerRadius"}
            value={innerRadius}
            setValue={(e) => setInnerRadius(Number(e.target.value))}
            min={0}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"cornerRadius"}
            value={cornerRadius}
            setValue={(e) => setCornerRadius(Number(e.target.value))}
            min={0}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"strokeWidth"}
            value={strokeWidth}
            setValue={(e) => setStrokeWidth(Number(e.target.value))}
            min={0}
            max={0.1}
            step={0.01}
          />
          <TestRange
            name={"strokeOpacity"}
            value={strokeOpacity}
            setValue={(e) => setStrokeOpacity(Number(e.target.value))}
            min={0}
            max={1}
            step={0.01}
          />
          <TestCheckBox name="Debug" value={false} setValue={() => changeDebugTool()} />
          <TestCheckBox
            name="sortByValue"
            value={false}
            setValue={() => {
              setSortByValue(!sortByValue);
            }}
          />
        </div>
        <div>
          <TestRange
            name={"labelFontSize"}
            value={labelFontSize}
            setValue={(e) => {
              setLabelFontSize(Number(e.target.value));
            }}
            min={0}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"setLabelMoveX"}
            value={labelMoveX}
            setValue={(e) => {
              setLabelMoveX(Number(e.target.value));
            }}
            min={-1}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"labelMoveY"}
            value={labelMoveY}
            setValue={(e) => {
              setLabelMoveY(Number(e.target.value));
            }}
            min={-1}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"labelDistance"}
            value={labelDistance}
            setValue={(e) => {
              setLabelDistance(Number(e.target.value));
            }}
            min={0}
            max={2}
            step={0.01}
          />
          <TestRange
            name={"labelSkipRatio"}
            value={labelSkipRatio}
            setValue={(e) => {
              setLabelSkipRatio(Number(e.target.value));
            }}
            min={0}
            max={1}
            step={0.01}
          />
          <TestRange
            name={"labelDegrees"}
            value={labelDegrees}
            setValue={(e) => {
              setLabelDegrees(Number(e.target.value));
            }}
            min={1}
            max={360}
            step={1}
          />
          <TestRange
            name={"labelOpacity"}
            value={labelOpacity}
            setValue={(e) => {
              setLabelOpacity(Number(e.target.value));
            }}
            min={0}
            max={1}
            step={0.01}
          />
        </div>
        <div>
          <TestInput
            name={"labelFontFamily"}
            value={labelFontFamily}
            setValue={(e) => {
              setLabelFontFamily(e.target.value);
            }}
          />
          <TestInput
            name={"labelColor"}
            value={labelColor}
            setValue={(e) => {
              setLabelColor(e.target.value);
            }}
          />
          <TestInput
            name={"labelFontStyle"}
            value={labelFontStyle}
            setValue={(e) => {
              setLabelFontStyle(e.target.value);
            }}
          />
        </div>
        <div>
          <TestInput
            name={"labelFontWeight"}
            value={labelFontWeight}
            setValue={(e) => {
              setLabelFontWeight(e.target.value);
            }}
          />
          <TestInput
            name={"labelText"}
            value={labelText}
            setValue={(e) => {
              setLabelText(e.target.value);
            }}
          />
          <TestCheckBox
            name={"labelIsRotate"}
            value={false}
            setValue={() => {
              setLabelIsRotate(!labelIsRotate);
            }}
          />
          <TestCheckBox
            name={"labelIsUse"}
            value={false}
            setValue={() => setLabelIsUse(!labelIsUse)}
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
