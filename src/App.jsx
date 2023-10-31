import { useState } from "react";
import { useEffect } from "react";
import { NormalBar } from "./jetty-chart/src";

const counts = [5, 6, 6];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "test" + (index + 1)
      });
    }

    arr.push({
      value: 0,
      label: "asdf"
    });

    arr.push({
      value: -20,
      label: "asdasdff"
    });

    setData(arr);
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
    </div>
  );
}

export default App;
