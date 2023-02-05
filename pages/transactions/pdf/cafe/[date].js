import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PDFViewer } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import moment from "moment";

import { AllCafeDocumentTemplate } from "../../../../components";
import {
  getOverallCafeTransactions,
  getOverallCafeTransactionsFilter,
} from "../../../../lib/getTransactions";
import { formatDate } from "../../../../utils/formatTime";

const Pdf = () => {
  const router = useRouter();
  const params = router.query;
  const [cafe, setCafe] = useState({});
  const [range, setRange] = useState("");
  const currDate = moment().format("DD/MM/YYYY, hh:mma"); //date

  useEffect(() => {
    if (params?.date === "all") {
      getOverallCafeTransactions()
        .then(data => {
          setCafe(data);
          setRange("All");
        })
        .catch(err => err);
    }

    if (params?.date === "week") {
      const startOfWeek = moment(moment().startOf("week")).format("YYYY-MM-DD");
      const endOfWeek = moment(moment().endOf("week")).format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(startOfWeek, endOfWeek)
        .then(data => {
          setCafe(data);
          setRange(`${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`);
        })
        .catch(err => err);
    }

    if (params?.date === "month") {
      const startOfMonth = moment(moment().startOf("month")).format(
        "YYYY-MM-DD"
      );
      const endOfMonth = moment(moment().endOf("month")).format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(startOfMonth, endOfMonth)
        .then(data => {
          setCafe(data);
          setRange(`${formatDate(startOfMonth)} - ${formatDate(endOfMonth)}`);
        })
        .catch(err => err);
    }

    if (params?.date === "today") {
      const today = moment().format("YYYY-MM-DD");

      getOverallCafeTransactionsFilter(today, today)
        .then(data => {
          setCafe(data);
          setRange(today);
        })
        .catch(err => err);
    }

    if (params?.date === "custom") {
      getOverallCafeTransactionsFilter(params?.from, params?.to)
        .then(data => {
          setCafe(data);
          setRange(`${params?.from}-${params?.to}`);
        })
        .catch(err => err);
    }
  }, [params]);

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <AllCafeDocumentTemplate
        data={cafe}
        range={range}
        currentDate={currDate}
      />
    </PDFViewer>
  );
};

export default Pdf;
