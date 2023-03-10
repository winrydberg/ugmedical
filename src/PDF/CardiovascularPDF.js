import React from 'react'

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import logo from "../icon.png";
import { SurveyContext } from '../App';
import THead from './includes/THead';
import DiabetesPDF from './DiabetesPDF';

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
    padding: 20,
    // flexGrow: 1,
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
  sectionheader: {
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: '#281564',
    color:'white',
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection:'row',
  },
  uniname: {
    fontSize: 14,
    marginBottom: 5,
  },

  //table
  table: {
    padding: 10,
    // borderWidth: 0.5,
    borderColor: "gray",
  },
  trow: {
    display:'flex',
    flexDirection:'row',
    marginBottom: 5,
    flexWrap: 'wrap'
    // justifyContent:'space-between'
  },

  //text styles
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  subtitle: {
    fontSize: 16,
    // marginBottom: 12,
    fontFamily: 'Oswald'
  },
  text: {
    marginRight: 20,
    marginBottom: 10,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },

  
});

 
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

export default function ({data}) {
  
//   console.log(value);
  return (
    <>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE: History of Cardiovascular Diseases</Text>

        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Have you ever had a heart attack or chest pain from heart disease (angina) or a stroke (cerebrovascular accident or incident)?:  </Text>
              <Text style={styles.text}>Ans: {data?.hadHeartAttack} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Are you currently taking aspirin regularly to prevent or treat heart disease?:  </Text>
              <Text style={styles.text}>Ans: {data?.takingAspirin} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Are you currently taking statins (Lovastatin/Simvastatin/Atorvastatin or any other statin) regularly to prevent or treat heart disease?: </Text>
              <Text style={styles.text}>Ans: {data?.takingStatins} </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE:  Lifestyle Advice</Text>

        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. During the past 12 months, have you visited a doctor or other health worker?:  </Text>
              <Text style={styles.text}>Ans: {data?.visitedDoctor} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. During any of your visits to a doctor or other health worker in the past 12 months, were you advised to do any of the following?(RECORD FOR EACH):  </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>I. Quit using tobacco or don’t start: </Text>
              <Text style={styles.text}>Ans: {data?.advisedQuitTobacco} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>II. Reduce salt in your diet:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedSaltIntake} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>III. Eat at least five servings of fruit and/or vegetables each day:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedTakingFruits} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>IV. Reduce fat in your diet:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedFatIntake} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>V. Start or do more physical activity:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedExercise} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>VI. Maintain a healthy body weight or lose weight:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedLoseWeight} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>VII. Reduce sugary beverages in your diet:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedReduceSugar} </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    </>
  );
}
