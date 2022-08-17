import React from "react";

import Layout from "../components/Layout";

const transactions = () => {
  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="font-bold text-3xl">Transaction Details</h1>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="pt-4 pb-3">Date</td>
                <td>Time</td>
                <td>Sender</td>
                <td>Recipient</td>
                <td>E-Wallet Point</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
              <tr>
                <td className="py-1">12.08.2022</td>
                <td>9.00am</td>
                <td>012345</td>
                <td>mamada12</td>
                <td>RM2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default transactions;
