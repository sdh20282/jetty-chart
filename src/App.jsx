import { NormalScatter } from "./jetty-chart/src/scatters/scatter";
import { NormalPyramid } from "./jetty-chart/src/pyramid/pyramid";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const groups = [];

    for (let index = 0; index < 10; index++) {
      const group = {};
      group.id = `group ${index}`;
      const arr = [];
      for (let index = 0; index < 30; index++) {
        arr.push({
          x: Math.floor(Math.random() * 130) + 10,
          y: Math.floor(Math.random() * 130) + 10
        });
      }

      group.data = arr;

      groups.push(group);
    }

    setData2(groups);
  }, []);

  return (
    <div>
      {data2.length > 0 && <NormalScatter data={data2} />}
      <NormalPyramid />
    </div>
  );
}

export default App;
