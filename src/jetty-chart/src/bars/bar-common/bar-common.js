const BarCommon = ({
  data,
  generalSettings: { width, height, backgroundColor, padding },
  levelSettings: {
    level,
    lineVisible,
    lineOpacity,
    lineColor,
    lineWidth,
    levelTextGap,
    levelTextSize,
    levelTextWeight,
    levelTextColor,
    levelTextMargin,
    levelLineVisible,
    levelLineOpacity,
    levelLineColor,
    levelLineWidth,
    showTopLevel
  },
  categorySettings: {
    categoryPadding,
    categoryTextGap,
    categoryTextSize,
    categoryTextWeight,
    categoryTextColor,
    categoryTextMargin,
    categoryLineVisible,
    categoryLineOpacity,
    categoryLineColor,
    categoryLineWidth
  },
  children
}) => {
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.bottom - padding.top;
  const categoryAreaWidth = width - padding.left - padding.right - categoryPadding - categoryPadding;
  const categoryAreaLocation = chartHeight + parseInt(categoryTextGap, 10);

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${padding.left},${padding.top})`}>
          <g>
            {lineVisible &&
              level.map((c, idx) => {
                if (idx === level.length - 1 && !showTopLevel) {
                  return;
                }

                const y = chartHeight - (chartHeight * c) / level[level.length - 1];

                return (
                  <line
                    key={"background-line-" + c + "-" + idx}
                    opacity={lineOpacity}
                    x1="0"
                    x2={chartWidth}
                    y1={y}
                    y2={y}
                    stroke={lineColor}
                    strokeWidth={lineWidth}
                  ></line>
                );
              })}
          </g>
          <g transform={`translate(-${levelTextGap})`}>
            {level.map((c, idx) => {
              if (idx === level.length - 1 && !showTopLevel) {
                return;
              }

              const y = chartHeight - (chartHeight * c) / level[level.length - 1];

              return (
                <g key={"level-" + c + "-" + idx} transform={`translate(0,${y})`}>
                  <text dominantBaseline="central" textAnchor="end" fontSize={levelTextSize} fontWeight={levelTextWeight} fill={levelTextColor}>
                    {c}
                  </text>
                  {levelLineVisible && (
                    <line
                      opacity={levelLineOpacity}
                      x1={levelTextMargin}
                      x2={levelTextGap}
                      y1="0"
                      y2="0"
                      stroke={levelLineColor}
                      strokeWidth={levelLineWidth}
                    ></line>
                  )}
                </g>
              );
            })}
          </g>
          <g transform={`translate(${categoryPadding},${categoryAreaLocation})`}>
            {data.map((d, idx) => {
              const x = (categoryAreaWidth / data.length) * idx + categoryAreaWidth / data.length / 2;

              return (
                <g key={"category-" + d.label + "-" + idx} transform={`translate(${x})`}>
                  {categoryLineVisible && (
                    <line
                      opacity={categoryLineOpacity}
                      x1="0"
                      x2="0"
                      y1={-categoryTextGap}
                      y2={-categoryTextMargin}
                      stroke={categoryLineColor}
                      strokeWidth={categoryLineWidth}
                    ></line>
                  )}
                  <text
                    dominantBaseline="mathematical"
                    textAnchor="middle"
                    fontSize={categoryTextSize}
                    fontWeight={categoryTextWeight}
                    fill={categoryTextColor}
                  >
                    {d.label}
                  </text>
                </g>
              );
            })}
          </g>
          {children}
        </g>
      </svg>
    </div>
  );
};

export { BarCommon };
