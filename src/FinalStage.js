import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import DemographicPDF from './PDF/DemographicPDF';
import { SurveyContext } from './App';

const styles = StyleSheet.create({
  docStyle: {
    width: "100%",
    alignSelf:'center',
    minHeight: "100vh",
  },

  page: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
  },
  section: {
    width: "100%",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function FinalStage() {
  const value = React.useContext(SurveyContext); 
  console.log(value);
  return (
    <div>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-md-12"
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: "#2da44e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <i className="fa fa-check fa-3x" style={{ color: "white" }}></i>
          </div>
          <p>
            <strong>END:</strong> Thank you for completing the survey. You can
            go ahead and download your responses in PDF.
          </p>

          <div className="col-md-12 container">
            <PDFViewer style={styles.docStyle}>
              <Document style={{ width: "100%" }}>
                <DemographicPDF user={value.user} data={value.demographic} />
                <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>Section #1</Text>
                  </View>
                  <View style={styles.section}>
                    <Text>Section #2</Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </div>

          <div className="col-md-3">
            <button
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i style={{ color: "white" }} className="fa fa-download"></i>{" "}
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
