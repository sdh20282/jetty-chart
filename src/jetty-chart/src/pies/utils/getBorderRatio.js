// 사분면 위치 구하기
const checkQuadrants = ({ x, y }) => {
  if (x >= 0 && y >= 0) return 1;
  else if (x < 0 && y >= 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
};

export const getBorderRatio = ({ x, y }) => {
  const loc = checkQuadrants({ x, y });

  if (loc === 1) {
  } else if (loc === 2) {
    return;
  } else if (loc === 3) {
  } else if (loc === 4) {
  }
};
