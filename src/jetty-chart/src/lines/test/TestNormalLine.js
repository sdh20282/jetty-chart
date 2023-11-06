import React from "react";
import { NormalLine } from "..";

function TestNormalLine(data) {
  return (
    <div>
      <NormalLine
        data={data}
        keys={["dataSet"]}
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
          pointSize: 4,
          pointBorderColor: "#fff",
          pointBorderWidth: 1,
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
      <NormalLine
        data={data}
        keys={["dataSet"]}
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
          lineColor: "#5DADE2",
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: true,
          pointColor: null,
          pointSize: 3,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          enablePointLabel: true,
          showLabelOnHover: true,
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
      <NormalLine
        data={data}
        keys={["dataSet"]}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 100, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#5DADE2", "#F1948A", "#82E0AA", "#D7BDE2"],
          padding: 0,
          reverse: false,
          horizontal: true,
        }}
        leftLabelSettings={{
          useLabel: true,
          labelOnLeft: true,
          labelMargin: 7,
          labelSize: 12,
          labelWeight: 500,
          labelOpacity: 1,
          labelColor: "#777",
          labelRotate: 0,
          labelMove: 0,
          sideLineSize: 5,
          sideLineVisible: true,
          sideLineOpacity: 1,
          sideLineColor: "#aaa",
          sideLineWidth: 2,
        }}
        lineSettings={{
          lineColor: "#82E0AA",
          lineOpacity: 0.6,
          lineWidth: 8,
          enablePoint: false,
          pointColor: null,
          pointSize: 3,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          enablePointLabel: true,
          showLabelOnHover: true,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.3,
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "round", // "miter" | "round" | "bevel"
          strokeLinecap: "round", // "butt" | "round" | "square"
        }}
        bottomLegendSettings={{
          useLegend: true,
          legendOnBottom: true,
          legendMargin: 100,
          legendSize: 20,
          legendWeight: 700,
          legendOpacity: 1,
          legendColor: "#333",
          legendReverse: false,
          legendMove: 0,
        }}
        animationSettings={{
          lineSettings: {
            useAnimation: true,
            appearType: "fade",
            appearDuration: 1,
            appearStartDelay: 0.1,
            appearItemDelay: 0.5,
            appearTimingFunction: "ease-in",
            moveLine: true,
            moveDuration: 2,
            moveStartDelay: 0,
            moveItemDelay: 0,
            moveTimingFunction: "ease",
          },
        }}
      />
      <NormalLine
        data={data}
        keys={["dataSet"]}
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
          pointSize: 6,
          pointBorderColor: "#fff",
          pointBorderWidth: 0,
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
      <NormalLine
        data={data}
        keys={["dataSet"]}
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
          lineColor: "#5DADE2",
          lineOpacity: 1,
          lineWidth: 6,
          enablePoint: true,
          pointColor: "#fff",
          pointSize: 4,
          pointBorderColor: "#5DADE2",
          pointBorderWidth: 1,
          enablePointLabel: true,
          showLabelOnHover: true,
          pointLabelColor: "#5DADE2",
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
      <NormalLine
        data={data}
        keys={["dataSet"]}
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
          reverse: true,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#82E0AA",
          lineOpacity: 1,
          lineWidth: 6,
          enablePoint: true,
          pointColor: null,
          pointSize: 1,
          pointBorderColor: "#000",
          pointBorderWidth: 3,
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
    </div>
  );
}

export default TestNormalLine;
