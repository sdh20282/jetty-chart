import { BumpChart } from "../bump/bump";

function TestBumpChart({ dataSet }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "1600px" }}>
      <BumpChart
        dataSet={dataSet}
        xLegend={"Series Rank"}
        yLegend={"ranking"}
        normalSettings={{
          width: 1000,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineOpacity: 1,
          lineWidth: 6,
          enablePoint: true,
          pointColor: "#fff",
          pointSize: 8,
          pointBorderColor: null,
          pointBorderWidth: 4,
          enablePointLabel: true,
          showLabelOnHover: true,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -10,
          pointLabelWeight: 1000,
          enableArea: false,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: true,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
          xPadding: 1,
          xOuterPadding: 80,
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            appearType: "draw",
            appearDuration: 2,
            appearStartDelay: 0.1,
            appearItemDelay: 1.5,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />
    </div>
  );
}

export default TestBumpChart;
