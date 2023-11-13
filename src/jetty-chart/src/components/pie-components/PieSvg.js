// 파이 차트의 SVG를 그리는 컴포넌트
import getPiePiece from "../../common/pie-common/utils/getPiePiece";
import { divideRatio } from "../../common/pie-common/utils/getDivideRatio";
// import { PieDebugMode } from "../testFile/PieDebugMode";
import { setExceptionValue } from "../../common/pie-common/utils/setExceptionValue";
import PieCircleBackground from "./PieCircleBackground";
import PieDonutBackground from "./PieDonutBackground";
import PiePiece from "./PiePiece";

const PieSvg = ({ data, generalSettings, pieSettings, labelSettings, debugSettings }) => {
  setExceptionValue({ pieSettings, length: data.length });
  data = divideRatio({
    data,
    padAngle: pieSettings.padAngle,
    startAngle: pieSettings.startAngle,
    useAngle: pieSettings.useAngle,
    sortByValue: pieSettings.sortByValue,
  });

  const pieceData = getPiePiece({
    data,
    pieRadius: pieSettings.pieRadius,
    innerRadius: pieSettings.innerRadius,
    cornerRadius: pieSettings.cornerRadius,
    startAngle: pieSettings.startAngle,
    labelDistance: labelSettings.labelDistance,
  });

  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.paddingLeft - generalSettings.paddingRight}
      height={generalSettings.height - generalSettings.paddingTop - generalSettings.paddingBottom}
      viewBox="-1 -1 2 2"
      style={{
        backgroundColor: generalSettings.backgroundColor,
        padding:
          generalSettings.paddingTop +
          "px " +
          generalSettings.paddingRight +
          "px " +
          generalSettings.paddingBottom +
          "px " +
          generalSettings.paddingLeft +
          "px ",
      }}
      opacity={generalSettings.pieOpacity}
    >
      <PieCircleBackground
        pieRadius={pieSettings.pieRadius}
        pieBackgroundColor={generalSettings.pieBackgroundColor}
        circleOpacity={generalSettings.circleOpacity}
      />
      <PieDonutBackground
        pieRadius={pieSettings.pieRadius}
        innerRadius={pieSettings.innerRadius}
        donutBackgroundColor={generalSettings.donutBackgroundColor}
        donutOpacity={generalSettings.donutOpacity}
      />
      {pieceData.map((piece, index) => (
        <PiePiece
          color={pieSettings.color[index % data.length]}
          strokeColor={pieSettings.strokeColor[index % data.length]}
          strokeWidth={pieSettings.strokeWidth}
          strokeOpacity={pieSettings.strokeOpacity}
          pieceOpacity={generalSettings.pieceOpacity}
          pieRadius={piece.pieRadius}
          innerRadius={piece.innerRadius}
          cornerInnerRadius={piece.cornerInnerRadius}
          cornerOuterRadius={piece.cornerOuterRadius}
          calcVertexGroup={piece.calcVertexGroup}
          tangentLineGroup={piece.tangentLineGroup}
          isLargeArcGroup={piece.isLargeArcGroup}
          ratio={piece.ratio}
          value={piece.value}
          labelLocation={piece.labelLocation}
          labelColor={labelSettings.labelColor}
          labelFontFamily={labelSettings.labelFontFamily}
          labelFontSize={labelSettings.labelFontSize}
          labelFontStyle={labelSettings.labelFontStyle}
          labelFontWeight={labelSettings.labelFontWeight}
          labelMoveX={labelSettings.labelMoveX}
          labelMoveY={labelSettings.labelMoveY}
          labelDistance={labelSettings.labelDistance}
          labelIsRotate={labelSettings.labelIsRotate}
          labelText={labelSettings.labelText}
          labelIsUse={labelSettings.labelIsUse}
          labelSkipRatio={labelSettings.labelSkipRatio}
          labelDegrees={labelSettings.labelDegrees}
          labelOpacity={labelSettings.labelOpacity}
          label={piece.label}
          key={index}
        />
      ))}
      {/* {pieceData.map((piece, index) => (
        <PieDebugMode
          debugSettings={debugSettings.debugTool}
          pieRadius={piece.pieRadius}
          innerRadius={pieSettings.innerRadius}
          cornerOuterRadius={piece.cornerOuterRadius}
          cornerInnerRadius={piece.cornerInnerRadius}
          accumulatedAngle={piece.accumulatedAngle}
          ratio={piece.ratio}
          vertexGroup={piece.vertexGroup}
          calcVertexGroup={piece.calcVertexGroup}
          tangentLineGroup={piece.tangentLineGroup}
          cornerCircleGroup={piece.cornerCircleGroup}
          startAngle={pieSettings.startAngle}
          referenceCoordinate={piece.referenceCoordinate}
          candidatesGroup={piece.candidatesGroup}
          labelLocation={piece.labelLocation}
          labelMoveX={labelSettings.labelMoveX}
          labelMoveY={labelSettings.labelMoveY}
          key={index}
        />
      ))} */}
    </svg>
  );
};

export default PieSvg;
