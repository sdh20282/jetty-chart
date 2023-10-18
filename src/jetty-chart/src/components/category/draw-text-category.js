export const DrawTextCategory = ({
  data,
  categoryAreaWidth,
  categoryAreaLocation,
  categoryPadding,
  categoryTextOnBottom,
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
    <g transform={`translate(${categoryPadding},${categoryTextOnBottom ? categoryAreaLocation : -categoryTextGap})`}>
      {data.map((d, idx) => {
        const x = (categoryAreaWidth / data.length) * idx + categoryAreaWidth / data.length / 2;

        return (
          <g key={"category-" + d.label + "-" + idx} transform={`translate(${x})`}>
            {categoryLineVisible && (
              <line
                opacity={categoryLineOpacity}
                x1="0"
                x2="0"
                y1={categoryTextOnBottom ? -categoryTextGap : categoryTextGap}
                y2={categoryTextOnBottom ? -categoryTextMargin : categoryTextMargin}
                stroke={categoryLineColor}
                strokeWidth={categoryLineWidth}
              ></line>
            )}
            <text
              dominantBaseline={categoryTextOnBottom ? "mathematical" : "alphabetic"}
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
