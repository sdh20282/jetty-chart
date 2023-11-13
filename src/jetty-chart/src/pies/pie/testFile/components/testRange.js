const testRange = ({ name, value, setValue, min, max, step, isNumber }) => {
  return (
    <>
      <label>name</label>
      <input
        type={"range"}
        min="0"
        max={"0.1"}
        step={"0.01"}
        style={{ margin: "10px" }}
        value={value}
        onChange={(e) => {
          setValue(isNumber ? Number(e.target.value) : e.target.value);
        }}
      />
      <input
        size={5}
        style={{ margin: "10px" }}
        value={value}
        onChange={(e) => {
          setValue(isNumber ? Number(e.target.value) : e.target.value);
        }}
      />
      <br />
    </>
  );
};

export default testRange;
