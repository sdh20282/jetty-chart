import { calculateInputData } from "../utils/calculateIntersection";
import { getCoordinatesForVertex } from "../utils/getCoordinates";
import { pointBetweenTwoPoints } from "../utils/pointBetweenTwoPoints";
import PieTestPoint from "./PieTestPoint";

const PieTest = () => {
  const percent = 0.5;
  const startAngle = 0;
  const pieRadius = 1;
  const innerRadius = 0.2;
  const borderRadius = 0.2;
  const debugPointView = !!true;
  const vertex = getCoordinatesForVertex({
    percent,
    startAngle,
    pieRadius,
    innerRadius,
  });
  const calcPos = calculateInputData({ vertex, pieRadius, innerRadius, borderRadius });
  // const ARadius = 2;
  // const BRadius = 1;
  // const yB = BRadius;
  // const xB = Math.sqrt((ARadius + BRadius) ** 2 - yB ** 2);

  // const d = Math.sqrt(xB ** 2 + yB ** 2);
  // const xIntersection = (xB / d) * ARadius;
  // const yIntersection = (yB / d) * ARadius;

  // const xIntersectionXAxis = xB + Math.sqrt(BRadius ** 2 - yB ** 2);

  // const ARadius = 2;
  // const BRadius = 1;
  // const m = -0.1;

  // const xB = Math.sqrt((ARadius + BRadius) ** 2 - BRadius ** 2);
  // const yB = BRadius;

  // const a = 1 + m ** 2;
  // const b = 2 * (m * (yB - BRadius) - xB);
  // const c = xB ** 2 + (yB - BRadius) ** 2 - BRadius ** 2;

  // const discriminant = b ** 2 - 4 * a * c;
  // let xIntersection, yIntersection;

  // if (discriminant === 0) {
  //   xIntersection = -b / (2 * a);
  //   yIntersection = m * xIntersection - m * BRadius;
  // }

  const r1 = pieRadius; // 파이 반지름
  const r2 = innerRadius; // 내부원 반지름
  const r3 = 0.1; // 두번째 원 반지름
  const angle = (30 * 11) % 360; // 파이 각도
  const x1 = Math.cos((angle * Math.PI) / 180); // 파이 r1 위치 x
  const y1 = Math.sin((angle * Math.PI) / 180); // 파이 r1 위치 y
  const x2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 x
  const y2 = Math.sqrt(0.5) * 0.2; // 파이 r2 위치 y
  let a = 0; // 두번째 좌표와 기울기가 만나는 지점 x
  let b = 0; // 두번째 좌표와 기울기가 만나는 지점 y
  let xp = 0; // 두번째 원 x
  let yp = 0; // 두번째 원 y
  // 두번째 원의 중심에서 기울기 직선으로 수직으로 그은 점과 원점 사이의 거리
  const len = Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(r3, 2));
  a = Math.cos(angle * (Math.PI / 180)) * len;
  b = Math.sin(angle * (Math.PI / 180)) * len;
  const alpha = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(r2 + r3, 2) - Math.pow(r3, 2);
  xp = {
    plus:
      (a * alpha +
        Math.sqrt(
          Math.pow(a, 2) * Math.pow(alpha, 2) -
            (Math.pow(a, 2) + Math.pow(b, 2)) *
              (Math.pow(alpha, 2) - 4 * Math.pow(b, 2) * Math.pow(r2 + r3, 2))
        )) /
      (2 * (Math.pow(a, 2) + Math.pow(b, 2))),
    minus:
      (a * alpha -
        Math.sqrt(
          Math.pow(a, 2) * Math.pow(alpha, 2) -
            (Math.pow(a, 2) + Math.pow(b, 2)) *
              (Math.pow(alpha, 2) - 4 * Math.pow(b, 2) * Math.pow(r2 + r3, 2))
        )) /
      (2 * (Math.pow(a, 2) + Math.pow(b, 2))),
  };
  yp = {
    plus: Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(xp.plus, 2)),
    minus: Math.sqrt(Math.pow(r2 + r3, 2) - Math.pow(xp.minus, 2)),
  };

  const check = [];

  const candidates = [
    { x: xp.plus, y: yp.plus },
    { x: xp.plus, y: yp.minus },
    { x: xp.minus, y: yp.plus },
    { x: xp.minus, y: yp.minus },
    { x: xp.plus, y: -yp.plus },
    { x: xp.plus, y: -yp.minus },
    { x: xp.minus, y: -yp.plus },
    { x: xp.minus, y: -yp.minus },
  ]
    .filter((candidate) => {
      const checkStr = candidate.x + "_" + candidate.y;

      if (check.includes(checkStr)) {
        return false;
      }

      check.push(checkStr);
      return true;
    })
    .filter((candidate) => {
      const result = Math.round(((a - candidate.x) ** 2 + (b - candidate.y) ** 2) * 10000);
      const target = Math.round(r3 ** 2 * 10000);

      return result === target;
    })
    .filter((candidate) => {
      const result = Math.round((candidate.x ** 2 + candidate.y ** 2) * 10000);
      const target = Math.round((r2 + r3) ** 2 * 10000);

      return result === target;
    });

  console.log("TEST");
  console.log(candidates);
  console.log(a, b);
  console.log();

  return (
    <>
      {/* <svg width="400" height="400" viewBox="-5 -5 10 10">
        <circle cx="0" cy="0" r={ARadius} fill="none" stroke="black" strokeWidth="0.1" />
        <circle cx={xB} cy={yB} r={BRadius} fill="none" stroke="red" strokeWidth="0.1" />
        <circle cx={xIntersection} cy={yIntersection} r="0.2" fill="green" />
        <circle cx={xIntersectionXAxis} cy="0" r="0.2" fill="blue" />
        <circle cx="0" cy="0" r="0.2" fill="orange" />
      </svg> */}

      {/* <svg width="400" height="400" viewBox="-5 -5 10 10">
        <circle cx="0" cy="0" r={ARadius} fill="none" stroke="black" strokeWidth="0.1" />
        <circle cx={xB} cy={yB} r={BRadius} fill="none" stroke="red" strokeWidth="0.1" />
        <line x1="-5" y1={-5 * m} x2="5" y2={5 * m} stroke="blue" strokeWidth="0.1" />
        {discriminant === 0 && (
          <circle cx={xIntersection} cy={yIntersection} r="0.2" fill="green" />
        )}
      </svg> */}

      <svg width="600" height="600" viewBox="-1 -1 2 2" style={{ backgroundColor: "black" }}>
        <path
          d={`          
            M ${pointBetweenTwoPoints({
              x1: vertex.pos1.x,
              y1: vertex.pos1.y,
              x2: vertex.pos4.x,
              y2: vertex.pos4.y,
              borderRadius,
            })}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x},${calcPos.pos2.y}
            A ${borderRadius},${borderRadius},0,0,1,${pointBetweenTwoPoints({
            x1: vertex.pos2.x,
            y1: vertex.pos2.y,
            x2: vertex.pos3.x,
            y2: vertex.pos3.y,
            borderRadius,
          })}
            L ${pointBetweenTwoPoints({
              x1: vertex.pos3.x,
              y1: vertex.pos3.y,
              x2: vertex.pos2.x,
              y2: vertex.pos2.y,
              borderRadius: borderRadius * 0,
            })}
            A ${borderRadius * (pieRadius - innerRadius)},${
            borderRadius * (pieRadius - innerRadius)
          },0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${borderRadius * (pieRadius - innerRadius)},${
            borderRadius * (pieRadius - innerRadius)
          },0,0,1,${pointBetweenTwoPoints({
            x1: vertex.pos4.x,
            y1: vertex.pos4.y,
            x2: vertex.pos1.x,
            y2: vertex.pos1.y,
            borderRadius: borderRadius * 0.8,
          })}
            Z
            `}
          fill="#bae7ff"
        />
        {debugPointView && (
          <PieTestPoint
            vertex={vertex}
            calcPos={calcPos}
            borderRadius={borderRadius}
            innerRadius={innerRadius}
          />
        )}

        <circle cx={candidates[0].x} cy={candidates[0].y} r="0.1" fill={"red"} opacity={0.5} />
        <circle cx={candidates[1].x} cy={candidates[1].y} r="0.1" fill={"blue"} opacity={0.5} />
        {/* <circle cx={candidates[2].x} cy={candidates[2].y} r="0.1" fill={"purple"} opacity={0.5} />
        <circle cx={candidates[3].x} cy={candidates[3].y} r="0.1" fill={"yellow"} opacity={0.5} />
        <circle cx={candidates[4].x} cy={candidates[4].y} r="0.1" fill={"pink"} opacity={0.5} />
        <circle cx={candidates[5].x} cy={candidates[5].y} r="0.1" fill={"green"} opacity={0.5} />
        <circle cx={candidates[6].x} cy={candidates[6].y} r="0.1" fill={"brown"} opacity={0.5} />
        <circle cx={candidates[7].x} cy={candidates[7].y} r="0.1" fill={"orange"} opacity={0.5} /> */}

        {/* {candidates.map((candidate, index) => (
          <circle
            key={index}
            cx={candidate.x}
            cy={candidate.y}
            r="0.1"
            fill={candidate.testSide ? "red" : "blue"}
            opacity={0.5}
          />
        ))} */}

        <line
          x1={0}
          y1={0}
          x2={Math.cos((angle * Math.PI) / 180)}
          y2={Math.sin((angle * Math.PI) / 180)}
          stroke="yellow"
          strokeWidth="0.01"
        />
      </svg>
    </>
  );
};

export default PieTest;
