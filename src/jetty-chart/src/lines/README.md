## Line Chart : 선형 차트

꺾은선형 차트입니다.

### 차트 종류

- 단일 선형 차트 - SingleLine
- 다중 선형 차트 - MultiLine
- 누적 선형 차트 - StackedLine
- 순위 변동 차트 - BumpChart

### 단일 선형 차트 : SingleLine

간단하게 사용할 수 있는 단일 선형 차트입니다.

데이터 형식 : 

```
[
    {
        label: string, 
        value: number
    },
    ...
]
```

### 다중 선형 차트 : MultiLine

여러개의 데이터셋을 한 번에 띄울 수 있는 다중 선형 차트입니다.

데이터 형식 : 

```
[
  {
    id : string,
    data : [
      {
        label: string, 
        value: number
      },
      ...
    ]
  },
  ...
]
```

### 누적 선형 차트 : StackedLine

다중 선형 차트를 겹치지 않고 누적하여 볼 수 있는 차트입니다.

데이터 형식 : 

```
[
  {
    id : string,
    data : [
      {
        label: string, 
        value: number
      },
      ...
    ]
  },
  ...
]
```

### 순위 변동 차트 : BumpChart

시간 별로 변동되는 순위를 시각화할 수 있는 차트입니다.

데이터 형식 : 

```
[
  {
    id : string,
    data : [
      {
        label: string (time), 
        value: number (ranking)
      },
      ...
    ]
  },
  ...
]
```

**Use**:

```jsx
import { SingleLine, MultiLine, StackedLine, BumpChart } from "jetty-chart";

function App({ data }) {
  return (
    <SingleLine data={data} xLegend={"types"} yLegend={"values"} />
    <MultiLine data={data} xLegend={"types"} yLegend={"values"} />
    <StackedLine data={data} xLegend={"types"} yLegend={"values"} />
    <BumpChart data={data} xLegend={"types"} yLegend={"values"} />
  );
}
```

### 커스텀 속성

- data
- title ( SingleLine only )
- xLegend
- yLegend
- normalSettings
- scopeSettings
- axisXGridLineSettings
- axisYGridLineSettings
- leftLabelSettings
- rightLabelSettings
- bottomLabelSettings
- topLabelSettings
- leftLegendSettings
- rightLegendSettings
- legendSettings
- lineSettings
- animationSettings

### 세부속성

#### line

```textile
  // 설명 - 기본값
  // 기본 세팅
  normalSettings: {
    width: 차트의 너비 - 500,
    height: 차트의 높이 - 400,
    backgroundColor: 차트 전체 배경색 - "#fff",
    margin: 차트와 전체 차트 영역 사이의 간격(top - 60, bottom - 7-, left - 80, right - 120)
    colorPalette: 차트에 사용할 색상 - colorPalette.jetty,
    padding: 차트 내부의 좌우 간격 - 20,
    reverse: 차트의 방향 변경 - false,
    horizontal: x, y 축 위치 변경 - false,
  },
  // 범위 세팅
  scopeSettings: {
    autoScope: 최대, 최소값 자동 계산 - true,
    maxScope: 최대값 수동 설정 - 700,
    minScope: 최소값 수동 설정 - -100,
    showTopScope: 마지막 그리드 출력 여부 - true,
  },
  // y축 라인 세팅
  axisYGridLineSettings: {
    lineVisible: y축 출력 - true,
    lineOpacity: y축 선명도 - 1,
    lineColor: y축 색상 - "d4d4d4",
    lineWidth: y축 너비 - 1,
    lineDash: y축 점선 출력 - false,
    lineDashWidth: y축 점선 너비 - 5,
    lineDashGap: y축 점선간 거리 - 3,
    lineRound: y축 점선 라인 둥글게 - false,
  },
  // x축 라인 세팅
  axisXGridLineSettings: {
    lineVisible: x축 출력 - true,
    lineOpacity: x축 투명도 - 1,
    lineColor: x축 색상 - "d4d4d4",
    lineWidth: x축 너비 - 1,
    lineDash: x축 점선 출력 - flase,
    lineDashWidth: x축 점선 너비 - 5,
    lineDashGap: x축 점선간 거리 - 3,
    lineRound: x축 점선 라인 둥글게 - false,
    showEndLine: x축 양 끝라인 생성 - false,
  },
  // 왼쪽 라벨 세팅
  leftLabelSettings: {
    useLabel: 왼쪽 라벨 사용 - true,
    labelOnLeft: 라벨 왼쪽 출력(false 오른쪽 출력) - true,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 오른쪽 라벨 세팅
  rightLabelSettings: {
    useLauseLabel: 오른쪽 라벨 사용 - false,
    labelOnLeft: 라벨 오른쪽 출력 - false,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 아래쪽 라벨 세팅
  bottomLabelSettings: {
    useLabel: 아래쪽 라벨 사용 - true,
    labelOnLeft: 라벨 아래쪽 출력(false 위쪽 출력) - true,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 위쪽 라벨 세팅
  topLabelSettings: {
    useLabel: 위쪽 라벨 사용 - false,
    labelOnLeft: 라벨 위쪽 출력 - false,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 왼쪽 설명 세팅
  leftLegendSettings: {
    useLegend: 왼쪽 축제목 사용 - true,
    legendOnLeft: 축제목 왼쪽 출력 - true,
    legendMargin: 축제목와 차트 간 거리(px) - 50,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 오른쪽 설명 세팅
  rightLegendSettings: {
    useLegend: 오른쪽 축제목 사용 - false,
    legendOnLeft: 축제목 왼쪽 출력 - false,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 아래쪽 설명 세팅
  bottomLegendSettings: {
    useLegend: 아래쪽 축제목 사용 - true,
    legendOnBottom: 축제목 아래쪽 출력 - true,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 위쪽 설명 세팅
  topLegendSettings: {
    useLegend: 축제목 위쪽 사용 - false,
    legendOnBottom: 축제목 아래쪽 출력 - false,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 범례 세팅
  legendSettings: {
    useLegend: 범례 사용 - true,
    position: 범례 위치 - "bottom-right", // bottom center top - left center right
    xLocation: 범례 x축 이동 - 20,
    yLocation: 범례 y축 이동 - 0,
    directionColumn: 범례항목 열 방향 출력 - true,
    itemWidth: 범례 너비 - 80,
    itemMargin: 범례 항목 간 여백 - 2,
    symbolSize: 심볼 크기 - 16,
    symbolRadius: 심볼 반지름 - 3,
    symbolMargin: 심볼과 텍스트 간 여백 - 5,
    symbolOpacity: 심볼의 선명도 - 1,
    legendSize: 범례 글자 크기 - 12,
    legendWeight: 범례 글자 굵기 - 400,
    legendOpacity: 범례 글자 투명도 - 1,
    legendColor: 범례 글자 색상 - "#aaa",
    legendOnStart: true,
  },
  // 라인 세팅
  lineSettings: {
    lineOpacity: 라인 선명도 - 1,
    lineWidth: 라인 너비 - 2,
    enablePoint: 포인트 활성화 - true,
    pointColor: 포인트 색상 - "#000",
    pointColorFollowLineColor: 포인트 색상 라인 색상과 동일 - true,
    pointSize: 포인트 크기 - 2,
    pointBorderColor: 포인트 테두리 색상 - "#666",
    pointBorderColorFollowLineColor: 포인트 테두리 색상 라인 색상과 동일 - true,
    pointBorderWidth: 포인트 테두리 너비 - 2,
    enablePointLabel: 포인트 라벨 활성화 - false,
    showLabelOnHover: 마우스 호버시 라벨 표시 - false,
    pointLabelColor: 라벨 색상 - "#000",
    pointLabelSize: 라벨 크기 - 12,
    pointLabelOffsetX: 라벨 x축 간격 - 0,
    pointLabelOffsetY: 라벨 y축 간격 - -10,
    pointLabelWeight: 라벨 글자 굵기 - 500,
    enableArea: 영역 활성화 - false,
    areaOpacity: 영역 선명도 - 0.5,
    enableCurve: 곡선 활성화 - true,
    smoothDegree: 곡선 부드러움 - 0.15,
    angleDegree: 각도 - 1,
    strokeLinejoin: 라인 조인 방식 - "miter", // "miter" | "round" | "bevel"
    strokeLinecap: 라인 캡 모양 - "butt", // "butt" | "round" | "square"
  },
  animationSettings: {
    axisYGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw",
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw", // draw, fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisYLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left",
      translateLine: 라인 이동 사용 - true, // 데이터 변경 시
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    generalSettings: {
      useAnimation: true,
      useGridAnimation: true,
      renderReverse: false,
      translateReverse: false,
    },
    lineSettings: {
      useLineAnimation: 라인 애니메이션 사용 - true,
      lineRenderType: 애니메이션 타입 - "draw", // draw, fade
      lineRenderDuration: 시작 애니메이션 기간 - 1,
      lineRenderStartDelay: 시작 애니메이션 대기시간 - 0,
      lineRenderItemDelay: 다음 선이 그려지기까지 간격 - 0,
      lineRenderTimingFunction: 애니메이션 효과의 시간당 속도 - "ease",
      translateLine: 라인 이동 사용(데이터 변화시) - false,
      translateLineItemDelay: 라인 이동 시간 간격 - 0,
      translateLineDuration: 라인 이동 기간 - 0.5,
      translateLineStartDelay: 라인 이동 대기 시간 - 0,
      translateLineTimingFunction: 라인이동 시간당 속도 "ease",
    },
    pointSettings: {
      usePointAnimation: 포인트 애니메이션 사용 - true,
      pointRenderType: 애니메이션 타입 - "draw", //  draw, fade
      pointRenderDuration: 시작 애니메이션 기간 - 0.5,
      pointLineRenderDuration: 한 줄의 포인트 애니메이션 기간 - 1,
      pointRenderStartDelay: 시작 애니메이션 대기 시간 - 0,
      pointRenderItemDelay: 다음 포인트가 그려지기까지 간격 - 0,
      pointRenderTimingFunction: 애니메이션 효과의 시간당 속도 - "ease",
      translatePoint: 포인트 이동 사용(데이터 변화시) - false,
      translatePointItemDelay: 포인트 이동 시간 간격 - 0,
      translatePointDuration: 포인트 이동 기간 - 0.5,
      translatePointStartDelay: 포인트 이동 대기 시간 - 0,
      translatePointTimingFunction: 포인트 시간당 속도 - "ease",
    },
    areaSettings: {
      useAreaAnimation: 영역 애니메이션 사용 - true,
      areaRenderType: 시작 애니메이션 타입 - "draw", // draw, fade
      areaRenderDuration: 시작 애니메이션 기간 - 1,
      areaRenderStartDelay: 시작 애니메이션 대기 시간 - 0,
      areaRenderItemDelay: 다음 영역 애니메이션 간격 - 0,
      areaRenderTimingFunction: 애니메이션 시간당 속도 - "ease",
      translateArea: 영역 이동 사용(데이터 변환시) - false,
      translateAreaItemDelay: 영역 이동 시간 간격 - 0,
      translateAreaDuration: 영역 이동 기간 - 0.5,
      translateAreaStartDelay: 영역 이동 대기 시간 - 0,
      translateAreaTimingFunction: 영역 시간당 속도 - "ease",
    },
  }
```

#### bump

```textile
  // 설명 - 기본값
  // 기본 세팅
  normalSettings: {
    width: 차트의 너비 - 500,
    height: 차트의 높이 - 400,
    backgroundColor: 차트 전체 배경색 - "#fff",
    margin: 차트와 전체 차트 영역 사이의 간격(top - 50, bottom - 70, left - 80, right - 80)
    colorPalette: 차트에 사용할 색상 - colorPalette.diffrent,
    padding: 차트 내부의 좌우 간격 - 0,
    reverse: 차트의 방향 변경 - false,
    horizontal: x, y 축 위치 변경 - false,
  },
  // 범위 세팅
  scopeSettings: {
    autoScope: 최대, 최소값 자동 계산 - true,
    maxScope: 최대값 수동 설정 - 12,
    minScope: 최소값 수동 설정 - 1,
    showTopScope: 마지막 그리드 출력 여부 - true,
  },
  // y축 라인 세팅
  axisYGridLineSettings: {
    lineVisible: y축 출력 - true,
    lineOpacity: y축 선명도 - 1,
    lineColor: y축 색상 - "d4d4d4",
    lineWidth: y축 너비 - 1,
    lineDash: y축 점선 출력 - false,
    lineDashWidth: y축 점선 너비 - 5,
    lineDashGap: y축 점선간 거리 - 3,
    lineRound: y축 점선 라인 둥글게 - false,
  },
  // x축 라인 세팅
  axisXGridLineSettings: {
    lineVisible: x축 출력 - true,
    lineOpacity: x축 투명도 - 1,
    lineColor: x축 색상 - "d4d4d4",
    lineWidth: x축 너비 - 1,
    lineDash: x축 점선 출력 - flase,
    lineDashWidth: x축 점선 너비 - 5,
    lineDashGap: x축 점선간 거리 - 3,
    lineRound: x축 점선 라인 둥글게 - false,
    showEndLine: x축 양 끝라인 생성 - false,
  },
  // 왼쪽 라벨 세팅
  leftLabelSettings: {
    useLabel: 왼쪽 라벨 사용 - true,
    labelOnLeft: 라벨 왼쪽 출력(false 오른쪽 출력) - true,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 오른쪽 라벨 세팅
  rightLabelSettings: {
    useLauseLabel: 오른쪽 라벨 사용 - false,
    labelOnLeft: 라벨 오른쪽 출력 - false,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 아래쪽 라벨 세팅
  bottomLabelSettings: {
    useLabel: 아래쪽 라벨 사용 - true,
    labelOnLeft: 라벨 아래쪽 출력(false 위쪽 출력) - true,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 위쪽 라벨 세팅
  topLabelSettings: {
    useLabel: 위쪽 라벨 사용 - false,
    labelOnLeft: 라벨 위쪽 출력 - false,
    labelMargin: 라벨과 차트 간 거리(px) - 5,
    labelSize: 라벨 크기(px) - 12,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 색상 - "#777",
    labelRotate: 라벨 회전 - 0,
    labelMove: 라벨 이동 - 0,
    sideLineSize: 5,
    sideLineVisible: true,
    sideLineOpacity: 1,
    sideLineColor: "#aaa",
    sideLineWidth: 2,
  },
  // 왼쪽 설명 세팅
  leftLegendSettings: {
    useLegend: 왼쪽 축제목 사용 - true,
    legendOnLeft: 축제목 왼쪽 출력 - true,
    legendMargin: 축제목와 차트 간 거리(px) - 50,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 오른쪽 설명 세팅
  rightLegendSettings: {
    useLegend: 오른쪽 축제목 사용 - false,
    legendOnLeft: 축제목 왼쪽 출력 - false,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 아래쪽 설명 세팅
  bottomLegendSettings: {
    useLegend: 아래쪽 축제목 사용 - true,
    legendOnBottom: 축제목 아래쪽 출력 - true,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 위쪽 설명 세팅
  topLegendSettings: {
    useLegend: 축제목 위쪽 사용 - false,
    legendOnBottom: 축제목 아래쪽 출력 - false,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 범례 세팅
  legendSettings: {
    useLegend: 범례 사용 - true,
    position: 범례 위치 - "bottom-right", // bottom center top - left center right
    xLocation: 범례 x축 이동 - 20,
    yLocation: 범례 y축 이동 - 0,
    directionColumn: 범례항목 열 방향 출력 - true,
    itemWidth: 범례 너비 - 80,
    itemMargin: 범례 항목 간 여백 - 2,
    symbolSize: 심볼 크기 - 16,
    symbolRadius: 심볼 반지름 - 3,
    symbolMargin: 심볼과 텍스트 간 여백 - 5,
    symbolOpacity: 심볼의 선명도 - 1,
    legendSize: 범례 글자 크기 - 12,
    legendWeight: 범례 글자 굵기 - 400,
    legendOpacity: 범례 글자 투명도 - 1,
    legendColor: 범례 글자 색상 - "#aaa",
    legendOnStart: true,
  },
  // 라인 세팅
  lineSettings: {
    lineOpacity: 라인 선명도 - 1,
    lineWidth: 라인 너비 - 2,
    enablePoint: 포인트 활성화 - true,
    pointColor: 포인트 색상 - "#000",
    pointSize: 포인트 크기 - 4,
    pointColorFollowLineColor: 포인트 색상 라인 색상과 동일 - true,
    pointBorderColor: 포인트 테두리 색상 - "#fff",
    pointBorderColorFollowLineColor: 포인트 테두리 색상 라인 색상과 동일 - true,
    pointBorderWidth: 포인트 테두리 너비 - 2,
    enableCurve: 곡선 활성화 - true,
    strokeLinejoin: 라인 조인 방식 - "miter", // "miter" | "round" | "bevel"
    strokeLinecap: 라인 캡 모양 - "butt", // "butt" | "round" | "square",
    xOuterPadding: x축 시작점에서 처음 값까지의 거리 - 30,
  },
  animationSettings: {
    axisYGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw",
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw", // draw, fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisYLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "bottom",
      translateLine: 라인 이동 사용 - true,
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    axisXLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left",
      translateLine: 라인 이동 사용 - true, // 데이터 변경 시
      translateDuration: 라인 이동 시간 - 0.3,
      translateStartDelay: 라인 이동 대기 시간 - 0,
      translateItemDelay: 0,
      translateTimingFunction: "ease",
    },
    lineSettings: {
      useAnimation: 애니메이션 사용 - true,
      appearType: 시작 애니메이션 타입 - "draw", // draw, fade
      appearDuration: 시작 애니메이션 기간 - 1,
      appearStartDelay: 시작 애니메이션 대기 시간 - 0,
      appearItemDelay: 다음 선이 그려지기까지의 간격 - 0,
      appearTimingFunction: "linear"
    }
```

[단일 선형 차트 데모](http://jetty-chart.com/chart-detail/single-line)

[다중 선형 차트 데모](http://jetty-chart.com/chart-detail/multi-line)

[누적 선형 차트 데모](http://jetty-chart.com/chart-detail/stacked-line)

[순위 변동 차트 데모](http://jetty-chart.com/chart-detail/bump)
