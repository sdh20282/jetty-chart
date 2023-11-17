// 값의 범위를 벗어날 경우 최대값 또는 최소값으로 설정
export const exceptionValueRange = ({ num, max, min }) => {
  if (num > max) {
    return max;
  } else if (num < min) {
    return min;
  }
  return num;
};
