export const DrawYAxisLegend = ({
  yLegend,
  normalSettings: { totalWidth, totalHeight },
  legendSettings: { useLegend, legendOnLeft, legendMargin, legendSize, legendWeight, legendOpacity, legendColor, legendReverse, legendMove }
}) => {
  const height = totalHeight / 2 - legendMove;

  return (
    yLegend &&
    useLegend && (
      <g transform={`translate(${legendOnLeft ? -legendMargin - 5 : totalWidth + legendMargin}, ${height})`}>
        <text
          fontSize={legendSize}
          fontWeight={legendWeight}
          fill={legendColor}
          opacity={legendOpacity}
          dominantBaseline="middle"
          textAnchor="middle"
          transform={`rotate(${legendReverse ? 90 : -90})`}
        >
          {yLegend}
        </text>
      </g>
    )
  );
};
