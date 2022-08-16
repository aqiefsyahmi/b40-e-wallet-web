import React from "react";
import images from "../assets/icons/index";

const coregform = () => {
  return (
    <div className="min-h-screen grid place-items-center grid-rows-[max-content_1fr] bg-[#FFF7D9]">
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
      <button
        className="ml-6 mt-6 w-15 opacity-70"
      >
        <img
                className="justify-self-center w-[3.0rem]"
                src={images.backbuttonIcon.src}
                alt=""
              />
      </button>
      </div>
      <div className="w-4/5 items-center">
      <h1 className="mb-6 font-bold text-3xl">Transaction Details</h1>
          <table className="centertable">
            <thead>
                <tr>
                    <th>Transaction Date</th>
                    <th>Transaction Time</th>
                    <th>Sender</th>
                    <th>Recipient</th>
                    <th>E-Wallet Point</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="float-right border w-full px-2 py-2 border-gray-300 rounded-md"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default coregform;
