export const DrawTextCategory = ({
  data,
  categoryAreaWidth,
  categoryAreaLocation,
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
}) => {
  return (
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
  );
};
