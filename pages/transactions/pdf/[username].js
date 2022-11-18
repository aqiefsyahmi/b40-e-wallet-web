import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import moment from "moment";

import { DocumentTemplate } from "../../../components";
import {
  getTransactionCafeByUsername,
  getTransactionsByRangeDate,
} from "../../../lib/getTransactions";
import { formatDate } from "../../../utils/formatTime";

const Pdf = () => {
  const router = useRouter();
  const { from, to, username } = router.query;
  const [transactions, setTransactions] = useState([{}]);
  const [date, setDate] = useState();
  const tarikh = moment().format("Do MMMM YYYY, hh:mm a"); //date

  useEffect(() => {
    if (from) {
      if (from == "all") {
        getTransactionCafeByUsername(username)
          .then(setTransactions)
          .catch(err => console.log(err));

        setDate("");
        return;
      }

      setDate(`${formatDate(from)} - ${formatDate(to)}`);

      getTransactionsByRangeDate(username, from, to)
        .then(setTransactions)
        .catch(err => console.log(err));
    }
  }, [from, to, username]);

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <DocumentTemplate data={transactions} week={date} realdate={tarikh} />
    </PDFViewer>
  );
};

export default Pdf;
