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
  
    const homeb = JSON.parse(data.consumeAcoholHomebrewedStats);
//   console.log(value);
  return (
    <>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE:  Alcohol Consumption</Text>
        <Text style={styles.text}>The next questions ask about the consumption of alcohol.</Text>
        <View style={styles.table}>
          
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Have you ever consumed any alcohol such as beer, wine, spirits? (USE SHOWCARD OR SHOW EXAMPLES):  </Text>
              <Text style={styles.text}>Ans: {data?.useAlcohol} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Have you consumed any alcohol within the past 12 months?:  </Text>
              <Text style={styles.text}>Ans: {data?.useAlcoholPastMonth} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Have you stopped drinking due to health reasons, such as a negative impact on your health or on the advice of your doctor or other health worker?:  </Text>
              <Text style={styles.text}>Ans: {data?.stoppedDrinking} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. During the past 12 months, how frequently have you had at least one standard alcoholic drink?:  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholUsageFrequency} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. Have you consumed any alcohol within the past 30 days?:  </Text>
              <Text style={styles.text}>Ans: {data?.consumeAlcoholPast} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. During the past 30 days, on how many occasions did you have at least one standard alcoholic drink?:  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholOccasions} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>7. During the past 30 days, when you drank alcohol, how many standard drinks on average did you have during one drinking occasion?:  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholOccasionsStandard} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>8. During the past 30 days, what was the largest number of standard drinks you had on a single occasion, counting all types of alcoholic drinks together:  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholOccasionsStandardLargest} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>9. During the past 30 days, how many times did you have six or more standard drinks in a single drinking occasion?:  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholOccasionsStandardSix} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>10. During each of the past 7 days, how many standard drinks did you have each day? :  </Text>
              <Text style={styles.text}>Ans: {data?.alcoholOccasionsStandardEachDay} </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE:  Alcohol Consumption, continued</Text>
        <Text style={styles.text}>I have just asked you about your consumption of alcohol during the past 7 days. The questions were about alcohol in general, while the next questions refer to your consumption of homebrewed alcohol, alcohol brought over the border/from another country, any alcohol not intended for drinking or other untaxed alcohol. Please only think about these types of alcohol when answering the next questions.</Text>
            <View style={styles.table}>
            <View style={styles.tbody}>
                <View style={styles.trow}>
                <Text style={styles.text}>1. During the past 7 days, did you consume any homebrewed alcohol, any alcohol brought over the border/from another country, any alcohol not intended for drinking or other untaxed alcohol?  </Text>
                <Text style={styles.text}>Ans: {data?.consumeAcoholHomebrewed} </Text>
                </View>  
                <View style={styles.trow}>
                <Text style={styles.text}>2. On average, how many standard drinks of the following did you consume during the past 7 days? :  </Text>
                </View>
                <View style={{}}>
                    <Text style={styles.text}>I.  Homebrewed spirits, e.g. moonshine :     Ans {homeb.spirits}     </Text>
                    <Text style={styles.text}>II.  Homebrewed beer or wine, e.g. beer, palm or fruit wine :     Ans {homeb.beer}     </Text>
                    <Text style={styles.text}>III.  Alcohol brought over the border/from another country :     Ans {homeb.border}     </Text>
                    <Text style={styles.text}>IV.  Alcohol not intended for drinking, e.g. alcohol-based medicines, perfumes, after shaves :     Ans {homeb.nondrink}     </Text>
                    <Text style={styles.text}>V.  Other untaxed alcohol in the country :     Ans {homeb.untaxed}     </Text>                   
                </View>  
            </View>
            </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>EXPANDED:  Alcohol Consumption</Text>
        <Text style={styles.text}>I have just asked you about your consumption of alcohol during the past 7 days. The questions were about alcohol in general, while the next questions refer to your consumption of homebrewed alcohol, alcohol brought over the border/from another country, any alcohol not intended for drinking or other untaxed alcohol. Please only think about these types of alcohol when answering the next questions.</Text>
            <View style={styles.table}>
            <View style={styles.tbody}>
                <View style={styles.trow}>
                    <Text style={styles.text}>1. During the past 12 months, how often have you found that you were not able to stop drinking once you had started?  </Text>
                    <Text style={styles.text}>Ans: {data?.pastAlcoholStopDrinking} </Text>
                </View>  
                <View style={styles.trow}>
                    <Text style={styles.text}>2. During the past 12 months, how often have you failed to do what was normally expected from you because of drinking?:  </Text>
                    <Text style={styles.text}>Ans: {data?.pastAlcoholFailedExpected} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>3. During the past 12 months, how often have you needed a first drink in the morning to get yourself going after a heavy drinking session?:  </Text>
                    <Text style={styles.text}>Ans: {data?.pastAlcoholFirstDrink} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>4. During the past 12 months, have you had family problems or problems with your partner due to someone else’s drinking?:  </Text>
                    <Text style={styles.text}>Ans: {data?.pastAlcoholFamilyProblems} </Text>
                </View>
            </View>
            </View>
      </View>

      
    </Page>
    </>
  );
}
