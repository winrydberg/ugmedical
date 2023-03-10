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
        <Text style={styles.subtitle}>CORE: Physical Activity</Text>
        <Text style={styles.text}>Next I am going to ask you about the time you spend doing different types of physical activity in a typical week. Please answer these questions even if you do not consider yourself to be a physically active person. 
Think first about the time you spend doing work.  Think of work as the things that you have to do such as paid or unpaid work, study/training, household chores, harvesting food/crops, fishing or hunting for food, seeking employment. [Insert other examples if needed].  In answering the following questions 'vigorous-intensity activities' are activities that require hard physical effort and cause large increases in breathing or heart rate, 'moderate-intensity activities' are activities that require moderate physical effort and cause small increases in breathing or heart rate.</Text>
        <View style={styles.table}>
          <Text style={styles.header}>WORK</Text>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Does your work involve vigorous-intensity activity that causes large increases in breathing or heart rate like [carrying or lifting heavy loads, digging or construction work] for at least 10 minutes continuously? :  </Text>
              <Text style={styles.text}>Ans: {data?.workInvolvesActivityVigorous} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. In a typical week, on how many days do you do vigorous-intensity activities as part of your work? :  </Text>
              <Text style={styles.text}>Ans: {data?.activityVigorousDays} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3.How much time do you spend doing vigorous-intensity activities at work on a typical day?:  </Text>
              <Text style={styles.text}>Ans: {data?.activityVigorousTime} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Does your work involve moderate-intensity activity that causes small increases in breathing or heart rate such as brisk walking [or carrying light loads] for at least 10 minutes continuously? :  </Text>
              <Text style={styles.text}>Ans: {data?.workInvolvesActivityModerate} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. In a typical week, on how many days do you do moderate-intensity activities as part of your work? :  </Text>
              <Text style={styles.text}>Ans: {data?.activityModerateDays} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. How much time do you spend doing moderate-intensity activities at work on a typical day? :  </Text>
              <Text style={styles.text}>Ans: {data?.activityModerateTime} </Text>
            </View>

            <Text style={styles.header}>TRAVEL TO AND FROM PLACES</Text>

            <Text style={styles.text}>The next questions exclude the physical activities at work that you have already mentioned.
Now I would like to ask you about the usual way you travel to and from places.  For example to work, for shopping, to market, to place of worship</Text>

            <View style={styles.trow}>
              <Text style={styles.text}>1. Do you walk or use a bicycle (pedal cycle) for at least 10 minutes continuously to get to and from places?:  </Text>
              <Text style={styles.text}>Ans: {data?.walkOrUseBicycle} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>2. In a typical week, on how many days do you walk or bicycle for at least 10 minutes continuously to get to and from places? :  </Text>
              <Text style={styles.text}>Ans: {data?.walkOrUseBicycleDays} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. How much time do you spend walking or bicycling for travel on a typical day? :  </Text>
              <Text style={styles.text}>Ans: {data?.walkOrUseBicycleTime} </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>CORE:  Physical Activity, Continued</Text>
        <Text style={styles.title}>RECREATIONAL ACTIVITIES</Text>
        <Text style={styles.text}>The next questions exclude the work and transport activities that you have already mentioned.
Now I would like to ask you about sports, fitness and recreational activities (leisure), </Text>
            <View style={styles.table}>
                <View style={styles.tbody}>
                    <View style={styles.trow}>
                        <Text style={styles.text}>1. Do you do any vigorous-intensity sports, fitness or recreational (leisure) activities that cause large increases in breathing or heart rate like [running or football]  for at least 10 minutes continuously?  </Text>
                        <Text style={styles.text}>Ans: {data?.doVigorousSports} </Text>
                    </View>  
                    <View style={styles.trow}>
                        <Text style={styles.text}>2. In a typical week, on how many days do you do vigorous-intensity sports, fitness or recreational (leisure) activities?  </Text>
                        <Text style={styles.text}>Ans: {data?.doVigorousSportsDays} </Text>
                    </View>
                    <View style={styles.trow}>
                        <Text style={styles.text}>3. How much time do you spend doing  vigorous-intensity sports, fitness or recreational activities on a typical day?:  </Text>
                        <Text style={styles.text}>Ans: {data?.doVigorousSportsTime} </Text>
                    </View>
                    <View style={styles.trow}>
                        <Text style={styles.text}>4. Do you do any moderate-intensity sports, fitness or recreational (leisure) activities that cause a small increase in breathing or heart rate such as brisk walking, [cycling, swimming, volleyball] for at least 10 minutes continuously?:  </Text>
                        <Text style={styles.text}>Ans: {data?.doModerateSports} </Text>
                    </View>
                    <View style={styles.trow}>
                        <Text style={styles.text}>5. In a typical week, on how many days do you do moderate-intensity sports, fitness or recreational (leisure) activities?  </Text>
                        <Text style={styles.text}>Ans: {data?.doModerateSportsDays} </Text>
                    </View>
                    <View style={styles.trow}>
                        <Text style={styles.text}>6. How much time do you spend doing moderate-intensity sports, fitness or recreational (leisure) activities on a typical day?  </Text>
                        <Text style={styles.text}>Ans: {data?.doModerateSportsTime} </Text>
                    </View>
                    {/* <View style={styles.trow}>
                        <Text style={styles.text}>7. How much time do you spend doing moderate-intensity sports, fitness or recreational (leisure) activities on a typical day?  </Text>
                        <Text style={styles.text}>Ans: YES </Text>
                    </View> */}

                    <Text style={styles.subtitle}>EXPANDED: Physical Activity</Text>
                    <Text style={styles.header}>SEDENTARY BEHAVIOUR</Text>
                    <Text style={styles.text}>The following question is about sitting or reclining at work, at home, getting to and from places, or with friends including time spent sitting at a desk, sitting with friends, traveling in car, bus, train, reading, playing cards or watching television, but do not include time spent sleeping.</Text>
                    <View style={styles.table}>
                        <View style={styles.tbody}>
                            <View style={styles.trow}>
                                <Text style={styles.text}>1. How much time do you usually spend sitting or reclining on a typical day? </Text>
                                <Text style={styles.text}>Ans: {data?.doSittingTime} </Text>
                            </View>  
                        </View>
                    </View>
                </View>
             </View>
        </View>
    
    </Page>
    </>
  );
}
