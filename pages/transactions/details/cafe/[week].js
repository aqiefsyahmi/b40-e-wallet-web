import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, DateTime } from "../../../../components";
import { getTransactions } from "../../../../lib/getTransactions";
import { useTime } from "../../../../hooks";
import { allstudent } from "../../../../utils/handleTransactions";

const transactions = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      week && setTransactions(allstudent({ data: res, date: week }));
    };

    fetchData();
  }, [week]);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transaction Cafe Details{week}
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Cafe Name</td>
                <td className="pb-[37px] font-medium">Sender</td>
                <td className="pb-[37px] w-[8rem] font-medium">Payment(RM)</td>
                <td className="pb-[37px] w-[8rem] font-medium">Date</td>
                <td className="pb-[37px] w-[8rem] font-medium">Time</td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const {cafeName, date} = data;

                  return (
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{cafeName}</td>
                      <td className="pb-6">Nibba</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">6/9/1969</td>
                      <td className="pb-6">11:59:59</td>
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
