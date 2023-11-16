# 툴팁 사용법

## 1. state 3개

1. 툴팁 켜고끄기
2. 마우스 위치 : x: 0, y: 0 })
3. 선택된 데이터

```
const [showTooltip, setShowTooltip] = useState(false);
const [mousePosition, setMousePosition] = useState({
const [selectData, setSelectData] = useState([{}]);
```

## 2. hover를 적용 할 요소(파이조각, 바 ...)에 이벤트 등록

```
onMouseLeave={() => {
	setHoveredIndex(null);
	handleTooltipMouseOut({ setShowTooltip, index });
}}
onMouseMove={(event) => {
	handleTooltipMouseMove({ event, setMousePosition, setShowTooltip, index });
	setSelectData({ value, label, ratio });
}}
```

## 3. svg에 아래 컴포넌트 넣기

```
<TooltipCommon
	showTooltip={showTooltip}
	mousePosition={mousePosition}
	selectData={selectData}
	viewBoxXSize={3}  // viewBox 너비
	viewBoxYSize={3}  // viewBox 높이
	tooltipLocationX={0}  // 툴팁 x 이동 위치
	tooltipLocationY={-0.1}  // 툴팁 y 이동 위치
/>
```

## 설정 설명 (임시)

list = [], (없으면 titleValue 값만 출력) (아래에서 설명)
viewBoxXSize : viewBox의 너비 사이즈 (필수)
viewBoxYSize : viewBox의 높이 사이즈 (필수)
tooltipColor : 툴팁의 배경 색
tooltipOpacity : 툴팁의 투명도
tooltipWidth : 툴팁의 좌우 길이 (미 입력 시 자동 계산)
tooltipHeight : 툴팁의 높이 길이 (미 입력 시 자동 계산)
tooltipMoveX : 툴팁의 좌우 이동 (필요)
tooltipMoveY : 툴팁의 상하 이동 (필요)
padding : 툴팁의 좌우 여백
fontSize : 폰트 사이즈
fontFamily : 폰트 종류
fontWeight : 폰트 굵기
fontStyle : 폰트 스타일
fontColor : 폰트 색
fontOpacity : 폰트 투명도
textMoveX : 텍스트 좌우 이동
lineHeight : 텍스트 높이 길이
strokeColor : 테두리 색
strokeWidth : 테두리 굵기
strokeOpacity : 테두리 투명도
strokeRadius : 테두리 둥글기
showTooltip : 툴팁 표시 여부 (필수)
mousePosition : 마우스 위치 (필수)
selectData : 선택한 데이터의 값 (value, label) (필수)
titleValue : 선택한 데이터의 값 표현 형식 "label-value", (value, label, value-label, label-value) (현재는 label-value 만 가능)

## list

- 현재는 테스트가 부족해서 사용하지 않는 것을 권장합니다.
- list는 여러 줄의 텍스트를 받는 역할을 합니다.
- 각각의 리스트에 다른 속성을 적용 할 수 있습니다.
- 속성 : 입력하지 않을 경우, 지역 변수 값 사용
  - textMoveX
  - lineHeight
  - fonSize
  - fontColor
  - fontOpacity
  - fontWeight
  - fontStyle
  - fontFamily

```
<tspan
	x={item.textMoveX}
	y={item.lineHeight}
	fontSize={item.fontSize}
	key={index}
	fill={item.fontColor}
	opacity={item.fontOpacity}
	fontWeight={item.fontWeight}
	fontStyle={item.fontStyle}
	fontFamily={item.fontFamily}
>
	{item.content}
</tspan>
```
