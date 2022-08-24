import { useEffect, useState } from "react";

import instance from "./api/instance";

import Layout from "../components/Layout";

const dashboard = ({ data }) => {
  const [summary, setSummary] = useState({
    students: 0,
    cafe: 0,
    transactions: 0,
  });

  useEffect(() => {
    console.warn(data);
  }, [data]);

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
              Today Transaction
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

// const students = await instance
//   .get("/api/students")
//   .then(res => res.data)
//   .catch(err => console.error(err));

const fetch = async () => {
  return JSON.stringify(cafe);
};

export async function getServerSideProps(context) {
  // const res = {
  //   students: students,
  //   cafe: cafe,
  //   transactions: transactions,
  // };
  const cafe = await instance
    .get("/api/cafe")
    .then(response => response.data)
    .catch(err => console.error(err));

  return {
    props: { data: cafe || "wekkk" },
  };
}

export default dashboard;
