import React, { useEffect, useRef } from "react";
// import './radarShape.css'

const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance;

const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance;

const points = (points) => {
  return points
    .map((point) => point[0].toFixed(4) + "," + point[1].toFixed(4))
    .join(" ");
};

const axis = (options) => (col, i) => (
  <polyline
    key={`poly-axis-${i}`}
    points={points([
      [0, 0],
      [
        polarToX(col.angle, options.chartSize / 2),
        polarToY(col.angle, options.chartSize / 2),
      ],
    ])}
    {...options.axisProps(col)}
  />
);

const dot = (columns, options) => (chartData, i) => {
  const data = chartData.data;
  const meta = chartData.meta || {};
  const extraProps = options.dotProps(meta);
  let extraPropsSvg = {};
  let mouseEnter = () => {};
  let mouseLeave = () => {};
  if (extraProps.mouseEnter) {
    mouseEnter = extraProps.mouseEnter;
  }
  if (extraProps.mouseLeave) {
    mouseLeave = extraProps.mouseLeave;
  }
  if (extraProps.r) {
    extraPropsSvg.r = extraProps.r;
  }
  if (extraProps.fill) {
    extraPropsSvg.fill = extraProps.fill;
  }
  if (extraProps.stoke) {
    extraPropsSvg.stroke = extraProps.stroke;
  }
  if (extraProps.stokeWidth) {
    extraPropsSvg.strokeWidth = extraProps.strokeWidth;
  }
  return columns.map((col) => {
    const val = data[col.key];
    if ("number" !== typeof val) {
      throw new Error(`Data set ${i} is invalid.`);
    }

    return (
      <circle
        key={`dot-${col.key}-${val}`}
        cx={polarToX(col.angle, (val * options.chartSize/options.maxValue) / 2)}
        cy={polarToY(col.angle, (val * options.chartSize/options.maxValue) / 2)}
        className={[extraProps.className, meta.class].join(" ")}
        onMouseEnter={() => mouseEnter({ key: col.key, value: val, idx: i })}
        onMouseLeave={() => mouseLeave({})}
        {...extraPropsSvg}
      />
    );
  });
};

const scale = (options, value) => (
  <circle
    key={`circle-${value}`}
    cx={0}
    cy={0}
    r={(value * options.chartSize) / 2}
    {...options.scaleProps(value)}
  />
);

const caption = (options) => (col) => {
  let wrapped = 1;
  if (col.caption.length > options.wrapCaptionAt) {
    wrapped = Math.round(col.caption.length / options.wrapCaptionAt);
  }
  const fontSize = (options.captionProps(col).fontSize || 12) / 2;
  return new Array(wrapped).fill().map((_, index) => (
    <text
      key={`caption-of-${col.key}-${index}`}
      x={polarToX(col.angle, (options.size / 2) * 0.95).toFixed(4)}
      y={(
        polarToY(col.angle, (options.size / 2) * 0.95) +
        options.captionLineHeight * index
      ).toFixed(4)}
      dy={fontSize}
      {...options.captionProps(col)}
    >
      {col.caption.substring(index * options.wrapCaptionAt, (index + 1) * options.wrapCaptionAt)}
    </text>
  ));
};

const Render = (captions, chartData, options = {}) => {
  if ("object" !== typeof captions || Array.isArray(captions)) {
    throw new Error("caption must be an object");
  }
  if (!Array.isArray(chartData)) {
    throw new Error("data must be an array");
  }
  options.chartSize = options.size / options.zoomDistance;

  const { rotation = 0 } = options;

  const PathelementsRef = useRef([])
  const pathRef = (el) => {
    if (el && !PathelementsRef.current.includes(el)) {
      PathelementsRef.current.push(el)
    }
  }

  useEffect(() => {
    if (options.animationOn) {
      chartData.map((d, key) => {
        console.log(options.animationOn)
        const path = PathelementsRef.current[key]
        const originalPath = "M0.0000,0.0000L0.0000,0.0000L0.0000,0.0000L0.0000,0.0000L0.0000,0.0000z";
        const targetPath = path.getAttribute('d')
        let currentIteration = 0;
        const totalIterations = 100
      
        const animatePath = () => {
          currentIteration++;
    
          const newPath = originalPath.split(/[\s,MLz]+/).map((originalCoord, index) => {
            if (originalCoord !== '') {
              const targetCoord = targetPath.split(/[\s,MLz]+/)[index];
              const diff = (targetCoord - originalCoord) / totalIterations;
              const val = parseFloat(originalCoord) + diff * currentIteration;
              return val.toFixed(4);
            }
            return null;
          });
    
          path.setAttribute('d', `M${newPath[1]},${newPath[2]}L${newPath[3]},${newPath[4]}L${newPath[5]},${newPath[6]}L${newPath[7]},${newPath[8]}L${newPath[9]},${newPath[10]}z`);
    
          if (currentIteration < totalIterations) {
            requestAnimationFrame(animatePath);
          }
        };
        requestAnimationFrame(animatePath);
  
      })
    }
    else {
      
    }
  },[chartData])


  const columns = Object.keys(captions).map((key, i, all) => {
    const angle = (Math.PI * 2 * i) / all.length + rotation * (Math.PI / 180);
    return {
      key,
      caption: captions[key],
      angle: angle,
    };
  });

  const groups = 
  [

  ];
  if (options.captions) {
    groups.push(<g key={`poly-captions`}>{columns.map(caption(options))}</g>);
  }
  if (options.dots) {
    groups.push(<g key={`g-dots`}>{chartData.map(dot(columns, options))}</g>);
  }
  if (options.axes) {
    groups.unshift(<g key={`group-axes`}>{columns.map(axis(options))}</g>);
  }
  if (options.scales > 0) {
    const scales = [];
    for (let i = options.scales; i > 0; i--) {
      scales.push(scale(options, i / options.scales));
    }
    groups.unshift(<g key={`poly-scales`}>{scales}</g>);
  }
  if (chartData) {
    chartData.map((d, key) => {
      const data = d.data
      const meta = d.meta || {};
      const extraProps = options.shapeProps(meta);
      let extraPropsSvg = {};
      if (!meta.fill) {
        meta.fill = meta.color;
      }
      if (meta.strokeWidth) {
        extraPropsSvg.strokeWidth = meta.strokeWidth;
      }
      if (meta.strokeDasharray) {
        extraPropsSvg.strokeDasharray = meta.strokeDasharray;
      }
      if (meta.strokeLinecap) {
        extraPropsSvg.strokeLinecap = meta.strokeLinecap;
      }
      console.log(data, key)
      groups.push(<path
        id={`shape-${key}`}
        key={`shape-${key}`}
        ref={pathRef}
        d={options.smoothing(
          columns.map((col) => {
            const val = data[col.key];
            if ("number" !== typeof val) {
              throw new Error(`Data set ${key} is invalid.`);
            }
            return [
              polarToX(col.angle, (val * options.chartSize/options.maxValue) / 2),
              polarToY(col.angle, (val * options.chartSize/options.maxValue) / 2),
            ];
          })
          )}
        {...extraProps}
        {...extraPropsSvg}
        stroke={meta.color}
        fill={meta.fill}
        opacity={meta.opacity}
        className={[extraProps.className, meta.class].join(" ")}
        />)
    })
  }

  const delta = (options.size / 2).toFixed(4);
  return <g transform={`translate(${delta},${delta})`}>{groups}</g>;


  
};

export default Render;
