import React from 'react'

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import logo from "../icon.png";
import { SurveyContext } from '../App';
import THead from './includes/THead';

const styles = StyleSheet.create({
  docStyle: {
    width: "100%",
    minHeight: "100vh",
  },

  page: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
  },
  section: {
    width: "100%",
    // margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logoStyle: {
    height: 100,
    width: 100,
  },
  heading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uniname: {
    fontSize: 14,
    marginBottom: 5,
  },

  //table
  table: {

    borderWidth: 1,
    borderColor: "gray",
  },
  trow: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

 

export default function () {
  
//   console.log(value);
  return (
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.heading}>
          <Image src={logo} style={styles.logoStyle} />
          <Text style={styles.uniname}>UNIVERSITY OF GHANA</Text>
          <Text>FRESHMEN'S MEDICALS</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Demographic Information</Text>
        <View style={styles.table}>
          <THead />
          <View style={styles.tbody}></View>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  );
}
