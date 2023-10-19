export const DrawTextCategory = ({
  data,
  horizontal,
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
    <g
      transform={
        horizontal
          ? `translate(${categoryTextOnBottom ? -categoryTextGap : categoryAreaLocation},${categoryPadding})`
          : `translate(${categoryPadding},${categoryTextOnBottom ? categoryAreaLocation : -categoryTextGap})`
      }
    >
      {data.map((d, idx) => {
        const x = (categoryAreaWidth / data.length) * idx + categoryAreaWidth / data.length / 2;

        return (
          <g key={"category-" + d.label + "-" + idx} transform={horizontal ? `translate(0, ${x})` : `translate(${x})`}>
            {categoryLineVisible && (
              <line
                opacity={categoryLineOpacity}
                x1={horizontal ? (categoryTextOnBottom ? categoryTextMargin : -categoryTextMargin) : "0"}
                x2={horizontal ? (categoryTextOnBottom ? categoryTextGap : -categoryTextGap) : "0"}
                y1={horizontal ? "0" : categoryTextOnBottom ? -categoryTextGap : categoryTextGap}
                y2={horizontal ? "0" : categoryTextOnBottom ? -categoryTextMargin : categoryTextMargin}
                stroke={categoryLineColor}
                strokeWidth={categoryLineWidth}
              ></line>
            )}
            <text
              dominantBaseline={horizontal ? "hanging" : categoryTextOnBottom ? "mathematical" : "ideographic"}
              textAnchor={horizontal ? (categoryTextOnBottom ? "end" : "start") : "middle"}
              fontSize={categoryTextSize}
              fontWeight={categoryTextWeight}
              fill={categoryTextColor}
              transform={`translate(0,-${horizontal ? categoryTextSize / 2 : 0})`}
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </g>
  );
};
