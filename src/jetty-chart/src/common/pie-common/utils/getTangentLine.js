// 라운딩 처리를 위하여 선분과 원의 외접을 구하는 함수
const getTangentLine = ({ r1, r2, angle }) => {
  const len = Math.sqrt(r2 ** 2 - r1 ** 2);
  const tx = Math.cos(angle * (Math.PI / 180)) * len;
  const ty = Math.sin(angle * (Math.PI / 180)) * len;

  return {
    x: tx,
    y: ty,
  };
};

export const getTangentLineGroup = ({
  pieRadius,
  innerRadius,
  cornerInnerRadius,
  cornerOuterRadius,
  ratio,
  accumulatedAngle,
}) => {
  const tangentLineGroup = [];

  tangentLineGroup[0] = getTangentLine({
    r1: cornerOuterRadius,
    r2: pieRadius - cornerOuterRadius,
    angle: accumulatedAngle % 360,
  });
  tangentLineGroup[1] = getTangentLine({
    r1: cornerOuterRadius,
    r2: pieRadius - cornerOuterRadius,
    angle: (accumulatedAngle + ratio * 360) % 360,
  });
  tangentLineGroup[2] = getTangentLine({
    r1: cornerInnerRadius,
    r2: innerRadius + cornerInnerRadius,
    angle: (accumulatedAngle + ratio * 360) % 360,
  });
  tangentLineGroup[3] = getTangentLine({
    r1: cornerInnerRadius,
    r2: innerRadius + cornerInnerRadius,
    angle: accumulatedAngle % 360,
  });

  return tangentLineGroup;
};
