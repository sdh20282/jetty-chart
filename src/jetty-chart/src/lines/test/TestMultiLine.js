import { MultiLine } from "../multi-line/multi-line";

function TestMultiLine({ dataSet }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "1600px" }}>
      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: true,
          pointColor: null,
          pointSize: 3,
          pointBorderColor: "#666",
          pointBorderWidth: 2,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: false,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "draw",
            renderDuration: 1,
            renderStartDelay: 0.1,
            renderItemDelay: 0.5,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />

      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: true,
          pointColor: null,
          pointSize: 2,
          pointBorderColor: "#666",
          pointBorderWidth: 2,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "draw",
            renderDuration: 1,
            renderStartDelay: 0.1,
            renderItemDelay: 0.5,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />

      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: true,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 0.4,
          lineWidth: 8,
          enablePoint: true,
          pointColor: null,
          pointSize: 2,
          pointBorderColor: "#fff",
          pointBorderWidth: 3,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: false,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "fade",
            renderDuration: 1.5,
            renderStartDelay: 0.1,
            renderItemDelay: 0.8,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />

      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: false,
          pointColor: null,
          pointSize: 2,
          pointBorderColor: "#666",
          pointBorderWidth: 2,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: false,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: true,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "draw",
            renderDuration: 2,
            renderStartDelay: 0.1,
            renderItemDelay: 0,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />

      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 0,
          lineWidth: 3,
          enablePoint: true,
          pointColor: null,
          pointSize: 0,
          pointBorderColor: "#fff",
          pointBorderWidth: 4,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: true,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "draw",
            renderDuration: 1,
            renderStartDelay: 0.1,
            renderItemDelay: 0.5,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />

      <MultiLine
        dataSet={dataSet}
        keys={dataSet.map((data) => data.id)}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: true,
        }}
        lineSettings={{
          lineColor: "#F1948A",
          lineOpacity: 1,
          lineWidth: 10,
          enablePoint: true,
          pointColor: null,
          pointSize: 1,
          pointBorderColor: "#fff",
          pointBorderWidth: 4,
          enablePointLabel: false,
          showLabelOnHover: false,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.5,
          enableCurve: true,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            renderType: "draw",
            renderDuration: 1.5,
            renderStartDelay: 0.5,
            renderItemDelay: 0.2,
            renderTimingFunction: "ease",
            translateLine: true,
            translateDuration: 1,
            translateStartDelay: 0,
            translateItemDelay: 0,
            translateTimingFunction: "ease",
          },
        }}
      />
    </div>
  );
}

export default TestMultiLine;
