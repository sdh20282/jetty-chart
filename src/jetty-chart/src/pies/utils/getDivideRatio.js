// 입력 받은 데이터를 비율로 변환하여 반환하는 함수
export const divideRatio = ({ data }) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].value;
  }

  return data.map((item) => {
    return {
      ...item,
      ratio: (item.value /= sum),
    };
  });
};
