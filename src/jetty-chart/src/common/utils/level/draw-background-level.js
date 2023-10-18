export const DrawBackgroundLevel = ({ chartWidth, chartHeight, level, lineVisible, lineOpacity, lineColor, lineWidth, showTopLevel }) => {
  return (
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
  );
};
