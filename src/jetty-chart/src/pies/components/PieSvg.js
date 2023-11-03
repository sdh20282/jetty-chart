import getPiePiece from "../getPiePiece";
import PiePiece from "./PiePiece";

const PieSvg = ({ data, generalSettings, pieSettings }) => {
  const { startPos, startRoundPos, startInnerPos, endPos, endRoundPos, endInnerPos, isLargeArcFlag, targetRad, targetSpace, targetRestRad } =
    getPiePiece({ data, pieSettings });
  console.log("PIESVG");
  console.log(startPos, startRoundPos, startInnerPos, endPos, endRoundPos, endInnerPos, isLargeArcFlag, targetRad, targetSpace, targetRestRad);
  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.padding.left - generalSettings.padding.right}
      height={generalSettings.height - generalSettings.padding.top - generalSettings.padding.bottom}
      viewBox="-2 -2 4 4"
      style={{
        backgroundColor: generalSettings.backgroundColor,
        padding:
          generalSettings.padding.top +
          "px " +
          generalSettings.padding.right +
          "px " +
          generalSettings.padding.bottom +
          "px " +
          generalSettings.padding.left +
          "px "
      }}
    >
      <PiePiece
        data={data}
        startX={startPos.x}
        startY={startPos.y}
        startRoundPos={startRoundPos}
        endRoundPos={endRoundPos}
        startInnerPos={startInnerPos}
        endInnerPos={endInnerPos}
        endX={endPos.x}
        endY={endPos.y}
        isLargeArcFlag={isLargeArcFlag}
        pieSettings={pieSettings}
        index={index}
        key={index}
        value={value}
        label={label}
        targetRad={targetRad}
        targetSpace={targetSpace}
        targetRestRad={targetRestRad}
      />
    </svg>
  );
};

export default PieSvg;
