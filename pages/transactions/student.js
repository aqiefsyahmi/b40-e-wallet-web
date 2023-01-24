import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout } from "../../components";
import { getStudents } from "../../lib/getStudents";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Filter Student
  const [searchText, setSearchText] = useState("");
  const filteredstudent = transactions.filter(
    ({ student_name, matric_no }) =>
      student_name.toLowerCase().includes(searchText.toLowerCase()) ||
      matric_no.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    getStudents()
      .then(setTransactions)
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Students)
        </h1>
        <input
          className="border w-full px-2 py-2 border-gray-300 rounded-md"
          type="text"
          value={searchText}
          placeholder="Search by Name/ Matric Number..."
          onChange={({ target }) => setSearchText(target.value)}
        />

        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Student Name</td>
              </tr>
            </thead>
            <tbody>
              {filteredstudent?.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6">
                      {data.student_name} ({data.matric_no})
                    </td>
                    <td className="pb-6">
                      <Link
                        href={`/transactions/details/student/${data.matric_no}`}>
                        Show Details
                      </Link>
                    </td>
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

export default Transactions;
