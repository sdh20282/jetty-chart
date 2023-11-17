import { getCoordinateReference } from "./getCoordinate";

export const getArcLinkLabelLocation = ({
  arcLinkLabelLineDistance,
  arcLinkLabelStartLine,
  arcLinkLabelEndLine,
  startAngle,
  ratio,
  pieRadius,
}) => {
  const location = [];
  location[0] = getCoordinateReference({
    startAngle,
    ratio,
    radius: pieRadius * arcLinkLabelLineDistance,
  });
  location[1] = getCoordinateReference({
    startAngle,
    ratio,
    radius: pieRadius * arcLinkLabelLineDistance + arcLinkLabelStartLine,
  });
  location[2] = { ...location[1] };
  location[2].x =
    location[2].x < 0 ? location[2].x - arcLinkLabelEndLine : location[2].x + arcLinkLabelEndLine;

  return location;
};
