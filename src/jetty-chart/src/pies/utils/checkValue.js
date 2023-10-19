export const checkRangeStrokeWidth = (innerWidth) =>
  innerWidth >= 100 ? 1 / 50 : innerWidth <= 0 ? 100 / 50 : (100 - innerWidth) / 50;
export const checkRangePadAngle = (padAngle) => (padAngle < 0 ? 0 : padAngle);
export const checkRangePadSize = (padSize) => (padSize > 100 ? 100 : padSize < 1 ? 1 : padSize);
export const checkRangeValue = (value) => (value < 0.001 ? 0.001 : value);
