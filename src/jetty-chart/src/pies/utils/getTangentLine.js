const getOuterTangentLine = ({ angle, pieRadius, cornerRadius }) => {
  const r1 = pieRadius;
  const r2 = cornerRadius;

  const len = Math.sqrt((r1 - r2) ** 2 - r2 ** 2);
  const tx = Math.cos(angle * (Math.PI / 180)) * len;
  const ty = Math.sin(angle * (Math.PI / 180)) * len;

  return {
    x: tx,
    y: ty,
  };
};

const getInnerTangentLine = ({ angle, pieRadius, innerRadius, cornerRadius }) => {
  const r1 = innerRadius;
  const r2 = cornerRadius;

  const len = Math.sqrt((r1 + r2) ** 2 - r2 ** 2);
  const tx = Math.cos(angle * (Math.PI / 180)) * len;
  const ty = Math.sin(angle * (Math.PI / 180)) * len;

  return {
    x: tx,
    y: ty,
  };
};

export const getTangentLineCoordinatesGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  ratio,
  accumulatedAngle,
}) => {
  const tangetnLineGroup = [];

  tangetnLineGroup[0] = getInnerTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius: cornerInnerRadius,
    angle: (accumulatedAngle + ratio * 360) % 360,
  });
  tangetnLineGroup[1] = getInnerTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius: cornerInnerRadius,
    angle: accumulatedAngle % 360,
  });
  tangetnLineGroup[2] = getOuterTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius: cornerOuterRadius,
    angle: (accumulatedAngle + ratio * 360) % 360,
  });
  tangetnLineGroup[3] = getOuterTangentLine({
    pieRadius,
    innerRadius,
    cornerRadius: cornerOuterRadius,
    angle: accumulatedAngle % 360,
  });

  return tangetnLineGroup;
};
