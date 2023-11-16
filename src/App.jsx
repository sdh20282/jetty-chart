import { NormalMap } from "./jetty-chart/src/maps/normal-map/normal-map";

const data = [
  {
    name: "northChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    description: "",
    inKorea: "충청북도",
  },
  {
    name: "incheon",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "",
    inKorea: "인천",
  },
  {
    name: "kangwon",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "강원도",
  },
  {
    name: "seoul",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "서울",
  },
  {
    name: "gyeonggi",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "",
    inKorea: "경기도",
  },
  {
    name: "northJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "",
    inKorea: "전라북도",
  },
  {
    name: "gwangju",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "광주",
  },
  {
    name: "southChungcheong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "",
    inKorea: "충청남도",
  },
  {
    name: "daejeon",
    value: Math.floor(Math.random() * 1001),
    color: "#000000",
    description: "",
    inKorea: "대전",
  },
  {
    name: "daegu",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "대구",
  },
  {
    name: "southgyeongsang",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "경상남도",
  },
  {
    name: "southJeolla",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "전라남도",
  },
  {
    name: "busan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "부산",
  },
  {
    name: "ulsan",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "울산",
  },
  {
    name: "jeju",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "zzzzz",
    inKorea: "제주",
  },
  {
    name: "kyeongbook",
    value: Math.floor(Math.random() * 1001),
    color: "#F35F40",
    description: "",
    inKorea: "경상북도",
  },
  {
    name: "sejong",
    value: Math.floor(Math.random() * 1001),
    color: "#4079F3",
    description: "",
    inKorea: "세종",
  },
];

const chartData = [
  { id: "daegu", innerChartName: "대구광역시", chartData: [] },
  { id: "jeju", innerChartName: "제주특별자치도", chartData: [{ label: "서귀포", value: 200 }, { label: "제주시", value: 300 }, { label: "중구", value: 100 }, { label: "중구", value: 100 }] },
  { id: "sejong", innerChartName: "세종특별자치시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "kyeongbook", innerChartName: "경상북도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "ulsan", innerChartName: "울산광역시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "busan", innerChartName: "부산광역시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "southJeolla", innerChartName: "전라남도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "southgyeongsang", innerChartName: "경상남도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "daejeon", innerChartName: "대전광역시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "southChungcheong", innerChartName: "충청남도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "gwangju", innerChartName: "광주광역시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "northJeolla", innerChartName: "전라북도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "gyeonggi", innerChartName: "경기도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "seoul", innerChartName: "서울 특별시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "kangwon", innerChartName: "강원도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "incheon", innerChartName: "인천광역시", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] },
  { id: "northChungcheong", innerChartName: "충청북도", chartData: [{ label: "더미", value: 200 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }, { label: "더미2", value: 300 }] }]

function App() {
  return (
    <div>
      <NormalMap data={data} normalSetting={{ zoomMagnification: 2.5, width: 500, useChart: false, usePercentageColor: true}}
        tooltipSetting={{ useFollowColor: false,useTooltipChart:true }}
        chartData={chartData}
        tooltipChartData={chartData}
        />
    </div>
  );
}

export default App;
