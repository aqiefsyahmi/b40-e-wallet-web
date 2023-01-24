import { useState } from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { setStudent } from "../lib/setStudent";

const AddStudent = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [matricNo, setMatric] = useState("");
  const [icNo, setIcNo] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    // validation
    if (isNaN(parseInt(matricNo))) {
      alert("Matric No. must be numbers");
      return false;
    }
    if (isNaN(parseInt(icNo))) {
      alert("IC No. must be numbers");
      return false;
    }
    if (matricNo.length !== 6) {
      alert("Matric No. must be in 6 numbers");
      return false;
    }
    if (icNo.length !== 12) {
      alert("IC No. must be in 12 numbers");
      return false;
    }

    const res = await setStudent(name, matricNo, icNo);

    if (res == 201) {
      alert("Registration successful");
      router.push("/dashboard");
    } else {
      console.log(res);
      alert("No matric has been used");
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
              maxlength={100}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="Matric Number e.g xxxxxx"
              value={matricNo}
              onAction={e => setMatric(e.target.value)}
              required={true}
              maxlength={6}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="IC Number e.g xxxxxxxxxxxx"
              value={icNo}
              onAction={e => setIcNo(e.target.value)}
              required={true}
              maxlength={12}
            />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 w-full font-medium bg-[#FFD400] rounded-md transition duration-150 hover:bg-[#d6b513]">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddStudent;
