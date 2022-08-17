import React from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
//import Button from "../components/Button";

const addWallet = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="mt-4 w-2/3 items-center">
        <form>
          <Input
            type="search"
            placeholder="Search for name, matric number, ic number"
          />
        </form>
        <div className="mt-6 font-medium">
          <p>
            Select All <input type="checkbox" />
          </p>
        </div>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="pt-4 pb-3 w-[7%]">Select</td>
                <td>Name</td>
                <td>Matric Number</td>
                <td>IC Number</td>
                <td>Balance</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 text-center w-[7%]">
                  <input type="checkbox" />
                </td>
                <td>Ahmad Utat bin Naim</td>
                <td>012345</td>
                <td>010323045890</td>
                <td>RM0</td>
              </tr>
              <tr>
                <td className="py-1 text-center w-[7%]">
                  <input type="checkbox" />
                </td>
                <td>Ahmad Utat bin Naim</td>
                <td>012345</td>
                <td>010323045890</td>
                <td>RM0</td>
              </tr>
              <tr>
                <td className="py-1 text-center w-[7%]">
                  <input type="checkbox" />
                </td>
                <td>Ahmad Utat bin Naim</td>
                <td>012345</td>
                <td>010323045890</td>
                <td>RM0</td>
              </tr>
              <tr>
                <td className="py-1 text-center w-[7%]">
                  <input type="checkbox" />
                </td>
                <td>Ahmad Utat bin Naim</td>
                <td>012345</td>
                <td>010323045890</td>
                <td>RM0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <div className="w-[4rem]">
            <Input type="number" />
          </div>
          <button
          className="py-2 px-5 font-medium bg-[#FFD400] rounded-md"
          type="submit"
          onClick={() =>
            router.push("/dashboard", alert("Student Wallet Point Updated"))
          }

          >Add Point</button>
        </div>
      </div>
    </Layout>
  );
};

export default addWallet;
