import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
import LoadingModal from "./LoadingModal";
import { SurveyContext } from "./App";
import SubmitSurvey from "./SubmitSurvey";

const baseURL = "#";

export default function GenderScreening({ setstep, set_gendescreen, setreachstep, set_completed_info }) {
  const data = React.useContext(SurveyContext);
  const gendersc = data.gender_screen;

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");

  //page data
  const [cervical_cancer_screening, setCervicalCancer] = useState(gendersc != null ? gendersc.cervical_cancer_screening : "");
  const [breast_cancer_screening, setBreastCancer] = useState(gendersc != null ? gendersc.breast_cancer_screening : "");
  const [breast_cancer_screen_date, setBreastCancerScreenDate] = useState(gendersc != null ? gendersc.breast_cancer_screen_date : "");
  const [breast_cancer_result, setBreastCancerScreenResult] = useState(gendersc != null ? gendersc.breast_cancer_result : "");

  const [prostrate_cancer_screen, setProstrateCancer] = useState(gendersc != null ? gendersc.prostrate_cancer_screen : "");
  const [prostrate_cancer_screen_date, setProstrateCancerScreenDate] = useState(gendersc != null ? gendersc.prostrate_cancer_screen_date : "");
  const [prostrate_cancer_screen_result, setProstrateCancerScreenResult] = useState(gendersc != null ? gendersc.prostrate_cancer_screen_result : "");

  const [yellow_fever_card, setYellowFeverCard] = useState(gendersc != null ? gendersc.yellow_fever_card : "");
  const [heptitis_fever_card, setHeptitisCard] = useState(gendersc != null ? gendersc.heptitis_fever_card : "");
  const [convid_fever_card, setCovidCard] = useState(gendersc != null ? gendersc.convid_fever_card : "");

  const handleCerivicCancerScreenStateChange = (e) => setCervicalCancer(e.target.value);
  const handleBreastCancerScreenStateChange = (e) => setBreastCancer(e.target.value);
  const handleBreastCancerScreenDateChange = (e) => setBreastCancerScreenDate(e.target.value);
  const handleBreastCancerScreenResultChange = (e) => setBreastCancerScreenResult(e.target.value);

  const handleProstrateCancerScreenStateChange = (e) => setProstrateCancer(e.target.value);
  const handleProstrateCancerScreenDateChange = (e) => setProstrateCancerScreenDate(e.target.value);
  const handleProstrateCancerScreenResultChange = (e) => setProstrateCancerScreenResult(e.target.value);

  const handleYellowFeverCardChange = (e) => setYellowFeverCard(e.target.value);
  const handleHeptitisCardChange = (e) => setHeptitisCard(e.target.value);
  const handleCovidCardChange = (e) => setCovidCard(e.target.value);

  useEffect(() => {
    setFinalData();
    setreachstep(11);
  }, [cervical_cancer_screening, 
      breast_cancer_screening, 
      breast_cancer_screen_date, 
      breast_cancer_result,
      prostrate_cancer_screen,
      prostrate_cancer_screen_date,
      prostrate_cancer_screen_result,
      yellow_fever_card,
      heptitis_fever_card,
      convid_fever_card]);

  const setFinalData = () => {
    set_gendescreen({
      cervical_cancer_screening,
      breast_cancer_screening,
      breast_cancer_screen_date,
      breast_cancer_result,
      prostrate_cancer_screen,
      prostrate_cancer_screen_date,
      prostrate_cancer_screen_result,
      yellow_fever_card,
      heptitis_fever_card,
      convid_fever_card,
    });
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    data.completed = 1;
    data.stage = 12;
    console.log(data);
    setLoading(true);
    setTimeout(function(){
      SubmitSurvey(data).then(res => {
        setLoading(false);
        if(res.data.status == 'success'){
          console.log('returned Data' ,res.data.data);
          set_completed_info(res.data.info);
          setstep(12);
          Swal.fire("Success", 'Survey successfully completed. Thank you for taking part in this important excercise!', 'success').then(() => {
            window.location.reload();
          });
        }else{
          Swal.fire("Error", 'Oops, somehting went wrong. Please try again later.', 'error');
        }
        
      }).catch(error => {
        console.log(error);
        Swal.fire("Error", 'NETWORK ERROR: Oops, somehting went wrong. Please try again later.', 'error');
        setLoading(false);
      })

    }, 3000)
    
};

  const handleBack = () => {
    setstep(1);
  };

   /**
   * 
   */
   const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    data.completed = 0;
    data.stage = 11;
    setTimeout(function(){
      SubmitSurvey(data).then(res => {
        
        setLoading(false);
        if(res.data.status == 'success'){
          console.log('returned Data' ,res.data.data);
          Swal.fire("Success", 'Data successully saved. Remember to come back and complete it.', 'success');
        }else{
          Swal.fire("Error", 'Oops, somehting went wrong. Please try again later.', 'error');
        }
        
      }).catch(error => {
        console.log(error);
        Swal.fire("Error", 'NETWORK ERROR: Oops, somehting went wrong. Please try again later.', 'error');
        setLoading(false);
      })
    }, 3000)
  };

  /**
   * 
   * @returns 
   * 
   */
  const renderBreastCancer = () => {
    if (breast_cancer_screening == "Yes") {
      return (
        <>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(II).</strong> Date of last screening
              </label>
              <input
                value={breast_cancer_screen_date}
                onChange={handleBreastCancerScreenDateChange}
                type="date"
                className="form-control"
                name="breast_cancer_date"
              />
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(III).</strong> Result
              </label>
              <select
                onChange={handleBreastCancerScreenResultChange}
                defaultValue={breast_cancer_result}
                className="form-control"
              >
                <option value="" disabled>
                  --Select an option--
                </option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
        </>
      );
    }
  };


  /**
   * 
   * @returns 
   * 
   */
  const renderProstrateCancer = () => {
    if (prostrate_cancer_screen == "Yes") {
      return (
        <>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(II).</strong> Date of last screening
              </label>
              <input
                onChange={handleProstrateCancerScreenDateChange}
                type="date"
                value={prostrate_cancer_screen_date}
                className="form-control"
                name="prostrate_cancer_date"
              />
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(III).</strong> Result
              </label>
              <select
                onChange={handleProstrateCancerScreenResultChange}
                defaultValue={prostrate_cancer_screen_result}
                className="form-control"
              >
                <option value="" disabled>
                  --Select an option--
                </option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
        </>
      );
    }
  };


  const renderFemaleHeading = () => {
    if(data.user?.gender === "F"){
      return (
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE (for women only): Cervical Cancer Screening
            </strong>
            <p>
              The next question asks about cervical cancer prevention. Screening
              tests for cervical cancer prevention can be done in different
              ways, including Visual Inspection with Acetic Acid/vinegar (VIA),
              pap smear and Human Papillomavirus (HPV) test. VIA is an
              inspection of the surface of the uterine cervix after acetic acid
              (or vinegar) has been applied to it. For both pap smear and HPV
              test, a doctor or nurse uses a swab to wipe from inside your
              vagina, take a sample and send it to a laboratory. It is even
              possible that you were given the swab yourself and asked to swab
              the inside of your vagina. The laboratory checks for abnormal cell
              changes if a pap smear is done, and for the HP virus if an HPV
              test is done.:
            </p>
          </div>
        </div>
      )
    }
  }


  const renderFemaleQuestions = () => {
    if(data.user?.gender === "F"){
      return (
        <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>1.</strong> Have you ever had a screening test for
                  cervical cancer, using any of these methods described above?
                </label>
                <select
                  onChange={handleCerivicCancerScreenStateChange}
                  defaultValue={cervical_cancer_screening}
                  className="form-control"
                >
                  <option value="" disabled>
                    --Select an option--
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-12">
              <strong>2. BREAST CANCER SCREENING</strong>
            </div>
            <br />
            <br />

            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(I).</strong> Have you ever had Breast Cancer
                  Screening? Yes / No
                </label>
                <select
                  onChange={handleBreastCancerScreenStateChange}
                  defaultValue={breast_cancer_screening}
                  className="form-control"
                >
                  <option value="" disabled>
                    --Select an option--
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            {renderBreastCancer()}
          </div>
        </div>
      </div>

      )
    }
  }


  const renderMaleQuestions = () => {
    if(data.user?.gender === "M"){
      return (
        <>
              <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              3. CORE (for men only): PROSTATE CANCER SCREENING
            </strong>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(I).</strong> Have you ever had Prostate Cancer
                    Screening? Yes / No
                  </label>
                  <select
                    onChange={handleProstrateCancerScreenStateChange}
                    defaultValue={prostrate_cancer_screen}
                    className="form-control"
                  >
                    <option value="" disabled>
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              {renderProstrateCancer()}
            </div>
          </div>
        </div>
        </>
      )
    }
  }

  /**
   * 
   * 
   * 
   */
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        
        {renderFemaleHeading()}

        <br />

        {renderFemaleQuestions()}
       
        <br />

        {renderMaleQuestions()}

        <br />

        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              VACCINATION CARD
            </strong>
            <p>Have you been vaccinated against the following illments? </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> Yellow Fever
                  </label>
                   <select
                     onChange={handleYellowFeverCardChange}
                    defaultValue={yellow_fever_card}
                    className="form-control"
                  >
                    <option value="" disabled>
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Hepatitis B
                  </label>
                  <select
                     onChange={handleHeptitisCardChange}
                    defaultValue={heptitis_fever_card}
                    className="form-control"
                  >
                    <option value="" disabled>
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> Covid 19
                  </label>
                  <select
                     onChange={handleCovidCardChange}
                    defaultValue={convid_fever_card}
                    className="form-control"
                  >
                    <option value="" disabled>
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-2">
            <button
              onClick={handleBack}
              type="button"
              className="btn btn-danger btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="col-md-3">
            <button
              onClick={saveAndContinue}
              type="button"
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-save"></i> Save & Continue Later
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-success btn-block"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-send"></i> Submit
            </button>
          </div>
        </div>
      </form>

      <LoadingModal
        show={loading}
        text={loadingText}
        handleClose={() => {
          setLoading(false);
        }}
      ></LoadingModal>
    </div>
  );
}
