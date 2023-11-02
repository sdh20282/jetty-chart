// import { NormalBar } from "./jetty-chart/src";
import { MapChart } from "./jetty-chart/src/mapchart/map-common";
// const data = [
//   {
//     value: 1.1,
//     label: "test1"
//   },
//   {
//     value: 0.01,
//     label: "test1"
//   },
//   {
//     value: 1.4,
//     label: "test1"
//   },
//   {
//     value: 5,
//     label: "test1"
//   },
//   {
//     value: 1.9,
//     label: "test1"
//   },
//   {
//     value: 0.9,
//     label: "test1"
//   },
//   {
//     value: -1.7,
//     label: "test1"
//   }
// ];

const data1 = [
  {
    name: "northChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    colorCode:0,
    description: "",
    inKorea: "충청북도"
  },
  {
    name: "incheon",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "인천"
  },
  {
    name: "kangwon",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "강원도"
  },
  {
    name: "seoul",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "서울"
  },
  {
    name: "gyeonggi",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "경기도"
  },
  {
    name: "northJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "전라북도"
  },
  {
    name: "gwangju",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "광주"
  },
  {
    name: "southChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "충청남도"
  },
  {
    name: "daejeon",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    colorCode: 0,
    description: "",
    inKorea: "대전"
  },
  {
    name: "deagu",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "대구"
  },
  {
    name: "southgyeongsang",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "경상남도"
  },
  {
    name: "southJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "전라남도"
  },
  {
    name: "busan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0, 
    description: "부싼부싼 부싼부싼부 부싼부싼부싼부싼부싼부싼부싼부싼부싼부싼부부부싼부싼부싼부싼부싼부싼부부싼부싼부싼부싼부싼부부싼부싼부싼부싼부싼싼",
    inKorea: "부산"
  },
  {
    name: "ulsan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "울산"
  },
  {
    name: "jeju",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "zzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz zzzz",
    inKorea:"제주"
  },
  {
    name: "kyeongbook",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "경상북도"
  },
  {
    name: "sejong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "세종"
  }
];

// const myNormalBar = ({ data }) => {
//   return <NormalBar data={data} normalSettings={{ horizontal: false, reverse: false, margin: { right: 10 } }} />;
// };

const myMap = ({ data1 }) => {
  return (
    <MapChart
      data={data1}
      nomalSetting={{
        backgroundColor: "white",
        divide: 5,
        colorCode: 2,
        width: 300,
        zoomMagnification:1.8,
        usePersentageColor: true,
        zoomOn:true,
        animationOn:true,
      }}
      gagueBarSetting={{
        useGagueBar: true,
        useValueLavel:true,
        pointerSize: 0,
        pointerColor: "#000000",
        gagueBarWidth: 0,
        gagueBarHeight: 200,
        gagueValueFontSize: 40,
        gagueValueFontFamily:"inter",
        gagueValueFontWeight:"bold",
        valueLavel: "*원"
      }}
      tooltipSetting={{
        useFollowColor:true,
        useKorea:true,
        tooltipWidth: 600,
        tooltipMaxHeight: 1064,
        tooltipBackGroundColor: "white",
        tooltipBorderRadius: 10,
        tooltipBorder: "0.5px solid #ddd",
        tooltipBoxShadow: "none",
        cityNameFontSize: 30,
        cityNameColor: "black",
        cityNameFontWeight: "bold",
        cityValueColor: "black",
        cityValueFontWeight: "bold",
        cityValueFontSize: 30,
        descriptionColor: "black",
        descriptionFontSize: 30,
        descriptionFontWeight: "bold",
        descriptionFontFamily : "inter"
      }}
    />
  );
};

function App() {
  return (
    <div>
      {/* {myNormalBar({ data })} */}
      <div style={{position:"absolute", left:"300px"}}>{myMap({ data1 })}</div>
    </div>
  );
}

export default App;
