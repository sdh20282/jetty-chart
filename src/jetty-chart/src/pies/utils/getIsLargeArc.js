// 안쪽과 바깥쪽의 각도가 180도 이상인지 확인하는 함수
const calcTwoLineRatio = ({ x1, y1, x2, y2 }) => {
  const dotProduct = x1 * x2 + y1 * y2;

  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);

  const cosAngle = dotProduct / (magnitude1 * magnitude2);

  const angleRadians = Math.acos(cosAngle);

  const angleDegrees = angleRadians * (180 / Math.PI);
  const minusRatio = (angleDegrees / 360) * 2;

  return minusRatio;
};

const getIsLargeArc = ({ ratio, x1, y1, x2, y2 }) => {
  return ratio - calcTwoLineRatio({ x1, y1, x2, y2 }) > 0.5 ? 1 : 0;
};

export const getIsLargeArcGroup = ({ ratio, vertexGroup, calcVertexGroup }) => {
  const outer = getIsLargeArc({
    ratio,
    x1: vertexGroup[0].x,
    y1: vertexGroup[0].y,
    x2: calcVertexGroup[0].x,
    y2: calcVertexGroup[0].y,
  });
  const inner = getIsLargeArc({
    ratio,
    x1: vertexGroup[2].x,
    y1: vertexGroup[2].y,
    x2: calcVertexGroup[2].x,
    y2: calcVertexGroup[2].y,
  });

  return { outer, inner };
};
