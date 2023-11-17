// 후보들 중 하나의 원을 선택
import { getTwoPointDistance } from "./getCoordinate";

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

  return cornerCircleGroup;
};
