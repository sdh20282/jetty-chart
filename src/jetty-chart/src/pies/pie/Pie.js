import PaintPie from "./PaintPie";
import { useState, useEffect } from "react";
import TestFile from "./testFile/TestFile";

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

  return (
    <div>
      <TestFile
        generalSettings={generalSettings}
        pieSettings={pieSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
      />
      <PaintPie data={data} generalSettings={newGeneralSettings} pieSettings={newPieSettings} />
    </div>
  );
};

export { Pie };
