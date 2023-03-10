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
    <View style={styles.section}>
        <Text style={styles.subtitle}>CORE: History of  Diabetes</Text>

        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Have you ever had your blood sugar measured by a doctor or other health worker?:  </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasured} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Have you ever been told by a doctor or other health worker that you have raised blood sugar or diabetes?:  </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasuredTold} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Were you first told in the past 12 months? </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasuredToldPast} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. In the past two weeks, have you taken any drugs (medication) for diabetes prescribed by a doctor or other health worker? </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasuredTakenDrugs} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. Are you currently taking insulin for diabetes prescribed by a doctor or other health worker?  </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasuredInsulin} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. Have you ever seen a traditional healer for diabetes or raised blood sugar?:  </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarMeasuredTraditional} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>7. Are you currently taking any herbal or traditional remedy for your diabetes?:  </Text>
              <Text style={styles.text}>Ans: {data?.bloodSugarTakingHerbal} </Text>
            </View>
          </View>
        </View>
      </View>
    
    </>
  );
}
