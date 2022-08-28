import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getTransactions } from "../lib/getTransactions";
import { useTime } from "../hooks";

const transactions = () => {
  const [transactions, setTransactions] = useState([{}]);
  const format = useTime();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      setTransactions(res);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="font-bold text-3xl">Cafe Owner Transaction Details</h1>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="pt-4 pb-3">Date</td>
                <td>Time</td>
                <td>Sender</td>
                <td>Recipient</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const { created_at, sender, recipient, amount } = data;
                  const formater = format(created_at);

                  return (
                    <tr key={i}>
                      <td className="py-1">{formater.date}</td>
                      <td>{formater.time}</td>
                      <td>{sender}</td>
                      <td>{recipient}</td>
                      <td>RM{parseInt(amount)}</td>
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
