import React from "react";

const Buttons = ({ children, type, style, onAction }) => {
  return (
    <button
      type={type || "button"}
      className={`${style} py-2 px-5 font-medium text-white bg-[#EE4B2B] rounded-md transition duration-150 hover:bg-[#880808]`}
      onClick={onAction}
    >
      {children}
    </button>
  );
};

export default Buttons;
