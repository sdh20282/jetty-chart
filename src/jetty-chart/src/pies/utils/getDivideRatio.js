// 입력 받은 데이터를 비율로 변환하여 반환하는 함수
export const divideRatio = ({ data, padAngle = 0, startAngle }) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].value;
  }

  let accumulatedAngle = startAngle % 360;
  return data.map((item, index) => {
    const ratio = (item.value / sum / 360) * (360 - padAngle * data.length);
    if (index > 0) {
      accumulatedAngle += ratio * 360 + padAngle;
      accumulatedAngle %= 360;
    }
    return {
      ...item,
      ratio: ratio,
      accumulatedAngle: accumulatedAngle,
    };
  });
};
