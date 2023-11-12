import React from "react";

const PiePieceLabel = ({ x, y, label }) => {
  console.log("PiePieceLabel", x, y, label);
  return (
    <text x={x} y={y} fontSize={0.1} text-anchor="middle" dominant-baseline="middle">
      {label}
    </text>
  );
};

export default PiePieceLabel;
