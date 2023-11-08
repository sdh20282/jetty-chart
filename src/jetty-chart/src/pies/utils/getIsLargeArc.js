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

export const getIsLargeArcGroup = ({ ratio, vertex, calcVertex }) => {
  const inner = getIsLargeArc({
    ratio,
    x1: vertex.pos3.x,
    y1: vertex.pos3.y,
    x2: calcVertex[2].x,
    y2: calcVertex[2].y,
  });

  const outer = getIsLargeArc({
    ratio,
    x1: vertex.pos1.x,
    y1: vertex.pos1.y,
    x2: calcVertex[0].x,
    y2: calcVertex[0].y,
  });

  return { inner, outer };
};
