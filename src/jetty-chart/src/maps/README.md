## Korea Map Chart : 한국 지도 차트

한국 지도 차트입니다. 지역별 데이터를 넣어 시각화 할 수 있으며, 지역 클릭 시 지역별 막대 차트를 보이게 할 수 있습니다.

**Use**:

```jsx
import { NormalMap } from "jetty-chart";

function App({ data }) {
  return <NormalMap data={data} keys={["key"]} xLegend={"types"} yLegend={"
  values"} />;
}
```

### 커스텀 속성

- data
- normalSetting
- gagueBarSetting
- tooltipSetting

<br/>

데이터 형식 :

```
// 필수 required, 선택 optional

*required
// 아래의 양식 그대로를 가져다 쓰고
value 값과 description 을 변경하면 된다.
const data = [
  {
    name: "northChungcheong", <<고정
    value: number
    color: "#000000" < Color
    description: "",
    inKorea: "충청북도", <<고정
  },
  {
    name: "incheon",
    value: number,
    color: "#4079F3",
    description: "",
    inKorea: "인천",
  },
  {
    name: "kangwon",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "강원도",
  },
  {
    name: "seoul",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "서울",
  },
  {
    name: "gyeonggi",
    value: number,
    color: "#4079F3",
    description: "",
    inKorea: "경기도",
  },
  {
    name: "northJeolla",
    value: number,
    color: "#4079F3",
    description: "",
    inKorea: "전라북도",
  },
  {
    name: "gwangju",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "광주",
  },
  {
    name: "southChungcheong",
    value: number,
    color: "#4079F3",
    description: "",
    inKorea: "충청남도",
  },
  {
    name: "daejeon",
    value: number,
    color: "#000000",
    description: "",
    inKorea: "대전",
  },
  {
    name: "daegu",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "대구",
  },
  {
    name: "southgyeongsang",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "경상남도",
  },
  {
    name: "southJeolla",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "전라남도",
  },
  {
    name: "busan",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "부산",
  },
  {
    name: "ulsan",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "울산",
  },
  {
    name: "jeju",
    value: number,
    color: "#4079F3",
    description: "zzzzz",
    inKorea: "제주",
  },
  {
    name: "kyeongbook",
    value: number,
    color: "#F35F40",
    description: "",
    inKorea: "경상북도",
  },
  {
    name: "sejong",
    value: number,
    color: "#4079F3",
    description: "",
    inKorea: "세종",
  },
];
```

### 차트 속 차트

### 클릭 차트

**Use** :
```jsx
import { NormalMap } from "jetty-chart";

function App({ data }) {
  return <NormalMap data={data} normalSettings={{ useChart : true, }} />;
}
```
### 툴팁 차트
**Use** :
```jsx
import { NormalMap } from "jetty-chart";

function App({ data }) {
  return <NormalMap data={data} normalSettings={{ useChart : true, }} />;
}
```

데이터 형식 : 
```javaScript
const chartData = [
    { 
      id: "daegu",
      innerChartName : "대구광역시",
      chartData : [
        {
          lavel : "string",
          value : number
        }
      ]
    },
    ...
  ]

```

[한국 지도 차트 데모](jetty-chart.com/chart-detail/map)
