import { VerticalBar } from "./jetty-chart/src";
import { Pie } from "./jetty-chart/src/pies/pie/Pie";

const data = [
  {
    value: 0.3,
    label: "test1",
  },
  {
    value: 0.23,
    label: "test2",
  },
  {
    value: 0.15,
    label: "test3",
  },
  {
    value: 0.12,
    label: "test4",
  },
  {
    value: 0.12,
    label: "test5",
  },
  {
    value: 0.03,
    label: "test5",
  },
  {
    value: 0.01,
    label: "test5",
  },
  {
    value: 0.04,
    label: "test5",
  },
];

const MyVerticalBar = ({ data }) => {
  return <VerticalBar data={data} width="400" height="300" backgroundColor="#c4c4c4" />;
};

const MyPie = ({ data }) => {
  return <Pie data={data} width="400" height="300" backgroundColor="#c4c4c4" />;
};

function App() {
  return (
    <div style={{ "margin-left": 150 }}>
      {/* hello world
      {MyVerticalBar({ data })} */}
      {MyPie({ data })}
    </div>
  );
}
export default App;
