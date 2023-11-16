import { useEffect, useRef, useState } from "react";
import { setNewList } from "../../common/tooltip-common/utils/setNewList";

const TooltipCommon = ({
  list = [],
  viewBoxXSize = 0,
  viewBoxYSize = 0,
  tooltipColor = "white",
  tooltipOpacity = "0.8",
  tooltipWidth = null,
  tooltipMoveX = 0,
  tooltipMoveY = -0.1,
  tooltipHeight,
  fontSize = 0.1,
  fontFamily = "sans-serif",
  fontWeight = "bold",
  fontStyle = "normal",
  fontColor = "black",
  fontOpacity = 1,
  textMoveX = 0,
  lineHeight = fontSize * 1.2,
  strokeColor = "black",
  strokeWidth = "0.01",
  strokeOpacity = 1,
  strokeRadius = 0.05,
  padding = 0.05,
  useTooltip = true,
  mousePosition,
  selectData,
  titleValue = "label-value",
}) => {
  const newList = setNewList({
    list,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    fontColor,
    fontOpacity,
    textMoveX,
    lineHeight,
    strokeColor,
    strokeWidth,
    strokeOpacity,
    strokeRadius,
    mousePosition,
    selectData,
    titleValue,
  });
  const [rectWidth, setRectWidth] = useState(tooltipWidth);
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current && tooltipWidth === null) {
      const length = textRef.current.getComputedTextLength();
      setRectWidth(length + padding * 2);
    }
  }, [list, padding]);
  return (
    <>
      {useTooltip && (
        <g
          transform={`translate(${mousePosition.x - viewBoxXSize / 2 + tooltipMoveX}, ${
            mousePosition.y - viewBoxYSize / 2 + tooltipMoveY
          })`}
        >
          <rect
            x={-rectWidth / 2}
            y={-newList[0].fontSize * 1.1}
            rx={strokeRadius}
            ry={strokeRadius}
            width={rectWidth}
            height={
              tooltipHeight ||
              newList[newList.length - 1].lineHeight +
                newList[0].fontSize +
                newList[newList.length - 1].fontSize
            }
            fill={tooltipColor}
            opacity={tooltipOpacity}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
          />
          <text ref={textRef} x={0} y={0} textAnchor={"middle"} dominantBaseline={"middle"}>
            {newList.map((item, index) => (
              <tspan
                x={item.textMoveX}
                y={item.lineHeight}
                fontSize={item.fontSize}
                key={index}
                fill={item.fontColor}
                opacity={item.fontOpacity}
                fontWeight={item.fontWeight}
                fontStyle={item.fontStyle}
                fontFamily={item.fontFamily}
              >
                {item.content}
              </tspan>
            ))}
          </text>
        </g>
      )}
    </>
  );
};

export default TooltipCommon;
