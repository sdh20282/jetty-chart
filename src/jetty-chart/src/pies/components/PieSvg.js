import getPiePiece from "../getPiePiece";
import PiePiece from "./PiePiece";
import { getDivideRatio } from "../utils/getDivideRatio";
import { PieDebugMode } from "../testFile/PieDebugMode";

const PieSvg = ({ data, generalSettings, pieSettings, debugTool }) => {
  data = getDivideRatio({ data });
  data = [{ ratio: 0.6 }, { ratio: 0.1 }, { ratio: 0.1 }, { ratio: 0.2 }];

  const pieceData = getPiePiece({
    data,
    pieRadius: pieSettings.pieRadius,
    innerRadius: pieSettings.innerRadius,
    cornerRadius: pieSettings.cornerRadius,
    startAngle: pieSettings.startAngle,
  });

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
            cornerInnerRadius={piece.cornerInnerRadius}
            innerRadius={piece.innerRadius}
            tangentLineCoordinate1={piece.tangentLineCoordinate1}
            tangentLineCoordinate2={piece.tangentLineCoordinate2}
            tangentLineCoordinate3={piece.tangentLineCoordinate3}
            tangentLineCoordinate4={piece.tangentLineCoordinate4}
            color={pieSettings.color[index]}
            ratio={piece.ratio}
            value={piece.value}
            label={piece.label}
            key={index}
          />
          {debugTool && (
            <PieDebugMode
              cornerRadius={pieSettings.cornerRadius}
              cornerInnerRadius={piece.cornerInnerRadius}
              innerRadius={pieSettings.innerRadius}
              accumulatedAngle={piece.accumulatedAngle}
              percent={piece.ratio}
              vertex={piece.vertex}
              calcPos={piece.calcPos}
              tangentLineCoordinate1={piece.tangentLineCoordinate1}
              tangentLineCoordinate2={piece.tangentLineCoordinate2}
              tangentLineCoordinate3={piece.tangentLineCoordinate3}
              tangentLineCoordinate4={piece.tangentLineCoordinate4}
              cornerCoordinate1={piece.cornerCoordinate1}
              cornerCoordinate2={piece.cornerCoordinate2}
              cornerCoordinate3={piece.cornerCoordinate3}
              cornerCoordinate4={piece.cornerCoordinate4}
              tangentCircleCoordinate1={piece.tangentCircleCoordinate1}
              tangentCircleCoordinate2={piece.tangentCircleCoordinate2}
              tangentCircleCoordinate3={piece.tangentCircleCoordinate3}
              tangentCircleCoordinate4={piece.tangentCircleCoordinate4}
              referenceCoordinates={piece.referenceCoordinates}
            />
          )}
        </>
      ))}
    </svg>
  );
};

export default PieSvg;
