// 사분면 위치 구하기
const checkQuadrants = ({ x, y }) => {
  if (x >= 0 && y >= 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else if (x >= 0 && y <= 0) return 4;
};

export const getBorderRatio = ({ x, y, borderRadius, percent, order }) => {
  const loc = checkQuadrants({ x, y });
  const mul = order === 1 ? -1 : 1;
  if (loc === 1) {
    return (
      x +
      mul * (borderRadius * (1 - ((percent * 4) % 1))) +
      "," +
      (y + mul * (borderRadius * ((percent * 4) % 1)))
    );
  } else if (loc === 2) {
    return (
      x -
      mul * (borderRadius * ((percent * 4) % 1)) +
      "," +
      (y + mul * (borderRadius * (1 - ((percent * 4) % 1))))
    );
  } else if (loc === 3) {
    return (
      x -
      mul * (borderRadius * (1 - ((percent * 4) % 1))) +
      "," +
      (y - mul * (borderRadius * ((percent * 4) % 1)))
    );
  } else if (loc === 4) {
    return (
      x +
      mul * (borderRadius * ((percent * 4) % 1)) +
      "," +
      (y - mul * (borderRadius * (1 - ((percent * 4) % 1))))
    );
  }
};
