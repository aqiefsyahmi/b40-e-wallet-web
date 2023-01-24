import { useState } from "react";
import { useRouter } from "next/router";

import { Input, Layout } from "../components";
import { setCafe } from "../lib/setCafe";

const AddCafe = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    //Validation Cafe Owner Password
    var requirementpass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;

    if (password.length <= 5) {
      alert("password must have more than 5 character");
      return false;
    }

    if (password.match(requirementpass)) {
      const res = await setCafe(username, password, name, cafeName);

      if (res == 201) {
        alert("Registration successful");
        router.push("/dashboard");
      } else {
        alert("Username has been used");
      }
    } else {
      alert("Password must have at least one UpperCase and one Number");
      return false;
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
              maxlength={100}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onAction={e => setUsername(e.target.value)}
              required={true}
              maxlength={12}
            />
            <div className="mb-2" />
            <Input
              type="text"
              placeholder="Cafe Name"
              value={cafeName}
              onAction={e => setCafeName(e.target.value)}
              required={true}
              maxlength={100}
            />
            <div className="mb-2" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onAction={e => setPassword(e.target.value)}
              required={true}
              maxlength={20}
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

export default AddCafe;
