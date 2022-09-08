import {
  Document,
  PDFViewer,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const data = [
  {
    id: 0,
    cafeName: "Spank Me",
    total: "2000.00",
  },
  {
    id: 1,
    cafeName: "Mummy Thicc",
    total: "220.00",
  },
  {
    id: 3,
    cafeName: "Daddy I Miss You",
    total: "10.00",
  },
  {
    id: 4,
    cafeName: "Goofy Ahh",
    total: "150.00",
  },
];

const MyDocument = () => (
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
          {data.map(({ id, cafeName, total }, i) => (
            <View key={id} style={{ flexDirection: "row", borderBottom: 2 }}>
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

function MyApp() {
  return (
    <PDFViewer
      style={{ backgroundColor: "tomato", width: "100vw", height: "100vh" }}
    >
      <MyDocument />
    </PDFViewer>
  );
}

export default MyApp;

// https://dev.to/finallynero/generating-pdf-documents-in-react-using-react-pdf-4ka7
