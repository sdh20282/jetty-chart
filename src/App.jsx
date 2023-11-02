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

  const render1 = true;
  const render2 = true;
  const render3 = true;

  useEffect(() => {
    const arr = [];
    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 100),
        label: "test" + (index + 1)
      });
    }

    arr.push({
      value: 0,
      label: "asdf"
    });

    arr.push({
      value: -2,
      label: "asdasdff"
    });

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
      {render1 && (
        <NormalLine data={data} keys={["dataSet"]} xLegend={"types"} yLegend={"values"} normalSettings={{ reverse: false, horizontal: false }} />
      )}
      {render2 && (
        <MultiLine
          dataSet={multiDataSet}
          keys={multiDataSet.map((data) => data.id)}
          xLegend={"types"}
          yLegend={"values"}
          // 기본 세팅
          normalSettings={{
            reverse: false,
            horizontal: false
          }}
        />
      )}
      {render3 && (
        <StackedLine
          dataSet={multiDataSet}
          keys={multiDataSet.map((data) => data.id)}
          xLegend={"types"}
          yLegend={"values"}
          // 기본 세팅
          normalSettings={{
            reverse: false,
            horizontal: false
          }}
        />
      )}
    </div>
  );
}

export default App;
