/* eslint-disable complexity */
import { MultiLine } from "../multi-line/multi-line";

const SingleLine = ({
  data,
  title,
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
  if (!data || data.length === 0) {
    return;
  }
  const dataSet = [{ id: title, data: data }];

  return (
    <MultiLine
      dataSet={dataSet}
      xLegend={xLegend}
      yLegend={yLegend}
      normalSettings={normalSettings}
      scopeSettings={scopeSettings}
      axisXGridLineSettings={axisXGridLineSettings}
      axisYGridLineSettings={axisYGridLineSettings}
      leftLabelSettings={leftLabelSettings}
      rightLabelSettings={rightLabelSettings}
      bottomLabelSettings={bottomLabelSettings}
      topLabelSettings={topLabelSettings}
      leftLegendSettings={leftLegendSettings}
      rightLegendSettings={rightLegendSettings}
      legendSettings={legendSettings}
      lineSettings={lineSettings}
      animationSettings={animationSettings}
    />
  );
};

export { SingleLine };
