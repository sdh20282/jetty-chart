const PiePiece = ({
  data,
  startX,
  startY,
  startRoundPos,
  endRoundPos,
  startInnerPos,
  endInnerPos,
  endX,
  endY,
  pieSettings,
  targetRad,
  targetSpace,
  targetRestRad,

  ratio,
  value,
  label,
  index,

  vertexGroup,
  cornerOuterRadius,
  cornerInnerRadius,
  innerRadius,
  pieRadius,
  tangentLineGroup,
  calcVertexGroup,
  color,
  isLargeArcGroup,
}) => {
  return (
    <>
      <path
        d={`
            M ${tangentLineGroup[3].x},${tangentLineGroup[3].y}
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,${calcVertexGroup[0].x},${calcVertexGroup[0].y}
            A ${pieRadius},${pieRadius},0,${isLargeArcGroup.outer},1,${calcVertexGroup[1].x},${calcVertexGroup[1].y}
            A ${cornerOuterRadius},${cornerOuterRadius},0,0,1,
            ${tangentLineGroup[2].x},${tangentLineGroup[2].y}
            L ${tangentLineGroup[0].x},${tangentLineGroup[0].y}
            A ${cornerInnerRadius},${cornerInnerRadius},0,0,1,${calcVertexGroup[2].x},${calcVertexGroup[2].y}
            A ${innerRadius},${innerRadius},0,${isLargeArcGroup.inner},0,${calcVertexGroup[3].x},${calcVertexGroup[3].y}
            A ${cornerInnerRadius},${cornerInnerRadius},0,0,1,${tangentLineGroup[1].x},${tangentLineGroup[1].y}
            Z
            `}
        fill={color}
      />
    </>
  );
};

export default PiePiece;