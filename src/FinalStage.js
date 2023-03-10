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
import jsPDF from 'jspdf';

import { SurveyContext } from './App';
import ResponsePDF from './ResponsePDF';
import TobaccoPDF from './PDF/TobaccoPDF';
import AlcoholConsPDF from './PDF/AlcoholConsPDF';
import DietPDF from './PDF/DietPDF';
import PhysicalPDF from './PDF/PhysicalPDF';
import BloodPressurePDF from './PDF/BloodPressurePDF';
import CholesterolPDF from './PDF/CholesterolPDF';
import CardiovascularPDF from './PDF/CardiovascularPDF';
import GenderScreenPDF from './PDF/GenderScreenPDF';

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
              borderRadius: 50,
              padding: 20,
              backgroundColor: "#2da44e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <i className="fa fa-check fa-3x" style={{ color: "white" }}></i>
          </div>
          <h3><strong>COMPLETED !!!</strong></h3>
          <p>
             Thank you for completing the students medical survey.
          </p>

          <div className="col-md-12 container">
            {/* <ResponsePDF data={value}/> */}

            <PDFViewer style={styles.docStyle}>
              <Document>
                  <DemographicPDF data={value.complete_data} phoneno={value.phoneno} />
                  <TobaccoPDF data={value.complete_data}/>
                  <AlcoholConsPDF data={value.complete_data}/>
                  <DietPDF data={value.complete_data}/>
                  <PhysicalPDF data={value.complete_data}/>
                  <BloodPressurePDF data={value.complete_data}/>
                  <CholesterolPDF data={value.complete_data}/>
                  <CardiovascularPDF data={value.complete_data}/>
                  <GenderScreenPDF data={value.complete_data}/>
              </Document>
            </PDFViewer>
            
          </div>


          
        </div>
      </div>
    </div>
  );
}
