export const handleTooltipMouseMove = ({ event, setMousePosition, setShowTooltip, svgRef }) => {
  const svg = svgRef.current;
  const rect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;

  const scaleX = viewBox.width / rect.width;
  const scaleY = viewBox.height / rect.height;

  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;

  setMousePosition({ x, y });
  setShowTooltip(true);
};
export const handleTooltipMouseOut = ({ setShowTooltip }) => {
  setShowTooltip(false);
};
