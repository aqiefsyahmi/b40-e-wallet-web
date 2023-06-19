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
      <Page size="A4" orientation="landscape" style={styles.page}>
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
              <Text style={[styles.column, styles.column3]}>Cafe Address</Text>
              <Text style={[styles.column, styles.column4]}>Cafe Owner</Text>
              <Text style={[styles.column, styles.column5]}>Mobile No.</Text>
              <Text style={[styles.column, styles.column6]}>
                Bank Account No.
              </Text>
              <Text style={[styles.column, styles.column7]}>Bank Name</Text>
              <Text style={[styles.column, styles.column8]}>Transactions</Text>
              <Text style={[styles.column, styles.column9]}>Amount(RM)</Text>
            </View>
            {data?.transactions?.map((cafe, i) => (
              <View key={i} style={{ flexDirection: "row", borderBottom: 1 }}>
                <Text style={[styles.column, styles.column1]}>{i + 1}.</Text>
                <Text style={[styles.column, styles.column22]}>
                  {cafe.cafe_name}
                </Text>
                <Text style={[styles.column, styles.column33]}>
                  {cafe.cafe_address}
                </Text>
                <Text style={[styles.column, styles.column44]}>
                  {cafe.owner_name}
                </Text>
                <Text style={[styles.column, styles.column5]}>
                  {cafe.mobile_no}
                </Text>
                <Text style={[styles.column, styles.column6]}>
                  {cafe.account_no}
                </Text>
                <Text
                  style={[
                    styles.column,
                    styles.column77,
                    { textAlign: "center" },
                  ]}>
                  {cafe.bank_name}
                </Text>
                <Text style={[styles.column, styles.column8]}>
                  {cafe.total_transaction}
                </Text>
                <Text style={[styles.column, styles.column9]}>
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
                style={[
                  styles.column,
                  styles.column2,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[
                  styles.column,
                  styles.column3,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[
                  styles.column,
                  styles.column4,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[
                  styles.column,
                  styles.column5,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[
                  styles.column,
                  styles.column6,
                  { borderRight: 0 },
                ]}></Text>
              <Text
                style={[
                  styles.column,
                  styles.column7,
                  { textAlign: "right", flex: 3.28 },
                ]}>
                Total
              </Text>
              <Text style={[styles.column, styles.column8]}>
                {data?.overall?.sum_transaction}
              </Text>
              <Text style={[styles.column, styles.column9]}>
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
    flex: 0.7,
    textAlign: "center",
  },
  column2: {
    flex: 4,
    textAlign: "center",
  },
  column22: {
    flex: 4,
  },
  column3: {
    flex: 6,
    textAlign: "center",
  },
  column33: {
    flex: 6,
  },
  column4: {
    flex: 5,
    textAlign: "center",
  },
  column44: {
    flex: 5,
  },
  column5: {
    flex: 2.8,
    textAlign: "center",
  },
  column6: {
    flex: 4,
    textAlign: "center",
  },
  column7: {
    flex: 3,
    textAlign: "center",
  },
  column77: {
    flex: 3,
  },
  column8: {
    flex: 2.8,
    textAlign: "center",
  },
  column9: {
    flex: 3,
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
