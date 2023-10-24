/* eslint-disable complexity */
const getScope = ({ values }) => {
  const scopeResult = [];
  let valueLength = 0;
  let target = 0;
  let maxScale = 1;
  let maxStringValue = "";
  let usingFlag = false;
  const flag = values.maxValue > -values.minValue;

  if (values.minValue === 0 && values.maxValue === 0) {
    return { scope: [1, 0, -1], maxScope: 1, minScope: -1 };
  }

  if (values.minValue >= 0) {
    valueLength = String(values.maxValue).split(".")[0].length;
    target = values.maxValue;
  } else if (values.maxValue <= 0) {
    valueLength = String(-values.minValue).split(".")[0].length;
    target = -values.minValue;
  } else {
    usingFlag = true;
    valueLength = String(flag ? values.maxValue : -values.minValue).split(".")[0].length;
    target = flag ? values.maxValue : -values.minValue;
  }

  if (valueLength > 2) {
    maxScale = 1 / 10 ** (valueLength - 2);
    maxStringValue = String(target * maxScale);
  } else if (valueLength <= 2 && target >= 1) {
    maxScale = 10 ** (2 - valueLength);
    maxStringValue = String(target * maxScale);
  } else if (target < 1 && target > 0) {
    const underZero = String(target).split(".")[1];
    let count = 2;

    for (let index = 0; index < underZero.length; index++) {
      if (underZero[index] !== "0") {
        break;
      }

      count += 1;
    }

    maxScale = 10 ** count;
    maxStringValue = String(target * maxScale);
  }

  const maxScope = maxStringValue.split(".")[0][0] * 10 + 10;
  let gap = 1;

  if (maxScope > 75 || (maxScope > 55 && values.minValue < 0 && values.maxValue > 0)) {
    gap = 20;
  } else if (maxScope > 55 || (maxScope > 35 && values.minValue < 0 && values.maxValue > 0)) {
    gap = 10;
  } else if (maxScope > 35) {
    gap = 10;
  } else {
    gap = 5;
  }

  if (usingFlag) {
    for (let value = 0; ; value += gap) {
      const nowValue = value / maxScale;

      scopeResult.push(nowValue);

      if (values.maxValue <= nowValue) {
        break;
      }
    }

    scopeResult.reverse();

    for (let value = gap; ; value += gap) {
      const nowValue = value / maxScale;

      scopeResult.push(-nowValue);

      if (-values.minValue <= nowValue) {
        break;
      }
    }
  } else {
    for (let value = 0; ; value += gap) {
      const nowValue = value / maxScale;

      if (values.minValue >= 0) {
        scopeResult.push(nowValue);
      } else if (values.maxValue <= 0) {
        scopeResult.push(-nowValue);
      }

      if ((values.minValue >= 0 && values.maxValue <= nowValue) || (values.maxValue <= 0 && -values.minValue <= nowValue)) {
        break;
      }
    }
  }

  return scopeResult;
};
/* eslint-enable complexity */

export const getAutoScope = ({ data }) => {
  const values = data.reduce(
    (acc, cur) => {
      if (cur.value > acc.maxValue) {
        acc.maxValue = cur.value;
      }

      if (cur.value < acc.minValue) {
        acc.minValue = cur.value;
      }

      return acc;
    },
    { maxValue: 0, minValue: 0 }
  );

  const scopeResult = getScope({ values });

  let nowMaxScope = 0;
  let nowMinScope = 0;

  if (values.minValue >= 0) {
    scopeResult.reverse();
    nowMaxScope = scopeResult[0];
  } else if (values.maxValue <= 0) {
    scopeResult[0] = 0;
    nowMaxScope = -scopeResult[scopeResult.length - 1];
  } else {
    nowMaxScope = scopeResult[0];
    nowMinScope = scopeResult[scopeResult.length - 1];
  }

  console.log(scopeResult);

  return { scope: scopeResult, maxScope: nowMaxScope, minScope: nowMinScope };
};

export const getUserScope = ({ maxScope, minScope }) => {
  if (maxScope === 0 && minScope === 0) {
    return { scope: [1, 0, -1], display: false };
  }

  const scopeResult = getScope({ values: { maxValue: maxScope, minValue: minScope } });
  const topMarginRatio = (scopeResult[0] - maxScope) / (maxScope - minScope);
  const bottomMarginRatio = (minScope - scopeResult[scopeResult.length - 1]) / (maxScope - minScope);

  console.log(scopeResult, topMarginRatio, bottomMarginRatio);

  return {
    scope: scopeResult.slice(
      maxScope === scopeResult[0] ? 0 : 1,
      minScope === scopeResult[scopeResult.length - 1] ? scopeResult.length : scopeResult.length - 1
    ),
    maxScope: maxScope === scopeResult[0] ? maxScope : scopeResult[1],
    minScope: minScope === scopeResult[scopeResult.length - 1] ? minScope : scopeResult[scopeResult.length - 2],
    topMarginRatio,
    bottomMarginRatio,
    display: true
  };
};
