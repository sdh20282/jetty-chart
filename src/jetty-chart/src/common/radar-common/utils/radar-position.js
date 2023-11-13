export const checkMargin = ({marginTop,marginBottom,marginLeft,marginRight}) => {
  marginTop ??= 0;
  marginBottom ??=0;
  marginLeft ??=0;
  marginRight ??=0;
  
  return {marginTop,marginBottom,marginLeft,marginRight}
}


export const checkChartSize = ({size, defaultValue}) => {
  defaultValue ??= size

  return defaultValue
}

export const checkSize = ({size, maxValue}) => {
  const resize = size/maxValue
  return resize
}

export const checkNegative = ({data, maxValue}) => {
   data.map((d) => {
    const keylist = Object.keys(d.data)
    let valuelist = Object.values(d.data)
    valuelist.map((v, idx) => {
      let diff = maxValue/2 - v
      console.log({maxValue, diff, v})
      valuelist[idx] += diff * 2
    })
    keylist.forEach((key, idx) => {
      d.data[key] = valuelist[idx]
    })
   })

   return data
}


export const checkLimit = (data) => {
  const allValues = data.reduce((acc, obj) => {
    Object.values(obj.data).forEach(value => {
      acc.push(value);
    });
    return acc;
  }, []);
  
  // 최댓값을 구함
  const maxValue = Math.max(...allValues);
  return maxValue
}