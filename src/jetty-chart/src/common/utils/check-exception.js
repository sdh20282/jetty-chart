export const checkPadding = ({ padding }) => {
  if (!padding.top) {
    padding.top = "30";
  }

  if (!padding.bottom) {
    padding.bottom = "50";
  }

  if (!padding.left) {
    padding.left = "80";
  }

  if (!padding.right) {
    padding.right = "130";
  }

  return padding;
};
