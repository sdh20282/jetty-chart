export const exceptionValueRange = ({ num, max, min }) => {
  if (num > max) {
    return max;
  } else if (num < min) {
    return min;
  }
  return num;
};
