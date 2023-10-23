export const DrawYAxisLegend = ({
  normalSettings: { totalWidth, totalHeight, horizontal },
  legendSettings: { useLegend, legendOnLeft, legendMargin, legendSize, legendWeight, legendColor, legendReverse, legendMove }
}) => {
  const height = totalHeight / 2 + (horizontal ? legendMove : -legendMove);

  return (
    useLegend && (
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
          dominantBaseline="middle"
          textAnchor="middle"
          transform={horizontal ? `rotate(${legendReverse ? 180 : 0})` : `rotate(${legendReverse ? 90 : -90})`}
        >
          Values
        </text>
      </g>
    )
  );
};
