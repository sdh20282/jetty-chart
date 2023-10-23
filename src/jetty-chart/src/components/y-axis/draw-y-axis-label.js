/* eslint-disable complexity */
export const DrawYAxisLabel = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  labelSettings: {
    useLabel,
    labelOnLeft,
    labelMargin,
    labelSize,
    labelWeight,
    labelColor,
    labelRotate,
    labelMove,
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
      <g
        transform={
          horizontal ? `translate(0,${labelOnLeft ? -labelMargin : labelLocation})` : `translate(${labelOnLeft ? -labelMargin : labelLocation})`
        }
      >
        {yAxis.map((c, idx) => {
          if (!showTopScope && (idx === 0 || idx === yAxis.length - 1) && c !== 0) {
            return;
          }

          const location = yAxisHeight * idx;

          return (
            <g key={"level-" + c + "-" + idx} transform={horizontal ? `translate(${location})` : `translate(0,${location})`}>
              <g transform={`translate(${horizontal ? labelMove : 0},${horizontal ? 0 : -labelMove}) rotate(${labelRotate})`}>
                <text
                  dominantBaseline={horizontal ? (labelOnLeft ? "ideographic" : "hanging") : "hanging"}
                  textAnchor={
                    horizontal
                      ? labelRotate === 0
                        ? "middle"
                        : labelRotate < 0
                        ? labelOnLeft
                          ? "start"
                          : "end"
                        : labelOnLeft
                        ? "end"
                        : "start"
                      : labelOnLeft
                      ? "end"
                      : "start"
                  }
                  fontSize={labelSize}
                  height={labelSize}
                  fontWeight={labelWeight}
                  fill={labelColor}
                  transform={`translate(0,${horizontal ? 0 : -labelSize / 2})`}
                >
                  {c}
                </text>
              </g>
              {sideLineVisible && (
                <line
                  opacity={sideLineOpacity}
                  x1={horizontal ? "0" : labelOnLeft ? sideLineMargin : -sideLineMargin}
                  x2={horizontal ? "0" : labelOnLeft ? labelMargin : -labelMargin}
                  y1={horizontal ? (labelOnLeft ? labelMargin : -labelMargin) : "0"}
                  y2={horizontal ? (labelOnLeft ? sideLineMargin : -sideLineMargin) : "0"}
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
/* eslint-enable complexity */
