import React from "react";

const Button = ({ children, style, onAction }) => {
  return (
    <button
      className={`${style} py-2 px-5 font-medium bg-[#FFD400] rounded-md`}
      onClick={onAction}
    >
      {children}
    </button>
  );
};

export default Button;
