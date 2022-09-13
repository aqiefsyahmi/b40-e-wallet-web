import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout, Button } from "../../components";
import { getTransactions } from "../../lib/getTransactions";
import { useTime } from "../../hooks";
import { displayTotal } from "../../utils/handleTransactions";

const dummyData = [
  { id: 1, cafeName: "Kafe Mamada", total: "100.00" },
  { id: 2, cafeName: "Pak Amid Cafe", total: "140.00" },
  { id: 3, cafeName: "GigaChad Cafe", total: "250.00" },
  { id: 4, cafeName: "Kafe Sheesh", total: "300.00" },
];

const transactions = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);
  const format = useTime();

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
                  const { id, cafeName, total } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{cafeName}</td>
                      <td className="pb-6 font-medium text-center">{total}</td>
                    </tr>
                  );
                })}
              <tr>
                <td></td>
                <td></td>
                <td className="text-center">
                  <Button onAction={() => router.push("/testpdf")}>
                    Print
                  </Button>
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
