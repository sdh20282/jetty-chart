import { Pie } from "./jetty-chart/src/pies/pie/Pie";

const data = [
  {
    value: 0.2,
    label: "test1",
  },
  {
    value: 0.2,
    label: "test2",
  },
  {
    value: 0.2,
    label: "test3",
  },
  {
    value: 0.2,
    label: "test4",
  },
  {
    value: 0.08,
    label: "test5",
  },
  {
    value: 0.02,
    label: "test5",
  },
  {
    value: 0.09,
    label: "test5",
  },
  {
    value: 0.01,
    label: "test5",
  },
];

const MyPie = ({ data }) => {
  return <Pie data={data} width="400" height="300" backgroundColor="#c4c4c4" />;
};

function App() {
  return <div>{MyPie({ data })}</div>;
}
export default App;
