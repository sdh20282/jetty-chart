import { getTwoPointDistance } from "./getTwoPointDistance";

export const getCoordinatesNear = ({ circle1, circle2, referenceCoordinates }) => {
  const dist1 = getTwoPointDistance({ point1: referenceCoordinates, point2: circle1 });
  const dist2 = getTwoPointDistance({ point1: referenceCoordinates, point2: circle2 });

  return dist1 < dist2 ? circle1 : circle2;
};
