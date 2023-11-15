import { EXCEPTION_DATA_ONLY_ONE, MAX_PERCENT, MIN_PERCENT } from "../constants/pieException";
import { exceptionValueRange } from "../exceptions/exceptionValueRange";

// 입력 받은 데이터를 비율로 변환하여 반환하는 함수
const deepCopy = ({ obj }) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy.push(deepCopy({ obj: obj[i] }));
    }
    return copy;
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy({ obj: obj[key] });
    }
  }
  return copy;
};

export const divideRatio = ({ data, padAngle, startAngle, useAngle, sortByValue }) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].value;
    data[i].index = i;
  }
  let accumulatedAngle = startAngle % 360;
  let prevRatio = 0;

  const copyData = deepCopy({ obj: data });
  if (sortByValue) {
    copyData.sort((a, b) => {
      return b.value - a.value;
    });
  }

  return copyData.map((item, index) => {
    const ratio = exceptionValueRange({
      num: (item.value / sum / 360) * (360 - padAngle * data.length) * (useAngle / 360),
      max: MAX_PERCENT + (data.length === 1 && EXCEPTION_DATA_ONLY_ONE),
      min: MIN_PERCENT,
    });
    if (index > 0) {
      accumulatedAngle += prevRatio * 360 + padAngle * (useAngle / 360);
      accumulatedAngle %= 360;
    }
    prevRatio = ratio;
    return {
      ...item,
      ratio: ratio,
      accumulatedAngle: accumulatedAngle,
    };
  });
};
