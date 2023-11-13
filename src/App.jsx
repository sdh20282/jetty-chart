import { Pie } from "./jetty-chart/src";

// function App() {
//   return <div></div>;
// }

// export default App;

import { useState, useEffect } from "react";

const counts = [5, 6, 7];

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    const arr = [];

    for (let index = 0; index < counts[Math.floor(Math.random() * counts.length)]; index++) {
      arr.push({
        value: Math.floor(Math.random() * 90) + 10,
        label: "c-" + (index + 1),
      });
    }

    setData(arr);
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
      <Pie data={data} />

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