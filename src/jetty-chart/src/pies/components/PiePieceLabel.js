import React from "react";

const PiePieceLabel = ({
  x,
  y,
  degrees,
  labelColor,
  labelFontFamily,
  labelFontSize,
  labelFontStyle,
  labelFontWeight,
  labelMoveX,
  labelMoveY,
  labelIsRotate,
  labelText,
  labelIsUse,
  labelSkipRatio,
  labelDegrees,
  label,
  value,
  ratio,
}) => {
  return (
    <text
      x={x}
      y={y}
      dx={labelMoveX}
      dy={labelMoveY}
      fill={labelColor}
      fontSize={labelFontSize}
      fontFamily={labelFontFamily}
      fontStyle={labelFontStyle}
      fontWeight={labelFontWeight}
      textAnchor="middle"
      dominantBaseline="middle"
      transform={`rotate(${(labelIsRotate ? degrees : 0) + labelDegrees})`}
      transform-origin={`${x} ${y}`}
    >
      {labelIsUse &&
        labelSkipRatio < ratio &&
        (labelText === "ratio"
          ? Math.round(ratio * 100) / 100
          : labelText === "value"
          ? value
          : labelText === "label"
          ? label
          : "")}
    </text>
  );
};

export default PiePieceLabel;
