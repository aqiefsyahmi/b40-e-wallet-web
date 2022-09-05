import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout, Button, Input } from "../components";
import { getTransactions } from "../lib/getTransactions";
import { useTime } from "../hooks";

const dummyData = [
  {
    id: 1,
    studName: "Innocent Pretty Boy",
    matricNo: "01234",
    total: "100.00",
  },
  { id: 2, studName: "Nerd Boi", matricNo: "01345", total: "140.00" },
  { id: 3, studName: "GigaChad Kid", matricNo: "01456", total: "250.00" },
  { id: 4, studName: "Sheeesh Kid", matricNo: "01567", total: "300.00" },
  { id: 5, studName: "Harry Stopah", matricNo: "01678", total: "220.00" },
  { id: 4, studName: "Mike Maimunah", matricNo: "01789", total: "110.00" },
];

const transactions = () => {
  const router = useRouter();
  const [transactions, setTransactions] = useState([{}]);
  const format = useTime();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      setTransactions(res);
    };

    // fetchData();
    setTransactions(dummyData);
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Student)
        </h1>
        <Input type="search" placeholder="Search by Name/ Matric Number..." />
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Student Name</td>
                <td className="pb-[37px] font-medium">Matric No.</td>
                <td className="pb-[37px] w-[14rem] font-medium text-center">
                  Total(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((data, i) => {
                  const { id, studName, matricNo, total } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{id}.</td>
                      <td className="pb-6">{studName}</td>
                      <td className="pb-6">{matricNo}</td>
                      <td className="pb-6 font-medium text-center">{total}</td>
                    </tr>
                  );
                })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center">
                  <Button>Print</Button>
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
