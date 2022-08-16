import React from "react";
import register from "../assets/register.png";
import transaction from "../assets/transaction.png";
import wallet from "../assets/wallet.png";
import images from "../assets/icons/index";

const dashboard = () => {
  return (
    <div className="min-h-screen p-8 flex gap-[2rem] justify-center bg-[#FFF7D9]">
      <div className="justify-self-start">
      <button
        className="ml-6 mt-6 w-15 opacity-70"
      >
        <img
                className="justify-self-center w-[3.0rem]"
                src={images.listbarIcon.src}
                alt=""
              />
      </button>
      </div>
      <Menu img={register.src} title="Registration Form" />
      <Menu img={wallet.src} title="Add E-Wallet Point" />
      <Menu img={transaction.src} title="Transaction Details" /> 
    </div>
  );
};

const Menu = ({ img, title }) => {
  return (
    <button className="flex flex-col items-center justify-center px-[3rem] rounded-[130px] bg-[#FFD400]">
      <img src={img} />
      <p className="font-bold text-[3rem] text-center">{title}</p>
    </button>
  );
};

export default dashboard;
