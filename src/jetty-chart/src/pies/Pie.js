// import PaintPie from "./PaintPie";
import { useState } from "react";
// import TestFile from "./testFile/TestFile";
import PieTest from "./PieTest";
import PieSvg from "./components/PieSvg";

const Pie = ({
  data,
  generalSettings = {
    width: 550,
    height: 550,
    backgroundColor: "#000000",
    padding: {
      top: "10",
      bottom: "10",
      left: "10",
      right: "10",
    },
  },
  pieSettings = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    pieRadius: 1, // 파이 반지름, default 1
    innerRadius: 0.5, // 내부원 크기, default 50
    cornerRadius: 0.2, // 조각 둥글기, default 0
    startAngle: 0, // 시작 위치 각도, default 0
    padSize: 100, // 조각 크기, default 100
    padSpace: 1, // 조각 여백 default 0
  },
  // debugTool = !true,
}) => {
  const [newGeneralSettings, setNewGeneralSettings] = useState(generalSettings);
  const [newPieSettings, setNewPieSettings] = useState(pieSettings);
  console.log(data, setNewGeneralSettings, setNewPieSettings);
  const calcData = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].value;
    }

    return data.map((item) => {
      return {
        ...item,
        value: (item.value /= sum),
      };
    });
  };

  const test = calcData(data);

  console.log("calcData");
  console.log(test + "1");
  console.log(data);

  return (
    <>
      {/* <TestFile
        generalSettings={generalSettings}
        pieSettings={pieSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
      /> */}
      <PieSvg
        data={calcData(data)}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
      />
      <PieTest />
    </>
  );
};

export { Pie };
