import { useEffect, useState } from "react";
import { NormalBar, BumpChart, MultiLine, SingleLine, StackedLine, Pie } from "./jetty-chart/src";

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
  const render1 = true;
  const render2 = true;
  const render3 = true;
  const render4 = true;

  const rankCount = 4;
  const rankers = 8;

  useEffect(() => {
    const arr = [];
    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 100),
        label: "data" + (index + 1),
      });
    }

    arr.push({
      value: Math.floor(Math.random() * 100),
      label: "dataX",
    });

    arr.push({
      value: Math.floor(Math.random() * 100),
      label: "dataY",
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
      {/* {norender && myNormalBar({ data })}
      {render1 && <SingleLine data={data} />}
      {render2 && <MultiLine data={multiDataSet} />}
      {render3 && <StackedLine data={multiDataSet} />}
      {render4 && <BumpChart data={rankDataSet} />} */}
      <Pie data={data} />
      <button
        style={{ marginLeft: "730px", marginTop: "50px" }}
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