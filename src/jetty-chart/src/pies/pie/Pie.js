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

const Pie = ({ data, generalSettings, pieSettings, labelSettings, debugSettings = false }) => {
  const [newGeneralSettings, setNewGeneralSettings] = useState({
    ...setDefaultGeneralSettings(),
    ...generalSettings,
  });
  const [newPieSettings, setNewPieSettings] = useState({
    ...setDefaultPieSettings(),
    ...pieSettings,
  });
  const [newLabelSettings, setNewLabelSettings] = useState({
    ...setDefaultLabelSettings(),
    ...labelSettings,
  });
  const [newDebugSettings, setNewDebugSettings] = useState(debugSettings);
  return (
    <>
      <PieTestSetting
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugSettings={newDebugSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
        changeNewLabelSettings={setNewLabelSettings}
        changeDebugSettings={setNewDebugSettings}
      />
      <PieSvg
        data={data}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugSettings={newDebugSettings}
      />
    </>
  );
};

export { Pie };
