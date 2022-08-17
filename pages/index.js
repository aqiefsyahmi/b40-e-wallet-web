import { useRouter } from "next/router";

import Input from "../components/Input";

import { emailIcon, passwordIcon, logo } from "../assets/index";

const login = () => {
  const router = useRouter();

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
                src={emailIcon.src}
                alt=""
              />
              <Input type="email" placeholder="Enter Your Email..." />
              <img
                className="justify-self-center w-[2rem]"
                src={passwordIcon.src}
                alt=""
              />
              <Input type="password" placeholder="Enter Your Password..." />
            </div>
            <button
              type="button"
              className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
              onClick={() => router.push("/dashboard")}
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

export default login;
