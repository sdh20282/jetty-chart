import { NormalBar } from "./jetty-chart/src";
import { NormalLine } from "./jetty-chart/src/lines/lines";
import { MultiLine } from "./jetty-chart/src/lines/multi-line/multi-line";

const data = [
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 100) - 50,
    label: "test1"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  return (
    <div>
      {myNormalBar({ data })}
      <NormalLine
        data={data}
        normalSettings={{ reverse: false, horizontal: false, padding: 0 }}
        lineSettings={{
          lineColor: "#004",
          lineWidth: 1,
          pointSize: 1,
          pointColor: "#fff",
          pointBorderColor: "#333",
          pointBorderWidth: 1,
          areaOpacity: 0.5,
          enableArea: true,
          enableCurve: false
        }}
      />
      <MultiLine data={data} />
    </div>
  );
}

export default App;
