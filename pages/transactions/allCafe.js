import React from "react";
import { Layout, Button } from "../../components";

// todo
// buat first day of week jadi ahad & last day of week jdi sabtu
// https://stackoverflow.com/questions/57799597/moment-js-set-week-start-on-monday

const AllCafe = () => {
  return (
    <Layout>
      <div className="w-2/3 items-center my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (All Cafe)
        </h1>
        <div className="mb-3">
          <select
            // value={selects.value}
            // onChange={onSelect}
            className="py-2 px-3 mr-2 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <option value="today">Today</option>
            <option value="month">Month</option>
          </select>
          <select
            // value={selects.value}
            // onChange={onSelect}
            className="py-2 px-3 mr-2 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <option>Choose week</option>
            <option value="week1">Week 1</option>
            <option value="week2">Week 2</option>
            <option value="week3">Week 3</option>
            <option value="week4">Week 4</option>
          </select>
          {/* <Link
            href={`/transactions/pdf/${username}?from=${date[0]}&to=${date[1]}`}>
            <a target="_blank" rel="noopener noreferrer"> */}
          <Button>Print</Button>
          {/* </a>
          </Link> */}
        </div>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Cafe</td>
                <td className="pb-[37px] font-medium text-center">
                  Transaction
                </td>
                <td className="pb-[37px] font-medium text-center">Total(RM)</td>
              </tr>
            </thead>
            <tbody>
              {/* {transactions?.map((data, i) => { */}
              {/* return ( */}
              <tr className="text-gray-500">
                <td className="pb-6 pr-4 text-center">1</td>
                <td className="pb-6">Cafe 1</td>
                <td className="pb-6 text-center">2</td>
                <td className="pb-6 text-center">4</td>
              </tr>
              {/* ); */}
              {/* })} */}
              <tr className="text-gray-500">
                <td colSpan={2} className="py-6 text-right">
                  Total
                </td>
                <td className="py-6 text-center">2</td>
                <td className="py-6 text-center">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AllCafe;
