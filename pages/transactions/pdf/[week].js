import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";

import { DocumentTemplate } from "../../../components";
import { getTransactions } from "../../../lib/getTransactions";
import { displayTotal } from "../../../utils/handleTransactions";

const Pdf = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);

  //test date
  // const [ dateTime, setDateTime ] = useState([{}]);


  useEffect(() => {
    
    const fetchData = async () => {

      //test date
      // var dt = new Date();
      // document.getElementById('date-time').innerHTML = dt;

      const res = await getTransactions();

      //test date
      // setDateTime(displayTotal({data: 'date-time'}));

      setTransactions(displayTotal({ data: res, date: week }));
    };

    week !== undefined && fetchData();
  }, [week]);

  if (week !== undefined)
    return (
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <DocumentTemplate data={transactions} week={week} />
      </PDFViewer>
    );
};

export default Pdf;
