import { NormalBar } from "./jetty-chart/src";

const data = [
  {
    value: Math.floor(Math.random() * 1000),
    label: "test1"
  },
  {
    value: Math.floor(Math.random() * 1000),
    label: "test2"
  },
  {
    value: Math.floor(Math.random() * 1000),
    label: "test3"
  },
  {
    value: Math.floor(Math.random() * 1000),
    label: "test4"
  },
  {
    value: Math.floor(Math.random() * 1000),
    label: "test5"
  }
];

const myNormalBar = ({ data }) => {
  return (
    <NormalBar
      data={data}
      generalSettings={{
        width: "500",
        height: "300",
        backgroundColor: "#fff",
        padding: { top: "30", bottom: "50", left: "60", right: "130" }
      }}
      categorySettings={{
        lineVisible: true,
        lineOpacity: "1",
        lineColor: "#c4c4c4",
        lineWidth: "1",
        categoryLocation: "10",
        categorySize: "11",
        categoryWeight: "500",
        categoryColor: "#777",
        categoryGap: "3",
        categoryLineVisible: true,
        categoryLineWidth: "2",
        categoryLineColor: "#aaa"
      }}
      barSettings={{
        barGap: "0.1"
      }}
    />
  );
};

function App() {
  return (
    <div>
      hello world
      {myNormalBar({ data })}
    </div>
  );
}

export default App;
