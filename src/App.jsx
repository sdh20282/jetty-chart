import { useState } from "react";
import { useEffect } from "react";
import { NormalBar } from "./jetty-chart/src";
import { NormalLine } from "./jetty-chart/src/lines/lines";
import { MultiLine } from "./jetty-chart/src/lines/multi-line/multi-line";
import { StackedLine } from "./jetty-chart/src/lines/stacked-line/stacked-line";

const counts = [5, 6, 6, 7, 8];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [data, setData] = useState([]);
  const [multiDataSet, setMultiDataSet] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    // setMultiDataSet([
    //   {
    //     id: "label1",
    //     data: [
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test1"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test2"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test3"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test4"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test5"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test6"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test7"
    //       }
    //     ]
    //   },
    //   {
    //     id: "label2",
    //     data: [
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test1"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test2"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test3"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test4"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test5"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test6"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test7"
    //       }
    //     ]
    //   },
    //   {
    //     id: "label3",
    //     data: [
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test1"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test2"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test3"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test4"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test5"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test6"
    //       },
    //       {
    //         value: Math.floor(Math.random() * 100),
    //         label: "test7"
    //       }
    //     ]
    //   }
    // ]);
    const arr = [];
    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 100),
        label: "test" + (index + 1)
      });
    }

    setData(arr);

    const multiArr = [];
    const count = counts[Math.floor(Math.random() * counts.length)];
    for (let i = 0; i < [2, 3, 4][Math.floor(Math.random() * 3)]; i++) {
      const d = {};
      d.id = `label${i + 1}`;
      d.data = [];
      for (let index = 0; index < count; index++) {
        d.data.push({
          value: Math.floor(Math.random() * 1000),
          label: "test" + (index + 1)
        });
      }

      console.log(d);
      multiArr.push(d);
    }

    setMultiDataSet(multiArr);
  }, [state]);

  return (
    <div>
      {myNormalBar({ data })}
      <button
        onClick={() => {
          setState((state) => 1 - state);
        }}
      >
        갱신
      </button>
      <NormalLine
        data={data}
        keys={["target1"]}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{ reverse: false, horizontal: false, padding: 0 }}
        lineSettings={{
          lineColor: "#004",
          lineWidth: 1,
          pointSize: 1,
          pointColor: "#fff",
          pointBorderColor: "#333",
          pointBorderWidth: 1,
          areaOpacity: 0.5,
          enableArea: true,
          enableCurve: false
        }}
      />
      <MultiLine
        dataSet={multiDataSet}
        keys={multiDataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        // 기본 세팅
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 40, bottom: 40, left: 60, right: 60 },
          padding: 10,
          reverse: false,
          horizontal: false
        }}
        // 범위 세팅{
        scopeSettings={{
          autoScope: true,
          maxScope: 100,
          minScope: 0,
          showTopScope: true
        }}
        // y축 라인 세팅
        axisYGridLineSettings={{
          lineVisible: true,
          lineOpacity: 1,
          lineColor: "#c4c4c4",
          lineWidth: 1,
          lineDash: false,
          lineDashWidth: 5,
          lineDashGap: 3,
          lineRound: false
        }}
        // x축 라인 세팅
        axisXGridLineSettings={{
          lineVisible: true,
          lineOpacity: 1,
          lineColor: "#c4c4c4",
          lineWidth: 1,
          lineDash: false,
          lineDashWidth: 5,
          lineDashGap: 3,
          lineRound: false,
          showEndLine: false
        }}
        // 왼쪽 라벨 세팅
        leftLabelSettings={{
          useLabel: true,
          labelOnLeft: true,
          labelMargin: 12,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 7,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 오른쪽 라벨 세팅
        rightLabelSettings={{
          useLabel: false,
          labelOnLeft: false,
          labelMargin: 12,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 7,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 아래쪽 라벨 세팅
        bottomLabelSettings={{
          useLabel: true,
          labelOnBottom: true,
          labelMargin: 14,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 8,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 위쪽 라벨 세팅
        topLabelSettings={{
          useLabel: false,
          labelOnBottom: false,
          labelMargin: 14,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 8,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 바 세팅
        lineSettings={{
          lineColor: "#8EA3BC",
          lineOpacity: 1,
          lineWidth: 2,
          enablePoint: true,
          pointSize: 2,
          pointColor: "#8EA3BC",
          pointBorderColor: "#666",
          pointBorderWidth: 2,
          enablePointLabel: false,
          pointLabelColor: "#000",
          pointLabelSize: 8,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -10,
          pointLabelWeight: 500,
          enableArea: false,
          areaOpacity: 0.5,
          enableCurve: true,
          smoothDegree: 0.2,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt" // "butt" | "round" | "square"
        }}
      />
      <StackedLine
        dataSet={multiDataSet}
        keys={multiDataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        // 기본 세팅
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 40, bottom: 40, left: 60, right: 60 },
          padding: 10,
          reverse: false,
          horizontal: false
        }}
        // 범위 세팅{
        scopeSettings={{
          autoScope: true,
          maxScope: 100,
          minScope: 0,
          showTopScope: true
        }}
        // y축 라인 세팅
        axisYGridLineSettings={{
          lineVisible: true,
          lineOpacity: 1,
          lineColor: "#c4c4c4",
          lineWidth: 1,
          lineDash: false,
          lineDashWidth: 5,
          lineDashGap: 3,
          lineRound: false
        }}
        // x축 라인 세팅
        axisXGridLineSettings={{
          lineVisible: true,
          lineOpacity: 1,
          lineColor: "#c4c4c4",
          lineWidth: 1,
          lineDash: false,
          lineDashWidth: 5,
          lineDashGap: 3,
          lineRound: false,
          showEndLine: false
        }}
        // 왼쪽 라벨 세팅
        leftLabelSettings={{
          useLabel: true,
          labelOnLeft: true,
          labelMargin: 12,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 7,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 오른쪽 라벨 세팅
        rightLabelSettings={{
          useLabel: false,
          labelOnLeft: false,
          labelMargin: 12,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 7,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 아래쪽 라벨 세팅
        bottomLabelSettings={{
          useLabel: true,
          labelOnBottom: true,
          labelMargin: 14,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 8,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 위쪽 라벨 세팅
        topLabelSettings={{
          useLabel: true,
          labelOnBottom: false,
          labelMargin: 14,
          labelSize: 11,
          labelWeight: 500,
          labelColor: "#777",
          sideLineMargin: 8,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2
        }}
        // 바 세팅
        lineSettings={{
          lineColor: "#8EA3BC",
          lineOpacity: 1,
          lineWidth: 5,
          enablePoint: true,
          pointSize: 3,
          pointColor: "#8EA3BC",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          enablePointLabel: false,
          pointLabelColor: "#000",
          pointLabelSize: 8,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -10,
          pointLabelWeight: 500,
          enableArea: true,
          areaOpacity: 0.4,
          enableCurve: false,
          smoothDegree: 0.1,
          angleDegree: 1,
          strokeLinejoin: "round", // "miter" | "round" | "bevel"
          strokeLinecap: "round" // "butt" | "round" | "square"
        }}
      />
    </div>
  );
}

export default App;
