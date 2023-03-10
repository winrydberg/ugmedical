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

    const smokedata = JSON.parse(data.averageSmokingProductStats)
    const smokelessdata = JSON.parse(data.averageSmokelessProductUsage)
  
//   console.log(value);
 // man_cigars,
            // hand_roll_cigars,
            // pipes_of_tobacco,
            // cheroots_cigars,
            // shisha,
            // cigar_others
  return (
    <>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.sectionheader}>
          <Text style={styles.subtitle}>Step 2   Behavioural Measurements</Text>
        </View>
        <Text style={styles.text}>Now I am going to ask you some questions about tobacco use.</Text>
        <Text style={styles.subtitle}>CORE:  Tobacco Use</Text>
        <View style={styles.table}>
          
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1.Do you currently smoke any tobacco products, such as cigarettes, cigars or pipes?:  </Text>
              <Text style={styles.text}>Ans: {data?.useTobaccoProduct} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>2. Do you currently smoke tobacco products daily?:  </Text>
              <Text style={styles.text}>Ans: {data?.useTobaccoProductDaily} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. How old were you when you first started smoking?:  </Text>
              <Text style={styles.text}>Ans: {data?.ageStartedSmoking} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Do you remember how long ago it was?:  </Text>
              <Text style={styles.text}>Ans: {data?.smokingHowLong} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. On average, how many of the following products do you smoke each day/week?:  </Text>
            </View>
            <View style={{}}>
              <Text style={styles.text}>I. Manufactured cigarettes:  Ans -  {smokedata?.man_cigars.freq != undefined | null ? smokedata?.man_cigars.freq : " " + " : "+smokedata?.man_cigars.no_times}  </Text>
              <Text style={styles.text}>II. Hand-rolled cigarettes: Ans - {smokedata?.hand_roll_cigars.freq != undefined | null ? smokedata?.hand_roll_cigars.freq : " " + " : "+smokedata?.hand_roll_cigars.no_times} </Text>
              <Text style={styles.text}>III. Pipes full of tobacco: Ans - {smokedata?.pipes_of_tobacco.freq != undefined | null ? smokedata?.pipes_of_tobacco.freq : " " + " : "+smokedata?.pipes_of_tobacco.no_times}  </Text>
              <Text style={styles.text}>IV. Cigars, cheroots, cigarillos: Ans - {smokedata?.cheroots_cigars.freq != undefined | null ? smokedata?.cheroots_cigars.freq : " " + " : "+smokedata?.cheroots_cigars.no_times}  </Text>
              <Text style={styles.text}>V. Number of Shisha sessions: Ans - {smokedata?.shisha.freq != undefined | null ? smokedata?.shisha.freq : " " + " : "+smokedata?.shisha.no_times}  </Text>
              <Text style={styles.text}>VI. Other: Ans - {smokedata?.cigar_others.freq != undefined | null ? smokedata?.cigar_others.freq : " " + " : "+smokedata?.shisha.no_times}   </Text>
            </View>

            {/* breakdown to be done here */}

            <View style={styles.trow}>
              <Text style={styles.text}>6. During the past 12 months, have you tried to stop smoking? :  </Text>
              <Text style={styles.text}>Ans: {data?.triedStopSmoking} </Text>
            </View>

            <View style={styles.trow}>
              <Text style={styles.text}>7. During any visit to a doctor or other health worker in the past 12 months, were you advised to quit smoking tobacco?:  </Text>
              <Text style={styles.text}>Ans: {data?.advisedQuitSmoking} </Text>
            </View>

            <View style={styles.trow}>
              <Text style={styles.text}>8. In the past, did you ever smoke any tobacco products? :  </Text>
              <Text style={styles.text}>Ans: {data?.smokeTobaccoInPast} </Text>
            </View>

            <View style={styles.trow}>
              <Text style={styles.text}>9. In the past, did you ever smoke daily? :  </Text>
              <Text style={styles.text}>Ans: {data?.smokeTobaccoInPastDaily} </Text>
            </View>

          </View>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.subtitle}>EXPANDED: Tobacco Use</Text>
        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. How old were you when you stopped smoking? :   </Text>
              <Text style={styles.text}>Ans: {data?.ageStoppedSmoking} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. How long ago did you stop smoking?  </Text>
              <Text style={styles.text}>Ans: {data?.stopSmokingHowLong} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Do you currently use any smokeless tobacco products such as [snuff, chewing tobacco, betel]? (USE SHOWCARD):   </Text>
              <Text style={styles.text}>Ans: {data?.useSmokelessProduct} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Do you currently use smokeless tobacco products daily? :  </Text>
              <Text style={styles.text}>Ans: {data?.useSmokelessProductDaily} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. On average, how many times a day/week do you use (IF LESS THAN DAILY, RECORD WEEKLY)
(RECORD FOR EACH TYPE, USE SHOWCARD) ..............  </Text>
            </View>
            <View style={{}}>
              <Text style={styles.text}>I. Snuff, by mouth:      Ans -  {smokelessdata?.mouth.freq != undefined | null ? smokelessdata?.mouth.freq : " " + " : " +smokelessdata?.mouth.no_times}  </Text>
              <Text style={styles.text}>II. HSnuff, by nose:     Ans - {smokelessdata?.nose.freq != undefined | null ? smokelessdata?.nose.freq : " " + " : " +smokelessdata?.nose.no_times} </Text>
              <Text style={styles.text}>III. Chewing tobacco:     Ans - {smokelessdata?.chewing.freq != undefined | null ? smokelessdata?.chewing.freq : " " + " : " +smokelessdata?.chewing.no_times}  </Text>
              <Text style={styles.text}>IV. Betel, quid:          Ans - {smokelessdata?.betel.freq != undefined | null ? smokelessdata?.betel.freq : " " + " : " +smokelessdata?.betel.no_times}  </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. In the past, did you ever use smokeless tobacco products such as [snuff, chewing tobacco, or betel]? :  </Text>
              <Text style={styles.text}>Ans: {data?.useSmokelessProductInPast} </Text>
            </View>
            {/* <View style={styles.trow}>
              <Text style={styles.text}>7. In the past, did you ever use smokeless tobacco products such as [snuff, chewing tobacco, or betel]? :  </Text>
              <Text style={styles.text}>Ans: {data?.useSmokelessProductInPast  } </Text>
            </View> */}
            <View style={styles.trow}>
              <Text style={styles.text}>8. In the past, did you ever use smokeless tobacco products such as [snuff, chewing tobacco, or betel] daily?</Text>
              <Text style={styles.text}>Ans: {data?.useSmokelessProductInPastDaily } </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>9. During the past 30 days, did someone smoke in your home?:  </Text>
              <Text style={styles.text}>Ans: {data?.someoneSmokeHome} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>10. During the past 30 days, did someone smoke in closed areas in your workplace (in the building, in a work area or a specific office)?:  </Text>
              <Text style={styles.text}>Ans: {data?.someoneSmokeWorkplace} </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>

    </>
  );
}
