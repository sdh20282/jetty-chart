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

<br/>

[단일 선형 차트 데모](jetty-chart.com/chart-detail/single-line)

[다중 선형 차트 데모](jetty-chart.com/chart-detail/multi-line)

[누적 선형 차트 데모](jetty-chart.com/chart-detail/stacked-line)

[순위 변동 차트 데모](jetty-chart.com/chart-detail/bump)
