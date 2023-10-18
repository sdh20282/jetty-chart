export const DrawBackgroundLevel = ({
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
  showTopLevel
}) => {
  return (
    <g>
      {lineVisible &&
        level.map((c, idx) => {
          if (!showTopLevel && (idx === level.length - 1 || idx === 0) && c !== 0) {
            return;
          }

          const y = (chartHeight / (level.length - 1)) * idx;

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
              strokeDasharray={lineDash && c !== 0 ? `${lineDashWidth},${lineDashGap}` : "0"}
            ></line>
          );
        })}
    </g>
  );
};
