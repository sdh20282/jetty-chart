// startAngle과 ratio에 따라 좌표 구하는 함수, radius = 크기
export const getCoordinatesForRatio = ({ ratio, startAngle, radius }) => {
  const x = Math.cos(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius;
  const y = Math.sin(2 * Math.PI * ratio + (Math.PI * startAngle) / 180) * radius;

  return { x, y };
};

// export const getCoordinatesForPosition = ({ ratio, startAngle, range }) => {
//   const x1 = Math.cos((2 * Math.PI * ratio * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
//   const y1 =
//     (Math.sin((2 * Math.PI * ratio * (100 - range)) / 100 + (Math.PI * startAngle) / 180) *
//       (100 - range)) /
//     100;
//   const x2 = Math.cos((2 * Math.PI * ratio * (100 - range)) / 100 + (Math.PI * startAngle) / 180);
//   const y2 =
//     (Math.sin((2 * Math.PI * ratio * (100 - range)) / 100 + (Math.PI * startAngle) / 180) *
//       (100 - range)) /
//     100;

//   return { x1, x2, y1, y2 };
// };

// vertex 데이터 받아서 좌표 구하는 함수
export const getCoordinatesVertex = ({ ratio, startAngle, pieRadius, innerRadius }) => {
  return {
    pos1: getCoordinatesForRatio({ ratio: 0, startAngle, radius: pieRadius }),
    pos2: getCoordinatesForRatio({ ratio, startAngle, radius: pieRadius }),
    pos3: getCoordinatesForRatio({
      ratio,
      startAngle,
      radius: innerRadius,
    }),
    pos4: getCoordinatesForRatio({ ratio: 0, startAngle, radius: innerRadius }),
  };
};
