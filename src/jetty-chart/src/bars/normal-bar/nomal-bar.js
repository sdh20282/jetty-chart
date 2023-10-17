import { getCategoryLevel } from "../../common/utils/bar-category";

const NormalBar = ({
  data,
  generalSettings: { width = "500", height = "300", backgroundColor = "#ffffff", padding = { top: "30", bottom: "50", left: "60", right: "130" } },
  categorySettings: {
    lineVisible = true,
    lineOpacity = "1",
    lineColor = "#c4c4c4",
    lineWidth = "1",
    categoryLocation = "8",
    categorySize = "11",
    categoryWeight = "400",
    categoryColor = "#777",
    categoryGap = "3",
    categoryLineVisible = true,
    categoryLineWidth = "2",
    categoryLineColor = "#aaa"
  }
}) => {
  console.log(data, top);
  const category = getCategoryLevel({ data });
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.bottom - padding.top;

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, border: "1px solid #ccc" }}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={backgroundColor}></rect>
        <g transform={`translate(${padding.left},${padding.top})`}>
          <g>
            {lineVisible &&
              category.map((c, idx) => {
                if (idx === category.length - 1) {
                  return;
                }

                const y = chartHeight - (chartHeight * c) / category[category.length - 1];

                return <line key={c} opacity={lineOpacity} x1="0" x2={chartWidth} y1={y} y2={y} stroke={lineColor} strokeWidth={lineWidth}></line>;
              })}
          </g>
          <g transform={`translate(-${categoryLocation})`}>
            {category.map((c, idx) => {
              if (idx === category.length - 1) {
                return;
              }

              const y = chartHeight - (chartHeight * c) / category[category.length - 1];

              return (
                <g key={c} transform={`translate(0,${y})`}>
                  <text fontSize={categorySize} fontWeight={categoryWeight} dominantBaseline="central" textAnchor="end" fill={categoryColor}>
                    {c}
                  </text>
                  {categoryLineVisible && (
                    <line
                      opacity={lineOpacity}
                      x1={categoryGap}
                      x2={categoryLocation}
                      y1="0"
                      y2="0"
                      stroke={categoryLineColor}
                      strokeWidth={categoryLineWidth}
                    ></line>
                  )}
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
};

export { NormalBar };
