// import PaintPie from "./PaintPie";
import { useState } from "react";
// import TestFile from "./testFile/TestFile";
import PieSvg from "./components/PieSvg";
import PieTestSetting from "./testFile/PieTestSetting";
import {
  setDefaultGeneralSettings,
  setDefaultLabelSettings,
  setDefaultPieSettings,
} from "./utils/setDefaultSettings";

const Pie = ({
  data,
  generalSettings = setDefaultGeneralSettings(),
  pieSettings = setDefaultPieSettings(),
  labelSettings = setDefaultLabelSettings(),
}) => {
  // 테스트용
  const [newGeneralSettings, setNewGeneralSettings] = useState(generalSettings);
  const [newPieSettings, setNewPieSettings] = useState(pieSettings);
  const [newLabelSettings, setNewLabelSettings] = useState(labelSettings);
  const [newDebugTool, setNewDebugTool] = useState(pieSettings.debugTool);
  const toggleDebugTool = () => {
    setNewDebugTool(!newDebugTool);
  };
  return (
    <div style={{ display: "flex" }}>
      {/* <div> */}
      <PieTestSetting
        generalSettings={generalSettings}
        pieSettings={pieSettings}
        labelSettings={newLabelSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
        changeNewLabelSettings={setNewLabelSettings}
        changeDebugTool={toggleDebugTool}
      />
      <PieSvg
        data={data}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugTool={newDebugTool}
      />
    </div>
  );
};

export { Pie };
