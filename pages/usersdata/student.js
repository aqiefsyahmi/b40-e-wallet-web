import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Buttons from "../../components/Buttons";
import { suspendStudent as updateSuspend } from "../../lib/setSuspendStudent";
import { getStudents } from "../../lib/getStudents";

const Student = () => {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudents();
      setStudents(res);
    };

    fetchData();
  }, []);

  const handleSuspend = async (id) => {
    if (confirm("Are you sure to suspend this account?")) {
      await updateSuspend(id, false);
      // Refresh the student list
      const res = await getStudents();
      setStudents(res);
    }
  };

  const handleUnsuspend = async (id) => {
    if (confirm("Are you sure to unsuspend this account?")) {
      await updateSuspend(id, true);
      // Refresh the student list
      const res = await getStudents();
      setStudents(res);
    }
  };

  // Filter Students Function
  const filteredStudents = students.filter(
    ({ student_name, matric_no, ic_no }) =>
      student_name.toLowerCase().includes(searchText.toLowerCase()) ||
      matric_no.toLowerCase().includes(searchText.toLowerCase()) ||
      ic_no.toLowerCase().includes(searchText.toLowerCase())
  );

  // Separate suspended and unsuspended students
  const suspendedStudents = filteredStudents.filter((student) => !student.active);
  const unsuspendedStudents = filteredStudents.filter((student) => student.active);

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
        {unsuspendedStudents.length > 0 && (
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="text-center w-[2rem] pb-[37px]"></th>
                <th className="text-left pb-[37px] font-medium">Name</th>
                <th className="text-left pb-[37px] font-medium">
                  Matric Number
                </th>
                <th className="text-left pb-[37px] font-medium">IC Number</th>
                <th className="text-left pb-[37px] font-medium">
                  Balance(RM)
                </th>
                <th className="text-left pb-[37px] font-medium">
                  Account Action
                </th>
              </tr>
            </thead>
            <tbody>
              {unsuspendedStudents.map((data, i) => {
                const { student_name, matric_no, ic_no, wallet_amount } = data;

                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6">{student_name}</td>
                    <td className="pb-6">{matric_no}</td>
                    <td className="pb-6">{ic_no}</td>
                    <td className="pb-6">{wallet_amount}</td>
                    <td className="pb-6">
                      <Buttons onAction={() => handleSuspend(matric_no)}>
                        Suspend
                      </Buttons>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )}

        {suspendedStudents.length > 0 && (
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <h2 className="text-lg font-bold mb-4">Suspended Students</h2>
            <table className="centertable">
              <thead>
                <tr>
                  <th className="text-center w-[2rem] pb-[37px]"></th>
                  <th className="text-left pb-[37px] font-medium">Name</th>
                  <th className="text-left pb-[37px] font-medium">
                    Matric Number
                  </th>
                  <th className="text-left pb-[37px] font-medium">
                    IC Number
                  </th>
                  <th className="text-left pb-[37px] font-medium">
                    Balance(RM)
                  </th>
                  <th className="text-left pb-[37px] font-medium">
                    Account Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {suspendedStudents.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{student_name}</td>
                      <td className="pb-6">{matric_no}</td>
                      <td className="pb-6">{ic_no}</td>
                      <td className="pb-6">{wallet_amount}</td>
                      <td className="pb-6">
                        <Buttons onAction={() => handleUnsuspend(matric_no)}>
                          Unsuspend
                        </Buttons>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Student;
