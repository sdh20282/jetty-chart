import { NormalBar } from "./jetty-chart/src";
// import { NormalLine } from "./jetty-chart/src/lines/lines";

const data = [
  {
    value: 1,
    label: "test1"
  },
  {
    value: 0.01,
    label: "test1"
  },
  {
    value: 1.0,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.5,
    label: "test1"
  },
  {
    value: 1,
    label: "test1"
  },
  {
    value: -1.7,
    label: "test1"
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} normalSettings={{ horizontal: false, reverse: false, margin: { right: 10 } }} />;
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
