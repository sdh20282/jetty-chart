export const DrawXAxisLegend = ({
  xLegend,
  normalSettings: { totalWidth, totalHeight, horizontal },
  legendSettings: { useLegend, legendOnBottom, legendMargin, legendSize, legendWeight, legendOpacity, legendColor, legendReverse, legendMove }
}) => {
  const width = totalWidth / 2 + (horizontal ? -legendMove : legendMove);

  return (
    xLegend &&
    useLegend && (
      <g
        transform={
          horizontal
            ? `translate(${legendOnBottom ? -legendMargin : totalHeight + legendMargin},${width})`
            : `translate(${width},${legendOnBottom ? totalHeight + legendMargin : -legendMargin})`
        }
      >
        <text
          fontSize={legendSize}
          fontWeight={legendWeight}
          fill={legendColor}
          opacity={legendOpacity}
          dominantBaseline="middle"
          textAnchor="middle"
          transform={horizontal ? `rotate(${legendReverse ? 90 : -90})` : `rotate(${legendReverse ? 180 : 0})`}
        >
          {xLegend}
        </text>
      </g>
    )
  );
};
