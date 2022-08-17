import { useState } from "react";
import Link from "next/link";

import Button from "./Button";

import { logo } from "../assets";

const NavBar = () => {
  const [showDrop, setShowDrop] = useState(false);

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
        <li>
          <Link href="/transactions">Transactions</Link>
        </li>
      </ul>
      <div>
        <Button>
          <Link href="/">Logout</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
