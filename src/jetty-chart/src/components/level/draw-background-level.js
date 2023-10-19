export const DrawBackgroundLevel = ({
  horizontal,
  chartWidth,
  chartHeight,
  level,
  lineVisible,
  lineOpacity,
  lineColor,
  lineWidth,
  lineDash,
  lineDashWidth,
  lineDashGap,
  lineRound,
  showTopLevel
}) => {
  return (
    <g>
      {lineVisible &&
        level.map((c, idx) => {
          if (!showTopLevel && (idx === 0 || idx === level.length - 1) && c !== 0) {
            return;
          }

          const y = (chartHeight / (level.length - 1)) * idx;

          return (
            <line
              key={"background-line-" + c + "-" + idx}
              opacity={lineOpacity}
              x1={horizontal ? y : "0"}
              x2={horizontal ? y : chartWidth}
              y1={horizontal ? "0" : y}
              y2={horizontal ? chartWidth : y}
              stroke={lineColor}
              strokeWidth={lineWidth}
              strokeDasharray={lineDash && c !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
              strokeLinecap={lineRound ? "round" : ""}
            ></line>
          );
        })}
    </g>
  );
};
