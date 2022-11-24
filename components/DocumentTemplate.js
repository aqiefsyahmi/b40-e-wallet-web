import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { logo } from "../assets";
import { formatDate, formatTime } from "../utils/formatTime";
import { countTotal } from "../../mobile/utils/countTotal";

const DocumentTemplate = ({ data, week, realdate }) => {
  const total = countTotal(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <Image src={logo.src} style={{ width: 140 }} />
          <Text
            style={{
              paddingBottom: 16,
              marginBottom: 24,
              borderBottom: 1,
              fontSize: 12,
              fontWeight: 100,
            }}>
            eKupon UniSZA Transactions {week}
          </Text>
          <View
            style={[
              styles.table,
              { borderTop: 1, borderRight: 1, borderLeft: 1 },
            ]}>
            <View
              style={{
                flexDirection: "row",
                borderBottom: 1,
              }}>
              <Text
                style={[styles.column, styles.columnHeader, styles.column1]}>
                No.
              </Text>
              <Text
                style={[styles.column, styles.columnHeader, styles.column2]}>
                Transaction Id
              </Text>
              <Text
                style={[styles.column, styles.columnHeader, styles.column3]}>
                Sender
              </Text>
              <Text
                style={[styles.column, styles.columnHeader, styles.column4]}>
                Time
              </Text>
              <Text
                style={[styles.column, styles.columnHeader, styles.column5]}>
                Amount(RM)
              </Text>
            </View>
            {data?.map((transaction, i) => (
              <View key={i} style={styles.row}>
                <Text style={[styles.column, styles.column1]}>{i + 1}.</Text>
                <Text style={[styles.column, styles.column2]}>
                  {transaction.transaction_id}
                </Text>
                <Text style={[styles.column, styles.column3]}>
                  {transaction.student_name} ({transaction.sender})
                </Text>
                <Text style={[styles.column, styles.column4]}>
                  {formatDate(transaction.created_on)} -{" "}
                  {formatTime(transaction.created_at)}
                </Text>
                <Text style={[styles.column, styles.column5]}>
                  {transaction.amount}
                </Text>
              </View>
            ))}
            <View style={styles.row}>
              <Text style={[styles.column, { flex: 20, textAlign: "right" }]}>
                Total
              </Text>
              <Text style={[styles.column, styles.column5]}>{total}.00</Text>
            </View>
          </View>
          <Text style={{ marginTop: 24 }}>
            This document printed on {realdate}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  table: {
    flexWrap: "wrap",
    fontSize: 9,
  },
  row: {
    flexDirection: "row",
    borderBottom: 1,
  },
  column: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRight: 1,
    fontSize: 7,
  },
  columnHeader: {
    fontWeight: 700,
  },
  column1: {
    flex: 1,
    textAlign: "center",
  },
  column2: {
    flex: 7,
  },
  column3: {
    flex: 8,
  },
  column4: {
    flex: 3,
  },
  column5: {
    width: 50,
    textAlign: "center",
    borderRight: 0,
  },
  image: {
    width: "50%",
    padding: 10,
  },
});

export default DocumentTemplate;
