import { useState, useEffect } from "react";
import { NormalBar } from "./jetty-chart/src/bars/bars";

const counts = [5, 6, 7];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["category-01"]} xLegend={"types"} yLegend={"values"} />;
};

const myStackedBar = ({ data }) => {
  // return (
  //   <StackedBar
  //     data={data}
  //     keys={["category-01", "category-02", "category-03", "category-04", "category-05", "category-06"]}
  //     xLegend={"types"}
  //     yLegend={"values"}
  //   />
  // );

  console.log(data);

  return <></>;
};

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "data" + (index + 1)
      });
    }

    setData(arr);

    const arr2 = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      const temp = [];

      for (let index = 0; index < 6; index++) {
        temp.push(Math.floor(Math.random() * 90) + 10);
      }

      arr2.push({
        value: temp,
        label: "data-" + (index + 1)
      });
    }

    setData2(arr2);
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
      {myStackedBar({ data: data2 })}
      <button
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
