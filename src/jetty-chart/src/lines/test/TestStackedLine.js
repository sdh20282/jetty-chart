import { StackedLine } from "../stacked-line/stacked-line";

function TestStackedLine({ dataSet }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "1600px" }}>
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: true,
          pointColor: "#fff",
          pointSize: 6,
          pointBorderColor: "",
          pointBorderWidth: 3,
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
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useLineAnimation: true,
            lineRenderType: "draw",
            lineRenderDuration: 1,
            lineRenderStartDelay: 1,
            lineRenderItemDelay: 0,
            lineRenderTimingFunction: "ease",
            translateLine: true,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "draw",
            pointRenderDuration: 1,
            pointLineRenderDuration: 1,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 0,
            pointRenderTimingFunction: "ease",
            translatePoint: true,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "draw",
            areaRenderDuration: 1,
            areaRenderStartDelay: 0,
            areaRenderItemDelay: 0,
            areaRenderTimingFunction: "ease",
            translateArea: true,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
      {/* 2 */}
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#03045e",
          lineOpacity: 1,
          lineWidth: 8,
          enablePoint: true,
          pointColor: "",
          pointSize: 8,
          pointBorderColor: "#eee",
          pointBorderWidth: 3,
          enablePointLabel: false,
          showLabelOnHover: true,
          pointLabelColor: "#000",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.2,
          enableCurve: false,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "round", // "miter" | "round" | "bevel"
          strokeLinecap: "round", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useLineAnimation: true,
            lineRenderType: "draw",
            lineRenderDuration: 1,
            lineRenderStartDelay: 0,
            lineRenderItemDelay: 1,
            lineRenderTimingFunction: "ease",
            translateLine: true,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "draw",
            pointRenderDuration: 1,
            pointLineRenderDuration: 1,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 1,
            pointRenderTimingFunction: "ease",
            translatePoint: true,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "draw",
            areaRenderDuration: 0.5,
            areaRenderStartDelay: 0,
            areaRenderItemDelay: 1,
            areaRenderTimingFunction: "ease",
            translateArea: true,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
      {/* 3 */}
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 100, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
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
          lineColor: "#00b4d8",
          lineOpacity: 0.6,
          lineWidth: 8,
          enablePoint: false,
          pointColor: null,
          pointSize: 3,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          enablePointLabel: false,
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
            useLineAnimation: true,
            lineRenderType: "draw",
            lineRenderDuration: 1,
            lineRenderStartDelay: 0,
            lineRenderItemDelay: 0,
            lineRenderTimingFunction: "ease",
            translateLine: true,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "draw",
            pointRenderDuration: 0.5,
            pointLineRenderDuration: 1,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 0,
            pointRenderTimingFunction: "ease",
            translatePoint: true,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "draw",
            areaRenderDuration: 1,
            areaRenderStartDelay: 0,
            areaRenderItemDelay: 0,
            areaRenderTimingFunction: "ease",
            translateArea: true,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
      {/* 4 */}
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#0077b6",
          lineOpacity: 1,
          lineWidth: 4,
          enablePoint: true,
          pointColor: null,
          pointSize: 4,
          pointBorderColor: "#fff",
          pointBorderWidth: 0,
          enablePointLabel: false,
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
            useLineAnimation: true,
            lineRenderType: "draw",
            lineRenderDuration: 1,
            lineRenderStartDelay: 0,
            lineRenderItemDelay: 0.5,
            lineRenderTimingFunction: "ease",
            translateLine: false,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "draw",
            pointRenderDuration: 0.5,
            pointLineRenderDuration: 1,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 0.5,
            pointRenderTimingFunction: "ease",
            translatePoint: true,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "draw",
            areaRenderDuration: 1,
            areaRenderStartDelay: 0,
            areaRenderItemDelay: 0.5,
            areaRenderTimingFunction: "ease",
            translateArea: true,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
      {/* 5 */}
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
          padding: 0,
          reverse: false,
          horizontal: false,
        }}
        lineSettings={{
          lineOpacity: 1,
          lineWidth: 6,
          enablePoint: true,
          pointColor: "#fff",
          pointSize: 4,
          pointBorderColor: "",
          pointBorderWidth: 1,
          enablePointLabel: true,
          showLabelOnHover: true,
          pointLabelColor: "",
          pointLabelSize: 12,
          pointLabelOffsetX: 0,
          pointLabelOffsetY: -5,
          pointLabelWeight: 500,
          enableArea: true,
          areaColor: null,
          areaOpacity: 0.2,
          enableCurve: true,
          smoothDegree: 0.15,
          angleDegree: 1,
          strokeLinejoin: "miter", // "miter" | "round" | "bevel"
          strokeLinecap: "butt", // "butt" | "round" | "square"
        }}
        animationSettings={{
          lineSettings: {
            useLineAnimation: true,
            lineRenderType: "fade",
            lineRenderDuration: 1,
            lineRenderStartDelay: 0,
            lineRenderItemDelay: 1,
            lineRenderTimingFunction: "ease",
            translateLine: true,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "fade",
            pointRenderDuration: 0.5,
            pointLineRenderDuration: 1,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 1,
            pointRenderTimingFunction: "ease",
            translatePoint: false,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "draw",
            areaRenderDuration: 1,
            areaRenderStartDelay: 0,
            areaRenderItemDelay: 1,
            areaRenderTimingFunction: "ease",
            translateArea: false,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
      {/* 6 */}
      <StackedLine
        dataSet={dataSet}
        xLegend={"types"}
        yLegend={"values"}
        normalSettings={{
          width: 500,
          height: 400,
          backgroundColor: "#fff",
          margin: { top: 60, bottom: 70, left: 80, right: 100 },
          innerMargin: { top: 0, bottom: 0 },
          colorPalette: ["#ade8f4", "#00b4d8", "#0077b6", "#03045e"],
          padding: 0,
          reverse: true,
          horizontal: false,
        }}
        lineSettings={{
          lineColor: "#00b4d8",
          lineOpacity: 0.5,
          lineWidth: 6,
          enablePoint: true,
          pointColor: null,
          pointSize: 2,
          pointBorderColor: "",
          pointBorderWidth: 3,
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
            useLineAnimation: true,
            lineRenderType: "draw",
            lineRenderDuration: 0.5,
            lineRenderStartDelay: 0.5,
            lineRenderItemDelay: 0,
            lineRenderTimingFunction: "ease",
            translateLine: true,
            translateLineItemDelay: 0,
            translateLineDuration: 0.5,
            translateLineStartDelay: 0,
            translateLineTimingFunction: "ease",
          },
          pointSettings: {
            usePointAnimation: true,
            pointRenderType: "draw",
            pointRenderDuration: 0.5,
            pointLineRenderDuration: 0.5,
            pointRenderStartDelay: 0,
            pointRenderItemDelay: 0,
            pointRenderTimingFunction: "ease",
            translatePoint: true,
            translatePointItemDelay: 0,
            translatePointDuration: 0.5,
            translatePointStartDelay: 0,
            translatePointTimingFunction: "ease",
          },
          areaSettings: {
            useAreaAnimation: true,
            areaRenderType: "fade",
            areaRenderDuration: 0.5,
            areaRenderStartDelay: 1,
            areaRenderItemDelay: 0,
            areaRenderTimingFunction: "ease",
            translateArea: true,
            translateAreaItemDelay: 0,
            translateAreaDuration: 0.5,
            translateAreaStartDelay: 0,
            translateAreaTimingFunction: "ease",
          },
        }}
      />
    </div>
  );
}

export default TestStackedLine;
