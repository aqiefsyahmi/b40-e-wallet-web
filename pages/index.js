import { useRouter } from "next/router";
import { useState } from "react";

import instance from "./api/instance";
import handleLocalStorage from "../utils/handleLocalStorage";

import Input from "../components/Input";
import Button from "../components/Button";

import { emailIcon, passwordIcon, logo } from "../assets/index";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = handleLocalStorage();

  const handleLogin = e => {
    e.preventDefault();

    instance
      .post("/admin/login", {
        email: email,
        password: password,
      })
      .then(res => {
        store("accessToken", res.data.accessToken);
        store("refreshToken", res.data.refreshToken);

        router.push("/dashboard");
      })
      .catch(err => {
        alert("Wrong email or password");
      });
  };

  return (
    <div className="login min-h-screen grid place-items-center grid-rows-[max-content_1fr] bg-[#FFF7D9]">
      <div className="justify-self-start">
        <img className="w-[13rem]" src={logo.src} alt="" />
      </div>
      <div>
        <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
          <h1 className="mb-8 font-bold text-4xl text-center">Welcome Back</h1>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4 grid-cols-[max-content_1fr] items-center">
              <img
                className="justify-self-center w-[2.5rem]"
                src={emailIcon.src}
                alt=""
              />
              <Input
                type="email"
                value={email}
                onAction={e => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
              />
              <img
                className="justify-self-center w-[2rem]"
                src={passwordIcon.src}
                alt=""
              />
              <Input
                type="password"
                value={password}
                onAction={e => setPassword(e.target.value)}
                placeholder="Enter Your Password..."
              />
            </div>
            <div className="flex mt-6">
              <Button style="flex-1" type={"submit"}>
                Sign In
              </Button>
            </div>
          </form>
        </div>
        <p className="text-center mt-4">
          Copyright @unisza2022 | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
