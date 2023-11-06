import { calculateDistance } from "./calculateDistance";

export const findCoordinatesNear = ({ circle1, circle2, referenceCoordinates }) => {
  const dist1 = calculateDistance({ point1: referenceCoordinates, point2: circle1 });
  const dist2 = calculateDistance({ point1: referenceCoordinates, point2: circle2 });

  return dist1 < dist2 ? circle1 : circle2;
};
