import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";

const DocumentTemplate = ({ data, week }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={{ fontSize: 24, marginBottom: 24, borderBottom: 2 }}>
          Transactions {week}
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
            <Text style={[ styles.tableCell, { borderRight: 2 }]}>No.</Text>
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

export default DocumentTemplate;
