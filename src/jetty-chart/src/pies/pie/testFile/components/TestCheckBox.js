import React from "react";

const TestCheckBox = ({ name, value, setValue }) => {
  return (
    <>
      <label>{name}</label>
      <input type={"checkbox"} name={name} value={value} onChange={setValue} />
    </>
  );
};

export default TestCheckBox;
