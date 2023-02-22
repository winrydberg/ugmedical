import React from 'react';
import logo from "./icon.png";
import bg from "./main_bgr.png";
import topbg from "./login2.jpg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import DemographicInfo from "./DemographicInfo";
import Tobacco from "./Tobacco";
import AlcoholConsumption from "./AlcoholConsumption";
import AlcoholEnhanced from "./AlcoholEnhanced";
import Diet from "./Diet";
import Physical from "./Physical";
import BloodPressure from "./BloodPressure";
import Diabetes from "./Diabetes";
import Cholesterol from "./Cholesterol";
import CardioVascular from "./CardioVascular";
import GenderScreening from "./GenderScreening";
import FinalStage from './FinalStage';

const url = "https://sts.ug.edu.gh/services/medical/getinfo";

export const SurveyContext = React.createContext();

function App() {


  const [step, setStep] = useState(1);
  const [reach_step, setStepReached] = useState(1);
  const [consent, setConsent] = useState("");
  const [consent_sort, setConsentSort] = useState("");
  const [phoneno, setPhoneNo] = useState("");

  const [student_info, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  //survey sections
  const [demographic, setDemographic] = useState(null);
  const [tobacco, setTobacco] = useState(null);
  const [alcohol, setAlcohol] = useState(null);
  const [alcoholexp, setAlcoholExp] = useState(null);
  const [diets, setDiets] = useState(null);
  const [physical_excercise, setPhysicalExcercise] = useState(null);
  const [bloodpressure, setBloodPressure] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [cholestrol, setCholesterol] = useState(null);
  const [cardiovascular, setCardioVascular] = useState(null);
  const [gender_screen, setGenderScreen] = useState(null);

  const handleConsentChange = (e) => setConsent(e.target.value);
  const handlePhoneNoChange = (e) => setPhoneNo(e.target.value);


  useEffect(() => {
    getPrevSubmission();
    getLocalInformation()
    getLoggedInStudentInfo();
  }, [])


  const getPrevSubmission = () => {
       axios.get(url).then(res =>{
        console.log(res.data.data)
          if(res.data.status=='success'){
            var data = res.data.data
            // setDemographic({
            //   sex: data.gender,
            //   dob: data.dateOfBirth,
            //   yrsinsch: data.schoolYears,
            //   edulevel: data.highestEduLevel,
            //   ethnic: data.tribe,
            //   maricalsrtatus: data.maritalStatus,
            //   workstatus: data.occupation,
            //   household_age: data.PeopleInHousehold,
            //   avg_earning_rate: data.householdEarnings,
            //   avg_earning: data.householdEarnings,
            //   house_hold_income: data.householdIncomeEstimate,
            // })

            // setTobacco({
            //   tb_status: data.useTobaccoProduct,
            //   tb_daily_use: data.useTobaccoProductDaily,
            //   age_tb_use: data.ageStartedSmoking,
            //   useduration: data.smokingHowLong,
            //   useduration_val: data.averageSmokingProductStats,
            //   try_stop: data.triedStopSmoking,
            //   advice_by_doc: data.advisedQuitSmoking,
            //   advice_by_doc: data.smokeTobaccoInPast,
            //   past_use: data.smokeTobaccoInPastDaily,
            //   past_use_daily: data.ageStoppedSmoking,
            //   age_of_stop: data.stopSmokingHowLong,
            //   duration_of_stop: data.useSmokelessProduct,
            //   currently_using: data.useSmokelessProductDaily,
            //   currently_using_smokeless: '',
            //   snuff_by_mouth: data.averageSmokelessProductUsage?.mouth,
            //   snuff_by_node: data.averageSmokelessProductUsage?.nose,
            //   snuff_by_chewing: data.data.averageSmokelessProductUsage?.chewing,
            //   snuff_by_betel_quid: data.averageSmokelessProductUsage?.betel,
            //   past_use_status: data.useSmokelessProductInPast,
            //   past_use_status_daily: data.useSmokelessProductInPastDaily,
            //   smoke_in_home: data.someoneSmokeHome,
            //   smoke_in_work: data.someoneSmokeWorkplace,
            // })


          }
       })
  }


  /**
   * 
   */
  const getLocalInformation =async() => {
      var cons = localStorage.getItem('consent');
      var prevData = JSON.parse(await localStorage.getItem('survey'));

      if(cons != null){
        setConsent(cons);
        setConsentSort(cons);
      }

      if(prevData != null){
        setDemographic(prevData.demographic);
        setTobacco(prevData.tobacco);
        setAlcohol(prevData.alcohol);
        setAlcoholExp(prevData.alcoholexp);
        setDiets(prevData.diets);
        setPhysicalExcercise(prevData.physical_excercise);
        setBloodPressure(prevData.bloodpressure);
        setDiabetes(prevData.diabetes);
        setCholesterol(prevData.cholestrol);
        setCardioVascular(prevData.cardiovascular);
      }
  }

  /**
   * 
   */
  const getLoggedInStudentInfo = () => {
      axios.get("https://sts.ug.edu.gh/services/medical/getstudentinfo").then(res => {
        setLoading(false);
        if(res.data.status === 'success'){
          console.log(res.data)
            setStudentInfo(res.data.data);
        }else{
          alert("Unable to get student info. Refresh to load details")
        }
      }).catch(error => {
        setLoading(false);
      });
  }

  /**
   * 
   * @param {*} val 
   */
  const stepCallbackHandler = (val) => {
    setStep(val);
  };


  /**
   * 
   * @param {*} val 
   */
  const setreachStep = (val) => {
    if(val>reach_step){
      setStepReached(val);
    }
  };

  const jumpToTab = (currentTabVal) => {
    // if(currentTabVal <= reach_step){
      setStep(currentTabVal);
    // }
  };

  const confirmConsentAgreement = () => {
    if(consent == 'No'){
      alert("You cannot proceed without agreeing. ")
    }
    setConsentSort(consent)
    localStorage.setItem('consent', consent);
  }



  const renderStepperheader = () => {
    return (
      <div className="col-md-12" style={{ marginTop: 10, width:'100%' }}>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => jumpToTab(1)}
            className="col-md-1"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 1 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                1
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(2)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 2 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                2
              </p>
            </div>
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 2 ? "500" : "",
              }}
            >
              Behavioural Measurements
            </p> */}
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(3)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 3 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                3
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(4)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 4 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                4
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(5)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 5 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>5</p>
            </div>
          </div>
          <div
            className="col-md-1"
            onClick={() => jumpToTab(6)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 6 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>6</p>
            </div>
          </div>
          <div
            className="col-md-1"
            onClick={() => jumpToTab(7)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 7 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>7</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(8)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 8 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>8</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(9)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 9 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>9</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(10)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 10 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>10</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(11)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 11 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>11</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(12)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 12 ? "#281564" : "#d6d6d6",
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>12</p>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        // setreachStep(step);
        return (
          <DemographicInfo
            statedata={demographic}
            setreachstep = {setreachStep}
            setstep={stepCallbackHandler}
            set_demographic={setDemographic}
          />
        );
      case 2:
        // setreachStep(step);
        return (
          <Tobacco
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_tobacco={setTobacco}
          />
        );
      case 3:
        // setreachStep(step);
        return (
          <AlcoholConsumption
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_alcohol={setAlcohol}
          />
        );
      case 4:
        // setreachStep(step);
        return (
          <AlcoholEnhanced
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_alcohol_exp={setAlcoholExp}
          />
        );
      case 5:
        // setreachStep(step);
        return (
          <Diet
            setstep={stepCallbackHandler}
            set_diets={setDiets}
            setreachstep={setreachStep}
          />
        );
      case 6:
        // setreachStep(step);
        return (
          <Physical
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_physical_excercise={setPhysicalExcercise}
          />
        );
      case 7:
        // setreachStep(step);
        return (
          <BloodPressure
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_bloodpressure={setBloodPressure}
          />
        );
      case 8:
        // setreachStep(step);
        return (
          <Diabetes
            setstep={stepCallbackHandler}
            set_diabetes={setDiabetes}
            setreachstep={setreachStep}
          />
        );
      case 9:
        // setreachStep(step);
        return (
          <Cholesterol
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_cholesterol={setCholesterol}
          />
        );
      case 10:
        // setreachStep(step);
        return (
          <CardioVascular
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_cardiovascular={setCardioVascular}
          />
        );
      case 11:
        // setreachStep(step);
        return (
          <GenderScreening
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_gendescreen={setGenderScreen}
          />
        );
    
      case 12:
        // setreachStep(step);
        return <FinalStage setreachstep={setreachStep} />;
      
    }
  };

  const welcomeMessage = () => {
    if(student_info != null){
      return (
        <h4 style={{ textAlign: "center" }}>
          Hello {student_info.student_name}, Welcome to Freshmen's Health Survey
        </h4>
      );
    }else{
      <p>Unable to get Student Information</p>
    }
  }



  const consentSorting = () => {
    if(consent_sort === "Yes"){
        return (
          <div className="" style={{ padding: "2rem" }}>
            {renderStepperheader()}

            {renderStep()}
          </div>
        );
    }else{
       return (
         <form onSubmit={confirmConsentAgreement}>
           <div className="container">
             <div className="col-md-12">
               <strong style={{ textTransform: "uppercase" }}>
                 Survey Information
               </strong>
             </div>
           </div>
           <br />
           <div className="container">
             <div className="col-md-12">
               <div className="row">
                 <div className="col-md-6">
                   <div className="form-group">
                     <label htmlFor="choice">
                       <strong>1.</strong> Consent has been read and agreed
                     </label>
                     <select
                       onChange={handleConsentChange}
                       required
                       defaultValue={""}
                       className="form-control"
                     >
                       <option value="" disabled>
                         -- Select an option --
                       </option>
                       <option value="Yes">Yes</option>
                       <option value="No">No</option>
                     </select>
                     {/* <span style="color:red;font-style:italic"></span> */}
                   </div>
                 </div>

                 <div className="col-md-6">
                   <div className="form-group">
                     <label htmlFor="staffid">
                       {" "}
                       <strong>2.</strong> Phone No.
                     </label>
                     <input
                       type="text"
                       required
                       onChange={handlePhoneNoChange}
                       className="form-control"
                     />
                     {/* <span style="color:red;font-style:italic"></span> */}
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-3">
               <button type="submit" className="btn btn-warning btn-block ">
                 Continue
               </button>
             </div>
           </div>
         </form>
       );
    }
  }




  const renderSurvey = () => {
    if(loading){
        return (
          <div className="row col-md-12" style={{display:'flex', minHeight: '100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
            <i className="fa fa-spinner fa-spin fa-3x" style={{marginBottom: 20}}></i>
            <p>Loading Information... Please wait...</p>
          </div>
        );
    }else{
      return (
        // <div className="container-fluid">
          <div className="container" >
          <div
            className="box "
            style={{ paddingBottom: 70, minHeight: "100vh" }}
          >
            <div className="box-header with-border">
              <h3 className="box-title"></h3>
            </div>
            <div
              className="col-md-12"
              style={{ marginTop: 50, alignItems: "center" }}
            >
              {welcomeMessage()}
            </div>

            {consentSorting()}
          </div>
        </div>
        // </div>
      );
    }
  }

  return (
    <SurveyContext.Provider
      value={{
        consent: consent,
        phoneno:phoneno,
        user: student_info,
        demographic: demographic,
        tobacco: tobacco,
        alcohol: alcohol,
        alcoholexp: alcoholexp,
        diets: diets,
        physical_excercise: physical_excercise,
        bloodpressure: bloodpressure,
        diabetes: diabetes,
        cholestrol: cholestrol,
        cardiovascular: cardiovascular,
        gender_screen: gender_screen,
        phoneno: phoneno,
        consent: consent,
      }}
    >
      <div style={{ backgroundImage: "url(" + bg + ")" }}>
          <div className="col-md-12">
          <div
            className=""
            style={{
              width: "100%",
              backgroundImage: "url(" + topbg + ")",
              backgroundPosition: "top",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <img src={logo} />
            <h5 style={{ color: "white" }}>UNIVERSITY OF GHANA</h5>
            <h2 style={{ color: "white", fontWeight: "bold" }}>
              FRESHMEN MEDICALS
            </h2>
          </div>
          </div>

          {renderSurvey()}
          
          
          
          
        

        <div
          className="footer"
          style={{
            height: 40,
            backgroundColor: "#281564",
            flexDirection: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <span style={{ color: "white" }}>
              UG -Medical Survey | All Rights Reserved @{" "}
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </SurveyContext.Provider>
  );
}

export default App;
