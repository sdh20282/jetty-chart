## Pyramid Chart : 피라미드 차트

기본적인 피라미드 차트입니다. 

피라미드 차트는 데이터를 삼각형 또는 피라미드 모양으로 나타내는 차트 유형입니다. 이 차트는 주로 비율, 계층 또는 계층적인 데이터를 시각적으로 표현할 때 사용됩니다.

데이터 형식 :

```
[
    {
        id : string, 
        arr : [
            {
                value:int, 
                label:string (ex. 남 or 여)
            }
        ]
    }
    ...
]
```

**Use**:

```jsx
import { NormalPyramid  } from "jetty-chart";

function App({ data }) {
  return <NormalPyramid  data={data} keys={["key"]} xLegend={"types"} yLegend={"values"} />;
}
```

## 커스텀 속성

- data - 필수값
- keys - 필수값(2개)
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
- barSettings
- animationSettings

<br/>

### 속성 상세

#### pyramid

```text
```textile
  // 설명 - 기본값
  // 기본 세팅
  normalSettings: {
    width: 차트의 너비 - 500,
    height: 차트의 높이 - 400,
    backgroundColor: 차트 전체 배경색 - "#fff",
    margin: 차트와 전체 차트 영역 사이의 간격(top - 60, bottom - 70, left - 80, right - 800)
    colorPalette: 차트에 사용할 색상 - ["#669dfe", "#876697"],
    padding: 차트 내부의 좌우 간격 - 20,
    xReverse: 좌우 위치 반전 - false,
    yReverse: 데이터값 축 반 - false,
  },
  // 범위 세팅
  scopeSettings: {
    autoScope: 최대, 최소값 자동 계산 - true,
    maxScope: 최대값 수동 설정 - 2000,
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
    lineVisible: x축 출력 - false,
    lineOpacity: x축 투명도 - 1,
    lineColor: x축 색상 - "d4d4d4",
    lineWidth: x축 너비 - 1,
    lineDash: x축 점선 출력 - flase,
    lineDashWidth: x축 점선 너비 - 5,
    lineDashGap: x축 점선간 거리 - 3,
    lineRound: x축 점선 라인 둥글게 - false,
    showEndLine: x축 양 끝라인 생성 - false,
  },
  // 위쪽 라벨 세팅
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
  // 아래쪽 라벨 세팅
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
  // 왼쪽 라벨 세팅
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
  // 오른쪽 라벨 세팅
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
  // 위쪽 설명 세팅
  leftLegendSettings: {
    useLegend: 왼쪽 축제목 사용 - true,
    legendOnLeft: 축제목 왼쪽 출력 - true,
    legendMargin: 축제목와 차트 간 거리(px) - 40,
    legendSize: 축제목 크기(px) - 14,
    legendWeight: 축제목 글자 굵기 - 700,
    legendOpacity: 축제목 선명도 - 1,
    legendColor: 축제목 색상 - "#333",
    legendReverse: 축제목 거꾸로 - false,
    legendMove: 축제목 이동 - 0,
  },
  // 아래쪽 설명 세팅
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
  // 왼쪽 설명 세팅
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
  // 오른쪽 설명 세팅
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
  // 설명 세팅
  legendSettings: {
    useLegend: 범례 사용 - true,
    position: 범례 위치 - "bottom-right", // bottom center top - left center right
    xLocation: 범례 x축 이동 - 16,
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
  // 바 세팅
  barSettings: {
    barOpacity: 막대 선명도 - 1,
    barGap: 막대 간격 - 0.15,
    barOnlyUpperRadius: 막대 상단만 반지름 사용 - true,
    barBorderRadius: 막대 반지름 크기 - 5,
    useBarBorder: 막대 테두리 사용 - false,
    barBorderWidth: 막대 테두리 굵기 - 2,
    barBorderColor: 막대 테두리 색상 - "#000",
    barBorderOpacity: 막대 테두리 선명도 - 1,
    useMinHeight: 최소 높이 사용 - true,
    minHeight: 최소 높이 설정 - 1,
    useLabel: 라벨 사용 - true,
    labelPosition: 라벨 위치 설정 - "ㅊ둣ㄷ", // over, center, under,
    labelMargin: 라벨 여백 - 5,
    labelSize: 라벨 크기 - 11,
    labelWeight: 라벨 굵기 - 500,
    labelOpacity: 라벨 선명도 - 1,
    labelColor: 라벨 글자 크기 - "#777",
    labelInvisibleHeight: 라벨 표시되지 않는 높이 - 0,
  },
  animationSettings: {
    axisYGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw",
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: 렌더링 시간당 속도 - "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
    axisXGridLineSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "draw", // draw, fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: 렌더링 시간당 속도 - "ease",
      renderStartFrom: 렌더링 시작 위치 - "left-bottom",
    },
    axisYLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: 렌더링 시간당 속도 - "ease",
      renderStartFrom: 렌더링 시작 위치 - "bottom",
    },
    axisXLabelSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "fade", // fade
      renderDuration: 시작 애니메이션 시간 - 0.4,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: 렌더링 시간당 속도 - "ease",
      renderStartFrom: 렌더링 시작 위치 - "left",
    },
    barSettings: {
      useAnimation: 애니메이션 사용 - true,
      renderType: 시작 애니메이션 타입 - "grow", // fade, grow, grow-async
      renderDuration: 시작 애니메이션 시간 - 2,
      renderStartDelay: 시작 애니메이션 대기 시간 - 0,
      renderItemDelay: 렌더링 간격 - 0.1,
      renderTimingFunction: "ease",
      renderStartFrom: 렌더링 시작 위치 - "left",
      textRender: 텍스트 애니메이션 사용 - true,
      textRenderType: 텍스트 애니메이션 타입 - "fade", // fade
      textRenderDuration: 텍스트 애니메이션 시작 시간 - 2,
      textRenderStartDelay: 텍스트 애니메이션 시작 대기시간 - 0,
      textRenderItemDelay: 렌더링 간격 - 0.1,
      textRenderTimingFunction: "ease",
      textRenderStartFrom: 텍스트 렌더링 시작 위치 - "left",
    },
  }
```

<br/>

[피라미드 차트 데모](http://jetty-chart.com/chart-detail/pyramid-chart)
