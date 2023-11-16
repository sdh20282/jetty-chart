export const handleTooltipMouseMove = ({ event, setMousePosition, chnageShowTooltipOn, index }) => {
  console.log("handleTooltipMouseMove", index);
  const { clientX, clientY } = event;

  setMousePosition({ x: clientX, y: clientY });
  chnageShowTooltipOn();
};
export const handleTooltipMouseOut = ({ chnageShowTooltipOff, index }) => {
  console.log("handleTooltipMouseOut");
  chnageShowTooltipOff();
};
