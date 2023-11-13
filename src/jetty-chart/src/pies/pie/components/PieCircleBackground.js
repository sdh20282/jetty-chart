const PieCircleBackground = ({ pieRadius, pieBackgroundColor }) => {
  return <circle cx={0} cy={0} r={pieRadius} fill={pieBackgroundColor} opacity={1} />;
};

export default PieCircleBackground;
