// import { useState } from "react";
// import PieTestSetting from "./testFile/PieTestSetting";
import PieSvg from "../../common/pie-common/components/PieSvg";
import {
  setDefaultGeneralSettings,
  setDefaultLabelSettings,
  setDefaultPieSettings,
} from "../../common/pie-common/utils/setDefaultSettings";

export const Pie = ({ data, generalSettings, pieSettings, labelSettings, debugSettings = false }) => {
  const newGeneralSettings = {
    ...setDefaultGeneralSettings(),
    ...generalSettings,
  };
  const newPieSettings = {
    ...setDefaultPieSettings(),
    ...pieSettings,
  };
  const newLabelSettings = {
    ...setDefaultLabelSettings(),
    ...labelSettings,
  };
  const newDebugSettings = debugSettings;

  // const [newGeneralSettings, setNewGeneralSettings] = useState({
  //   ...setDefaultGeneralSettings(),
  //   ...generalSettings,
  // });
  // const [newPieSettings, setNewPieSettings] = useState({
  //   ...setDefaultPieSettings(),
  //   ...pieSettings,
  // });
  // const [newLabelSettings, setNewLabelSettings] = useState({
  //   ...setDefaultLabelSettings(),
  //   ...labelSettings,
  // });
  // const [newDebugSettings, setNewDebugSettings] = useState(debugSettings);
  return (
    <>
      {/* <PieTestSetting
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugSettings={newDebugSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
        changeNewLabelSettings={setNewLabelSettings}
        changeDebugSettings={setNewDebugSettings}
      /> */}
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
