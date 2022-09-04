import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getTransactions } from "../lib/getTransactions";
import { useTime } from "../hooks";

const dummyData = [
  { id: 1, cafename: "Kafe Mamada", totalrm: 100 },
  { id: 2, cafename: "Pak Amid Kafe", totalrm: 140 },
  { id: 3, cafename: "GigaChad Cake", totalrm: 250 },
  { id: 4, cafename: "Kafe Sheeeeeshhh", totalrm: 300 },
];

const transactions = () => {
  const [transactions, setTransactions] = useState([{}]);
  const format = useTime();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      setTransactions(res);
    };
    setTransactions(dummyData);

    // fetchData();
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions Week 1-7 Aug
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Cafe Name</td>
                <td className="pb-[37px] font-medium w-[8rem] text-center">
                  Total(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const { id, cafename, totalrm } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{id}.</td>
                      <td className="pb-6">{cafename}</td>
                      <td className="pb-6 text-center">{totalrm}</td>
                    </tr>
                  );
                })}
              <tr className="text-gray-500">
                <td></td>
                <td></td>
                <td className="pb-6 text-center">
                  <button className="py-1 px-7 text-black font-medium bg-[#FFD400] rounded-md">
                    Print
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default transactions;
