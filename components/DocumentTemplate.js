import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";

const DocumentTemplate = ({ data, week, dateTime }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={{ fontSize: 20, marginBottom: 24, borderBottom: 2, fontWeight: 100 }}>
          eKupon UniSZA Transactions {week}
        </Text>
        <View
          style={[
            styles.table,
            { fontSize: 11, borderTop: 1, borderRight: 1, borderLeft: 1 },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottom: 1
            }}
          >
            <Text style={[ styles.tableCell, { borderRight: 1 }]}>No.</Text>
            <Text
              style={[
                styles.tableCell2,
                { borderRight: 1, paddingLeft: 3 },
              ]}
            >
              Cafe Name
            </Text>
            <Text style={[styles.tableCell3]}>
              Total(RM)
            </Text>
          </View>
          {data.map(({ cafeName, total }, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottom: 1 }}>
              <Text style={[styles.tableCell, { borderRight: 1 }]}>
                {i + 1}.
              </Text>
              <Text
                style={[styles.tableCell2, { borderRight: 1, paddingLeft: 3 }]}
              >
                {cafeName}
              </Text>
              <Text style={[styles.tableCell3]}>{total}</Text>
            </View>
          ))}
        </View>
        <Text>{dateTime}</Text>
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

export default DocumentTemplate;
