import React from "react";

const PiePieceLabel = ({
  x,
  y,
  label,
  labelColor,
  labelFontFamily,
  labelFontSize,
  labelFontStyle,
  labelFontWeight,
  labelLocation,
}) => {
  console.log(
    "PiePieceLabel",
    x,
    y,
    label,
    labelColor,
    labelFontFamily,
    labelFontSize,
    labelFontStyle,
    labelFontWeight,
    labelLocation
  );
  return (
    <text
      x={x}
      y={y}
      fill={labelColor}
      fontSize={labelFontSize}
      fontFamily={labelFontFamily}
      fontStyle={labelFontStyle}
      fontWeight={labelFontWeight}
      text-anchor="middle"
      dominant-baseline="middle"
    >
      {label}
    </text>
  );
};

export default PiePieceLabel;
