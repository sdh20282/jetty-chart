// import { useState } from "react";
// import PieTestSetting from "./testFile/PieTestSetting";
import PieSvg from "../../components/pie-components/PieSvg";
import {
  setDefaultGeneralSettings,
  setDefaultLabelSettings,
  setDefaultPieSettings,
  setDefaultArcLinkLabelSettings,
  setDefaultAnimationSettings,
  setDefaultLegendSettings,
} from "../../common/pie-common/utils/setDefaultSettings";
import "./pie.css";
import { useEffect, useState } from "react";

export const Pie = ({
  data,
  generalSettings,
  pieSettings,
  labelSettings,
  arcLinkLabelSettings,
  animationSettings,
  legendSettings,
  debugSettings = false,
}) => {
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
  const newArcLinkLabelSettings = {
    ...setDefaultArcLinkLabelSettings(),
    ...arcLinkLabelSettings,
  };
  const newAnimationSettings = {
    ...setDefaultAnimationSettings(),
    ...animationSettings,
  };
  const newLegendSettings = {
    ...setDefaultLegendSettings(),
    ...legendSettings,
  };
  const newDebugSettings = debugSettings;

  // const animationPieMakeWay = "all"; // all, oneByOne, none
  // if (animationPieMakeWay === "all") {
  // } else if (animationPieMakeWay === "oneByOne") {
  // }

  // const [newPieSettings, setNewPieSettings] = useState({
  //   ...setDefaultPieSettings(),
  //   ...pieSettings,
  //   useAngle: 0,
  // });

  // useEffect(() => {
  //   let intervalId;

  //   if (newPieSettings.useAngle < 360) {
  //     intervalId = setInterval(() => {
  //       setNewPieSettings((prevSettings) => ({
  //         ...prevSettings,
  //         useAngle: prevSettings.useAngle + 10,
  //       }));
  //     }, 10);
  //   }

  //   console.log("RENDERING");

  //   return () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, [newPieSettings.useAngle]);

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
  // const [newArcLinkLabelSettings, setNewArcLinkLabelSettings] = useState({
  //   ...setDefaultArcLinkLabelSettings(),
  //   ...arcLinkLabelSettings,
  // });
  // const [newAnimationSettings, setNewAnimationSettings] = useState({
  //   ...setDefaultAnimationSettings(),
  //   ...animationSettings,
  // });
  // const [newLegendSettings, setNewLegendSettings] = useState({
  //   ...setDefaultLegendSettings(),
  //   ...legendSettings,
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
        animationSettings={newAnimationSettings}
        legendSettings={newLegendSettings}
        arcLinkLabelSettings={newArcLinkLabelSettings}
      />
    </>
  );
};
