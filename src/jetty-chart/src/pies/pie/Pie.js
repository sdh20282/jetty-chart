const Pie = ({
  data,
  generalSettings = {
    width: "500",
    height: "300",
    backgroundColor: "#aaa",
    padding: { top: "30", bottom: "50", left: "60", right: "130" },
  },
  pieSettings = {
    color: ["red", "blue", "green", "yellow", "orange", "purple"],
  },
}) => {
  const getCategoryDataPath = (
    { value, label },
    { startX, startY, endX, endY, isLargeArcFlag },
    index
  ) => {
    const targetRad = 2 * Math.PI * value;
    const targetRestRad = 2 * Math.PI * (1 - value);
    const animationDuration = 0.2;
    return (
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth="0.4"
        strokeDasharray={`${targetRad} ${targetRestRad}`}
        strokeDashoffset="0.025"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin={`${animationDuration * index}`}
          from={`${targetRad}`}
          to="0.025"
          dur={`${animationDuration}`}
          fill="freeze"
        />
      </path>
    );
  };

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return [x, y];
  };

  const getPieChartPaths = (data) => {
    let accumulatedPercent = 0;

    return data.map(({ value, label }, index) => {
      const [startX, startY] = getCoordinatesForPercent(accumulatedPercent);
      accumulatedPercent += value;
      const [endX, endY] = getCoordinatesForPercent(accumulatedPercent);
      const isLargeArcFlag = value > 0.5 ? "1" : "0";

      return getCategoryDataPath(
        { value, label },
        { startX, startY, endX, endY, isLargeArcFlag },
        index
      );
    });
  };

  return (
    <div>
      <p>Pie</p>
      <div>
        <svg
          id="pie"
          width={generalSettings.width}
          height={generalSettings.height}
          style={{
            backgroundColor: generalSettings.backgroundColor,
            padding: `${generalSettings.padding.top}px ${generalSettings.padding.right}px ${generalSettings.padding.bottom}px ${generalSettings.padding.left}px`,
          }}
          viewBox="-1.5 -1.5 3 3"
        >
          {getPieChartPaths(data)}
        </svg>
      </div>
    </div>
  );
};

export { Pie };
