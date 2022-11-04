import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, Button } from "../../components";
import { getTransactions } from "../../lib/getTransactions";
import { displayTotal } from "../../utils/handleTransactions";

const transactions = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      week && setTransactions(displayTotal({ data: res, date: week }));
    };

    fetchData();
  }, [week]);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">Transactions {week}</h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Cafe Name</td>
                <td className="pb-[37px] w-[14rem] font-medium text-center">
                  Total(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const { cafeName, total } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{cafeName}</td>
                      <td className="pb-6 font-medium text-center">{total}</td>
                      <div>
                          <Link href={`/transactions/`}>
                            <a className="py-2 px-5 font-medium text-center bg-[#E4E4E4] rounded-md transition duration-150 hover:bg-[#d1cfcf]">
                              Show Details
                            </a>
                          </Link>
                        </div>
                    </tr>
                  );
                })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center">
                  <Link href={`/transactions/pdf/${week}`}>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button>Print</Button>
                    </a>
                  </Link>
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
