export const DrawXAxisLabel = ({
  normalSettings: { xAxis, horizontal, height, padding, xAxisInitialPosition, xAxisWidth },
  labelSettings: {
    useLabel,
    labelOnBottom,
    labelMargin,
    labelSize,
    labelWeight,
    labelColor,
    sideLineMargin,
    sideLineVisible,
    sideLineOpacity,
    sideLineColor,
    sideLineWidth
  }
}) => {
  const labelLocation = height + labelMargin;

  padding ??= 0;

  return (
    useLabel && (
      <g
        transform={
          horizontal
            ? `translate(${labelOnBottom ? -labelMargin : labelLocation},${padding})`
            : `translate(${padding},${labelOnBottom ? labelLocation : -labelMargin})`
        }
      >
        {xAxis.map((d, idx) => {
          const x = xAxisWidth * idx + xAxisInitialPosition;

          return (
            <g key={"category-" + d + "-" + idx} transform={horizontal ? `translate(0, ${x})` : `translate(${x})`}>
              {sideLineVisible && (
                <line
                  opacity={sideLineOpacity}
                  x1={horizontal ? (labelOnBottom ? sideLineMargin : -sideLineMargin) : "0"}
                  x2={horizontal ? (labelOnBottom ? labelMargin : -labelMargin) : "0"}
                  y1={horizontal ? "0" : labelOnBottom ? -labelMargin : labelMargin}
                  y2={horizontal ? "0" : labelOnBottom ? -sideLineMargin : sideLineMargin}
                  stroke={sideLineColor}
                  strokeWidth={sideLineWidth}
                ></line>
              )}
              <text
                dominantBaseline={horizontal ? "hanging" : labelOnBottom ? "mathematical" : "ideographic"}
                textAnchor={horizontal ? (labelOnBottom ? "end" : "start") : "middle"}
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                transform={`translate(0,-${horizontal ? labelSize / 2 : 0})`}
              >
                {d}
              </text>
            </g>
          );
        })}
      </g>
    )
  );
};
