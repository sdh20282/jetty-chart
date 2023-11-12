import React from "react";
import PiePieceLabel from "./PiePieceLabel";
import PiePiecePath from "./PiePiecePath";

const PiePiece = ({
  labelLocation,
  label,
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
      <PiePieceLabel x={labelLocation.x} y={labelLocation.y} label={label} />
    </>
  );
};

export default PiePiece;
