import { useState } from "react";
import { NormalBar } from "./jetty-chart/src";
import { BumpChart, SingleLine, MultiLine, StackedLine } from "./jetty-chart/src";

const counts = [5, 7];
const rankCount = 4;
const rankers = 8;

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [state, setState] = useState(0);

  console.log(state);

  const data = (() => {
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

    return arr;
  })();
  const multiDataSet = (() => {
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

    return multiArr;
  })();
  const rankDataSet = (() => {
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

    return rankData;
  })();

  const norender = true;
  const render1 = true;
  const render2 = true;
  const render3 = true;
  const render4 = true;

  return (
    <div style={{ marginTop: "50px", paddingLeft: "200px" }}>
      {/* {norender && myNormalBar({ data })} */}
      {render1 && <SingleLine data={data} title={"asdf"} />}
      {render2 && <MultiLine data={multiDataSet} />}
      {render3 && <StackedLine data={multiDataSet} />}
      {render4 && <BumpChart data={rankDataSet} />}
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