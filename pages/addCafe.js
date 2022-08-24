import { useState } from "react";

import { useRouter } from "next/router";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { setCafe } from "../lib/setCafe";

const addCafe = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await setCafe(username, password, name, cafeName);

    if (res == 201) {
      alert("Registration successful");
      router.push("/dashboard");
    } else {
      alert("Username has been used");
    }
  };

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 font-bold text-3xl text-center">Register Cafe</h1>
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
              placeholder="Username"
              value={username}
              onAction={e => setUsername(e.target.value)}
              required={true}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="Cafe Name"
              value={cafeName}
              onAction={e => setCafeName(e.target.value)}
              required={true}
            />
            <div className="mb-2" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onAction={e => setPassword(e.target.value)}
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

export default addCafe;
