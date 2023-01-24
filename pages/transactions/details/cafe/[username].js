import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import moment from "moment";
import { Layout, Button } from "../../../../components";

import {
  getTransactionCafeByUsername,
  getTransactionsByRangeDate,
} from "../../../../lib/getTransactions";

import { formatDate, formatTime } from "../../../../utils/formatTime";
import { countTotal } from "../../../../utils/countTotal";

const CafeTransaction = () => {
  const router = useRouter();
  const { username } = router.query;
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [selects, setSelects] = useState({ value: "all" });
  const [error, setError] = useState(false);
  const [date, setDate] = useState([" ", " "]);
  const dateFromRef = useRef();
  const dateToRef = useRef();

  const onFilterDate = () => {
    const from = dateFromRef.current.value;
    const to = dateToRef.current.value;

    getTransactionsByRangeDate(username, from, to)
      .then(setTransactions)
      .then(() => setDate([from, to]))
      .then(() => setError(false))
      .catch(() => setError(true));
  };

  const fetchTransactionList = (from, to) => {
    getTransactionsByRangeDate(username, from, to)
      .then(setTransactions)
      .then(() => setDate([from, to]))
      .then(() => setError(false))
      .catch(() => setError(true));
  };

  const onSelect = e => {
    let value = e.target.value;
    setSelects({ value: value });

    if (value === "all") {
      getTransactionCafeByUsername(username)
        .then(setTransactions)
        .then(() => setDate(["all", "all"]))
        .then(() => setError(false))
        .catch(err => console.log(err));
    }

    if (value === "today") {
      const today = moment().format("YYYY-MM-DD");
      fetchTransactionList(today, today);
    }

    if (value === "week") {
      const start = moment().startOf("week").format("YYYY-MM-DD");
      const end = moment().endOf("week").format("YYYY-MM-DD");

      fetchTransactionList(start, end);
    }

    if (value === "month") {
      const start = moment().startOf("month").format("YYYY-MM-DD");
      const end = moment().endOf("month").format("YYYY-MM-DD");

      fetchTransactionList(start, end);
    }
  };

  useEffect(() => {
    if (username)
      getTransactionCafeByUsername(username)
        .then(res => {
          const totalAmount = countTotal(res);

          setTransactions(res);
          setDate(["all", "all"]);
          setTotal(`${totalAmount}.00`);
        })
        .catch(() => setError(true));
  }, [username]);

  return (
    <Layout>
      <div className="w-2/3 items-center my-6">
        <h1 className="mb-6 font-bold text-3xl">
          {transactions[0]?.cafe_name}
        </h1>
        <div className="flex justify-between gap-3 items-center mb-3">
          <div>
            <select
              value={selects.value}
              onChange={onSelect}
              className="py-2 px-3 mr-2 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
            <Link
              href={`/transactions/pdf/${username}?from=${date[0]}&to=${date[1]}`}>
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
            <Button onAction={onFilterDate}>Find</Button>
          </div>
        </div>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Sender</td>
                <td className="pb-[37px] font-medium">Date</td>
                <td className="pb-[37px] font-medium text-center">
                  Amount(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {!error &&
                transactions?.map((data, i) => {
                  return (
                    <tr className="text-gray-500" key={i}>
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">
                        {data.student_name} ({data.sender})
                      </td>
                      <td className="pb-6">
                        {formatDate(data.created_on)} -{" "}
                        {formatTime(data.created_at)}
                      </td>
                      <td className="pb-6 text-center">{data.amount}</td>
                    </tr>
                  );
                })}
              {!error && (
                <tr>
                  <td className="pb-6 text-right font-medium" colSpan={3}>
                    Total
                  </td>
                  <td className="pb-6 text-center font-medium">{total}</td>
                </tr>
              )}
            </tbody>
            {error && (
              <tr className="text-gray-500">
                <td className="pb-6 pr-4 text-center">1.</td>
                <td className="pb-6">Not found</td>
                <td className="pb-6">Not found</td>
                <td className="pb-6 text-center">Not found</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default CafeTransaction;
