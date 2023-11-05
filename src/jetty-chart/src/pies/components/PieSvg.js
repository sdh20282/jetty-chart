import getPiePiece from "../getPiePiece";
import PiePiece from "./PiePiece";
import { getDividePercent } from "../utils/getDividePercent";
import { PieDebugMode } from "../testFile/PieDebugMode";

const PieSvg = ({ data, generalSettings, pieSettings }) => {
  data = getDividePercent({ data });
  const pieceData = getPiePiece({
    data,
    pieRadius: pieSettings.pieRadius,
    innerRadius: pieSettings.innerRadius,
    cornerRadius: pieSettings.cornerRadius,
    startAngle: pieSettings.startAngle,
  });
  const debugTool = !!true;

  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.padding.left - generalSettings.padding.right}
      height={generalSettings.height - generalSettings.padding.top - generalSettings.padding.bottom}
      viewBox="-1 -1 2 2"
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
      {pieceData.map((piece, index) => (
        <>
          <PiePiece
            vertex={piece.vertex}
            calcPos={piece.calcPos}
            pieRadius={piece.pieRadius}
            cornerRadius={piece.cornerRadius}
            innerRadius={piece.innerRadius}
            tangentLineCoordinate1={piece.tangentLineCoordinate1}
            tangentLineCoordinate2={piece.tangentLineCoordinate2}
            color={pieSettings.color[index]}
            key={index}
          />
          {debugTool && (
            <PieDebugMode
              cornerRadius={pieSettings.cornerRadius}
              innerRadius={pieSettings.innerRadius}
              accumulatedPercent={piece.accumulatedPercent}
              percent={piece.ratio}
              vertex={piece.vertex}
              calcPos={piece.calcPos}
              cornerCoordinate1={piece.cornerCoordinate1}
              cornerCoordinate2={piece.cornerCoordinate2}
              referenceCoordinates={piece.referenceCoordinates}
            />
          )}
        </>
      ))}
    </svg>
  );
};

export default PieSvg;
