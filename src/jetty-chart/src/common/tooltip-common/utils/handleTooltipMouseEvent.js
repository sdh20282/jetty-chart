export const handleTooltipMouseMove = ({ event, setMousePosition, changeShowTooltipOn, index }) => {
  const { clientX, clientY } = event;

  setMousePosition({ x: clientX, y: clientY });
  changeShowTooltipOn();
};
export const handleTooltipMouseOut = ({ changeShowTooltipOff, index }) => {
  changeShowTooltipOff();
};
