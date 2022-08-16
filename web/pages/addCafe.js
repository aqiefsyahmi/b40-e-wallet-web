import React, { useState } from "react";

import { useRouter } from "next/router";
import Input from "../components/Input";
import Layout from "../components/Layout";

const coregform = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 font-bold text-3xl text-center">Register Cafe</h1>
        <form>
          <div className="items-center">
            <Input type="text" placeholder="Full Name" />
            <div className="mb-2" />
            <Input type="text" placeholder="Username" />
            <div className="mb-2" />
            <Input type="text" placeholder="Cafe Name" />
            <div className="mb-2" />
            <Input type="password" placeholder="Password" />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
            onClick={() => router.push("/dashboard",  alert("New Cafe Owner Data Saved"))}
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default coregform;
