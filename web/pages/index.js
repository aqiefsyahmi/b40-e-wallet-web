import React from "react";
import images from "../assets/icons/index";
import logo from "../assets/logo-unisza.png";

const login = () => {
  return (
    <div className="login min-h-screen grid place-items-center grid-rows-[max-content_1fr] bg-[#FFF7D9]">
      <div className="justify-self-start">
        <img className="w-[13rem]" src={logo.src} alt="" />
      </div>
      <div>
        <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
          <h1 className="mb-8 font-bold text-4xl text-center">Welcome Back</h1>
          <form>
            <div className="grid gap-4 grid-cols-[max-content_1fr] items-center">
              <img
                className="justify-self-center w-[2.5rem]"
                src={images.emailIcon.src}
                alt=""
              />
              <Input type="email" placeholder="Enter Your Email..." />
              <img
                className="justify-self-center w-[2rem]"
                src={images.passwordIcon.src}
                alt=""
              />
              <Input type="password" placeholder="Enter Your Password..." />
            </div>
            <button
              type="submit"
              className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="text-center mt-4">
          Copyright @unisza2022 | Privacy Policy
        </p>
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

export default login;
