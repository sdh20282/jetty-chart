const PieCircleBackground = ({ pieRadius, pieBackgroundColor, circleOpacity }) => {
  return <circle cx={0} cy={0} r={pieRadius} fill={pieBackgroundColor} opacity={circleOpacity} />;
};

export default PieCircleBackground;
