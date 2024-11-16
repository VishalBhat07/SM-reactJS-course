import React from "react";

const CommonInput = ({
  label,
  onChange,
  name,
  value,
  id,
  placeholder,
  type,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        style={{ margin: "10px" ,padding:"5px"}}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter value here"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
