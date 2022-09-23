import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "./Button";
import { useLocalStorage } from "../hooks";

import { logo } from "../assets";

const NavBar = () => {
  const router = useRouter();
  const { remove } = useLocalStorage();
  const [showDrop, setShowDrop] = useState(false);
  const [showDrop1, setShowDrop1] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);

  const onLogout = () => {
    remove("accessToken");
    remove("refreshToken");

    router.push("/");
  };

  return (
    <nav className="px-4 flex justify-between items-center justify-self-stretch bg-white border-b">
      <img src={logo.src} alt="" className="w-[8rem]" />
      <ul className="py-6 flex items-center justify-center gap-6 ">
        <li
          className={router.pathname != "/dashboard" ? "active" : "font-bold"}
        >
          <div className="duration-150 hover:font-bold">
            <Link href="/dashboard">Home</Link>
          </div>
        </li>
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDrop(true)}
          onMouseLeave={() => setShowDrop(false)}
        >
          <div className="duration-150 hover:font-bold">Registrations</div>
          <div className={`absolute ${!showDrop && `hidden`}`}>
            <div className="py-3 grid w-[8rem] gap-2 rounded-md bg-white shadow ">
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="grid justify-center duration-150 hover:font-semibold">
                  <Link href="/addCafe">Cafe Owner</Link>
                </div>
              </div>
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="ml-6 duration-150 hover:font-semibold">
                  <Link href="/addStudent">Student</Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDrop1(true)}
          onMouseLeave={() => setShowDrop1(false)}
        >
          <div className="duration-150 hover:font-bold">Users Data</div>
          <div className={`absolute ${!showDrop1 && `hidden`}`}>
            <div className="py-3 grid w-[8rem] gap-2 rounded-md bg-white shadow ">
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="grid justify-center duration-150 hover:font-semibold">
                  <Link href="/usersdata/cafe">Cafe Owner</Link>
                </div>
              </div>
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="ml-6 duration-150 hover:font-semibold">
                  <Link href="/usersdata/student">Student</Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          className={router.pathname != "/addWallet" ? "active" : "font-bold"}
        >
          <div className="duration-150 hover:font-bold">
            <Link href="/addWallet">E-Wallet Point</Link>
          </div>
        </li>
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDrop2(true)}
          onMouseLeave={() => setShowDrop2(false)}
        >
          <div className="duration-150 hover:font-bold">Transactions</div>
          <div className={`absolute ${!showDrop2 && `hidden`}`}>
            <div className="py-3 grid justify-center w-[8rem] gap-2 rounded-md bg-white shadow">
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="grid justify-center duration-150 hover:font-semibold">
                  <Link href="/transactions/cafe">Cafe Owners</Link>
                </div>
              </div>
              <div className="w-[8rem] duration-150 hover:bg-[#d1cfcf]">
                <div className="ml-5 duration-150 hover:font-semibold">
                  <Link href="/transactions/student">Students</Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <Button onAction={onLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default NavBar;
