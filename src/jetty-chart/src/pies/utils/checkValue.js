export const checkRangeStrokeWidth = (innerWidth) =>
  innerWidth >= 100 ? 1 / 50 : innerWidth <= 0 ? 100 / 50 : (100 - innerWidth) / 50;
export const checkRangePadSpace = (padSpace) => (padSpace > 99 ? 99 : padSpace);
export const checkRangePadSize = (padSize, isLargeArcFlag) =>
  padSize > 100 ? 100 : padSize < 1 ? 1 : padSize;
export const checkRangeValue = (value) => (value < 0.001 ? 0.001 : value);
