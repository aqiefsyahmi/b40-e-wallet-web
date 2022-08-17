import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-2 px-5 font-medium bg-[#FFD400] rounded-md">
      {children}
    </button>
  );
};

export default Button;
