import { checkNormalLine } from "../../common/line-common/exception/check-line-exception";
import { MultiLine } from "../multi-line/multi-line";

const StackedLine = ({
  data,
  keys,
  xLegend,
  yLegend,
  normalSettings,
  scopeSettings,
  axisXGridLineSettings,
  axisYGridLineSettings,
  leftLabelSettings,
  rightLabelSettings,
  bottomLabelSettings,
  topLabelSettings,
  leftLegendSettings,
  rightLegendSettings,
  legendSettings,
  lineSettings,
  animationSettings,
}) => {
  let dataSet = data;
  if (!dataSet || dataSet.length === 0) {
    return;
  }
  const stackedData = [];

  dataSet.forEach((element, idx) => {
    if (idx === 0) {
      stackedData.push({ ...element });
      return;
    }

    const newData = element.data.map((d, i) => {
      return { ...d, value: d.value + stackedData[idx - 1].data[i].value };
    });
    stackedData.push({ ...element, data: newData });
  });

  dataSet = [...stackedData].reverse();

  const result = checkNormalLine({
    normalSettings,
    scopeSettings,
    axisXGridLineSettings,
    axisYGridLineSettings,
    leftLabelSettings,
    rightLabelSettings,
    bottomLabelSettings,
    topLabelSettings,
    leftLegendSettings,
    rightLegendSettings,
    legendSettings,
    lineSettings,
    animationSettings,
  });

  return (
    <MultiLine
      dataSet={dataSet}
      keys={keys}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={result.normalSettings}
      scopeSettings={result.scopeSettings}
      axisXGridLineSettings={result.axisXGridLineSettings}
      axisYGridLineSettings={result.axisYGridLineSettings}
      leftLabelSettings={result.leftLabelSettings}
      rightLabelSettings={result.rightLabelSettings}
      bottomLabelSettings={result.bottomLabelSettings}
      topLabelSettings={result.topLabelSettings}
      leftLegendSettings={result.leftLegendSettings}
      rightLegendSettings={result.rightLegendSettings}
      legendSettings={result.legendSettings}
      lineSettings={result.lineSettings}
      animationSettings={result.animationSettings}
    />
  );
};

export { StackedLine };
