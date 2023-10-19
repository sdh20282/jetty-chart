/* eslint-disable complexity */
export const getLevelAutoScope = ({ data }) => {
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

  const levelResult = [];
  let valueLength = 0;
  let target = 0;
  let maxScale = 1;
  let maxStringValue = "";
  let usingFlag = false;
  const flag = values.maxValue > -values.minValue;

  if (values.minValue === 0 && values.maxValue === 0) {
    return { level: [1, 0, -1], maxScope: 1, minScope: -1 };
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

  if (maxScope > 75) {
    gap = 20;
  } else if (maxScope > 55) {
    gap = 15;
  } else if (maxScope > 35 && maxScope < 55) {
    gap = 10;
  } else {
    gap = 5;
  }

  if (usingFlag) {
    for (let value = 0; value <= maxScope; value += gap) {
      const nowValue = value / maxScale;

      levelResult.push(nowValue);

      if (values.maxValue < nowValue) {
        break;
      }
    }

    levelResult.reverse();

    for (let value = gap; value <= maxScope; value += gap) {
      const nowValue = value / maxScale;

      levelResult.push(-nowValue);

      if (-values.minValue < nowValue) {
        break;
      }
    }
  } else {
    for (let value = 0; value <= maxScope; value += gap) {
      const nowValue = value / maxScale;

      if (values.minValue >= 0) {
        levelResult.push(nowValue);
      } else if (values.maxValue <= 0) {
        levelResult.push(-nowValue);
      }

      if ((values.minValue >= 0 && values.maxValue < nowValue) || (values.maxValue <= 0 && -values.minValue < nowValue)) {
        break;
      }
    }
  }

  let nowMaxScope = 0;
  let nowMinScope = 0;

  if (values.minValue >= 0) {
    levelResult.reverse();
    nowMaxScope = levelResult[0];
  } else if (values.maxValue <= 0) {
    levelResult[0] = 0;
    nowMaxScope = -levelResult[levelResult.length - 1];
  } else {
    nowMaxScope = levelResult[0];
    nowMinScope = levelResult[levelResult.length - 1];
  }

  return { level: levelResult, maxScope: nowMaxScope, minScope: nowMinScope };
};
/* eslint-enable complexity */

export const getLevelCalculatedScope = ({ maxScope, minScope }) => {
  console.log(maxScope, minScope);
};
