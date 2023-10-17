import { VerticalBar } from "./jetty-chart/src";
import { Pie } from "./jetty-chart/src/pies/pie/Pie";

const data = [
  {
    value: 0.25,
    label: "test1",
  },
  {
    value: 0.1,
    label: "test2",
  },
  {
    value: 0.15,
    label: "test3",
  },
  {
    value: 0.3,
    label: "test4",
  },
  {
    value: 0.2,
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
    <div>
      hello world
      {MyVerticalBar({ data })}
      {MyPie({ data })}
    </div>
  );
}
export default App;
