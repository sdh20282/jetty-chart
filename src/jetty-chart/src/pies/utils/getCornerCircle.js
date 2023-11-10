// 후보들 중 하나의 원을 선택
export const getTwoPointDistance = ({ point1, point2 }) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

export const getCoordinatesNear = ({ circles, referenceCoordinate }) => {
  const circle1 = {
    x: circles.x1,
    y: circles.y1,
  };
  const circle2 = {
    x: circles.x2,
    y: circles.y2,
  };
  const dist1 = getTwoPointDistance({ point1: referenceCoordinate, point2: circle1 });
  const dist2 = getTwoPointDistance({ point1: referenceCoordinate, point2: circle2 });

  return dist1 < dist2 ? circle1 : circle2;
};

export const getCornerCircleGroup = ({ candidatesGroup, referenceCoordinate }) => {
  const cornerCircleGroup = [];
  cornerCircleGroup[0] = getCoordinatesNear({
    circles: candidatesGroup[0],
    referenceCoordinate,
  });
  cornerCircleGroup[1] = getCoordinatesNear({
    circles: candidatesGroup[1],
    referenceCoordinate,
  });
  cornerCircleGroup[2] = getCoordinatesNear({
    circles: candidatesGroup[2],
    referenceCoordinate,
  });
  cornerCircleGroup[3] = getCoordinatesNear({
    circles: candidatesGroup[3],
    referenceCoordinate,
  });

  console.log("TEST cornerCircleGroup", cornerCircleGroup);
  return cornerCircleGroup;
};
