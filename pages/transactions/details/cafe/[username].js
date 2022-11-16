// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// import { Layout, DateTime } from "../../../../components";

// //get cafe data
// import { getCafe } from "../../../../lib/getCafe";
// import { getStudents } from "../../../../lib/getStudents";

// const cafedata = () => {
//   const router = useRouter();
//   const { username } = router.query;
//   const [cafeOwners, setCafe] = useState([]);

//   // Filter CafeOwners Function
//   const [searchText, setSearchText] = useState("");
//   const filteredcafeowners = cafeOwners.filter(
//     ({ username }) =>
//     username.toLowerCase().includes(searchText.toLowerCase())
//    );

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getCafe();
//       setCafe(res);
//     };

//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="w-2/3 items-center">
//         <h1 className="mb-[30px] font-bold text-3xl">
//           Transaction Cafe Details{username}
//         </h1>
//         <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
//           <table className="centertable">
//             <thead>
//               <tr>
//                 <td className="w-[6rem]"></td>
//                 <td className="pb-[37px] font-medium">Cafe Name</td>
//                 <td className="pb-[37px] font-medium">Sender</td>
//                 <td className="pb-[37px] w-[8rem] font-medium">Payment(RM)</td>
//                 <td className="pb-[37px] w-[8rem] font-medium">Date</td>
//                 <td className="pb-[37px] w-[8rem] font-medium">Time</td>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredcafeowners &&
//                 filteredcafeowners.map((data, i) => {
//                   const {cafe_name, username, date} = data;

//                   return (
//                     <tr className="text-gray-500">
//                       <td className="pb-6 pr-4 text-center">{i + 1}.</td>
//                       <td className="pb-6">{cafe_name}</td>
//                       <td className="pb-6">{username}</td>
//                       <td className="pb-6">2.00</td>
//                       <td className="pb-6">6/9/1969</td>
//                       <td className="pb-6">11:59:59</td>
//                     </tr>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default cafedata;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, DateTime } from "../../../../components";

//get cafe data
import { getCafe } from "../../../../lib/getCafe";
import { getStudents } from "../../../../lib/getStudents";

const cafedata = () => {
  const router = useRouter();
  const { username } = router.query;
  const [cafeOwners, setCafe] = useState([]);

  // Filter CafeOwners Function
  // const [searchText, setSearchText] = useState("");
  // const filteredcafeowners = cafeOwners.filter(
  //   ({ username }) =>
  //   username.toLowerCase().includes(searchText.toLowerCase())
  //  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getCafe();
  //     setCafe(res);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transaction Cafe Details
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Cafe Name</td>
                <td className="pb-[37px] font-medium">Sender</td>
                <td className="pb-[37px] w-[8rem] font-medium">Payment(RM)</td>
                <td className="pb-[37px] w-[8rem] font-medium">Date</td>
                <td className="pb-[37px] w-[8rem] font-medium">Time</td>
              </tr>
            </thead>
            <tbody>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Muhd Haziq</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">3rd November 2022</td>
                      <td className="pb-6">2:09 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Siti Fatimah</td>
                      <td className="pb-6">1.00</td>
                      <td className="pb-6">10th November 2022</td>
                      <td className="pb-6">5:09 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Hazique Aiman</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">11th November 2022</td>
                      <td className="pb-6">10:12 am</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Muhd Haziq</td>
                      <td className="pb-6">1.00</td>
                      <td className="pb-6">13th November 2022</td>
                      <td className="pb-6">12:09 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Muhammad Tarmizi</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">13th November 2022</td>
                      <td className="pb-6">3:12 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Aqief SHESHH</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">20th November 2022</td>
                      <td className="pb-6">12:12 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Mamada Cafe</td>
                      <td className="pb-6">Aqief SHESHH</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">20th November 2022</td>
                      <td className="pb-6">6:12 pm</td>
                    </tr>

            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default cafedata;
