// import { NormalScatter } from "./jetty-chart/src/scatter/scatter";
import { NormalPyramid } from "./jetty-chart/src/pyramidChart/pyramid";
import { useState } from "react";
import { useEffect } from "react";

const myNormalPyramid = ({ data }) => {
  return <NormalPyramid data={data} keys={["남", "여"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const groups = [];

    for (let index = 0; index < 100; index += 10) {
      const group = {};

      group.id = `${index}~${index + 9}`;

      const arr = [];

      arr.push({
        value: Math.floor(Math.random() * 2000) + 10,
        label: "남",
      });
      arr.push({
        value: Math.floor(Math.random() * 2000) + 10,
        label: "여",
      });

      group.arr = arr;
      groups.push(group);
    }

    setData(groups);
  }, []);

  return <div>{myNormalPyramid({ data })}</div>;
}

export default App;
