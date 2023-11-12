import { NormalBar, StackedBar, NormalMap, NormalScatter, BumpChart, SingleLine, MultiLine, StackedLine } from "./jetty-chart/src";

// function App() {

//   return (
//     <div></div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
// import { NormalBar, StackedBar } from "./jetty-chart/src/bars/bars";

const counts = [5, 6, 7];

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) - 50,
        label: "c-" + (index + 1),
      });
    }

    setData(arr);

    const arr2 = [];

    for (let idx = 0; idx < counts[Math.floor(Math.random() * counts.length)]; idx++) {
      const temp = [];

      for (let index = 0; index < 6; index++) {
        temp.push(Math.floor(Math.random() * 30) + 70);
      }

      arr2.push({
        value: temp,
        label: "data-" + (idx + 1),
      });
    }

    setData2(arr2);
  }, [state]);

  return (
    <div
      style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "500px 500px 500px",
        gap: "0",
      }}
    >
      {/* <StackedBar
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
        /> */}
      <NormalBar
        data={data}
        keys={["data-1"]}
        xLegend={"categories"}
        yLegend={"values"}
        normalSettings={{ colorPalette: ["#77d4ff", "#F1948A", "#82E0AA", "#D7BDE2"], reverse: false, horizontal: false }}
      />
      <StackedBar
        data={data2}
        keys={["data-1", "data-2", "data-3", "data-4", "data-5", "data-6"]}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          colorPalette: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#caf0f8"],
          horizontal: true,
        }}
      />
      <StackedBar
        data={data2}
        keys={["data-1", "data-2", "data-3", "data-4", "data-5", "data-6"]}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          colorPalette: ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#caf0f8"],
          horizontal: true,
          reverse: true,
        }}
      />
      {/* <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#77d4ff", "#F1948A", "#82E0AA", "#D7BDE2"], reverse: true, horizontal: true }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#77d4ff", "#F1948A", "#82E0AA", "#D7BDE2"], reverse: false, horizontal: false }}
        />
        <NormalBar
          data={data}
          keys={["data-1"]}
          xLegend={"categories"}
          yLegend={"values"}
          normalSettings={{ colorPalette: ["#77d4ff", "#F1948A", "#82E0AA", "#D7BDE2"], reverse: true, horizontal: false }}
        /> */}

      <button
        style={{
          width: "100px",
          margin: "0 auto",
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