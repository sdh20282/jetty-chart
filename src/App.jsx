import { NormalBar } from "./jetty-chart/src";
import { NormalLine } from "./jetty-chart/src/lines/lines";

const data = [
  {
    value: 1,
    label: "test1"
  },
  {
    value: 2,
    label: "test1"
  },
  {
    value: 1,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.2,
    label: "test1"
  },
  {
    value: -1,
    label: "test1"
  },
  {
    value: 1.6,
    label: "test1"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} normalSettings={{ horizontal: false, reverse: false, margin: { right: 10 } }} />;
};

function App() {
  return (
    <div>
      {myNormalBar({ data })}
      <NormalLine
        data={data}
        normalSettings={{ reverse: false, horizontal: false }}
        lineSettings={{
          lineColor: "#8EA3BC",
          lineWidth: 10,
          pointSize: 2,
          pointColor: "#8EA3BC",
          pointBorderColor: "#fff",
          pointBorderWidth: 1
        }}
      />
    </div>
  );
}

export default App;
