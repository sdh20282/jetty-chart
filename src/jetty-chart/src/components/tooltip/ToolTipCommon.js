import { useEffect, useRef, useState } from "react";
import { setNewList } from "../../common/tooltip-common/utils/setNewList";

const TooltipCommon = ({
  list,
  minX = -2,
  minY = -2,
  tooltipColor = "black",
  tooltipOpacity = "0.6",
  tooltipWidth = null,
  tooltipHeight,
  fontSize = 0.1,
  fontFamily = "consolas",
  fontWeight = "bold",
  fontStyle = "italic",
  fontColor = "blue",
  fontOpacity = 0.8,
  textMoveX = 0,
  textAnchor = "middle",
  lineHeight = fontSize * 1.2,
  strokeColor = "white",
  strokeWidth = "0.02",
  strokeOpacity = 1,
  strokeRadius = 0.1,
  padding = 0,
  showTooltip,
  mousePosition,
}) => {
  const newList = setNewList({
    list,
    tooltipWidth,
    tooltipHeight,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    fontColor,
    fontOpacity,
    textMoveX,
    textAnchor,
    lineHeight,
    strokeColor,
    strokeWidth,
    strokeOpacity,
    strokeRadius,
    mousePosition,
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
      {showTooltip && (
        <g
          transform={`translate(${mousePosition.x / 100 - 2}, ${mousePosition.y / 100 - 2 - 0.8})`}
        >
          <rect
            x={-rectWidth / 2}
            y={-newList[0].fontSize}
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
