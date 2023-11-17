# 파이(도넛) 차트

파이 차트는 다음과 같은 기본 설정 값을 제공합니다. 사용자는 이 값을 수정하여 자신의 요구사항에 맞게 차트를 커스터마이즈할 수 있습니다.

## 데이터 입력 방식

### 데이터 형식

```
<Pie
  data={data}
  generalSettings={generalSettings}
  pieSettings={pieSettings}
  labelSettings={labelSettings}
  arcLinkLabelSettings={arcLinkLabelSettings}
  legendSettings={legendSettings}
/>
```

```
data = [
  {
  label: "자바스크립트",
  value: 20,
  }
  {
  label: "리액트",
  value: 40,
  }
  {
  label: "스프링",
  value: 30,
  }
]
```

```
generalSettings = {
  width: 300,
  height: 300,
  backgroundColor: "black"
  // ...
}
pieSettings = {
  // ...
}

labelSettings = {
  // ...
}
arcLinkLabelSettings = {
  // ...
}
legendSettings = {
  // ...
}
```

## 일반 설정 (generalSettings)

- ### 차트 크기:
  - width: 차트 너비. 기본값 400.
  - height: 차트 높이. 기본값 400.
- ### 배경색:
  - backgroundColor: 차트 전체 배경색. 기본값 "transparent".
  - pieBackgroundColor: 파이 차트의 배경색. 기본값 "transparent".
  - donutBackgroundColor: 도넛 차트의 배경색. 기본값 "transparent".
- ### 여백:
  - paddingTop: 차트 윗 부분 여백, 기본값 10.
  - paddingBottom: 차트 아래 부분 여백, 기본값 10.
  - paddingLeft: 차트 왼쪽 부분 여백, 기본값 10.
  - paddingRight: 차트 오른쪽 부분 여백, 기본값 10.
- ### 투명도:
  - pieOpacity: 차트의 투명도, 기본값 1, 범위 (0 ~ 1).
  - circleOpacity: 원의 배경 투명도, 기본값 1, 범위 (0 ~ 1).
  - donutOpacity: 도넛의 배경 투명도, 기본값 1, 범위 (0 ~ 1).
  - pieceOpacity: 조각의 투명도. 기본값 1, 범위 (0 ~ 1).

## 파이 차트 기본 설정 (pieSettings)

- ### 기본 색상

  - color: 파이 차트 조각 색상 설정 기본값 ["#ffeaa7", "#81ecec", "#fab1a0", "#74b9ff", "#ff7675", "#a29bfe", "#fd79a8", "#55efc4"]

- ### 반지름 설정:
  - pieRadius: 파이 차트의 전체 반지름, 기본값 1, 범위 (0 ~ 1).
  - innerRadius: 도넛 차트를 위한 내부 원 반지름, 기본값 0.4, 범위 (0 ~ 1).
- ### 조각 모양 설정:
  - cornerRadius: 파이 조각의 모서리를 둥글기. 기본값 0.05, 범위 (0 ~ 1).
  - padAngle: 조각들 사이의 간격, 기본값 0, 범위 (0 ~ 360).
- ### 각도 및 정렬 설정:
  - startAngle: 차트의 시작 각도, 기본값 0, 범위 (0 ~ 360).
  - useAngle: 파이 차트가 그려질 전체 각도 범위, 기본값 360, 범위 (0 ~ 360).
  - sortByValue: 조각을 값에 따라 정렬 여부, 기본값 false, 범위 (true, false).
- ### 테두리 설정:
  - strokeColor: 조각의 테두리 색상, 기본값 ["#e5d296", "#74d4d4", "#e19f90", "#68a6e5", "#e56a69", "#918be4", "#e36c97", "#4cd7b0"].
  - strokeWidth: 조각의 테두리 굵기, 기본값 0, 범위.
  - strokeOpacity: 조각의 테두리 투명도. 기본값 1, 범위 (0 ~ 1).

## 레이블 설정 (labelSettings)

- ### 레이블 색상 및 스타일:
  - labelColor: 레이블 색상. 기본값 "black".
  - labelFontSize: 레이블 글꼴 크기. 기본값 0.1 .
  - labelFontWeight: 레이블 글꼴 두께. 기본값 "normal".
  - labelFontFamily: 레이블 글꼴 가족. 기본값 "sans-serif".
  - labelFontStyle: 레이블 글꼴 스타일. 기본값 "normal".
- ### 레이블 위치 및 동작:
  - labelMoveY, labelMoveX: 레이블 이동 Y, X축. 기본값 0.
  - labelDistance: 레이블과 중심 간의 거리. 기본값 1. 범위 (0 ~ 2)
  - labelIsRotate: 레이블 회전 여부. 기본값 false. 범위 (true, false)
  - labelDegrees: 레이블 회전 각도. 기본값 0. 범위 (0 ~ 360)
  - labelText: 표시할 레이블 텍스트. 기본값 "value". 범위 (value, ratio, label)
  - labelSkipRatio: 레이블 표시 건너뛰기 비율. 기본값 0. 범위 (0 ~ 1)
  - labelIsUse: 레이블 사용 여부. 기본값 true. 범위 (true, false)
  - labelOpacity: 레이블 투명도. 기본값 1. 범위 (0 ~ 1)

## 아크 링크 레이블 설정 (arcLinkLabelSettings)

- ### 텍스트 색상 및 스타일:
  - arcLinkLabelTextColor: 텍스트 색상. 기본값 다양한 색상 배열.
  - arcLinkLabelFontSize: 글꼴 크기. 기본값 0.1.
  - arcLinkLabelFontWeight: 글꼴 두께. 기본값 "normal".
  - arcLinkLabelFontFamily: 글꼴 가족. 기본값 "sans-serif".
  - arcLinkLabelFontStyle: 글꼴 스타일. 기본값 "normal".
- ### 라인 색상 및 스타일:
  - arcLinkLabelLineColor: 라인 색상. 기본값 다양한 색상 배열.
  - arcLinkLabelLineSize: 라인 크기. 기본값 0.02.
- ### 텍스트 및 라인 위치 및 동작:
  - arcLinkLabelSkipAngle: 라벨 표시 건너뛰기 각도. 기본값 0.
  - arcLinkLabelLineDistance: 라인 거리. 기본값 1.
  - arcLinkLabelTextDistance: 텍스트 거리. 기본값 1.05.
  - arcLinkLabelStartLine: 시작 라인 길이. 기본값 0.2.
  - arcLinkLabelEndLine: 끝 라인 길이. 기본값 0.2.
  - arcLinkLabelText: 표시할 텍스트. 기본값 "label". 범위 (value, ratio, label)
  - arcLinkLabelIsUse: 사용 여부. 기본값 true. 범위 (true, false)
  - arcLinkLabelLineOpacity: 라인 투명도. 기본값 1. 범위 (0 ~ 1)
  - arcLinkLabelTextOpacity: 텍스트 투명도. 기본값 1. 범위 (0 ~ 1)

## 범례 설정 (legendSettings)

- ### 범례 위치 및 동작
  - useLegend: 범례 사용 여부. 기본값 true.
  - marginTop: 윗 여백 설정. 기본값 3.
  - marginBottom: 아랫 여백 설정. 기본값 0.
  - marginLeft: 왼쪽 여백 설정. 기본값 0.
  - marginRight: 오른쪽 여백 설정. 기본값 2,
  - legendColor: 범례 글자 색 설정. 기본값 gray,
