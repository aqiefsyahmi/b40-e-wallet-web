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
  // <Document>
  //   <Page size="A4" style={styles.page}>
  //     <Text style={{ fontSize: 24, marginBottom: 24 }}>
  //       Transactions 1 - 7 Aug
  //     </Text>
  //     <View style={[styles.table, { border: "2pt", paddingTop: "15pt" }]}>
  //       <View
  //         style={{
  //           borderBottom: "2pt",
  //           flexDirection: "row",
  //           marginBottom: "12pt",
  //         }}
  //       >
  //         <Text style={[styles.tableCell]}>No.</Text>
  //         <Text style={[styles.tableCell2, { fontWeight: "bold" }]}>
  //           Cafe Name
  //         </Text>
  //         <Text style={[styles.tableCell3, { fontWeight: "bold" }]}>
  //           Total(RM)
  //         </Text>
  //       </View>
  //       {data.map(({ id, cafeName, total }, i) => (
  //         <View key={id} style={{ flexDirection: "row" }}>
  //           <Text style={[styles.tableCell]}>{i + 1}.</Text>
  //           <Text style={[styles.tableCell2, { borderLeft: "2pt" }]}>
  //             {cafeName}
  //           </Text>
  //           <Text style={[styles.tableCell3]}>{total}</Text>
  //         </View>
  //       ))}
  //     </View>
  //   </Page>
  // </Document>
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <Text style={{ fontSize: 24, marginBottom: 24, borderBottom: 2 }}>
          Transactions 1 - 7 Aug
        </Text>
        <View style={[styles.table, { paddingTop: "15pt" }]}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: "12pt",
            }}
          >
            <Text style={[styles.tableCell]}>No.</Text>
            <Text style={[styles.tableCell2, { fontWeight: "bold" }]}>
              Cafe Name
            </Text>
            <Text style={[styles.tableCell3, { fontWeight: "bold" }]}>
              Total(RM)
            </Text>
          </View>
          {data.map(({ id, cafeName, total }, i) => (
            <View key={id} style={{ flexDirection: "row" }}>
              <Text style={[styles.tableCell]}>{i + 1}.</Text>
              <Text style={[styles.tableCell2]}>{cafeName}</Text>
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
    marginBottom: 16,
  },
  tableCell2: {
    flex: 4,
    marginBottom: 16,
  },
  tableCell3: {
    flex: 2,
    textAlign: "center",
    marginBottom: 16,
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
