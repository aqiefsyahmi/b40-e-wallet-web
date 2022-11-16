// import { useEffect, useState } from "react";
// import Link from "next/link";

// import { Layout, DateTime } from "../../../../components";
// import { getTransactions } from "../../../../lib/getTransactions";
// import { useTime } from "../../../../hooks";
// import { filteredDate } from "../../../../utils/handleTransactions";

// const transactions = () => {
//   const [transactions, setTransactions] = useState([{}]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getTransactions();

//       var dt = new Date();
//       document.getElementById('date-time').innerHTML=dt;

//       setTransactions(filteredDate({ data: res }));
//     };

//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="w-2/3 items-center">
//         <h1 className="mb-[30px] font-bold text-3xl">
//           Transaction Student Details
//         </h1>
//         <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
//           <table className="centertable">
//             <thead>
//               <tr>
//                 <td className="w-[6rem]"></td>
//                 <td className="pb-[37px] font-medium">Student Name</td>
//                 <td className="pb-[37px] font-medium">Recepient</td>
//                 <td className="w-[8rem]">Payment(RM)</td>
//                 <td className="w-[8rem]">Date</td>
//                 <td className="w-[8rem]">Time</td>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions &&
//                 transactions.map((data, i) => {

//                   return (
//                     <tr className="text-gray-500">
//                       <td className="pb-6 pr-4 text-center">{i + 1}.</td>
//                       <td className="pb-6">Nibba</td>
//                       <td className="pb-6">Auuuughhh Cafe</td>
//                       <td className="pb-6">2.00</td>
//                       <td className="pb-6">6/9/1969</td>
//                       <td className="pb-6">11:59:59</td>
//                     </tr>
//                   );
//                 })}
//             </tbody>
//           </table>
//           <p>Current Date and Time is <span id='date-time'></span>.</p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default transactions;

import { useEffect, useState } from "react";
import Link from "next/link";

import { Layout, DateTime } from "../../../../components";
import { getTransactions } from "../../../../lib/getTransactions";
import { useTime } from "../../../../hooks";
import { filteredDate } from "../../../../utils/handleTransactions";

const transactions = () => {

  return (
    <Layout>
      <div className="w-2/3 items-center">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transaction Student Details
        </h1>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <td className="w-[6rem]"></td>
                <td className="pb-[37px] font-medium">Student Name</td>
                <td className="pb-[37px] font-medium">Recepient</td>
                <td className="w-[8rem]">Payment(RM)</td>
                <td className="w-[8rem]">Date</td>
                <td className="w-[8rem]">Time</td>
              </tr>
            </thead>
            <tbody>

                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Kafe Abu</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">3rd November 2022</td>
                      <td className="pb-6">7:07 am</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Zaidi In Da Hause</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">3rd November 2022</td>
                      <td className="pb-6">10:07 am</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Atik Cafe</td>
                      <td className="pb-6">1.00</td>
                      <td className="pb-6">10th November 2022</td>
                      <td className="pb-6">12:07 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Lapar Cafe</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">11th November 2022</td>
                      <td className="pb-6">10:07 am</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Lapar Cafe</td>
                      <td className="pb-6">1.00</td>
                      <td className="pb-6">11th November 2022</td>
                      <td className="pb-6">1:12 pm</td>
                    </tr>
                    <tr className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">1.</td>
                      <td className="pb-6">Muhd Amir</td>
                      <td className="pb-6">Aiman Tak Kesah Cafe</td>
                      <td className="pb-6">2.00</td>
                      <td className="pb-6">13th November 2022</td>
                      <td className="pb-6">4:30 pm</td>
                    </tr>

            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default transactions;
