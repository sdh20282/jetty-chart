export const DrawLegends = ({
  keys,
  normalSettings: { colorPalette },
  legendSettings: {
    xLocation,
    yLocation,
    directionColumn,
    itemWidth,
    itemMargin,
    symbolSize,
    symbolRadius,
    symbolMargin,
    legendSize,
    legendWeight,
    legendColor,
    legendOnStart
  }
}) => {
  return (
    <g transform={`translate(${xLocation},${yLocation})`}>
      {keys.map((k, idx) => {
        return (
          <g
            key={k + String(idx)}
            transform={directionColumn ? `translate(0,${(symbolSize + itemMargin) * idx})` : `translate(${(itemWidth + itemMargin) * idx})`}
            width={itemWidth - symbolSize - symbolMargin}
          >
            <rect
              width={symbolSize}
              height={symbolSize}
              fill={colorPalette[idx % colorPalette.length]}
              rx={symbolRadius}
              ry={symbolRadius}
              transform="translate(0,0)"
            ></rect>
            <text
              fontSize={legendSize}
              fontWeight={legendWeight}
              fill={legendColor}
              dominantBaseline="middle"
              textAnchor={legendOnStart ? "start" : "end"}
              transform={`translate(${legendOnStart ? symbolSize + symbolMargin : itemWidth},${symbolSize / 2})`}
            >
              {k}
            </text>
          </g>
        );
      })}
    </g>
  );
};
