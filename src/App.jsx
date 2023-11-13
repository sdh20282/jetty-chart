import RadarChart from "./jetty-chart/src/radar/RadarChart";

const data = [
  {
    name: "with color",
    captions: {
      // columns
      Power: "Power",
      Hit: "Hit",
      Run: "Run",
      Field: "Field",
      Arm: "Arm",
    },
    chart: [
      // data
      {
        data: { Power: 55, Hit: 65, Run: 40, Field: 30, Arm: 60 },
        meta: { color: "#8258FA"},
      },
      {
        data: { Power: 55, Hit: 70, Run: 45, Field: 35, Arm: 70 },
        meta: { color: "#81F7F3" },
      },
      {
        data: { Power: 80, Hit: 60, Run: 50, Field: 70, Arm: 60 },
        meta: { color: "#2E2EFE" },
      },
      {
        data: { Power: 45, Hit: 60, Run: 80, Field: 65, Arm: 50 },
        meta: { color: "#FF0000" },
      },
      {
        data: { Power: 65, Hit: 65, Run: 20, Field: 40, Arm: 50 },
        meta: { color: "#DDA15E" },
      },
    ],
    options: {
      scaleProps: () => ({
        fill: "#fafafa",
        stroke: "#999",
        strokeWidth: ".2",
      }),
      rotation: 0,
    },
  },
];


function App() {
  return (
    <div>

        <div style={{margin:"25%"}}>
          <RadarChart
          />
        </div>
        </div>
  );
}
export default App;
