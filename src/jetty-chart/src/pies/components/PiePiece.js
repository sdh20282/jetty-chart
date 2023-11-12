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
  ratio,
  value,
  labelColor,
  labelFontFamily,
  labelFontSize,
  labelFontStyle,
  labelFontWeight,
  labelLocation,
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
        ratio={ratio}
        value={value}
      />
      <PiePieceLabel
        x={labelLocation.x}
        y={labelLocation.y}
        label={label}
        labelColor={labelColor}
        labelFontFamily={labelFontFamily}
        labelFontSize={labelFontSize}
        labelFontStyle={labelFontStyle}
        labelFontWeight={labelFontWeight}
      />
    </>
  );
};

export default PiePiece;
