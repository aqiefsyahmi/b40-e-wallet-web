import React from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";

const addStudent = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 font-bold text-3xl text-center">
          Register Student
        </h1>
        <form>
          <div className="items-center">
            <Input type="text" placeholder="Full Name" />
            <div className="mb-2" />
            <Input type="text" placeholder="Matric Number" />
            <div className="mb-2" />
            <Input type="text" placeholder="IC Number" />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
            onClick={() =>
              router.push("/dashboard", alert("New Student Data Saved"))
            }
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default addStudent;
