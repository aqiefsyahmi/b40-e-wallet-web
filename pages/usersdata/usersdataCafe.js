import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { getStudents } from "../../lib/getStudents";

const addWallet = () => {
  const router = useRouter();
  const [students, setStudents] = useState([]);

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
        <form>
          <Input
            type="search"
            placeholder="Search for name, matric number, ic number"
          />
        </form>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Matric Number</th>
                <th className="text-left">IC Number</th>
                <th className="text-left">Balance(RM)</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } =
                    data;

                  return (
                    <tr key={i}>
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

export default addWallet;
