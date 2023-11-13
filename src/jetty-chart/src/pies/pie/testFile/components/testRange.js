const TestRange = ({ name, value, setValue, min, max, step }) => {
  return (
    <>
      <label>{name}</label>
      <input
        type={"range"}
        min={min}
        max={max}
        step={step}
        style={{ margin: "10px" }}
        value={value}
        onChange={setValue}
      />
      <input size={5} style={{ margin: "10px" }} value={value} onChange={setValue} />
      <br />
    </>
  );
};

export default TestRange;
