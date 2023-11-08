const calcInnerTangentCircle = ({ r1, x2, y2, r2 }) => {
  const x1 = 0;
  const y1 = 0;

  const tx = x1 + (r1 / (r1 + r2)) * (x2 - x1);
  const ty = y1 + (r1 / (r1 + r2)) * (y2 - y1);

  return {
    x: tx,
    y: ty,
  };
};

const calcOuterTangentCircle = ({ r1, x2, y2, r2 }) => {
  const x1 = 0;
  const y1 = 0;

  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (d >= r1 || d === 0) {
    throw new Error("원 B는 원 A의 내부에 있어야 하며, 중심이 같으면 안 됩니다.");
  }

  const ux = (x2 - x1) / d;
  const uy = (y2 - y1) / d;

  const tx = x2 + r2 * ux;
  const ty = y2 + r2 * uy;

  return { x: tx, y: ty };
};

export const getTangentCircleGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  cornerCircleGroup,
}) => {
  const tangentCircleGroup = [];
  tangentCircleGroup[0] = calcOuterTangentCircle({
    r1: pieRadius,
    x2: cornerCircleGroup[0].x,
    y2: cornerCircleGroup[0].y,
    r2: cornerOuterRadius,
  });
  tangentCircleGroup[1] = calcOuterTangentCircle({
    r1: pieRadius,
    x2: cornerCircleGroup[1].x,
    y2: cornerCircleGroup[1].y,
    r2: cornerOuterRadius,
  });
  tangentCircleGroup[2] = calcInnerTangentCircle({
    r1: innerRadius,
    x2: cornerCircleGroup[2].x,
    y2: cornerCircleGroup[2].y,
    r2: cornerInnerRadius,
  });
  tangentCircleGroup[3] = calcInnerTangentCircle({
    r1: innerRadius,
    x2: cornerCircleGroup[3].x,
    y2: cornerCircleGroup[3].y,
    r2: cornerInnerRadius,
  });

  return tangentCircleGroup;
};
