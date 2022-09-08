import React from "react";

const Input = ({ type, placeholder, value, onAction, required, maxlength }) => {
  return (
    <>
      <input
        className="border w-full px-2 py-2 border-gray-300 rounded-md"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onAction}
        required={required}
        maxLength={maxlength}
      />
    </>
  );
};

export default Input;
