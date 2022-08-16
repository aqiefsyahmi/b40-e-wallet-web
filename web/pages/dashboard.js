import React from "react";
import Layout from "../components/Layout";

const dashboard = () => {
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
              <span className="text-black text-7xl font-semibold">54</span>{" "}
              students
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-2 uppercase text-sm font-semibold border-b-2 border-b-black">
              Total Cafe
            </div>
            <div className="mt-3 text-gray-600">
              <span className="text-black text-7xl font-semibold">6</span> cafes
            </div>
          </div>
          <div className="flex-1">
            <div className="pb-2 uppercase text-sm font-semibold border-b-2 border-b-black">
              Today Transaction
            </div>
            <div className="mt-3 text-gray-600 ">
              <span className="text-black text-7xl font-semibold">120</span>{" "}
              transactions
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dashboard;
