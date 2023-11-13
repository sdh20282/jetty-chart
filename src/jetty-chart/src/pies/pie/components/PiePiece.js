import React from "react";
import PiePieceLabel from "./PiePieceLabel";
import PiePiecePath from "./PiePiecePath";

const PiePiece = ({
  vertexGroup,
  cornerInnerRadius,
  cornerOuterRadius,
  calcVertexGroup,
  pieRadius,
  innerRadius,
  tangentLineGroup,
  isLargeArcGroup,
  color,
  index,
  strokeColor,
  strokeWidth,
  strokeOpacity,
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
        vertexGroup={vertexGroup}
        cornerInnerRadius={cornerInnerRadius}
        cornerOuterRadius={cornerOuterRadius}
        calcVertexGroup={calcVertexGroup}
        pieRadius={pieRadius}
        innerRadius={innerRadius}
        tangentLineGroup={tangentLineGroup}
        isLargeArcGroup={isLargeArcGroup}
        color={color}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        ratio={ratio}
        value={value}
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
