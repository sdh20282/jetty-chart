import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: 1,
    label: "test1"
  },
  {
    value: 0.1,
    label: "test1"
  },
  {
    value: 1.4,
    label: "test1"
  },
  {
    value: 5,
    label: "test1"
  },
  {
    value: 1.9,
    label: "test1"
  },
  {
    value: 0.9,
    label: "test1"
  },
  {
    value: 1.7,
    label: "test1"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} />;
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
