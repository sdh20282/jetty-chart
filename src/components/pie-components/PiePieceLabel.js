import React from "react";
import {
  handleTooltipMouseMove,
  handleTooltipMouseOut,
} from "../../common/tooltip-common/utils/handleTooltipMouseEvent";

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
  labelOpacity,
  setSelectData,
  setMousePosition,
  setShowTooltip,
  label,
  value,
  ratio,
  svgRef,
}) => {
  return (
    <>
      {labelIsUse && labelSkipRatio < ratio && (
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
          opacity={labelOpacity}
          onMouseLeave={() => {
            handleTooltipMouseOut({ setShowTooltip });
          }}
          onMouseMove={(event) => {
            handleTooltipMouseMove({ event, setMousePosition, setShowTooltip, svgRef });
            setSelectData({ value, label });
          }}
        >
          {labelText === "ratio"
            ? Math.round(ratio * 100) + "%"
            : labelText === "value"
            ? value
            : labelText === "label"
            ? label
            : ""}
        </text>
      )}
    </>
  );
};

export default PiePieceLabel;
