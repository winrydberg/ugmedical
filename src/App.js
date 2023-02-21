import logo from "./icon.png";
import "./App.css";
import { useState } from "react";
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

function App() {
  const [step, setStep] = useState(1);

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
        </div>

        <hr />
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DemographicInfo setstep={stepCallbackHandler} />;
      case 2:
        return <Tobacco setstep={stepCallbackHandler} />;
      case 3:
        return <AlcoholConsumption setstep={stepCallbackHandler} />;
      case 4:
        return <AlcoholEnhanced setstep={stepCallbackHandler} />;
      case 5:
        return <Diet setstep={stepCallbackHandler} />;
      case 6:
        return <Physical setstep={stepCallbackHandler} />;
      case 7:
        return <BloodPressure setstep={stepCallbackHandler} />;
      case 8:
        return <Diabetes setstep={stepCallbackHandler} />;
      case 9:
        return <Cholesterol setstep={stepCallbackHandler} />;
      case 10:
        return <CardioVascular setstep={stepCallbackHandler} />;
      case 11:
        return <GenderScreening setstep={stepCallbackHandler} />;
        break;
    }
  };

  return (
    <div className="">
      <div className="row ">
        <div className="col-md-12">
          <div
            className="row col-md-12"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 10,
            }}
          >
            <img src={logo} />
            <h5>UNIVERSITY OF GHANA</h5>
            <h2>FRESHMEN MEDICALS</h2>
          </div>
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title"></h3>
            </div>
            <div className="container" style={{marginTop: 50, alignItems:'center'}}>
              <h4 style={{textAlign:'center'}}>
                Hello Edwin, Welcome to Freshmen's Health Survey
              </h4>
            </div>

            <div className="box-body" style={{ padding: "2rem" }}>
              {renderStepperheader()}

              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
