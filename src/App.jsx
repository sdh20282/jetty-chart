import { NormalScatter } from "./jetty-chart/src/scatters/scatter";

const data = [
  {
    id: "group A",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group B",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group C",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group D",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group E",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group F",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  },
  {
    id: "group G",
    data: [
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      },
      {
        x: Math.floor(Math.random() * 10001),
        y: Math.floor(Math.random() * 10001)
      }
    ]
  }
];

function App() {
  return (
    <div>
      <NormalScatter
        data={data}
        normalSettings={{ xReverse: false, yReverse: false }}
        pointSettings={{
          pointSize: 1.5,
          pointColor: "#fff",
          pointBorderColor: "#333",
          pointBorderWidth: 1,
          areaOpacity: 0.15
        }}
        scopeSettings={{
          xAutoScope: true,
          yAutoScope: true,
          xMaxScope: 150,
          xMinScope: 0,
          yMaxScope: 150,
          yMinScope: 0,
          xScopeMul: 1,
          yScopeMul: 1
        }}
      />
    </div>
  );
}

export default App;
