import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout } from "../../components";
import { getTransactions } from "../../lib/getTransactions";
import { useTime } from "../../hooks";

const dummyData = [
  { id: 1, date: "1 Aug - 7 Aug", showmore: "Show More" },
  { id: 2, date: "8 Aug - 14 Aug", showmore: "Show More" },
  { id: 3, date: "15 Aug - 21 Aug", showmore: "Show More" },
  { id: 4, date: "22 Aug - 28 Aug", showmore: "Show More" },
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
          Transactions List (Cafe Owners)
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Date</td>
                <td className="w-[8rem]"></td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const { id, date, showmore } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{id}.</td>
                      <td className="pb-6">{date}</td>
                      <td className="pb-6 font-medium">
                        <div>
                          <Link href={`/transactions/${date}`}>
                            <a className="py-2 px-5 bg-[#E4E4E4] rounded-md">
                              {showmore}
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
