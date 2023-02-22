import React from 'react';
import logo from "./icon.png";
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

export const SurveyContext = React.createContext();

function App() {


  const [step, setStep] = useState(1);
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


  useEffect(() => {
    getLoggedInStudentInfo();
  }, [])

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

  const stepCallbackHandler = (val) => {
    setStep(val);
  };

  const jumpToTab = (currentTabVal) => {
    setStep(currentTabVal)
  };



  const renderStepperheader = () => {
    return (
      <div className="col-md-12" style={{ marginTop: 10 }}>
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 1 ? "500" : "",
              }}
            >
              Demographic Information
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 3 ? "500" : "",
              }}
            >
              CORE: Alcohol Consumption
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 4 ? "500" : "",
              }}
            >
              CORE: Alcohol Consumption Cont..
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 5 ? "500" : "",
              }}
            >
              CORE:Diet
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 6 ? "500" : "",
              }}
            >
              CORE: Physical Activity
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 7 ? "500" : "",
              }}
            >
              Blood Pressure History
            </p> */}
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
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 7 ? "500" : "",
              }}
            >
              Blood Pressure History
            </p> */}
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
        return (
          <DemographicInfo
            setstep={stepCallbackHandler}
            set_demographic={setDemographic}
          />
        );
      case 2:
        return (
          <Tobacco setstep={stepCallbackHandler} set_tobacco={setTobacco} />
        );
      case 3:
        return (
          <AlcoholConsumption
            setstep={stepCallbackHandler}
            set_alcohol={setAlcohol}
          />
        );
      case 4:
        return (
          <AlcoholEnhanced
            setstep={stepCallbackHandler}
            set_alcohol_exp={setAlcoholExp}
          />
        );
      case 5:
        return <Diet setstep={stepCallbackHandler} set_diets={setDiets} />;
      case 6:
        return (
          <Physical
            setstep={stepCallbackHandler}
            set_physical_excercise={setPhysicalExcercise}
          />
        );
      case 7:
        return (
          <BloodPressure
            setstep={stepCallbackHandler}
            set_bloodpressure={setBloodPressure}
          />
        );
      case 8:
        return (
          <Diabetes setstep={stepCallbackHandler} set_diabetes={setDiabetes} />
        );
      case 9:
        return (
          <Cholesterol
            setstep={stepCallbackHandler}
            set_cholesterol={setCholesterol}
          />
        );
      case 10:
        return (
          <CardioVascular
            setstep={stepCallbackHandler}
            set_cardiovascular={setCardioVascular}
          />
        );
      case 11:
        return (
          <GenderScreening
            setstep={stepCallbackHandler}
            set_gendescreen={setGenderScreen}
          />
        );
        break;
      case 12:
        return (
          <FinalStage />
        );
        break
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

  const renderSurvey = () => {
    if(loading){
        return (
          <div className="" style={{display:'flex', minHeight: '100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
            <i className="fa fa-spinner fa-spin fa-3x" style={{marginBottom: 20}}></i>
            <p>Loading... Please wait...</p>
          </div>
        );
    }else{
      return (
        <div className="box" style={{ paddingBottom: 70 }}>
          <div className="box-header with-border">
            <h3 className="box-title"></h3>
          </div>
          <div
            className="container"
            style={{ marginTop: 50, alignItems: "center" }}
          >
            {welcomeMessage()}
          </div>

          <div className="box-body" style={{ padding: "2rem" }}>
            {renderStepperheader()}

            {renderStep()}
          </div>
        </div>
      );
    }
  }

  return (
    <SurveyContext.Provider value={{
      demographic: demographic,
      tobacco: tobacco,
      alcohol: alcohol,
      alcoholexp:alcoholexp,
      diets: diets,
      physical_excercise: physical_excercise,
      bloodpressure: bloodpressure,
      diabetes: diabetes,
      cholestrol: cholestrol,
      cardiovascular: cardiovascular,
      gender_screen: gender_screen
    }}>
      <div className="" style={{ width: "100vw" }}>
        <div className="row">
          <div className="col-md-12">
            <div
              className="row col-md-12"
              style={{
                width: "100vw",
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
            {renderSurvey()}
          </div>
        </div>

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
