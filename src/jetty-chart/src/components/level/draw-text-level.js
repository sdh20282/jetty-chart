export const DrawTextLevel = ({
  horizontal,
  levelTextAreaLocation,
  chartHeight,
  level,
  levelTextOnLeft,
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
}) => {
  return (
    <g
      transform={
        horizontal
          ? `translate(0,${levelTextOnLeft ? -levelTextGap : levelTextAreaLocation})`
          : `translate(${levelTextOnLeft ? -levelTextGap : levelTextAreaLocation})`
      }
    >
      {level.map((c, idx) => {
        if (!showTopLevel && (idx === 0 || idx === level.length - 1) && c !== 0) {
          return;
        }

        const y = (chartHeight / (level.length - 1)) * idx;

        return (
          <g key={"level-" + c + "-" + idx} transform={horizontal ? `translate(${y})` : `translate(0,${y})`}>
            <text
              dominantBaseline={horizontal ? (levelTextOnLeft ? "ideographic" : "mathematical") : "hanging"}
              textAnchor={horizontal ? "middle" : levelTextOnLeft ? "end" : "start"}
              fontSize={levelTextSize}
              fontWeight={levelTextWeight}
              fill={levelTextColor}
              transform={`translate(0,-${horizontal ? 0 : levelTextSize / 2})`}
            >
              {c}
            </text>
            {levelLineVisible && (
              <line
                opacity={levelLineOpacity}
                x1={horizontal ? "0" : levelTextOnLeft ? levelTextMargin : -levelTextMargin}
                x2={horizontal ? "0" : levelTextOnLeft ? levelTextGap : -levelTextGap}
                y1={horizontal ? (levelTextOnLeft ? levelTextGap : -levelTextGap) : "0"}
                y2={horizontal ? (levelTextOnLeft ? levelTextMargin : -levelTextMargin) : "0"}
                stroke={levelLineColor}
                strokeWidth={levelLineWidth}
              ></line>
            )}
          </g>
        );
      })}
    </g>
  );
};
