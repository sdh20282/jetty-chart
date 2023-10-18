const Pie = ({
  data,
  generalSettings = {
    width: "200",
    height: "200",
    backgroundColor: "#777",
    padding: { top: "0", bottom: "0", left: "0", right: "0" },
  },
  pieSettings = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    startAngle: 0, // 시작 위치, default 0
    padSize: 100, // 조각 크기, default 100
    padAngle: 100, // 조각 여백 default 0
    innerWidth: 0, // 내부원 크기, default 50
    cornerRadius: 0,
  },
}) => {
  const ERROR_VALUE = 0.01;
  const checkRangeStrokeWidth = (innerWidth) =>
    innerWidth >= 100 ? 1 / 50 : innerWidth <= 0 ? 100 / 50 : (100 - innerWidth) / 50;
  const checkRangePadAngle = (padAngle) => (padAngle < 0 ? 0 : padAngle);
  const checkRangePadSize = (padSize) => (padSize > 100 ? 100 : padSize < 1 ? 1 : padSize);
  const checkRangeValue = (value) => (value < ERROR_VALUE ? ERROR_VALUE : value);
  const getCategoryDataPath = (
    { value, label },
    { startX, startY, endX, endY, isLargeArcFlag },
    index
  ) => {
    const targetRad = 2 * Math.PI * value;
    const targetRestRad = 2 * Math.PI * (1 - value) + 1;
    return (
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth={checkRangeStrokeWidth(Math.abs(pieSettings.innerWidth))}
        strokeDasharray={`${targetRad} ${targetRestRad}`}
        strokeDashoffset={checkRangePadAngle(0.025 * pieSettings.padAngle) + ERROR_VALUE}
        key={index}
      ></path>
    );
  };
  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent + (Math.PI * pieSettings.startAngle) / 180);
    const y = Math.sin(2 * Math.PI * percent + (Math.PI * pieSettings.startAngle) / 180);

    return [x, y];
  };

  const getPieChartPaths = (data) => {
    let accumulatedPercent = 0;

    return data.map(({ value, label }, index) => {
      const [startX, startY] = getCoordinatesForPercent(accumulatedPercent);
      value *= checkRangePadSize(pieSettings.padSize) / 100;
      value = checkRangeValue(value);
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
          viewBox="-2 -2 4 4"
        >
          {getPieChartPaths(data)}
        </svg>
      </div>
    </div>
  );
};

export { Pie };
