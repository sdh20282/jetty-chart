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
- legendSettings
- barSettings
- animationSettings
 
<br/>

### 속성 상세
normalSettings.xReverse
`boolean`

데이터의 방향을 변경합니다. (ex. 남(좌)-여(우) → 여(좌)-남(우))

---

normalSettings.yReverse
`boolean`

데이터의 값 축을 반대로 배치합니다. (ex. 0 100 200 → 200 100 0)

<br/>

[피라미드 차트 데모](jetty-chart.com/chart-detail/pyramid-chart)

