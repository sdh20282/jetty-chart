import { DrawLine } from "../common/DrawLine";

const MultiLine = ({
  data,
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

  return (
    <DrawLine
      data={data}
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

export { MultiLine };
