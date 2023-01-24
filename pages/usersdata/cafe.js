import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { getCafe } from "../../lib/getCafe";

const Cafe = () => {
  const router = useRouter();
  const [cafeOwners, setCafe] = useState([]);

  // Filter CafeOwners Function
  const [searchText, setSearchText] = useState("");
  const filteredcafeowners = cafeOwners.filter(
    ({ owner_name, username, cafe_name }) =>
      owner_name.toLowerCase().includes(searchText.toLowerCase()) ||
      username.toLowerCase().includes(searchText.toLowerCase()) ||
      cafe_name.toLowerCase().includes(searchText.toLowerCase())
  );

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
        <input
          className="border w-full px-2 py-2 border-gray-300 rounded-md"
          type="text"
          value={searchText}
          placeholder="Search for name, username or cafe name"
          onChange={({ target }) => setSearchText(target.value)}
        />
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="text-center w-[2rem] pb-[37px]"></th>
                <th className="text-left pb-[37px] font-medium">Name</th>
                <th className="text-left pb-[37px] font-medium">Username</th>
                <th className="text-left pb-[37px] font-medium">Cafe Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredcafeowners &&
                filteredcafeowners.map((data, i) => {
                  const { owner_name, username, cafe_name } = data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6">{owner_name}</td>
                      <td className="pb-6">{username}</td>
                      <td className="pb-6">{cafe_name}</td>
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

export default Cafe;
