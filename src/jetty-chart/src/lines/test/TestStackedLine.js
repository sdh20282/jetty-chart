import React from "react";
import { StackedLine } from "../stacked-line/stacked-line";

function TestStackedLine(dataSet) {
  return (
    <div>
      <StackedLine
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
            appearType: "draw",
            appearDuration: 1,
            appearStartDelay: 0.1,
            appearItemDelay: 0.5,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />

      <StackedLine
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
            appearType: "draw",
            appearDuration: 1,
            appearStartDelay: 0.1,
            appearItemDelay: 0.5,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />

      <StackedLine
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
            appearType: "fade",
            appearDuration: 1.5,
            appearStartDelay: 0.1,
            appearItemDelay: 0.8,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />

      <StackedLine
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
            appearType: "draw",
            appearDuration: 2,
            appearStartDelay: 0.1,
            appearItemDelay: 0,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />

      <StackedLine
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
          enablePointLabel: true,
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
            appearType: "draw",
            appearDuration: 1,
            appearStartDelay: 0.1,
            appearItemDelay: 0.5,
            appearTimingFunction: "ease",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />

      <StackedLine
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
          enablePointLabel: true,
          showLabelOnHover: true,
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
            appearType: "draw",
            appearDuration: 1.5,
            appearStartDelay: 0.5,
            appearItemDelay: 0.2,
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

export default TestStackedLine;
