import React from "react";
import PiePieceLabel from "./PiePieceLabel";
import PiePiecePath from "./PiePiecePath";
import PiePieceArcLinkLabel from "./PiePieceArcLinkLabel";

const PiePiece = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  calcVertexGroup,
  tangentLineGroup,
  isLargeArcGroup,
  color,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  arcLinkLabelTextColor,
  arcLinkLabelLineColor,
  arcLinkLabelFontSize,
  arcLinkLabelFontWeight,
  arcLinkLabelFontFamily,
  arcLinkLabelFontStyle,
  arcLinkLabelSkipAngle,
  arcLinkLabelLineSize,
  arcLinkLabelText,
  arcLinkLabelIsUse,
  arcLinkLabelLineOpacity,
  arcLinkLabelTextOpacity,
  arcLinkLabelLocation,
  arcLinkLabelTextDistance,
  pieceOpacity,
  labelColor,
  labelFontFamily,
  labelFontSize,
  labelFontStyle,
  labelFontWeight,
  labelLocation,
  labelMoveX,
  labelMoveY,
  labelIsRotate,
  labelText,
  labelIsUse,
  labelSkipRatio,
  labelDegrees,
  labelOpacity,
  label,
  ratio,
  value,
}) => {
  return (
    <g className={"pie-piece"}>
      <PiePiecePath
        pieRadius={pieRadius}
        cornerInnerRadius={cornerInnerRadius}
        cornerOuterRadius={cornerOuterRadius}
        innerRadius={innerRadius}
        calcVertexGroup={calcVertexGroup}
        tangentLineGroup={tangentLineGroup}
        isLargeArcGroup={isLargeArcGroup}
        color={color}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        pieceOpacity={pieceOpacity}
      />
      <PiePieceLabel
        x={labelLocation.x}
        y={labelLocation.y}
        degrees={labelLocation.degrees}
        labelColor={labelColor}
        labelFontFamily={labelFontFamily}
        labelFontSize={labelFontSize}
        labelFontStyle={labelFontStyle}
        labelFontWeight={labelFontWeight}
        labelMoveX={labelMoveX}
        labelMoveY={labelMoveY}
        labelIsRotate={labelIsRotate}
        labelText={labelText}
        labelSkipRatio={labelSkipRatio}
        labelIsUse={labelIsUse}
        labelDegrees={labelDegrees}
        labelOpacity={labelOpacity}
        label={label}
        ratio={ratio}
        value={value}
      />
      <PiePieceArcLinkLabel
        arcLinkLabelTextColor={arcLinkLabelTextColor}
        arcLinkLabelFontSize={arcLinkLabelFontSize}
        arcLinkLabelFontWeight={arcLinkLabelFontWeight}
        arcLinkLabelFontFamily={arcLinkLabelFontFamily}
        arcLinkLabelFontStyle={arcLinkLabelFontStyle}
        arcLinkLabelText={arcLinkLabelText}
        arcLinkLabelLocation={arcLinkLabelLocation}
        arcLinkLabelTextDistance={arcLinkLabelTextDistance}
        arcLinkLabelTextOpacity={arcLinkLabelTextOpacity}
        arcLinkLabelLineColor={arcLinkLabelLineColor}
        arcLinkLabelSkipAngle={arcLinkLabelSkipAngle}
        arcLinkLabelLineSize={arcLinkLabelLineSize}
        arcLinkLabelLineOpacity={arcLinkLabelLineOpacity}
        arcLinkLabelIsUse={arcLinkLabelIsUse}
        value={value}
        label={label}
        ratio={ratio}
      />
    </g>
  );
};

export default PiePiece;
