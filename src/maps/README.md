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
[
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

### 차트 속성

- data

- normalSetting

- gagueBarSetting

- tooltipSetting

### 속성상세

#### Map

```textile
  normalSetting:{
    backgroundColor: 차트 전체 배경색 - "white",
    divide: 게이지 등분 - 5,
    colorCode: 차트에 사용할 색상 - 0,
    width: 차트 너비 - 400,
    usePercentageColor: 자료값에 따라 색상 변환 - true,
    zoomOn: 클릭할 경우 줌 사용 - true,
    zoomMagnification: 줌 배수 - 1.8,
    animationOn: 마우스 호버기능 사용 - true,
    marginTop:차트 전체의 위쪽 간격 - 0,
    marginBottom: 차트 전체의 아래쪽 간격 - 0,
    marginLeft: 차트 전체의 왼쪽 간격 - 0,
    marginRight: 차트 전체의 오른쪽 간격 - 0,
  },
  gagueBarSetting:{
    useGagueBar: 게이지바 사용 - true,
    useValueLavel: 데이터값에 대한 레벨 사용 - true,
    pointerSize: 포인터 크기 - 0,
    pointerColor: 포인터 색상 - "#000000",
    gagueBarWidth: 게이지바 너비 - 0,
    gagueBarHeight: 게이지바 높이 - 100,
    gagueValueFontSize: 게이지바 글자크기 - 40,
    gagueValueFontFamily: 게이지바 글씨체 - "inter",
    gagueValueFontWeight: 게이지바 글자굵기 - "bold",
    valueLavel: "",
  },
  tooltipSetting:{
    useFollowColor: 툴팁 색상 호버된 지도 영역과 동일 - false,
    useKorea: 지역명 한글 사용 - true,
    tooltipWidth: 툴팁 너비 - 400,
    tooltipBackGroundColor: 툴팁 색상 - "white",
    tooltipBorderRadius: 툴팁 모서리 - 10,
    tooltipBorder: 툴팁 테두리 - "0.5px solid #ddd",
    tooltipBoxShadow: 툴팁 그림자 - "none",
    cityNameFontSize: 도시 이름 글자 크기 - 30,
    cityNameColor: 글자 색상 - "black",
    cityNameFontWeight: 글자 굵기 - "bold",
    cityValueColor: 도시 데이터 값 색상 - "black",
    cityValueFontWeight: 도시 데이터 값 글자 굵기 - "bold",
    cityValueFontSize: 도시 데이터 값 글자 크기 - 30,
    descriptionColor: 설명 색상 - "black",
    descriptionFontSize: 설명 글자 크기 - 30,
    descriptionFontWeight: 설명 글자 굵기 - "bold",
    descriptionFontFamily : 설명 글씨체 - "inter",
    tooltipOpacity: 툴팁 선명도 - 1,
    useTooltipCol: 툴팁의 도시 이름과 데이터사이에 ":" 삽입 - true,
  },
```

[한국 지도 차트 데모](http://jetty-chart.com/chart-detail/map)
