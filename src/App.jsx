import { NormalScatter } from "./jetty-chart/src/scatters/scatter";

const data = [
  {
    id: "group A",
    data: [
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      }
    ]
  },
  {
    id: "group B",
    data: [
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      }
    ]
  },
  {
    id: "group C",
    data: [
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      }
    ]
  },
  {
    id: "group D",
    data: [
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      }
    ]
  },
  {
    id: "group E",
    data: [
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
      },
      {
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101)
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
          xAutoScope: false,
          yAutoScope: false,
          xMaxScope: 100,
          xMinScope: 0,
          yMaxScope: 150,
          yMinScope: 0
        }}
        xLegend={"x 좌표"}
        yLegend={"y 좌표"}
        keys={data.map((d) => d.id)}
      />
    </div>
  );
}

export default App;
