export const DrawTextLevel = ({
  chartHeight,
  level,
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
    <g transform={`translate(-${levelTextGap})`}>
      {level.map((c, idx) => {
        if (idx === level.length - 1 && !showTopLevel) {
          return;
        }

        const y = (chartHeight / (level.length - 1)) * idx;

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
  );
};
