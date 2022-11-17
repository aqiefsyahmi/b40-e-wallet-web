import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout } from "../../components";
import { getCafe } from "../../lib/getCafe";
import { useTime } from "../../hooks";
import { filteredDate } from "../../utils/handleTransactions";

const transactions = () => {
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    getCafe()
      .then(setTransactions)
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Cafe Owners)
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Date</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{data.cafe_name}</td>
                      <td className="pb-6 font-medium text-right">
                        <div>
                          <Link
                            href={`/transactions/details/cafe/${data.username}`}>
                            <a className="py-2 px-5 bg-[#E4E4E4] rounded-md transition duration-150 hover:bg-[#d1cfcf]">
                              Show Details
                            </a>
                          </Link>
                        </div>
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

export default transactions;
