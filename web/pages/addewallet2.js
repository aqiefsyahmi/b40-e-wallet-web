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
        <h1 className="mb-6 font-bold text-3xl">Selected Student List</h1>
          <div className="h-[650px] border-[1px] border-black bg-[#FFFFFF]">
            <table className="centertable">
              <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>E-Wallet Balance</th>
                    <th>Matric Number</th>
                    <th>IC Number</th>
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
          <br />
          <button
              type="submit"
              className="float-right mb-8 py-2 w-60 font-medium bg-[#FFD400] rounded-full"
            >
              Add E-Wallet Point
            </button>
            <div className="mr-2 float-right w-97 bg-[#FFD400] rounded-full">
              <p className="flex items-center h-[42px] font-semibold ml-5">Enter The Amount Of E-Wallet Point<Input type="ewalletpoint" placeholder="Enter Value" /></p>
            </div>
      </div>
    </div>
  );
};

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
      className="ml-4 text-center float-right border w-32 py-2 border-black bg-[#FFF4B8] rounded-full"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default coregform;
