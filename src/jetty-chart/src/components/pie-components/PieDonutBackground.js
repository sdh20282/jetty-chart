const PieDonutBackground = ({ pieRadius, innerRadius, donutBackgroundColor, donutOpacity }) => {
  return (
    <circle
      cx={0}
      cy={0}
      r={pieRadius - (pieRadius - innerRadius) / 2}
      stroke={donutBackgroundColor}
      strokeWidth={pieRadius - innerRadius}
      fill="transparent"
      opacity={donutOpacity}
    />
  );
};

export default PieDonutBackground;
