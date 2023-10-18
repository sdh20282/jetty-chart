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
    value: 0.6,
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
  return (
    <NormalBar
      data={data}
      generalSettings={{
        reverse: false,
        horizontal: true
      }}
      levelSettings={{
        lineColor: "#d4d4d4",
        lineDash: true
      }}
    />
  );
};

function App() {
  return <div>{myNormalBar({ data })}</div>;
}

export default App;
