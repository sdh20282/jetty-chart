import { VerticalBar } from "./jetty-chart/src";

const data = [
  {
    value: 10,
    label: "test1"
  },
  {
    value: 10,
    label: "test1"
  },
  {
    value: 10,
    label: "test1"
  },
  {
    value: 10,
    label: "test1"
  },
  {
    value: 10,
    label: "test1"
  }
]

const MyVerticalBar = ({ data }) => {
  return (
    <VerticalBar 
      data={data}
      width="400"
      height="300"
      backgroundColor="#c4c4c4" />
  )
}

function App() {

  return (
    <div>
      hello world
      {
        MyVerticalBar({ data })
      }
    </div>
  );}
export default App;
