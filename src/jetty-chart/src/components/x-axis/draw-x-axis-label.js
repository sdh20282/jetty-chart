/* eslint-disable complexity */
export const DrawXAxisLabel = ({
  normalSettings: { xAxis, horizontal, height, padding, xAxisInitialPosition, xAxisWidth },
  labelSettings: {
    useLabel,
    labelOnBottom,
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
  if (!useLabel) {
    return;
  }

  const totalLabelMargin = labelMargin + sideLineSize;
  const labelLocation = height + totalLabelMargin;

  padding ??= 0;
  xAxisInitialPosition ??= 0;

  return (
    <g
      transform={
        horizontal
          ? `translate(${labelOnBottom ? -totalLabelMargin : labelLocation},${padding})`
          : `translate(${padding},${labelOnBottom ? labelLocation : -totalLabelMargin})`
      }
    >
      {xAxis.map((d, idx) => {
        const x = xAxisWidth * idx + xAxisInitialPosition;

        return (
          <g key={"category-" + d + "-" + idx} transform={horizontal ? `translate(0, ${x})` : `translate(${x})`}>
            {sideLineVisible && (
              <line
                x1={horizontal ? (labelOnBottom ? totalLabelMargin - sideLineSize : -totalLabelMargin + sideLineSize) : "0"}
                x2={horizontal ? (labelOnBottom ? totalLabelMargin : -totalLabelMargin) : "0"}
                y1={horizontal ? "0" : labelOnBottom ? -totalLabelMargin + sideLineSize : totalLabelMargin - sideLineSize}
                y2={horizontal ? "0" : labelOnBottom ? -totalLabelMargin : totalLabelMargin}
                stroke={sideLineColor}
                strokeOpacity={sideLineOpacity}
                strokeWidth={sideLineWidth}
              ></line>
            )}

            <g transform={`translate(${horizontal ? 0 : labelMove},${horizontal ? -labelMove : 0}) rotate(${labelRotate})`}>
              <text
                dominantBaseline={horizontal ? "hanging" : labelOnBottom ? "hanging" : "ideographic"}
                textAnchor={
                  horizontal
                    ? labelOnBottom
                      ? "end"
                      : "start"
                    : labelRotate === 0
                    ? "middle"
                    : labelRotate < 0
                    ? labelOnBottom
                      ? "end"
                      : "start"
                    : labelOnBottom
                    ? "start"
                    : "end"
                }
                fontSize={labelSize}
                fontWeight={labelWeight}
                fill={labelColor}
                opacity={labelOpacity}
                transform={`translate(0,-${horizontal ? labelSize / 2 : 0})`}
              >
                {d}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
};
/* eslint-enable complexity */
