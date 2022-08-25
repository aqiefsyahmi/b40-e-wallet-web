import React from "react";

const Button = ({ children, type, style, onAction }) => {
  return (
    <button
      type={type || "button"}
      className={`${style} py-2 px-5 font-medium bg-[#FFD400] rounded-md`}
      onClick={onAction}
    >
      {children}
    </button>
  );
};

export default Button;
