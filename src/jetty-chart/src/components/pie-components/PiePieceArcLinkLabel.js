const PiePieceArcLinkLine = ({
  arcLinkLabelLineColor,
  arcLinkLabelLineSize,
  arcLinkLabelLineOpacity,
  arcLinkLabelLocation,
}) => {
  return (
    <path
      d={`M${arcLinkLabelLocation[0].x},${arcLinkLabelLocation[0].y}
          L${arcLinkLabelLocation[1].x},${arcLinkLabelLocation[1].y}
          L${arcLinkLabelLocation[2].x},${arcLinkLabelLocation[2].y}`}
      strokeWidth={arcLinkLabelLineSize}
      stroke={arcLinkLabelLineColor}
      strokeOpacity={arcLinkLabelLineOpacity}
      fill={"none"}
    />
  );
};

const PiePieceArcLinkText = ({
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

const PiePieceArcLinkLabel = ({
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
  arcLinkLabelLineColor,
  arcLinkLabelSkipAngle,
  arcLinkLabelLineSize,
  arcLinkLabelIsUse,
  arcLinkLabelLineOpacity,
}) => {
  return (
    <g>
      {arcLinkLabelIsUse && arcLinkLabelSkipAngle < ratio && (
        <>
          <PiePieceArcLinkLine
            arcLinkLabelLineColor={arcLinkLabelLineColor}
            arcLinkLabelSkipAngle={arcLinkLabelSkipAngle}
            arcLinkLabelLineSize={arcLinkLabelLineSize}
            arcLinkLabelText={arcLinkLabelText}
            arcLinkLabelIsUse={arcLinkLabelIsUse}
            arcLinkLabelLineOpacity={arcLinkLabelLineOpacity}
            arcLinkLabelLocation={arcLinkLabelLocation}
            ratio={ratio}
          />
          <PiePieceArcLinkText
            arcLinkLabelTextColor={arcLinkLabelTextColor}
            arcLinkLabelFontSize={arcLinkLabelFontSize}
            arcLinkLabelFontWeight={arcLinkLabelFontWeight}
            arcLinkLabelFontFamily={arcLinkLabelFontFamily}
            arcLinkLabelFontStyle={arcLinkLabelFontStyle}
            arcLinkLabelText={arcLinkLabelText}
            arcLinkLabelLocation={arcLinkLabelLocation}
            arcLinkLabelTextOpacity={arcLinkLabelTextOpacity}
            arcLinkLabelTextDistance={arcLinkLabelTextDistance}
            value={value}
            label={label}
            ratio={ratio}
          />
        </>
      )}
    </g>
  );
};

export default PiePieceArcLinkLabel;
