import { useEffect, useRef, useState } from "react";
import { setNewList } from "../../common/tooltip-common/utils/setNewList";

const ToolTipCommon = ({
  x = 0,
  y = 0,
  list = [
    {
      content: "Hello",
      fontSize: 0.1,
      fontFamily: "consolas",
      fontWeight: "bold",
      fontStyle: "italic",
      fontColor: "blue",
      fontOpacity: 0.8,
      textAnchor: "middle",
      lineHeight: 0.2,
    },
    {
      content: "34",
      fontSize: 0.1,
      fontFamily: "verdana",
      fontWeight: "normal",
      fontStyle: "normal",
      fontColor: "red",
      fontOpacity: 0.9,
      textAnchor: "start",
      lineSize: 0.1,
    },
    {
      content: "20%",
    },
    {
      content: "한국말 인사",
    },
  ],
  type,
  position = "top",
  tooltipColor,
  tooltipOpacity,
  tooltipShadow,
  fontSize = 0.1,
  fontFamily = "consolas",
  fontWeight = "bold",
  fontStyle = "italic",
  fontColor = "blue",
  fontOpacity = 0.8,
  textAnchor = "middle",
  lineSize = 0.1,
  borderColor,
  borderWidth,
  borderOpacity,
  borderRadius,
  shadowColor,
  shadowBlur,
  shadowOffsetX,
  shadowOffsetY,
  shadowOpacity,
  shadowSpread,
}) => {
  const newList = setNewList({
    list,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    fontColor,
    fontOpacity,
    textAnchor,
    lineSize,
  });
  console.log(newList);
  return (
    <g>
      <text
        x={x}
        y={y}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        fill={fontColor}
        opacity={fontOpacity}
        textAnchor={"middle"}
        dominantBaseline="middle"
      >
        {list.map((item, index) => (
          <tspan x={x} y={item.lineSize ? item.lineSize * index : lineSize * index} fontSize={0.1}>
            {item.content}
          </tspan>
        ))}
        dd
      </text>
    </g>
  );
};

export default ToolTipCommon;
