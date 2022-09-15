import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { getCafe } from "../../lib/getCafe";

const cafeownersdata = () => {
  const router = useRouter();
  const [cafeOwners, setCafe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCafe();
      setCafe(res);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="mt-4 w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">Cafe Owners Data</h1>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="text-center w-[2rem]"></th>
                <th className="text-left">Name</th>
                <th className="text-left">Username</th>
                <th className="text-left">Cafe Name</th>
                <th className="text-left">Password</th>
              </tr>
            </thead>
            <tbody>
              {cafeOwners &&
                cafeOwners.map((data, i) => {
                  const { owner_name, username, cafe_name, password } = data;

                  return (
                    <tr key={i}>
                      <td className="text-center">{i + 1}.</td>
                      <td>{owner_name}</td>
                      <td>{username}</td>
                      <td>{cafe_name}</td>
                      <td>{password}</td>
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

export default cafeownersdata;
