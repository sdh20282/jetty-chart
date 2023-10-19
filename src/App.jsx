// import { NormalBar } from "./jetty-chart/src";
import { NormalLine } from "./jetty-chart/src/lines/lines";

const data = [
  {
    value: 1,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.0,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.5,
    label: "test1"
  },
  {
    value: 1,
    label: "test1"
  },
  {
    value: 1.7,
    label: "test1"
  }
];

const myNormalBar = ({ data }) => {
  return (
    <NormalLine
      data={data}
      generalSettings={{
        width: 500,
        height: 300,
        backgroundColor: "#fff",
        padding: { top: 20, bottom: 40, left: 60, right: 60 },
        reverse: false,
        horizontal: false
      }}
      levelSettings={{
        lineVisible: true,
        lineOpacity: 0.4,
        lineColor: "#c4c4c4",
        lineWidth: 1,
        lineDash: false,
        lineDashWidth: 5,
        lineDashGap: 3,
        levelAutoScope: true,
        levelMaxScope: 100,
        levelMinScope: 0,
        levelTextGap: 10,
        levelTextSize: 11,
        levelTextWeight: 500,
        levelTextColor: "#777",
        levelTextMargin: 4,
        levelLineVisible: true,
        levelLineOpacity: 1,
        levelLineColor: "#aaa",
        levelLineWidth: 2,
        showTopLevel: true
      }}
      lineSettings={{
        chartPadding: 5,
        lineColor: "#455",
        lineWidth: 2,
        pointSize: 2,
        pointColor: "#8EA3BC",
        pointBorderColor: "#222222",
        lineOnlyUpperRadius: true,
        lineBorderRadius: 5,
        categoryTextOnBottom: true,
        categoryTextGap: 14,
        categoryTextSize: 11,
        categoryTextWeight: 500,
        categoryTextColor: "#777",
        categoryTextMargin: 8,
        categoryLineVisible: true,
        categoryLineOpacity: 1,
        categoryLineColor: "#aaa",
        categoryLineWidth: 2
      }}
    />
  );
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
