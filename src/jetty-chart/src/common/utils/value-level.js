export const getValueLevel = ({ data }) => {
  const maxValue = data.reduce((acc, cur) => {
    if (cur.value > acc) {
      acc = cur.value;
    }

    return acc;
  }, 0);

  const valueLength = String(maxValue).split(".")[0].length;
  const levelResult = [];

  let scale = 1;
  let stringValue = "";

  if (valueLength > 2) {
    scale = 1 / 10 ** (valueLength - 2);
    stringValue = String(maxValue * scale);
  } else if (valueLength <= 2 && maxValue >= 1) {
    scale = 10 ** (2 - valueLength);
    stringValue = String(maxValue * scale);
  } else {
    const underZero = String(maxValue).split(".")[1];
    let count = 2;

    for (let index = 0; index < underZero.length; index++) {
      if (underZero[index] !== "0") {
        break;
      }

      count += 1;
    }

    scale = 10 ** count;
    stringValue = String(maxValue * scale);
  }

  const maxScope = stringValue.split(".")[0][0] * 10 + 10;
  let gap = 1;

  if (maxScope > 55) {
    gap = 10;
  } else if (maxScope > 25 && maxScope < 55) {
    gap = 5;
  } else {
    gap = 2.5;
  }

  for (let value = 0; value <= maxScope; value += gap) {
    const nowValue = value / scale;

    levelResult.push(nowValue);

    if (maxValue < nowValue) {
      break;
    }
  }

  return { level: levelResult, scale, maxScope };
};
