import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: 1.1,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.4,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.4,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.4,
    label: "test1"
  },
  {
    value: 1.4,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.4,
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
