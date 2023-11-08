import { useState } from "react";
import { useEffect } from "react";
import { NormalBar } from "./jetty-chart/src";
import {} from "./jetty-chart/src/lines/bump/bump";
import { BumpChart, TestMultiLine, TestNormalLine, TestStackedLine } from "./jetty-chart/src/lines";

const counts = [5, 7];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [data, setData] = useState([]);
  const [multiDataSet, setMultiDataSet] = useState([]);
  const [rankDataSet, setRankDataSet] = useState([]);
  const [state, setState] = useState(1);

  const norender = false;
  const render1 = false;
  const render2 = true;
  const render3 = true;
  const render4 = false;

  useEffect(() => {
    const arr = [];
    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 100),
        label: "test" + (index + 1),
      });
    }

    arr.push({
      value: 0,
      label: "asdf",
    });

    arr.push({
      value: -2,
      label: "asdasdff",
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
          label: "test" + (index + 1),
        });
      }

      multiArr.push(d);
    }

    setMultiDataSet(multiArr);

    const rankData = [];
    const rankCount = 6;
    const rankers = 10;

    const ranks = [];

    for (let i = 0; i < rankers; i++) {
      const numbers = Array(rankCount)
        .fill()
        .map((item, index) => index + 1);

      const rank = [];

      while (numbers.length > 0) {
        const num = Math.floor(Math.random() * numbers.length);
        const newArr = numbers.splice(num, 1);
        rank.push(newArr[0]);
      }

      ranks.push(rank);
    }

    for (let i = 0; i < rankCount; i++) {
      const d = {};
      d.id = `Serie ${i + 1}`;
      d.data = [];
      for (let index = 0; index < rankers; index++) {
        d.data.push({
          value: ranks[index][i],
          label: 2000 + index,
        });
      }

      rankData.push(d);
    }

    console.log(multiArr);
    setRankDataSet(rankData);
  }, [state]);

  return (
    <div style={{ marginTop: "50px", paddingLeft: "200px" }}>
      {norender && myNormalBar({ data })}
      {render1 && <TestNormalLine data={data} />}
      {render2 && <TestMultiLine dataSet={multiDataSet} />}
      {render3 && <TestStackedLine dataSet={multiDataSet} />}
      {render4 && (
        <BumpChart
          dataSet={rankDataSet}
          xLegend={"Series Rank"}
          yLegend={"ranking"}
          lineSettings={{
            lineWidth: 6,
            enableCurve: true,
            pointColor: "#fff",
          }}
          animationSettings={{ lineSettings: { appearDuration: 0.8, appearStartDelay: 0.2, appearItemDelay: 0 } }}
        />
      )}
      <button
        style={{ marginLeft: "215px", marginTop: "50px" }}
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
