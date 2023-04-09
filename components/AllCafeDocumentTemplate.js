import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { logo } from "../assets";

const AllCafeDocumentTemplate = ({ data, range, currentDate }) => {
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
            eKupon@UniSZA Transactions {`(${range})`}
          </Text>
          <View
            style={[
              styles.table,
              { fontSize: 11, borderTop: 1, borderRight: 1, borderLeft: 1 },
            ]}>
            <View
              style={{
                flexDirection: "row",
                borderBottom: 1,
              }}>
              <Text style={[styles.column, styles.column1]}>No.</Text>
              <Text style={[styles.column, styles.column2]}>Cafe Name</Text>
              <Text style={[styles.column, styles.column3]}>Transactions</Text>
              <Text style={[styles.column, styles.column4]}>Amount(RM)</Text>
            </View>
            {data?.transactions?.map((cafe, i) => (
              <View key={i} style={{ flexDirection: "row", borderBottom: 1 }}>
                <Text style={[styles.column, styles.column1]}>{i + 1}.</Text>
                <Text style={[styles.column, styles.column2]}>
                  {cafe.cafe_name}
                </Text>
                <Text style={[styles.column, styles.column3]}>
                  {cafe.total_transaction}
                </Text>
                <Text style={[styles.column, styles.column4]}>
                  {cafe.total_amount}
                </Text>
              </View>
            ))}
            <View style={{ flexDirection: "row", borderBottom: 1 }}>
              <Text
                style={[
                  styles.column,
                  styles.column1,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[styles.column, styles.column2, { textAlign: "right" }]}>
                Total
              </Text>
              <Text style={[styles.column, styles.column3]}>
                {data?.overall?.sum_transaction}
              </Text>
              <Text style={[styles.column, styles.column4]}>
                {data?.overall?.sum_amount}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 11, marginTop: 24 }}>
            This document printed on {currentDate}
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
  },
  column: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRight: 1,
    fontSize: 10,
  },
  column1: {
    // width: 38,
    flex: 1,
    textAlign: "center",
  },
  column2: {
    flex: 8,
  },
  column3: {
    flex: 2,
    textAlign: "center",
  },
  column4: {
    flex: 2,
    textAlign: "center",
    borderRight: 0,
  },
  tableCell4: {
    textAlign: "right",
    flex: 4.21,
  },
  image: {
    width: "50%",
    padding: 10,
  },
});

export default AllCafeDocumentTemplate;
