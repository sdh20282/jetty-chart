## Scatter : 산점도 차트

여러 데이터 계열을 표시할 수 있는 산점도 차트입니다.

2차원( x & y) 에 데이터를 표시할 수 있으며 , 동적 노드 크기를 활성화한 경우 선택적으로 세 번째 정량적 차원을 표시할 수 있습니다.

데이터 형식 : 
```
[
	{
		id: string, 
		data:[
        {
          x:int, 
          y:int
        }
        ,...
      ]
	},
    ...
]
```

### 차트 종류
- 산점도 차트

**Use**:
```jsx
import { NormalScatter } from "jetty-chart";

function App({ data }) {
  return <NormalScatter data={data} keys={["key"]} xLegend={"types"} yLegend={"values"} />;
}
```

### 커스텀 속성
- data
- xLegend
- yLegend
- normalSettings
- scopeSettings
- legendSettings
- leftLegendSettings
- rightLegendSettings
- bottomLegendSettings
- topLegendSettings
- axisXGridLineSettings
- axisYGridLineSettings
- leftLabelSettings
- rightLabelSettings
- bottomLabelSettings
- topLabelSettings
- pointSettings
- animationSettings

<br/>

### 속성 상세

normalSettings.colorPalette
`array`

point 색상을 지정합니다.

---

normalSettings.xReverse
`boolean`

x축 값을 거꾸로 배치합니다.

---

normalSettings.yReverse
`boolean`

y축 값을 거꾸로 배치합니다

---

pointSettings.pointSize
`float`

point의 크기를 지정합니다.

---

pointSettings.tooltipOn
`boolean`

마우스 호버시 좌표 정보를 출력합니다.

---

pointSettings.xName
`string`

출력하는 x좌표의 이름을 설정합니다.

xName 미입력시 xLegend, xLegend 미입력시 “x"로 출력

---

pointSettings.yName
`string`

출력하는 y좌표의 이름을 설정합니다.

yName 미입력시 yLegend, yLegend 미입력시 "y"로 출력

---

pointSettings.pointRenderTime
`float` `sec`

그룹별 point 렌더링 간격을 조정합니다.

---

scopeSettings.xAutoScope
`boolean`

데이터값에 따라 x축을 자동으로 계산하여 scope를 설정합니다.

---

scopeSettings.yAutoScope
`boolean`

데이터값에 따라 y축을 자동으로 계산하여 scope를 설정합니다.

---

scopeSettings.xMaxScope
`boolean`

해당 값을 x축 최대값으로 하여 scope를 설정합니다.

---

scopeSettings.yMaxScope
`boolean`

해당 값을 y축 최대값으로 하여 scope를 설정합니다.

---

scopeSettings.xMinScope
`boolean`

해당 값을 x축 최소값으로 하여 scope를 설정합니다.

---

scopeSettings.yMinScope
`boolean`

해당 값을  y축 최소값으로 하여 scope를 설정합니다.
<br/>

[산점도 차트 데모](jetty-chart.com/chart-detail/scatter-chart)

