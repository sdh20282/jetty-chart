import { NormalBar, StackedBar, NormalMap } from "./jetty-chart/src";
const data = [
  {
    name: "northChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    colorCode: 0,
    description: "",
    inKorea: "충청북도",
  },
  {
    name: "incheon",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "인천",
  },
  {
    name: "kangwon",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "강원도",
  },
  {
    name: "seoul",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "서울",
  },
  {
    name: "gyeonggi",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "경기도",
  },
  {
    name: "northJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "전라북도",
  },
  {
    name: "gwangju",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "광주",
  },
  {
    name: "southChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "충청남도",
  },
  {
    name: "daejeon",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    colorCode: 0,
    description: "",
    inKorea: "대전",
  },
  {
    name: "daegu",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "대구",
  },
  {
    name: "southgyeongsang",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "경상남도",
  },
  {
    name: "southJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "전라남도",
  },
  {
    name: "busan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "부산",
  },
  {
    name: "ulsan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "울산",
  },
  {
    name: "jeju",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "zzzzz",
    inKorea: "제주",
  },
  {
    name: "kyeongbook",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    colorCode: 0,
    description: "",
    inKorea: "경상북도",
  },
  {
    name: "sejong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    colorCode: 0,
    description: "",
    inKorea: "세종",
  },
];

const chartData = [{id:"daegu", chartData:[{label:"달서구",value:100},{label:"중구",value:100},{label:"중구",value:100},{label:"중구",value:100}]},{id:"jeju", chartData:[{label:"서귀포",value:200},{label:"제주시",value:300},{label:"중구",value:100},{label:"중구",value:100}]},{id:"sejong", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"kyeongbook", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"ulsan", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"busan", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"southJeolla", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"southgyeongsang", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"daejeon", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"southChungcheong", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"gwangju", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"northJeolla", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"gyeonggi", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"seoul", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"kangwon", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"incheon", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]},{id:"northChungcheong", chartData:[{label:"더미",value:200},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300},{label:"더미2",value:300}]}]

function App() {
  return (
    <div style={{position:"absolute", left:"300px"}}>
      <NormalMap data={data} chartData={chartData} normalSetting={{backgroundColor:"white",zoomMagnification:1.8, marginLeft:200, width:500,useChart:true ,innerChartText:"에 나의 팬 숫자"}}/>
    </div>
  );
}

export default App;
