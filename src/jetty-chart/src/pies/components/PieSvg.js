import getPiePiece from "../getPiePiece";
import { getDividePercent } from "../utils/getDividePercent";
import PiePiece from "./PiePiece";

const PieSvg = ({ data, generalSettings, pieSettings }) => {
  data = getDividePercent({ data });
  const pieceData = getPiePiece({ data, pieSettings });
  console.log(pieceData);

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
          "px ",
      }}
    >
      {pieceData.map((piece) => (
        <PiePiece
          startX={piece.startPos.x}
          startY={piece.startPos.y}
          startRoundPos={piece.startRoundPos}
          endRoundPos={piece.endRoundPos}
          startInnerPos={piece.startInnerPos}
          endInnerPos={piece.endInnerPos}
          endX={piece.endPos.x}
          endY={piece.endPos.y}
          isLargeArcFlag={piece.isLargeArcFlag}
          key={piece.index}
          index={piece.index}
          value={piece.value}
          label={piece.label}
          targetRad={piece.targetRad}
          targetSpace={piece.targetSpace}
          targetRestRad={piece.targetRestRad}
          pieSettings={pieSettings}
        />
      ))}
    </svg>
  );
};

export default PieSvg;
