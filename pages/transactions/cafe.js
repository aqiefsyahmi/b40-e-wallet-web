import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout } from "../../components";
import { getCafe } from "../../lib/getCafe";

const Transactions = () => {
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    getCafe()
      .then(setTransactions)
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Cafe Owners)
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Date</td>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6">{data.cafe_name}</td>
                    <td className="pb-6">
                      <Link
                        href={`/transactions/details/cafe/${data.username}`}>
                        Show Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
