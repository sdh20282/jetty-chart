import { useEffect, useRef, useState } from "react";
import { setNewList } from "../../common/tooltip-common/utils/setNewList";

const ToolTipCommon = ({
  list = [
    {
      content: "HelloHello",
      fontSize: 0.2,
      fontFamily: "consolas",
      fontWeight: "bold",
      fontStyle: "italic",
      fontColor: "white",
      fontOpacity: 0.8,
      textAnchor: "middle",
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
      lineHeight: 0.1,
      textMoveX: 0.2,
    },
    {
      content: "20%",
      lineHeight: 0.2,
      textMoveX: -0.2,
    },
    {
      content: "안녕",
    },
  ],
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
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [rectWidth, setRectWidth] = useState(tooltipWidth);
  const textRef = useRef(null);

  console.log({ showTooltip, tooltipPosition, rectWidth, textRef });

  useEffect(() => {
    if (textRef.current && tooltipWidth === null) {
      const length = textRef.current.getComputedTextLength();
      setRectWidth(length + padding * 2);
    }
  }, [list, padding]);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = minX + clientX;
    const y = minY + clientY - (newList[newList.length - 1].lineHeight + newList[0].fontSize) * 100;

    const tooltipTotalHeight =
      tooltipHeight || newList.reduce((acc, item) => acc + item.fontSize, 0);
    console.log({ x, y, tooltipTotalHeight });
    setTooltipPosition({ x, y: y - tooltipTotalHeight - padding });
    setShowTooltip(true);
  };
  const handleMouseOut = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <circle
        cx={0}
        cy={0}
        r={0.5}
        fill="red"
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      />

      {showTooltip && (
        <g transform={`translate(${tooltipPosition.x / 100 - 2}, ${tooltipPosition.y / 100 - 2})`}>
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

export default ToolTipCommon;
