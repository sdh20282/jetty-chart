


    const [tooltipOn, setTooltipOn] = useState(false);
    const [tooltipDescription, settooltipDescription] = useState("");
    const [tooltipCity, setTooltipCity] = useState("");
    const [tooltipValue, setTooltipValue] = useState("");


  

    const svgRef = useRef(null);
    // svg 전체에 Ref
    const mapRef = useRef(null);
    // 지도 차트에서는 지도의 path 들 내부에서만 작동하게 하려고 <g> 태그를 주고 해당 Ref 설정을 줬으나 사용하는 차트안에적용했으면 하는 범위에 따라 임의로 선택가능 
    const PathelementsRef = useRef([]);
    // 자료들 하나하나 마다 같은 이름(pathRef) 으로 ref 명을 주고 아래의 pathRef(el) <<<< 로 해당 PathelementsRef에 push로 넣어줌 
    const tooltipRef = useRef(null);

    const tooltipDiv = useRef(null);

  
    /// pathRef 를 차트 자료가 들어간 모든 path, rect 등에 달아줄것.  
    const pathRef = (el) => {
      if (el && !PathelementsRef.current.includes(el)) {
        PathelementsRef.current.push(el);
      }
    };

  
    function pathEvent(e) {
  
      const pathId = e.target.id;
      const value = citycolor.filter((city) => {
        return city.name === pathId;
        //여기서 아이디값 일치 찾기 
      });
  
      setTooltipOn(true);
      if (value.length > 0) {
        const cityValue = value[0].value;
        let cityName;
        if (useKorea) {
          cityName = value[0].inKorea;
        } else {
          cityName = value[0].name;
        }
        ///여기서 넣고싶은 자료 넣기 
        let color = e.target.getAttribute("fill");
        let opacolor = convertHexToRGBA(color, 0.5);
        const cityDescription = value[0].description;
        setTargetColor(opacolor);
        setTooltipCity(cityName);
        setTooltipValue(cityValue);
        settooltipDescription(cityDescription);
      } else {
        console.log("");
      }
    }
  
    function pathOut() {
      setTooltipOn(false);
    }
  
    useEffect(() => {
      if (!data) {
        return;
      }

      const mapSvg = PathelementsRef;
      const outMap = mapRef;
  
      mapSvg.current.forEach((path) => {
        path.addEventListener("mouseover", pathEvent);
      });
      outMap.current.addEventListener("mouseout", pathOut);
    }, [data]);
  
    function tooltipMove(e) {
      const main = mapRef.current;
      // 적용될 svg 태그의 .id 값을 선택합니다.
      const tooltipObject = tooltipRef.current;
      // 툴팁이 입력될 tooltipbox 를 선택합니다.
      const rect = main.getBoundingClientRect();
      // 선택된 svg 태그의 절대 위치를 가져옵니다.
      const rectTooltip = tooltipObject.getBoundingClientRect();
      // 선택된 tooltip 태그의 절대 위치를 가져옵니다.
      // 좌표값을 구하는데 오른쪽과 왼쪽을 나눠서 구해줍니다. 툴팁이 뜨는방향을 정하기 위함.
      const realativeTooltip = tooltipDiv.current;

      const realativetooltipMaxHeight = realativeTooltip.getBoundingClientRect().height;
      const xRight = 20 / scale + (e.clientX - rect.x) * (viewBoxWidth  / width);
      // svg 의 실제 width 와 viewBox 의 비율을 맞춰줍니다. 1048 << 뷰박스 크기 , width 사용자가 입력한 width 크기
      const xLeft = -20 / scale + (e.clientX - rect.x) * (viewBoxWidth  / width) - rectTooltip.width * (viewBoxWidth  / width);
      const yTop = -20 / scale + (e.clientY - rect.y) * (viewBoxHeight / rect.height);
      const yBottom = -20 / scale + (e.clientY - rect.y) * (viewBoxHeight / rect.height) - realativetooltipMaxHeight * (viewBoxHeight / rect.height);
      // svg 의 실제 height 와 viewBox 의 비율을 맞춰줍니다. 1064 << 뷰박스 크기 , height 사용자가 입력한 width 크기
    
    if (e.clientX < rect.x + rect.width / 2 && e.clientY < rect.y + rect.height / 2) {
        tooltipObject.style.transform = `translate(${xRight}px,${yTop}px)`;
    }

    if (e.clientX < rect.x + rect.width / 2 && e.clientY > rect.y + rect.height / 2) {
        tooltipObject.style.transform = `translate(${xRight}px,${yBottom}px)`;
    }

    if (e.clientX > rect.x + rect.width / 2 && e.clientY < rect.y + rect.height / 2) {
        tooltipObject.style.transform = `translate(${xLeft}px,${yTop}px)`;
    }

    if (e.clientX > rect.x + rect.width / 2 && e.clientY > rect.y + rect.height / 2) {
        tooltipObject.style.transform = `translate(${xLeft}px,${yBottom}px)`;
    }
}
  
    useEffect(() => {
      if (!svgRef.current) {
        return;
      }
  
      svgRef.current.addEventListener("mousemove", tooltipMove);
  
      return () => {
        svgRef.current.removeEventListener("mousemove", tooltipMove);
      };
    }, [tooltipOn, scale, width, firstX]);
  


----------------------------------------------------------------------------------------

<g ref={tooltipRef} id="tooltipBox">
    <foreignObject id="foreingObject" x="0" y="0" width={ToolW} height={ToolH}>
          
    <div
      ref={tooltipDiv}
      className="tooltipDiv"
      xmlns="http://www.w3.org/1999/xhtml"
      style={
        tooltipOn
          ? {
              opacity: tooltipOpacity,
              maxWidth: `${ToolW}px`,
              // height: "100%", 
              minHeight: `${150 / scale}px`,
              maxHeight: `${ToolH}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: tooltipBackGroundColor,
              borderRadius: `${tooltipBorderRadius}px`,
              border: `${tooltipBorder}`,
              boxShadow: `${tooltipBoxShadow}`,
              margin: "10%",
              overflow: "hidden",
            }
          : { visibility: "hidden" }
      }
    >
      <p
        style={{
          margin: "0px",
          marginTop: "5px",
          marginBottom: "5px",
          color: `${cityNameColor}`,
          fontSize: `${cityFontS}px`,
          fontWeight: `${cityNameFontWeight}`,
          textAlign: "center",
        }}
      >
        {tooltipCity} {useTooltipCol ? ":" : ""}{" "}
        <span style={{ color: `${cityValueColor}`, fontSize: `${cityValueFontS}px`, fontWeight: `${cityValueFontWeight}` }}>
          {tooltipValue}
        </span>
      </p>
      {tooltipDescription ? (
        <p
          style={{
            margin: "0",
            textAlign: "center",
            marginBottom: "5%",
            marginTop: "2%",
            marginRight: "10%",
            marginLeft: "10%",
            fontFamily: `${descriptionFontFamily}`,
            color: `${descriptionColor}`,
            fontSize: `${decripFontS}px`,
            fontWeight: `${descriptionFontWeight}`,
            maxHeight: "50%",
            overflow: "hidden",
          }}
        >
          {tooltipDescription}
        </p>
      ) : (
        ""
      )}
    </div>
  </foreignObject>
</g>