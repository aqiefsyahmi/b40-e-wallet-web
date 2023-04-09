import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getSumamary } from "../lib/getSummary";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    students: undefined,
    cafe: undefined,
    transactions: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSumamary();
      setSummary(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="w-[60%]">
        <h1 className="ml-3 mb-2 text-xl">Summary</h1>
        <div className="flex gap-9 p-6 border rounded-md bg-white">
          <div className="flex-1">
            <div className="pb-2 uppercase text-sm font-semibold border-b-2 border-b-black">
              Total Student
            </div>
            <div className="mt-3 text-gray-600">
              <span className="text-black text-7xl font-semibold">
                {summary && summary.students}
              </span>{" "}
              students
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-2 uppercase text-sm font-semibold border-b-2 border-b-black">
              Total Cafe
            </div>
            <div className="mt-3 text-gray-600">
              <span className="text-black text-7xl font-semibold">
                {summary && summary.cafe}
              </span>{" "}
              cafes
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-2 uppercase text-sm font-semibold border-b-2 border-b-black">
              Total Transaction
            </div>
            <div className="mt-3 text-gray-600 ">
              <span className="text-black text-7xl font-semibold">
                {summary && summary.transactions}
              </span>{" "}
              transactions
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
