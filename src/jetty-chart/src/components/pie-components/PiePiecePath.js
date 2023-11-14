import { getPiePiecePath } from "../../common/pie-common/utils/getPiePiecePath";

// 파이 조각을 그리는 컴포넌트
const PiePiecePath = ({
  pieRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  innerRadius,
  calcVertexGroup,
  tangentLineGroup,
  isLargeArcGroup,
  color,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  pieceOpacity,
}) => {
  const path = getPiePiecePath({
    pieRadius,
    cornerInnerRadius,
    cornerOuterRadius,
    innerRadius,
    calcVertexGroup,
    tangentLineGroup,
    isLargeArcGroup,
  });

  // const innerPath2 = `${tangentLineGroup[3].x},${tangentLineGroup[3].y}
  // A 0,0,0,0,1,${tangentLineGroup[3].x},${tangentLineGroup[3].y}
  // A 0,0,0,0,0,${tangentLineGroup[3].x},${tangentLineGroup[3].y}
  // A 0,0,0,0,1,${tangentLineGroup[3].x},${tangentLineGroup[3].y}`;
  // const path2 = `
  // M ${tangentLineGroup[0].x},${tangentLineGroup[0].y}
  // A 0,0,0,0,1,${tangentLineGroup[0].x},${tangentLineGroup[0].y}
  // A 0,0,0,0,1,${tangentLineGroup[0].x},${tangentLineGroup[0].y}
  // A 0,0,0,0,1,
  // ${tangentLineGroup[0].x},${tangentLineGroup[0].y}
  // L ${innerRadius <= 0.01 ? "0,0" : innerPath2}
  // Z
  // `;
  return (
    <path
      d={path}
      fill={color}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      opacity={pieceOpacity}
      className="pie-piece__path"
    >
      {/* <animate attributeName="d" from={path2} to={path} dur="2s" /> */}
    </path>
  );
};

export default PiePiecePath;
