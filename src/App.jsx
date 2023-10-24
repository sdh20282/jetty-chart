import { NormalBar } from "./jetty-chart/src";

const data = [
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
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} keys={["target1"]} xLegend={"types"} yLegend={"values"} />;
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
