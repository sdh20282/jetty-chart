export const DrawYAxisLabel = ({
  normalSettings: { yAxis, width, yAxisHeight, showTopScope },
  labelSettings: {
    useLabel,
    labelOnLeft,
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
  const labelLocation = width + labelMargin;

  return (
    useLabel && (
      <g transform={`translate(${labelOnLeft ? -labelMargin : labelLocation})`}>
        {yAxis.map((c, idx) => {
          if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
            return;
          }

          const location = yAxisHeight * idx;

          return (
            <g key={"level-" + c + "-" + idx} transform={`translate(0,${location})`}>
              <text
                dominantBaseline={"hanging"}
                textAnchor={labelOnLeft ? "end" : "start"}
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                transform={`translate(0,-${labelSize / 2})`}
              >
                {c}
              </text>
              {sideLineVisible && (
                <line
                  opacity={sideLineOpacity}
                  x1={labelOnLeft ? sideLineMargin : -sideLineMargin}
                  x2={labelOnLeft ? labelMargin : -labelMargin}
                  y1={"0"}
                  y2={"0"}
                  stroke={sideLineColor}
                  strokeWidth={sideLineWidth}
                ></line>
              )}
            </g>
          );
        })}
      </g>
    )
  );
};
