import { useEffect, useState } from "react"
import RadarChart from "./RadarChart"

const DataCheck = ({data}) => {

  const [newData, setnewData] = useState(data[0].chart)
  const [maxValue, setmaxValue] = useState(0)
  const [minValue, setminValue] = useState(0)
  const [values, setvalues] = useState([])
  const [changeValue, setchangeValue] = useState(0)

  useEffect(() => {
    Check()
    Change()
  },[data])

  const Check = () => {
    newData.map((d) => {
      const valueList = Object.values(d.data)
      setvalues([...values, ...valueList])
      
    })
  }

  const Change = () => {
    newData.map((d) => {
      const keyList = Object.keys(d.data)
      const valueList = Object.values(d.data)
      
      if (minValue < 0) {
        setchangeValue(Math.floor(minValue) * -1)
      }

      for (let i = 0; i < valueList.length; i++) {
        valueList[i] += changeValue
      }

      keyList.forEach((key, index) => {
        d.data[key] = valueList[index]
      })

    })
  }

  return(
    <>

    <RadarChart
            captions={data[0].captions}
            data={data[0].chart}
            options={data[0].options}
            size={data[0].size}
      
          />
    </>
  )

}


export default DataCheck