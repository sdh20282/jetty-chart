const Pie = ({
  data,
  generalSettings = {
    width: "300",
    height: "300",
    backgroundColor: "#777",
    padding: { top: "30", bottom: "50", left: "60", right: "130" },
  },
  pieSettings = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    startAngle: 0,
    padSize: 100,
    padAngle: 0,
    cornerRadius: 0,
    strokeWidth: 1,
  },
}) => {
  const ERROR_VALUE = 0.002;
  const handleStrokeWidth = (strokeWidth) =>
    strokeWidth > 2 ? 2 : strokeWidth < 0.01 ? 0.01 : strokeWidth;
  const handlePadAngle = (padAngle) => (padAngle < 0 ? 0 : padAngle);
  const handlePadSize = (padSize) => (padSize > 100 ? 100 : padSize < 1 ? 1 : padSize);
  const handleValue = (value) => (value < ERROR_VALUE ? ERROR_VALUE : value);
  const getCategoryDataPath = (
    { value, label },
    { startX, startY, endX, endY, isLargeArcFlag },
    index
  ) => {
    const targetRad = 2 * Math.PI * value - 0.003;
    const targetRestRad = 2 * Math.PI * (1 - value) + 1;
    return (
      <path
        d={`M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`}
        fill="none"
        stroke={pieSettings.color[index]}
        strokeWidth={handleStrokeWidth(Math.abs(pieSettings.strokeWidth))}
        strokeDasharray={`${targetRad} ${targetRestRad}`}
        strokeDashoffset={handlePadAngle(0.025 * pieSettings.padAngle) + ERROR_VALUE}
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
      value *= handlePadSize(pieSettings.padSize) / 100;
      console.log(value);
      value = handleValue(value);
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
