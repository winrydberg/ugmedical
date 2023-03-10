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

export default function ({data, phoneno}) {



  const _calculateAge = () => { // birthday is a date
    var ageDifMs = Date.now() - new Date(data?.dateOfBirth).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  // const studentInfo = (part) => {
  //   if(part==0){
  //     return user?.student_name.split(",")[0];
  //   }else{
  //     return user?.student_name.split(",")[1];
  //   }
  // }

  return (
    <>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.heading}>
          <Image src={logo} style={styles.logoStyle} />
          <Text style={styles.header}>UNIVERSITY OF GHANA</Text>
          <Text style={styles.title}>STUDENT MEDICALS - {data?.sid}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionheader}>
          <Text style={styles.subtitle}>Survey Information</Text>
        </View>
        <Text style={styles.subtitle}>Location and Date</Text>
        <View style={styles.table}>
          
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Student / Staff ID:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.sid} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Residential/ Non-residential:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.hall != null ? 'Residential' : 'Non Residential'} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Residential Hall/ Address &GPS code:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.hall} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Date of completion of the instrument:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.dateOfCompletion} </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.subtitle}>Consent, Interview Language and Name</Text>
        <View style={styles.table}>
          <View style={styles.tbody}>
            <View style={styles.trow}>
              <Text style={styles.text}>1. Consent has been read and obtained:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.consent} </Text>
            </View>  
            <View style={styles.trow}>
              <Text style={styles.text}>2. Interview Language :  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.interviewLang} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>3. Time of interview :  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.interviewTime} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>4. Family Surname:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.familySurname} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>5. First Name:  </Text>
              <Text style={[styles.text, {fontWeight:'bold',}]}>Ans: {data?.firstName} </Text>
            </View>
            <View style={styles.trow}>
              <Text style={styles.text}>6. Contact phone number where possible:  </Text>
              <Text style={[styles.text, {fontWeight:'bold'}]}>Ans: {data?.mobileNumber} </Text>
            </View>
          </View>
        </View>
      </View>

      
    </Page>

    <Page size="A4" style={styles.page}>
        

        <View style={styles.section}>
        <View style={styles.sectionheader}>
          <Text style={styles.subtitle}>Step 1  Demographic Information</Text>
        </View>
          <View style={styles.table}>
            <View style={styles.tbody}>
              <View style={styles.trow}>
                <Text style={styles.text}>1. Sex (Record Male / Female as observed) :  </Text>
                <Text style={styles.text}>Ans: {data?.gender} </Text>
              </View>  
              <View style={styles.trow}>
                <Text style={styles.text}>2. What is your date of birth? :  </Text>
                <Text style={styles.text}>Ans: {data?.dateOfBirth} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>3. How old are you?  :  </Text>
                <Text style={styles.text}>Ans: {_calculateAge()} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>4. In total, how many years have you spent at school and in full-time study (excluding pre-school)/ Kindergaten? :  </Text>
                <Text style={styles.text}>Ans: {data?.schoolYears} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>5. What is the highest level of education you have completed?:  </Text>
                <Text style={styles.text}>Ans: {data?.highestEduLevel} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>6. What is your [insert relevant ethnic group / racial group / cultural subgroup / others] background? :  </Text>
                <Text style={styles.text}>Ans: {data?.tribe} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>7. What is your marital status? :  </Text>
                <Text style={styles.text}>Ans: {data?.maritalStatus} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>8. Which of the following best describes your main work status over the past 12 months? :  </Text>
                <Text style={styles.text}>Ans: {data?.occupation} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>9. How many people older than 18 years, including yourself, live in your household? :  </Text>
                <Text style={styles.text}>Ans: {data?.peopleInHousehold} </Text>
              </View>
              <Text style={[styles.subtitle, {marginBottom: 20,marginTop: 10}]}>EXPANDED: Demographic Information, Continued</Text>
              
              <View style={styles.trow}>
                <Text style={styles.text}>10. Taking the past year, can you tell me what the average earnings of the household have been? :  </Text>
                <Text style={styles.text}>Ans: {data?.householdEarnings} </Text>
              </View>
              <View style={styles.trow}>
                <Text style={styles.text}>11. Can you give an estimate of the annual household income if I read some options to you? Is it  :  </Text>
                <Text style={styles.text}>Ans: {data?.householdIncomeEstimate} </Text>
              </View>

            </View>
          </View>
        </View>
    </Page>
    </>
  );
}
