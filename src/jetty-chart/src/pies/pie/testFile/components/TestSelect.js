const TestSelect = ({ name, value, setValue, obj }) => {
  return (
    <>
      <label style={{ color: "black" }}>{name}</label>
      <select value={value} onChange={setValue} style={{ margin: "10px" }}>
        {obj.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default TestSelect;
