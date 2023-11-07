// import PaintPie from "./PaintPie";
import { useState } from "react";
// import TestFile from "./testFile/TestFile";
import PieSvg from "./components/PieSvg";
import PieTestSetting from "./testFile/PieTestSetting";

const Pie = ({
  data,
  generalSettings = {
    width: 400,
    height: 400,
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
    innerRadius: 0.2, // 내부원 크기, default 0
    cornerRadius: 0.1, // 조각 둥글기, default 0
    startAngle: 0, // 시작 위치 각도, default 0
    padSize: 100, // 조각 크기, default 100
    padSpace: 1, // 조각 여백 default 0
  },
}) => {
  const [newGeneralSettings, setNewGeneralSettings] = useState(generalSettings);
  const [newPieSettings, setNewPieSettings] = useState(pieSettings);
  const [debugTool, setDebugTool] = useState(false);
  const toggleDebugTool = () => {
    setDebugTool(!debugTool);
  };
  return (
    <>
      <PieTestSetting
        generalSettings={generalSettings}
        pieSettings={pieSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
        changeDebugTool={toggleDebugTool}
      />
      <PieSvg
        data={data}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        debugTool={debugTool}
      />
    </>
  );
};

export { Pie };
