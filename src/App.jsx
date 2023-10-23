import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: 0.7,
    label: "test1"
  },
  {
    value: 0.0001,
    label: "test2"
  },
  {
    value: 1.2,
    label: "test3"
  },
  {
    value: 1.9,
    label: "test4"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} />;
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
