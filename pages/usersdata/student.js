import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { getStudents } from "../../lib/getStudents";

const Studentsdata = () => {
  const router = useRouter();
  const [students, setStudents] = useState([]);

  // Filter Students Function
  const [searchText, setSearchText] = useState("");
  const filteredstudent = students.filter(
    ({ student_name, matric_no, ic_no }) =>
      student_name.toLowerCase().includes(searchText.toLowerCase()) ||
      matric_no.toLowerCase().includes(searchText.toLowerCase()) ||
      ic_no.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudents();
      setStudents(res);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="mt-4 w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">Students Data</h1>
        <input
          className="border w-full px-2 py-2 border-gray-300 rounded-md"
          type="text"
          value={searchText}
          placeholder="Search for name, matric number or ic number"
          onChange={({ target }) => setSearchText(target.value)}
        />
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="text-center w-[2rem]"></th>
                <th className="text-left">Name</th>
                <th className="text-left">Matric Number</th>
                <th className="text-left">IC Number</th>
                <th className="text-left">Balance(RM)</th>
              </tr>
            </thead>
            <tbody>
              {filteredstudent &&
                filteredstudent.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } =
                    data;

                  return (
                    <tr key={i}>
                      <td className="text-center">{i + 1}.</td>
                      <td>{student_name}</td>
                      <td>{matric_no}</td>
                      <td>{ic_no}</td>
                      <td>{wallet_amount}</td>
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

export default Studentsdata;
