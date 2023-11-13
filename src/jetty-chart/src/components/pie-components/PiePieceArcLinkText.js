export const PiePieceArcLinkText = ({
  arcLinkLabelTextColor,
  arcLinkLabelFontSize,
  arcLinkLabelFontWeight,
  arcLinkLabelFontFamily,
  arcLinkLabelFontStyle,
  arcLinkLabelText,
  arcLinkLabelLocation,
  arcLinkLabelTextDistance,
  arcLinkLabelTextOpacity,
  value,
  label,
  ratio,
}) => {
  return (
    <text
      x={arcLinkLabelLocation[2].x * arcLinkLabelTextDistance}
      y={arcLinkLabelLocation[2].y}
      fill={arcLinkLabelTextColor}
      fontSize={arcLinkLabelFontSize}
      fontFamily={arcLinkLabelFontFamily}
      fontStyle={arcLinkLabelFontStyle}
      fontWeight={arcLinkLabelFontWeight}
      textAnchor={arcLinkLabelLocation[2].x > 0 ? "start" : "end"}
      dominantBaseline="middle"
      opacity={arcLinkLabelTextOpacity}
    >
      {arcLinkLabelText === "ratio"
        ? Math.round(ratio * 100) / 100
        : arcLinkLabelText === "value"
        ? value
        : arcLinkLabelText === "label"
        ? label
        : ""}
      dd
    </text>
  );
};
