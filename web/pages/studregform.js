import React from "react";
import images from "../assets/icons/index";

const studregform = () => {
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
              className="ml-6 py-1 w-48 font-bold text-white bg-[#4D4B42] rounded-[130px]"
            >
              Student Form <br /> Registration
      </button>
      <button
              className="ml-6 py-1 w-48 font-bold text-white bg-[#C6C0AB] rounded-[130px]"
            >
              Cafe Owner Form <br /> Registration
      </button>

      <button
        className="mr-6 ml-6 w-15 opacity-70"
      >
        <img
                className="justify-self-center w-[2.5rem]"
                src={images.logoutIcon.src}
                alt=""
              />
      </button>
      </div>
      <div>
        <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
          <h1 className="mb-8 font-bold text-3xl text-center">Student Form Registration</h1>
          <form>
            <div className="items-center">
              <Input type="fullname" placeholder="Full Name" />
              <div className="mb-2" />
              <Input type="matricnum" placeholder="Matric Number" />
              <div className="mb-2" />
              <Input type="icnum" placeholder="IC Number" />
            </div>
            <button
              type="submit"
              className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="border w-full px-2 py-2 border-gray-300 rounded-md"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default studregform;
