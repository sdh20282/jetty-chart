// 파이 차트의 SVG를 그리는 컴포넌트
import getPiePiece from "../utils/getPiePiece";
import PiePiece from "./PiePiece";
import { divideRatio } from "../utils/getDivideRatio";
import { PieDebugMode } from "../testFile/PieDebugMode";
import { setExceptionValue } from "../utils/setExceptionValue";

const PieSvg = ({ data, generalSettings, pieSettings, debugTool }) => {
  // data = [{ value: 0.85 }, { value: 0.15 }]; //153
  // data = [{ value: 0.2 }, { value: 0.25 }, { value: 0.25 }, { value: 0.3 }];
  // data = [{ value: 0.25 }, { value: 0.25 }, { value: 0.25 }, { value: 0.25 }];
  // data = [{ value: 0.01 }, { value: 0.99 }];
  // data = [{ value: 0.05 }, { value: 0.95 }];
  // data = [{ value: 0.1 }, { value: 0.9 }];
  // data = [{ value: 0.2 }, { value: 0.8 }];
  // data = [{ value: 0.3 }, { value: 0.7 }];
  // data = [{ value: 0.4 }, { value: 0.6 }];
  // data = [{ value: 0.5 }, { value: 0.5 }];
  // data = [
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  //   { value: 0.1 },
  // ];
  // data = [
  //   { value: 0.2 },
  //   { value: 0.3 },
  //   { value: 0.1 },
  //   { value: 0.15 },
  //   { value: 0.15 },
  //   { value: 0.1 },
  // ];
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
      <circle
        cx={0}
        cy={0}
        r={pieSettings.pieRadius}
        fill={generalSettings.donutBackgroundColor}
        opacity={1}
      />
      <circle
        cx={0}
        cy={0}
        r={pieSettings.pieRadius - (pieSettings.pieRadius - pieSettings.innerRadius) / 2}
        stroke={generalSettings.pieBackgroundColor}
        strokeWidth={pieSettings.pieRadius - pieSettings.innerRadius}
        fill="transparent"
      />
      {/* <circle
        cx={0}
        cy={0}
        r={pieSettings.pieRadius - (pieSettings.pieRadius - pieSettings.innerRadius) / 2}
        stroke={"blue"}
        strokeWidth={pieSettings.pieRadius - pieSettings.innerRadius}
        fill="red"
      />
      <circle
        cx={0}
        cy={0}
        r={pieSettings.pieRadius - pieSettings.strokeWidth / 2}
        stroke={"green"}
        strokeWidth={pieSettings.strokeWidth}
        fill="yellow"
        opacity={0.5}
      /> */}
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
          color={pieSettings.color[index % data.length]}
          strokeColor={pieSettings.strokeColor[index % data.length]}
          strokeWidth={pieSettings.strokeWidth}
          ratio={piece.ratio}
          value={piece.value}
          label={piece.label}
          key={index}
        />
      ))}
      {pieceData.map((piece, index) => (
        <PieDebugMode
          pieRadius={piece.pieRadius}
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
          startAngle={pieSettings.startAngle}
          referenceCoordinate={piece.referenceCoordinate}
          candidatesGroup={piece.candidatesGroup}
          key={index}
        />
      ))}
    </svg>
  );
};

export default PieSvg;
