import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import moment from "moment";

import { DocumentTemplate } from "../../../components";
import { getTransactions } from "../../../lib/getTransactions";
import { displayTotal } from "../../../utils/handleTransactions";

const Pdf = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);

  var tarikh = moment().format('Do MMMM YYYY, h:mm a'); //date

  useEffect(() => {
    
    const fetchData = async () => {

      const res = await getTransactions();

      setTransactions(displayTotal({ data: res, date: week }));
    };

    week !== undefined && fetchData();
  }, [week]);

  if (week !== undefined)
    return (
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <DocumentTemplate data={transactions} week={week} realdate={tarikh} />
      </PDFViewer>
    );
};

export default Pdf;
