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
        <Text style={styles.subtitle}>CORE (for women only): Cervical Cancer Screening</Text>
        <Text style={styles.text}>The next question asks about cervical cancer prevention. Screening tests for cervical cancer prevention can be done in different ways, including Visual Inspection with Acetic Acid/vinegar (VIA), pap smear and Human Papillomavirus (HPV) test. VIA is an inspection of the surface of the uterine cervix after acetic acid (or vinegar) has been applied to it. For both pap smear and HPV test, a doctor or nurse uses a swab to wipe from inside your vagina, take a sample and send it to a laboratory. It is even possible that you were given the swab yourself and asked to swab the inside of your vagina. The laboratory checks for abnormal cell changes if a pap smear is done, and for the HP virus if an HPV test is done.</Text>

        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Have you ever had a screening test for cervical cancer, using any of these methods described above?:  </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? 'N/A': data?.cervicalCancerScreening} </Text>
            </View> 

            <Text style={styles.header}>BREAST CANCER SCREENING</Text> 

            <View style={styles.trow}>
              <Text style={styles.text}>2. Have you ever had Breast Cancer Screening? Yes / No:  </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? 'N/A': data?.breastCancerScreening} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Date of last screening: </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? 'N/A': data?.breastCancerScreeningDate} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Result – Normal/ Abnormal:  </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? 'N/A': data?.breastCancerScreeningResult} </Text>
            </View>

            <Text style={styles.header}>PROSTATE CANCER SCREENING</Text> 

            <View style={styles.trow}>
              <Text style={styles.text}>5. Have you ever had Prostate Cancer Screening? Yes / No:  </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? data?.prostateCancerScreening : 'N/A' } </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. Date of last screening :  </Text>
              <Text style={styles.text}>Ans: {data?.gender =='Male'? data?.prostateCancerScreeningDate : 'N/A' } </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>7. Result – Normal / Abnormal:  </Text>
              <Text style={styles.text}>Ans:  {data?.gender =='Male'? data?.prostateCancerScreeningResult : 'N/A' } </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>VACCINATION CARD</Text>

        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Yellow Fever:  </Text>
              <Text style={styles.text}>Ans: {data?.yellowFeverCard} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Hepatitis B:  </Text>
              <Text style={styles.text}>Ans: {data?.hepatitisBCard} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Covid 19: </Text>
              <Text style={styles.text}>Ans: {data?.covid19Card} </Text>
            </View>
           
          </View>
        </View>
      </View>
    </Page>
    </>
  );
}
