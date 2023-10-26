/* eslint-disable complexity */
export const DrawYAxisLabel = ({
  normalSettings: { horizontal, yAxis, width, yAxisHeight, showTopScope },
  labelSettings: {
    useLabel,
    labelOnLeft,
    labelMargin,
    labelSize,
    labelWeight,
    labelOpacity,
    labelColor,
    labelRotate,
    labelMove,
    sideLineSize,
    sideLineVisible,
    sideLineOpacity,
    sideLineColor,
    sideLineWidth
  }
}) => {
  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = width + totalLabelMargin;

  return (
    useLabel && (
      <g
        transform={
          horizontal
            ? `translate(0,${labelOnLeft ? -totalLabelMargin : labelLocation})`
            : `translate(${labelOnLeft ? -totalLabelMargin : labelLocation})`
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
                  height={labelSize}
                  fontSize={labelSize}
                  fontWeight={labelWeight}
                  fill={labelColor}
                  opacity={labelOpacity}
                  transform={`translate(0,${horizontal ? 0 : -labelSize / 2})`}
                >
                  {c}
                </text>
              </g>
              {sideLineVisible && (
                <line
                  x1={horizontal ? "0" : labelOnLeft ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize}
                  x2={horizontal ? "0" : labelOnLeft ? totalLabelMargin : -totalLabelMargin}
                  y1={horizontal ? (labelOnLeft ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize) : "0"}
                  y2={horizontal ? (labelOnLeft ? totalLabelMargin : -totalLabelMargin) : "0"}
                  stroke={sideLineColor}
                  strokeOpacity={sideLineOpacity}
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
