import getPiePiece from "../utils/getPiePiece";
import PiePiece from "./PiePiece";
import { divideRatio } from "../utils/getDivideRatio";
import { PieDebugMode } from "../testFile/PieDebugMode";

const PieSvg = ({ data, generalSettings, pieSettings, debugTool }) => {
  data = divideRatio({ data });
  data = [
    { ratio: 0.2 },
    { ratio: 0.3 },
    { ratio: 0.1 },
    { ratio: 0.1 },
    { ratio: 0.25 },
    { ratio: 0.05 },
  ];

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
        <PiePiece
          vertexGroup={piece.vertexGroup}
          cornerInnerRadius={piece.cornerInnerRadius}
          cornerOuterRadius={piece.cornerOuterRadius}
          calcVertexGroup={piece.calcVertexGroup}
          pieRadius={piece.pieRadius}
          innerRadius={piece.innerRadius}
          tangentLineGroup={piece.tangentLineGroup}
          isLargeArcGroup={piece.isLargeArcGroup}
          color={pieSettings.color[index]}
          ratio={piece.ratio}
          value={piece.value}
          label={piece.label}
          key={index}
        />
      ))}
      {pieceData.map((piece, index) => (
        <PieDebugMode
          debugTool={debugTool}
          cornerOuterRadius={piece.cornerOuterRadius}
          cornerInnerRadius={piece.cornerInnerRadius}
          innerRadius={pieSettings.innerRadius}
          accumulatedAngle={piece.accumulatedAngle}
          percent={piece.ratio}
          vertexGroup={piece.vertexGroup}
          calcVertexGroup={piece.calcVertexGroup}
          tangentLineGroup={piece.tangentLineGroup}
          cornerCircleGroup={piece.cornerCircleGroup}
          key={index}
        />
      ))}
    </svg>
  );
};

export default PieSvg;
