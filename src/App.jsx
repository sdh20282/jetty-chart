import { useState } from "react";
import { useEffect } from "react";
import { NormalBar } from "./jetty-chart/src";

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    setData([
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test1"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test2"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test3"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test4"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test5"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test6"
      },
      {
        value: Math.floor(Math.random() * 100) / 100,
        label: "test7"
      }
    ]);
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
