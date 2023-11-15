## Bar Chart : 막대 차트

### 차트 종류

- 기본 막대
- 누적 막대

### 기본 막대
기본적인 막대 차트입니다. 1차원 ( label, value ) 데이터를 표시 할 수 있습니다.

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

**Use**:

```jsx
import { NormalBar } from "jetty-chart";

function App({ data }) {
  return <NormalBar data={data} keys={["key"]} xLegend={"types"} yLegend={"values"} />;
}
```

### 누적 막대
누적 막대 차트입니다. 
1차원 ( label, value ) 누적 데이터를 표시 할 수 있습니다.
value는 number의 1차원 배열입니다

데이터 형식 : 
```
[
	{
		label: string, 
		value: [number,...]
	},
    ...
]
```
**Use**:

```jsx
import { StackedBar } from "jetty-chart";

function App({ data }) {
  return <StackedBar data={data} keys={["key"]} xLegend={"types"} yLegend={"values"} />;
}
```

## 커스텀 속성
- data
- keys
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
- bottomLegendSettings
- topLegendSettings
- legendSettings
- barSettings
- animationSettings
 
<br/>


[기본 막대 데모](jetty-chart.com/chart-detail/normal-bar)

[누적 막대 데모](jetty-chart.com/chart-detail/stacked-bar)
