export const checkMargin = ({ margin }) => {
  margin.top ??= 50;
  margin.bottom ??= 50;
  margin.left ??= 50;
  margin.right ??= 50;

  return margin;
};

export const checkBarBorderRadius = ({ halfWidth, height, borderRadius }) => {
  borderRadius = halfWidth < borderRadius ? halfWidth : borderRadius;
  borderRadius = height < borderRadius ? height : borderRadius;

  return borderRadius;
};

export const checkSize = ({ width, height, margin, padding }) => {
  if (width < 30) {
    width = 30;
    margin = { top: margin.top, bottom: margin.bottom, left: 0, right: 0 };

    if (padding) {
      padding = 0;
    }
  }

  if (height < 30) {
    height = 30;
    margin = { top: 0, bottom: 0, left: margin.left, right: margin.right };
  }

  if (width - margin.left - margin.right - (padding ? padding : 0) - (padding ? padding : 0) <= 0) {
    const over = (margin.left + margin.right - width + 30) / 2;

    margin = {
      ...margin,
      left: margin.left - over,
      right: margin.right - over
    };

    if (padding) {
      padding = 0;
    }
  }

  if (height - margin.top - margin.bottom <= 0) {
    const over = (margin.top + margin.bottom - height + 30) / 2;

    margin = {
      ...margin,
      top: margin.top - over,
      bottom: margin.bottom - over
    };
  }

  return { width, height, margin, padding };
};
