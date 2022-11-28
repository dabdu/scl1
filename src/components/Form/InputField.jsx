import React from "react";

const InputField = ({ type, title, nameId, value, onChange, required }) => {
  return (
    <div className="form-group grid">
      {/* <label className="control-label">{title}</label> */}
      <input
        type={type ? type : "text"}
        className="form-control border border-black rounded-sm shadow-sm bg-white px-2 py-1 primary-font"
        id={nameId}
        name={nameId}
        value={value}
        placeholder={title}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
