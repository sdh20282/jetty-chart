const calcTwoLineRatio = ({ x1, y1, x2, y2 }) => {
  const dotProduct = x1 * x2 + y1 * y2;

  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);

  const cosAngle = dotProduct / (magnitude1 * magnitude2);

  const angleRadians = Math.acos(cosAngle);

  const angleDegrees = angleRadians * (180 / Math.PI);
  const minusRatio = (angleDegrees / 360) * 2;

  console.log(minusRatio);
  return minusRatio;
};

export const getIsLargeArc = ({ ratio, x1, y1, x2, y2 }) => {
  console.log(ratio);
  return ratio - calcTwoLineRatio({ x1, y1, x2, y2 }) > 0.5 ? 1 : 0;
};
