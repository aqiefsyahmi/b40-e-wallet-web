import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import { getStudents } from "../lib/getStudents";

const addWallet = () => {
  const router = useRouter();
  const [students, setStudents] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudents();
      setStudents(res);
    };

    fetchData();
  });

  return (
    <Layout>
      <div className="mt-4 w-2/3 items-center">
        <form>
          <Input
            type="search"
            placeholder="Search for name, matric number, ic number"
          />
        </form>
        <div className="mt-6 font-medium">
          <p>
            Select All <input type="checkbox" />
          </p>
        </div>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="pt-4 pb-3 w-[7%]">Select</td>
                <td>Name</td>
                <td>Matric Number</td>
                <td>IC Number</td>
                <td>Balance</td>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } =
                    data;

                  return (
                    <tr key={i}>
                      <td className="py-1 text-center w-[7%]">
                        <input type="checkbox" />
                      </td>
                      <td>{student_name}</td>
                      <td>{matric_no}</td>
                      <td>{ic_no}</td>
                      <td>RM{wallet_amount}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <div className="w-[4rem]">
            <Input type="number" />
          </div>
          <Button
            onAction={() =>
              router.push("/dashboard", alert("Student Wallet Point Updated"))
            }
          >
            Add Point
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default addWallet;
