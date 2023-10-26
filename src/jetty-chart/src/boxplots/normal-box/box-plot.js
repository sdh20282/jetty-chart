import { getAutoScope, getCalculatedScope } from "../../common/utils/scope/calculate-scope";

const BoxPlot = ({ data }) => {
  const newArray = [];
  data.forEach((item) => {
    if (item.value.length > 0) {
      newArray.push(item.value[0]);
      newArray.push(item.value[item.value.length - 1]);
    }
  });

  const scopeResult1 = getAutoScope({ data });
  const scopeResult2 = getCalculatedScope({ maxScope, minScope });

  return (
    <div>
      {newArray.map((num, idx) => (
        <p key={idx}>{num}</p>
      ))}
    </div>
  );
};

export { BoxPlot };
