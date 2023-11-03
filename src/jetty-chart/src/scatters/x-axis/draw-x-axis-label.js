export const DrawXAxisLabel = ({
  normalSettings: { xAxis, height, padding, xAxisWidth },
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
      <g transform={`translate(${padding},${labelOnBottom ? labelLocation : -labelMargin})`}>
        {xAxis.map((d, idx) => {
          const x = xAxisWidth * idx;

          return (
            <g key={"category-" + d + "-" + idx} transform={`translate(${x})`}>
              {sideLineVisible && (
                <line
                  opacity={sideLineOpacity}
                  x1={"0"}
                  x2={"0"}
                  y1={labelOnBottom ? -labelMargin : labelMargin}
                  y2={labelOnBottom ? -sideLineMargin : sideLineMargin}
                  stroke={sideLineColor}
                  strokeWidth={sideLineWidth}
                ></line>
              )}
              <text
                dominantBaseline={labelOnBottom ? "mathematical" : "ideographic"}
                textAnchor={"middle"}
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                transform={`translate(0,-${0})`}
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
