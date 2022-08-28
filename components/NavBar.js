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

  const onLogout = () => {
    remove("accessToken");
    remove("refreshToken");

    router.push("/");
  };

  return (
    <nav className="px-4 flex justify-between items-center justify-self-stretch bg-white border-b">
      <img src={logo.src} alt="" className="w-[8rem]" />
      <ul className="py-6 flex items-center justify-center gap-6 ">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDrop(true)}
          onMouseLeave={() => setShowDrop(false)}
        >
          Registrations
          <div className={`absolute ${!showDrop && `hidden`}`}>
            <div className="py-3 grid justify-center w-[8rem] gap-2 rounded-md bg-white shadow">
              <div>
                <Link href="/addStudent">Student</Link>
              </div>
              <div>
                <Link href="/addCafe">Cafe Owner</Link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/addWallet">E-Wallet Point</Link>
        </li>
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDrop1(true)}
          onMouseLeave={() => setShowDrop1(false)}
        >
          Transactions
          <div className={`absolute ${!showDrop1 && `hidden`}`}>
            <div className="py-3 grid justify-center w-[8rem] gap-2 rounded-md bg-white shadow">
              <div>
                <Link href="/transactions">All</Link>
              </div>
              <div>
                <Link href="/transactionsStud">Student</Link>
              </div>
              <div>
                <Link href="/transactionsCO">Cafe Owner</Link>
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
