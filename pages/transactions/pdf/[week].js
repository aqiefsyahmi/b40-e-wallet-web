import { useState, useEffect } from "react";
import {
  Document,
  PDFViewer,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { getTransactions } from "../../../lib/getTransactions";
import { displayTotal } from "../../../utils/handleTransactions";

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={{ fontSize: 24, marginBottom: 24, borderBottom: 2 }}>
          Transactions 1 - 7 Aug
        </Text>
        <View
          style={[
            styles.table,
            { borderTop: 2, borderRight: 2, borderLeft: 2 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottom: 2,
            }}
          >
            <Text style={[styles.tableCell, { borderRight: 2 }]}>No.</Text>
            <Text
              style={[
                styles.tableCell2,
                { fontWeight: "bold", borderRight: 2, paddingLeft: 3 },
              ]}
            >
              Cafe Name
            </Text>
            <Text style={[styles.tableCell3, { fontWeight: "bold" }]}>
              Total(RM)
            </Text>
          </View>
          {data.map(({ cafeName, total }, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottom: 2 }}>
              <Text style={[styles.tableCell, { borderRight: 2 }]}>
                {i + 1}.
              </Text>
              <Text
                style={[styles.tableCell2, { borderRight: 2, paddingLeft: 3 }]}
              >
                {cafeName}
              </Text>
              <Text style={[styles.tableCell3]}>{total}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  table: {
    flexWrap: "wrap",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  tableCell2: {
    flex: 4,
  },
  tableCell3: {
    flex: 2,
    textAlign: "center",
  },
});

const Pdf = () => {
  const router = useRouter();
  const { week } = router.query;
  const [transactions, setTransactions] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTransactions();
      week && setTransactions(displayTotal({ data: res, date: week }));
    };

    fetchData();
  }, [week]);

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <MyDocument data={transactions} />
    </PDFViewer>
  );
};

export default Pdf;

// https://dev.to/finallynero/generating-pdf-documents-in-react-using-react-pdf-4ka7
