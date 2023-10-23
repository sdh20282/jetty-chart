import PaintPie from "./PaintPie";
import { useState } from "react";
import TestFile from "./testFile/TestFile";
import PieTest from "./PieTest";

const Pie = ({
  data,
  generalSettings = {
    width: "200",
    height: "200",
    backgroundColor: "#777",
    padding: { top: "10", bottom: "10", left: "10", right: "10" },
  },
  pieSettings = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    startAngle: 0, // 시작 위치 각도, default 0
    padSize: 100, // 조각 크기, default 100
    padAngle: 1, // 조각 여백 default 0
    innerWidth: 50, // 내부원 크기, default 50
    cornerRadius: 0,
  },
}) => {
  const [newGeneralSettings, setNewGeneralSettings] = useState(generalSettings);
  const [newPieSettings, setNewPieSettings] = useState(pieSettings);

  const calcData = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].value;
    }
    return data.map((item) => {
      return { ...item, value: (item.value = item.value / sum) };
    });
  };

  return (
    <div>
      <TestFile
        generalSettings={generalSettings}
        pieSettings={pieSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
      />
      <PaintPie
        data={calcData(data)}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
      />
      <PieTest />
    </div>
  );
};

export { Pie };
