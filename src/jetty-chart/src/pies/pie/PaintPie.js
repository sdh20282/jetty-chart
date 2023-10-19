import GetPiePiece from "./GetPiePiece";

const PaintPie = ({ data, generalSettings, pieSettings }) => {
  return (
    <svg
      id="pie"
      width={generalSettings.width - generalSettings.padding.left - generalSettings.padding.right}
      height={generalSettings.height - generalSettings.padding.top - generalSettings.padding.bottom}
      viewBox="-2 -2 4 4"
      style={{
        backgroundColor: generalSettings.backgroundColor,
        padding:
          generalSettings.padding.top +
          "px " +
          generalSettings.padding.right +
          "px " +
          generalSettings.padding.bottom +
          "px " +
          generalSettings.padding.left +
          "px ",
      }}
    >
      <GetPiePiece data={data} pieSettings={pieSettings} />
    </svg>
  );
};

export default PaintPie;
