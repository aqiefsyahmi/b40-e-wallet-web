import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Layout, Button } from "../../components";
import {
  getOverallCafeTransactions,
  getOverallCafeTransactionsFilter,
} from "../../lib/getTransactions";
import { claim } from "../../lib/claim";
import Link from "next/link";

const AllCafe = () => {
  const [cafe, setCafe] = useState({});
  const [target, setTarget] = useState("all");
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);
  const selectRef = useRef(null);

  const onSelect = e => {
    let target = e.target.value;

    if (target === "all") {
      getOverallCafeTransactions()
        .then(data => {
          setCafe(data);
          setTarget("all");
        })
        .catch(err => err);
    }

    if (target === "week") {
      const startOfWeek = moment(moment().startOf("week")).format("YYYY-MM-DD");
      const endOfWeek = moment(moment().endOf("week")).format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(startOfWeek, endOfWeek)
        .then(data => {
          setCafe(data);
          setTarget("week");
        })
        .catch(err => {
          alert(
            `No transactions found for this week: ${startOfWeek}-${endOfWeek}`
          );
        });
    }

    if (target === "month") {
      const startOfWeek = moment(moment().startOf("month")).format(
        "YYYY-MM-DD"
      );
      const endOfWeek = moment(moment().endOf("month")).format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(startOfWeek, endOfWeek)
        .then(data => {
          setCafe(data);
          setTarget("month");
        })
        .catch(err => {
          alert("No transactions found for this month");
        });
    }

    if (target === "today") {
      const today = moment().format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(today, today)
        .then(data => {
          setCafe(data);
          setTarget("today");
        })
        .catch(err => {
          alert("No transactions found for today");
        });
    }

    if (target === "custom") {
      dateFromRef.current.focus();
    }
  };

  const onFind = () => {
    // change selected in select elem
    selectRef.current.value = "custom";

    getOverallCafeTransactionsFilter(
      dateFromRef.current.value,
      dateToRef.current.value
    )
      .then(data => {
        setCafe(data);
        setTarget(
          `custom?from=${dateFromRef.current.value}&to=${dateToRef.current.value}`
        );
      })
      .catch(err => {
        if (err.response.status == 400) {
          alert("No transaction found");
        }
      });
  };

  const onClaim = () => {
    let from = dateFromRef.current.value;
    let to = dateToRef.current.value;

    if (!from || !to) {
      alert("Please choose date");
      return;
    }

    if (confirm("Are you sure")) {
      claim(from, to)
        .then(() => {
          alert("Mark as claimed successfully");
        })
        .catch(err => {
          if (err.response.status == 404) {
            alert("Transactons not found");
          }
          if (err.response.status == 500) {
            alert("Server error");
          }
        });
    }
  };

  useEffect(() => {
    getOverallCafeTransactions()
      .then(data => {
        setCafe(data);
      })
      .catch(err => err);
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (All Cafe)
        </h1>
        <div className="flex justify-between gap-3 items-center mb-3">
          <div>
            <select
              ref={selectRef}
              onChange={onSelect}
              className="py-2 px-3 mr-2 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">Month</option>
              <option value="custom">Custom</option>
            </select>
            <Link href={`/transactions/pdf/cafe/${target}`}>
              <a target="_blank" rel="noopener noreferrer">
                <Button>Print</Button>
              </a>
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="py-2 px-3 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <label htmlFor="from" className="mr-2">
                From
              </label>
              <input type="date" id="from" ref={dateFromRef} />
            </span>
            <span className="py-2 px-3 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <label htmlFor="to" className="mr-2">
                To
              </label>
              <input type="date" id="to" ref={dateToRef} />
            </span>
            <Button onAction={onFind}>Find</Button>
          </div>
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
              {cafe?.transactions?.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}</td>
                    <td className="pb-6">{data.cafe_name}</td>
                    <td className="pb-6 text-center">
                      {data.total_transaction}
                    </td>
                    <td className="pb-6 text-center">{data.total_amount}</td>
                  </tr>
                );
              })}
              <tr className="text-gray-500 font-medium">
                <td colSpan={2} className="py-6 text-right">
                  Total
                </td>
                <td className="py-6 text-center">
                  {cafe?.overall?.sum_transaction}
                </td>
                <td className="py-6 text-center">
                  {cafe?.overall?.sum_amount}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="w-fit text-center">
                  <Button onAction={onClaim}>Mark as claimed</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AllCafe;
