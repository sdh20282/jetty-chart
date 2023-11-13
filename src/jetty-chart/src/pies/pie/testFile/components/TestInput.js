const TestInput = ({ name, value, setValue }) => {
  return (
    <>
      <label style={{ color: "black" }}>{name}</label>
      <input size={5} style={{ margin: "10px" }} value={value} onChange={setValue} />
    </>
  );
};

export default TestInput;
