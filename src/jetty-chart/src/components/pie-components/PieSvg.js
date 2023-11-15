// 파이 차트의 SVG를 그리는 컴포넌트
import getPiePiece from "../../common/pie-common/utils/getPiePiece";
import { divideRatio } from "../../common/pie-common/utils/getDivideRatio";
// import { PieDebugMode } from "../testFile/PieDebugMode";
import { setExceptionValue } from "../../common/pie-common/utils/setExceptionValue";
import PieCircleBackground from "./PieCircleBackground";
import PieDonutBackground from "./PieDonutBackground";
import PiePiece from "./PiePiece";
import ToolTipCommon from "../tooltip/ToolTipCommon";
import { DrawLegends } from "../legend/draw-legends";
import { getSortedColor } from "../../common/pie-common/utils/getSortedColor";

const PieSvg = ({
  data,
  generalSettings,
  pieSettings,
  labelSettings,
  arcLinkLabelSettings,
  animationSettings,
  legendSettings,
  // debugSettings,
}) => {
  setExceptionValue({ pieSettings, length: data.length });
  data = divideRatio({
    data,
    padAngle: pieSettings.padAngle,
    startAngle: pieSettings.startAngle,
    useAngle: pieSettings.useAngle,
    sortByValue: pieSettings.sortByValue,
  });
  const newColor = getSortedColor({ data, color: pieSettings.color });
  const newStrokeColor = getSortedColor({ data, color: pieSettings.strokeColor });
  const newArcLinkLabelTextColor = getSortedColor({
    data,
    color: arcLinkLabelSettings.arcLinkLabelTextColor,
  });
  const newArcLinkLabelLineColor = getSortedColor({
    data,
    color: arcLinkLabelSettings.arcLinkLabelLineColor,
  });
  const pieceData = getPiePiece({
    data,
    pieRadius: pieSettings.pieRadius,
    innerRadius: pieSettings.innerRadius,
    cornerRadius: pieSettings.cornerRadius,
    startAngle: pieSettings.startAngle,
    labelDistance: labelSettings.labelDistance,
    arcLinkLabelLineDistance: arcLinkLabelSettings.arcLinkLabelLineDistance,
    arcLinkLabelStartLine: arcLinkLabelSettings.arcLinkLabelStartLine,
    arcLinkLabelEndLine: arcLinkLabelSettings.arcLinkLabelEndLine,
  });
  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.paddingLeft - generalSettings.paddingRight}
      height={generalSettings.height - generalSettings.paddingTop - generalSettings.paddingBottom}
      viewBox="-2 -2 4 4"
      className="pie"
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
          color={newColor[index % pieSettings.color.length]}
          strokeColor={newStrokeColor[index % pieSettings.strokeColor.length]}
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
          arcLinkLabelTextColor={
            newArcLinkLabelTextColor[index % arcLinkLabelSettings.arcLinkLabelTextColor.length]
          }
          arcLinkLabelLineColor={
            newArcLinkLabelLineColor[index % arcLinkLabelSettings.arcLinkLabelLineColor.length]
          }
          arcLinkLabelFontSize={arcLinkLabelSettings.arcLinkLabelFontSize}
          arcLinkLabelFontFamily={arcLinkLabelSettings.arcLinkLabelFontFamily}
          arcLinkLabelFontStyle={arcLinkLabelSettings.arcLinkLabelFontStyle}
          arcLinkLabelFontWeight={arcLinkLabelSettings.arcLinkLabelFontWeight}
          arcLinkLabelText={arcLinkLabelSettings.arcLinkLabelTEXT}
          arcLinkLabelLineSize={arcLinkLabelSettings.arcLinkLabelLineSize}
          arcLinkLabelTextDistance={arcLinkLabelSettings.arcLinkLabelTextDistance}
          arcLinkLabelSkipAngle={arcLinkLabelSettings.arcLinkLabelSkipAngle}
          arcLinkLabelLineOpacity={arcLinkLabelSettings.arcLinkLabelLineOpacity}
          arcLinkLabelTextOpacity={arcLinkLabelSettings.arcLinkLabelTextOpacity}
          arcLinkLabelIsUse={arcLinkLabelSettings.arcLinkLabelIsUse}
          arcLinkLabelLocation={piece.arcLinkLabelLocation}
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
          animationOn={animationSettings.animationOn}
          animationDuration={animationSettings.animationDuration}
          animationDelay={animationSettings.animationDelay}
          animationTiming={animationSettings.animationTiming}
          animationScale={animationSettings.animationScale}
          label={piece.label}
          ratio={piece.ratio}
          value={piece.value}
          key={index}
        />
      ))}
      {/* <ToolTipCommon /> */}
      <DrawLegends
        keys={data.map((item) => item.label)}
        normalSettings={{
          width: 0,
          height: 0,
          colorPalette: newColor,
          margin: {
            top: legendSettings.marginTop,
            right: legendSettings.marginRight,
            bottom: legendSettings.marginBottom,
            left: legendSettings.marginLeft,
          },
        }}
        legendSettings={legendSettings}
      />
    </svg>
  );
};

export default PieSvg;
