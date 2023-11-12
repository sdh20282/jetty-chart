const PieDonutBackground = ({ pieRadius, innerRadius, donutBackgroundColor }) => {
  return (
    <circle
      cx={0}
      cy={0}
      r={pieRadius - (pieRadius - innerRadius) / 2}
      stroke={donutBackgroundColor}
      strokeWidth={pieRadius - innerRadius}
      fill="transparent"
    />
  );
};

export default PieDonutBackground;
