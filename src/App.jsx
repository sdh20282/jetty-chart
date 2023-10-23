import { NormalBar } from "./jetty-chart/src";
import { NormalLine } from "./jetty-chart/src/lines/lines";
import { MultiLine } from "./jetty-chart/src/lines/multi-line/multi-line";

const data = [
  {
    value: 1,
    label: "test1"
  },
  {
    value: 2,
    label: "test1"
  },
  {
    value: 1,
    label: "test1"
  },
  {
    value: 0.8,
    label: "test1"
  },
  {
    value: 1.2,
    label: "test1"
  },
  {
    value: -2,
    label: "test1"
  },
  {
    value: 1.6,
    label: "test1"
  }
];
const multiData = [
  {
    id: "japan",
    color: "hsl(185, 70%, 50%)",
    data: [
      {
        value: 1,
        label: "test1"
      },
      {
        value: 2,
        label: "test1"
      },
      {
        value: 1,
        label: "test1"
      },
      {
        value: 0.8,
        label: "test1"
      },
      {
        value: 1.2,
        label: "test1"
      },
      {
        value: -1,
        label: "test1"
      },
      {
        value: 1.6,
        label: "test1"
      }
    ]
  },
  {
    id: "korea",
    color: "hsl(33, 70%, 60%)",
    data: [
      {
        value: 2,
        label: "test1"
      },
      {
        value: 2.2,
        label: "test1"
      },
      {
        value: 1.1,
        label: "test1"
      },
      {
        value: 2,
        label: "test1"
      },
      {
        value: 1.3,
        label: "test1"
      },
      {
        value: -2,
        label: "test1"
      },
      {
        value: 1.7,
        label: "test1"
      }
    ]
  }
];

const myNormalBar = ({ data }) => {
  return <NormalBar data={data} normalSettings={{ horizontal: false, reverse: false, margin: { right: 10 } }} />;
};

function App() {
  return (
    <div>
      {myNormalBar({ data })}
      <NormalLine
        data={data}
        normalSettings={{ reverse: false, horizontal: false }}
        lineSettings={{
          lineColor: "#8EA3BC",
          lineWidth: 3,
          pointSize: 2,
          pointColor: "#fff",
          pointBorderColor: "#333",
          pointBorderWidth: 1,
          areaOpacity: 0.15
        }}
      />
      <MultiLine multiData={multiData} />
    </div>
  );
}

export default App;
