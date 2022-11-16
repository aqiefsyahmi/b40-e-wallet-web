import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout, DateTime } from "../../../../components";
import { getTransactions } from "../../../../lib/getTransactions";
import { useTime } from "../../../../hooks";
import { filteredDate } from "../../../../utils/handleTransactions";

const transactions = () => {
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();

      var dt = new Date();
      document.getElementById('date-time').innerHTML=dt;

      setTransactions(filteredDate({ data: res }));
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transaction Student Details
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Student Name</td>
                <td className="pb-[37px] font-medium">Recepient</td>
                <td className="w-[8rem]">Payment(RM)</td>
                <td className="w-[8rem]">Date</td>
                <td className="w-[8rem]">Time</td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {

                  return (
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">Nibba</td>
                      <td className="pb-6">Auuuughhh Cafe</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">6/9/1969</td>
                      <td className="pb-6">11:59:59</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <p>Current Date and Time is <span id='date-time'></span>.</p>
        </div>
      </div>
    </Layout>
  );
};

export default transactions;
