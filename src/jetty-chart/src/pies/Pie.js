// import PaintPie from "./PaintPie";
import { useState } from "react";
// import TestFile from "./testFile/TestFile";
import PieSvg from "./components/PieSvg";
import PieTestSetting from "./testFile/PieTestSetting";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_HEIGHT,
  DEFAULT_INNER_RADIUS,
  DEFAULT_PADDING,
  DEFAULT_PAD_ANGLE,
  DEFAULT_PAD_SIZE,
  DEFAULT_PIE_RADIUS,
  DEFAULT_START_ANGLE,
  DEFAULT_WIDTH,
} from "./constants/pieSetting";

const Pie = ({
  data,
  generalSettings = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    padding: {
      top: DEFAULT_PADDING,
      bottom: DEFAULT_PADDING,
      left: DEFAULT_PADDING,
      right: DEFAULT_PADDING,
    },
  },
  pieSettings = {
    color: ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"],
    pieRadius: DEFAULT_PIE_RADIUS, // 파이 반지름, default 1
    innerRadius: DEFAULT_INNER_RADIUS, // 내부원 크기, default 0
    cornerRadius: DEFAULT_CORNER_RADIUS, // 조각 둥글기, default 0
    startAngle: DEFAULT_START_ANGLE, // 시작 위치 각도, default 0
    padAngle: DEFAULT_PAD_ANGLE, // 조각 크기, default 100
  },
}) => {
  // 테스트용
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
