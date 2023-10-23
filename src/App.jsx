import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: 0.7,
    label: "test1"
  },
  {
    value: 0.01,
    label: "test2"
  },
  {
    value: 1.2,
    label: "test3"
  },
  {
    value: -1.9,
    label: "test4"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
