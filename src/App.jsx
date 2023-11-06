import { useState, useEffect } from "react";
import { NormalBar, StackedBar } from "./jetty-chart/src/bars/bars";

const counts = [5, 6, 7];

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "c-" + (index + 1)
      });
    }

    setData(arr);

    const arr2 = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      const temp = [];

      for (let index = 0; index < 6; index++) {
        temp.push(Math.floor(Math.random() * 30) + 70);
      }

      arr2.push({
        value: temp,
        label: "data-" + (index + 1)
      });
    }

    setData2(arr2);
  }, [state]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        marginTop: "50px"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "500px 500px 500px",
          gap: "0"
        }}
      >
        {/* <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#A0ADFF"] }}
          barSettings={{
            barBorderRadius: 20
          }}
          animationSettings={{
            barSettings: {
              translateItemDelay: 0.1
            }
          }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ reverse: true, colorPalette: ["#F1948A", "#82E0AA", "#D7BDE2"] }}
          barSettings={{
            barOpacity: 0.2,
            barGap: 0.05,
            barOnlyUpperRadius: false,
            labelColor: "#F1948A"
          }}
          animationSettings={{
            axisYGridLineSettings: { renderType: "fade", renderItemDelay: 0 },
            axisYLabelSettings: {
              translateLabel: false,
              renderItemDelay: 0
            },
            axisXLabelSettings: {
              translateLabel: false,
              renderItemDelay: 0
            },
            barSettings: {
              renderType: "fade",
              translateBar: false
            }
          }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ horizontal: true, colorPalette: ["#82E0AA", "#D7BDE2"] }}
          animationSettings={{
            barSettings: {
              renderType: "fade",
              renderTimingFunction: "linear",
              textRenderTimingFunction: "linear",
              translateTimingFunction: "linear",
              renderStartDelay: 2
            }
          }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ horizontal: true, colorPalette: ["#D7BDE2"] }}
          barSettings={{
            barGap: 0.5,
            useLabel: false
          }}
          animationSettings={{
            barSettings: {
              renderType: "grow-async",
              translateBar: false
            }
          }}
        />
        <NormalBar
          data={data}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{
            horizontal: true,
            reverse: true,
            colorPalette: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#caf0f8"],
            useVariousColors: true
          }}
          barSettings={{
            labelPosition: "under"
          }}
          animationSettings={{
            axisYGridLineSettings: { renderType: "fade" },
            barSettings: {
              renderType: "fade",
              textRenderType: "fade",
              translateBar: false,
              renderItemDelay: 0,
              textRenderItemDelay: 0
            }
          }}
        /> */}
        <StackedBar
          data={data2}
          keys={["data-1", "data-2", "data-3", "data-4", "data-5", "data-6"]}
          xLegend={"types"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#caf0f8"] }}
        />
        <StackedBar
          data={data2}
          keys={["data-1", "data-2", "data-3", "data-4", "data-5", "data-6"]}
          xLegend={"types"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#caf0f8"], reverse: true }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#77d4ff", "#F1948A", "#82E0AA", "#D7BDE2"], reverse: false }}
        />
      </div>

      <button
        style={{
          width: "100px",
          margin: "0 auto"
        }}
        onClick={() => {
          setState((state) => 1 - state);
        }}
      >
        갱신
      </button>
    </div>
  );
}

export default App;
