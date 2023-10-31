// 두 원 사이에 교점 구하기
const calculateIntersection = ({ x, y, radius, borderRadius, dir }) => {
  const d = Math.sqrt(x ** 2 + y ** 2);

  // 쓰레기 값 예외처리
  const a = Math.round(((radius ** 2 - borderRadius ** 2 + d ** 2) / (2 * d)) * 10000) / 10000;
  const h = Math.sqrt(radius ** 2 - a ** 2);

  const rx = -h * (y / d);
  const ry = h * (x / d);

  const x1 = a * (x / d) + rx;
  const y1 = a * (y / d) + ry;

  const x2 = a * (x / d) - rx;
  const y2 = a * (y / d) - ry;

  return dir === 0 ? { x: x1, y: y1 } : { x: x2, y: y2 };
};

// 두 원 사이에 교점 구하기, 데이터 입력
export const calculateInputData = ({ vertex, pieRadius, innerRadius, borderRadius }) => {
  const calcPos = {
    pos1: calculateIntersection({
      x: vertex.pos1.x,
      y: vertex.pos1.y,
      radius: pieRadius,
      borderRadius,
      dir: 0,
    }),
    pos2: calculateIntersection({
      x: vertex.pos2.x,
      y: vertex.pos2.y,
      radius: pieRadius,
      borderRadius,
      dir: 1,
    }),
    pos3: calculateIntersection({
      x: vertex.pos3.x,
      y: vertex.pos3.y,
      radius: innerRadius,
      borderRadius,
      dir: 1,
    }),
    pos4: calculateIntersection({
      x: vertex.pos4.x,
      y: vertex.pos4.y,
      radius: innerRadius,
      borderRadius,
      dir: 0,
    }),
  };
  return calcPos;
};
