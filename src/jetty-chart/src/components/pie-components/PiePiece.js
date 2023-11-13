import React from "react";
import PiePieceLabel from "./PiePieceLabel";
import PiePiecePath from "./PiePiecePath";

const PiePiece = ({
  cornerInnerRadius,
  cornerOuterRadius,
  calcVertexGroup,
  pieRadius,
  innerRadius,
  tangentLineGroup,
  isLargeArcGroup,
  color,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  pieceOpacity,
  ratio,
  value,
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
}) => {
  return (
    <>
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
    </>
  );
};

export default PiePiece;
