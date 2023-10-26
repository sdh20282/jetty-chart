export const DrawLegends = ({
  keys,
  normalSettings: { width, height, margin, colorPalette },
  legendSettings: {
    useLegend,
    position,
    xLocation,
    yLocation,
    directionColumn,
    itemWidth,
    itemMargin,
    symbolSize,
    symbolRadius,
    symbolMargin,
    symbolOpacity,
    legendSize,
    legendWeight,
    legendOpacity,
    legendColor,
    legendOnStart
  }
}) => {
  const yAxis = position.split("-")[0];
  const xAxis = position.split("-")[1];
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const legendHeight = symbolSize * keys.length + itemMargin * (keys.length - 1);

  return (
    useLegend && (
      <g
        transform={`translate(${
          (xAxis === "left" ? 0 : xAxis === "center" ? margin.left + chartWidth / 2 - itemWidth / 2 : chartWidth + margin.left) + xLocation
        },${
          (yAxis === "top"
            ? margin.top
            : yAxis === "center"
            ? margin.top + chartHeight / 2 - legendHeight / 2
            : chartHeight + margin.top - legendHeight) + yLocation
        })`}
      >
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
                opacity={symbolOpacity}
                fill={colorPalette[idx % colorPalette.length]}
                rx={symbolRadius}
                ry={symbolRadius}
                transform="translate(0,0)"
              ></rect>
              <text
                fontSize={legendSize}
                fontWeight={legendWeight}
                fill={legendColor}
                opacity={legendOpacity}
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
    )
  );
};
