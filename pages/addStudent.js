import { useState } from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { setStudent } from "../lib/setStudent";

const addStudent = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [matricNo, setMatric] = useState("");
  const [icNo, setIcNo] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await setStudent(name, matricNo, icNo);

    if (res == 201) {
      alert("Registration successful");
      router.push("/dashboard");
    } else {
      alert("Data existed");
    }
  };

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 font-bold text-3xl text-center">
          Register Student
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="items-center">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onAction={e => setName(e.target.value)}
              required={true}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="Matric Number"
              value={matricNo}
              onAction={e => setMatric(e.target.value)}
              required={true}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="IC Number"
              value={icNo}
              onAction={e => setIcNo(e.target.value)}
              required={true}
            />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default addStudent;