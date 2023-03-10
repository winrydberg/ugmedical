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
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE: Diet</Text>
        <Text style={styles.text}>The next questions ask about the fruits and vegetables that you usually eat. I have a nutrition card here that shows you some examples of local fruits and vegetables. Each picture represents the size of a serving. As you answer these questions please think of a typical week in the last year.</Text>
        <View style={styles.table}>
          
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. In a typical week, on how many days do you eat fruit? (USE SHOWCARD):  </Text>
              <Text style={styles.text}>Ans: {data?.eatFruitDays} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. How many servings of fruit do you eat on one of those days?  (USE SHOWCARD) :  </Text>
              <Text style={styles.text}>Ans: {data?.eatFruitServings} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. In a typical week, on how many days do you eat vegetables? (USE SHOWCARD):  </Text>
              <Text style={styles.text}>Ans: {data?.eatVegetablesDays} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. How many servings of vegetables do you eat on one of those days?  (USE SHOWCARD):  </Text>
              <Text style={styles.text}>Ans: {data?.eatVegetablesServings} </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE:  Dietary salt</Text>
        <Text style={styles.text}>With the next questions, we would like to learn more about salt in your diet. Dietary salt includes ordinary table salt, unrefined salt such as sea salt, iodized salt, salty stock cubes and powders, and salty sauces such as soy sauce or fish sauce (see showcard). The following questions are on adding salt to the food right before you eat it, on how food is prepared in your home, on eating processed foods that are high in salt such as [insert country specific examples], and questions on controlling your salt intake. Please answer the questions even if you consider yourself to eat a diet low in salt.</Text>
            <View style={styles.table}>
            <View style={styles.tbody}>
                <View style={styles.trow}>
                    <Text style={styles.text}>1. How often do you add salt or a salty sauce such as soy sauce to your food right before you eat it or as you are eating it?  </Text>
                    <Text style={styles.text}>Ans: {data?.addSaltWhenEating} </Text>
                </View>  
                <View style={styles.trow}>
                    <Text style={styles.text}>2. How often is salt, salty seasoning or a salty sauce added in cooking or preparing foods in your household? :  </Text>
                    <Text style={styles.text}>Ans: {data?.addSaltWhenPreparing} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>3. How often do you eat processed food high in salt?  By processed food high in salt, I mean foods that have been altered from their natural state, such as packaged salty snacks, canned salty food including pickles and preserves, salty food prepared at a fast food restaurant, cheese, bacon and processed meat [add country specific examples]. :  </Text>
                    <Text style={styles.text}>Ans: {data?.eatProcessedFood} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>4. How much salt or salty sauce do you think you consume? :  </Text>
                    <Text style={styles.text}>Ans: {data?.saltysauceConsume} </Text>
                </View>
            </View>
            </View>
      </View>
    
    </Page>

    <Page size="A4" style={styles.page}>
    <View style={styles.section}>
        <Text style={styles.subtitle}>EXPANDED: Diet</Text>
     
            <View style={styles.table}>
            <View style={styles.tbody}>
                <View style={styles.trow}>
                    <Text style={styles.text}>1. How important to you is lowering the salt in your diet?  </Text>
                    <Text style={styles.text}>Ans: {data?.saltLoweringImportance} </Text>
                </View>  
                <View style={styles.trow}>
                    <Text style={styles.text}>2. Do you think that too much salt or salty sauce in your diet could cause a health problem? :  </Text>
                    <Text style={styles.text}>Ans: {data?.thinkSaltCauseHealthProblem} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>3. Do you do any of the following on a regular basis to control your salt intake?(RECORD FOR EACH)  :  </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(I). Limit consumption of processed foods :  </Text>
                    <Text style={styles.text}>Ans: {data?.limitProcessedFoodConsumption} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(II). Look at the salt or sodium content on food labels:  </Text>
                    <Text style={styles.text}>Ans: {data?.lookAtSaltContent} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(III). Buy low salt/sodium alternatives:   </Text>
                    <Text style={styles.text}>Ans: {data?.buySaltAlternatives} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(IV). Use spices other than salt when cooking:   </Text>
                    <Text style={styles.text}>Ans: {data?.useSpiceWhenCooking} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(V). Avoid eating foods prepared outside of a home:   </Text>
                    <Text style={styles.text}>Ans: {data?.avoidPreparedFoodOutside} </Text>
                </View>
                <View style={styles.trow}>
                    <Text style={styles.text}>(VI). Do other things specifically to control your salt intake:   </Text>
                    <Text style={styles.text}>Ans: {data?.thingsControlSaltIntake} </Text>
                </View>
                {/* <View style={styles.trow}>
                    <Text style={styles.text}>(VII). Other (please specify):   </Text>
                    <Text style={styles.text}>Ans: YES </Text>
                </View> */}
            </View>
            </View>
      </View>
    </Page>
    </>
  );
}
