import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { logo } from "../assets";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  table: {
    flexWrap: "wrap",
  },
  tableCell: {
    flex: 0.2,
    textAlign: "center",
  },
  tableCell2: {
    flex: 4,
  },
  tableCell3: {
    flex: 2,
    textAlign: "center",
  },
  tableCell4: {
    textAlign: "right",
    flex: 4.21,
  },
  image: {
    width: "50%",
    padding: 10
  },
});

const stylesTitle = StyleSheet.create({
  Text: {
    fontWeight: 700,
  },
});

const DocumentTemplate = ({ data, week, realdate }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text > </Text>
      <Image src={logo.src} style={{width: 140}} />
      <View style={styles.table}>
        <Text style={{  borderTop: 1 }}>
        </Text>
        <Text > </Text>
        <view style={stylesTitle.Text}>
          <Text style={{ fontWeight: 'bold', fontSize: 8, marginBottom: 20 }}>
            EKUPON TRANSACTIONS ( {week} )
          </Text>
        </view>
        <View
          style={[
            styles.table,
            { fontSize: 8, borderTop: 1, borderRight: 1, borderLeft: 1 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottom: 1
            }}
          >
            <Text style={[ styles.tableCell, { borderRight: 1 }]}>NO.</Text>
            <Text
              style={[
                styles.tableCell2,
                { borderRight: 1, paddingLeft: 3 },
              ]}
            >
              CAFE NAME
            </Text>
            <Text style={[styles.tableCell3]}>
              TOTAL(RM)
            </Text>
          </View>
          {data.map(({ cafeName, total }, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottom: 1 }}>
              <Text style={[styles.tableCell, { borderRight: 1 }]}>
                {i + 1}
              </Text>
              <Text
                style={[styles.tableCell2, { borderRight: 1, paddingLeft: 3 }]}
              >
                {cafeName}
              </Text>
              <Text style={[styles.tableCell3]}>{total}</Text>
            </View>
          ))}
          {/* {data.map(({ total }) => (
          <View
            style={{
              flexDirection: "row",
              borderBottom: 1
            }}
          >
            <Text
              style={[
                styles.tableCell4,
                { borderRight: 1, paddingLeft: 3 },
              ]}
            >
              TOTAL
            </Text>
            <Text style={[styles.tableCell3]}>
              {total}
            </Text>
          </View>
          ))} */}
        </View>
        <Text> </Text>
        <Text style={{ fontSize: 8 }}>This document printed on {realdate}.</Text>
      </View>
    </Page>
  </Document>
);

export default DocumentTemplate;
