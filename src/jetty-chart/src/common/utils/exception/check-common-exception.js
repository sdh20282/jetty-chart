export const checkPadding = ({ padding }) => {
  if (padding.top === undefined) {
    padding.top = 50;
  }

  if (padding.bottom === undefined) {
    padding.bottom = 50;
  }

  if (padding.left === undefined) {
    padding.left = 50;
  }

  if (padding.right === undefined) {
    padding.right = 50;
  }

  return padding;
};

export const checkBarBorderRadius = ({ halfWidth, borderRadius }) => {
  return halfWidth < borderRadius ? halfWidth : borderRadius;
};

export const checkSize = ({ width, height, padding, chartPadding }) => {
  if (width < 30) {
    width = 30;
    chartPadding = 0;
    padding = { top: padding.top, bottom: padding.bottom, left: 0, right: 0 };
  }

  if (height < 30) {
    height = 30;
    padding = { top: 0, bottom: 0, left: padding.left, right: padding.right };
  }

  if (width - padding.left - padding.right - chartPadding - chartPadding <= 0) {
    const over = (padding.left + padding.right - width + 30) / 2;

    chartPadding = 0;
    padding = {
      ...padding,
      left: padding.left - over,
      right: padding.right - over
    };
  }

  if (height - padding.top - padding.bottom <= 0) {
    const over = (padding.top + padding.bottom - height + 30) / 2;

    padding = {
      ...padding,
      top: padding.top - over,
      bottom: padding.bottom - over
    };
  }

  return { width, height, padding, chartPadding };
};
