import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import { getStudents } from "../lib/getStudents";
import { setWallet as updateWallet } from "../lib/setWallet";

const addWallet = () => {
  const router = useRouter();
  const [isCheckedAll, setIsCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [students, setStudents] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStudents();
      setStudents(res);
    };

    fetchData();
  }, []);

  const handleCheckedAll = (e) => {
    setIsCheckAll(!isCheckedAll);
    setIsChecked(students.map((data) => data.matric_no));

    if (isCheckedAll) setIsChecked([]);
  };

  const handleChecked = (e) => {
    const { checked, id } = e.target;
    setIsChecked([...isChecked, id]);

    if (!checked) setIsChecked(isChecked.filter((item) => item !== id));
  };

  const handleSetAmount = () => {
    const data = isChecked.map((matricNo) => {
      const fetchData = async () => {
        const res = await updateWallet(matricNo, amount);
        if (res == 200) return true;
      };
      return fetchData();
    });

    if (data) {
      alert("Successful");
      router.push("/dashboard");
    }
  };

  return (
    <Layout>
      <div className="mt-4 w-2/3 items-center">
        <form>
          <Input
            type="search"
            placeholder="Search by Name/ Matric Number/ IC Number"
          />
        </form>
        <div className="mt-6 font-medium">
          <p>
            Select All{" "}
            <input
              type="checkbox"
              checked={isCheckedAll}
              onChange={handleCheckedAll}
            />
          </p>
        </div>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="pt-4 pb-3 w-[7%]">Select</th>
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
                      <td className="py-1 text-center w-[7%]">
                        <input
                          type="checkbox"
                          id={matric_no}
                          checked={isChecked.includes(matric_no)}
                          onChange={handleChecked}
                        />
                      </td>
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
        <div className="mt-6 flex justify-end gap-2">
          <div className="w-[4rem]">
            <Input
              type="number"
              value={amount}
              onAction={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button onAction={handleSetAmount}>Add Point</Button>
        </div>
      </div>
    </Layout>
  );
};

export default addWallet;
