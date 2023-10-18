import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: 0,
    label: "test6"
  }
];

const myNormalBar = ({ data }) => {
  return (
    <NormalBar
      data={data}
      generalSettings={{
        width: 500,
        height: 300,
        backgroundColor: "#fff",
        padding: { top: 50, bottom: 50, left: 80, right: 130 }
      }}
      levelSettings={{
        lineVisible: true,
        lineOpacity: 1,
        lineColor: "#c4c4c4",
        lineWidth: 1,
        levelAutoScope: true,
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
      barSettings={{
        chartPadding: 10,
        barColor: "#8EA3BC",
        barGap: 0.15,
        barOnlyUpperRadus: true,
        barBorderRadius: 5,
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
