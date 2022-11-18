import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import moment from "moment";

import { DocumentTemplate } from "../../../components";
import { getTransactionCafeByUsername } from "../../../lib/getTransactions";

const Pdf = () => {
  const router = useRouter();
  const { week, username } = router.query;
  const [transactions, setTransactions] = useState([{}]);
  const tarikh = moment().format("Do MMMM YYYY, hh:mm a"); //date

  useEffect(() => {
    if (week)
      getTransactionCafeByUsername(username)
        .then(setTransactions)
        .catch(err => console.log(err));
  }, [week, username]);

  if (week !== undefined)
    return (
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <DocumentTemplate data={transactions} week={week} realdate={tarikh} />
      </PDFViewer>
    );
};

export default Pdf;
