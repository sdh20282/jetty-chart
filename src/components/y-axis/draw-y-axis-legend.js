export const DrawYAxisLegend = ({
  yLegend,
  normalSettings: { totalWidth, totalHeight, horizontal },
  legendSettings: { useLegend, legendOnLeft, legendMargin, legendSize, legendWeight, legendOpacity, legendColor, legendReverse, legendMove },
}) => {
  if (!yLegend || !useLegend) {
    return;
  }

  const height = totalHeight / 2 + (horizontal ? legendMove : -legendMove);

  return (
    <g
      transform={
        horizontal
          ? `translate(${height},${legendOnLeft ? -legendMargin : totalWidth + legendMargin})`
          : `translate(${legendOnLeft ? -legendMargin : totalWidth + legendMargin}, ${height})`
      }
    >
      <text
        fontSize={legendSize}
        fontWeight={legendWeight}
        fill={legendColor}
        opacity={legendOpacity}
        dominantBaseline="middle"
        textAnchor="middle"
        transform={horizontal ? `rotate(${legendReverse ? 180 : 0})` : `rotate(${legendReverse ? 90 : -90})`}
      >
        {yLegend}
      </text>
    </g>
  );
};
