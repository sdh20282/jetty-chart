const PiePieceArcLinkLine = ({
  arcLinkLabelLineColor,
  arcLinkLabelSkipAngle,
  arcLinkLabelLineSize,
  arcLinkLabelIsUse,
  arcLinkLabelLineOpacity,
  arcLinkLabelLocation,
  ratio,
}) => {
  return (
    <>
      {arcLinkLabelIsUse && arcLinkLabelSkipAngle < ratio && (
        <path
          d={`M${arcLinkLabelLocation[0].x},${arcLinkLabelLocation[0].y}
          L${arcLinkLabelLocation[1].x},${arcLinkLabelLocation[1].y}
          L${arcLinkLabelLocation[2].x},${arcLinkLabelLocation[2].y}`}
          strokeWidth={arcLinkLabelLineSize}
          stroke={arcLinkLabelLineColor}
          strokeOpacity={arcLinkLabelLineOpacity}
          fill={"none"}
        />
      )}
    </>
  );
};

export default PiePieceArcLinkLine;
