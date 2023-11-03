export const DrawXAxisLegend = ({
  xLegend,
  normalSettings: { totalWidth, totalHeight },
  legendSettings: { useLegend, legendOnBottom, legendMargin, legendSize, legendWeight, legendOpacity, legendColor, legendReverse, legendMove }
}) => {
  const width = totalWidth / 2 + legendMove;

  return (
    xLegend &&
    useLegend && (
      <g transform={`translate(${width},${legendOnBottom ? totalHeight + legendMargin : -legendMargin})`}>
        <text
          fontSize={legendSize}
          fontWeight={legendWeight}
          fill={legendColor}
          opacity={legendOpacity}
          dominantBaseline="middle"
          textAnchor="middle"
          transform={`rotate(${legendReverse ? 180 : 0})`}
        >
          {xLegend}
        </text>
      </g>
    )
  );
};
