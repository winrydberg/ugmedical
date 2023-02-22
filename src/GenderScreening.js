import React, {useState} from "react";
import axios from 'axios';

export default function GenderScreening({ setstep }) {

 const [cervical_cancer_screening, setCervicalCancer] = useState("");
 const [breast_cancer_screening, setBreastCancer] = useState("");
 const [breast_cancer_screen_date, setBreastCancerScreenDate] = useState("");
 const [breast_cancer_result, setBreastCancerScreenResult] = useState("");

 const [prostrate_cancer_screen, setProstrateCancer] = useState("");
 const [prostrate_cancer_screen_date, setProstrateCancerScreenDate] = useState("");
 const [prostrate_cancer_screen_result, setProstrateCancerScreenResult] = useState("");

 const [yellow_fever_card, setYellowFeverCard] = useState("");
 const [heptitis_fever_card, setHeptitisCard] = useState("");
 const [convid_fever_card, setCovidCard] = useState("");


 const handleCerivicCancerScreenStateChange = (e) => setCervicalCancer(e.target.value);
 const handleBreastCancerScreenStateChange = (e) => setBreastCancer(e.target.value);
 const handleBreastCancerScreenDateChange = (e) => setBreastCancerScreenDate(e.target.value);
 const handleBreastCancerScreenResultChange = (e) => setBreastCancerScreenResult(e.target.value);

 const handleProstrateCancerScreenStateChange = (e) => setProstrateCancer(e.target.value);
 const handleProstrateCancerScreenDateChange = (e) =>  setProstrateCancerScreenDate(e.target.value);
 const handleProstrateCancerScreenResultChange = (e) => setProstrateCancerScreenResult(e.target.value);

 const handleYellowFeverCardChange = (e) => setYellowFeverCard(e.target.value);
 const handleHeptitisCardChange = (e) => setHeptitisCard(e.target.value);
 const handleCovidCardChange = (e) => setCovidCard(e.target.value);










  const handleSubmit = () => {
    console.log()
  };

  const handleBack = () => {
    setstep(1);
  };

  const saveAndContinue = () => {
    axios.post('/url',{
        
    })
  };


  const renderBreastCancer = () => {
    if(breast_cancer_screening == "Yes"){
        return (
          <>
          
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(II).</strong> Date of last screening
                </label>
                <input
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
                <select onChange={handleBreastCancerScreenResultChange} defaultValue={""} className="form-control">
                  <option value="" disabled>--Select an option--</option>
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
          </>
        );
    }
  }

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
                defaultValue={""}
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <br />

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
                    defaultValue={""}
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
                    defaultValue={""}
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

        <br />

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
                    defaultValue={""}
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

        <br />

        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              VACCINATION CARD
            </strong>
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
                  <input
                    onChange={handleYellowFeverCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Hepatitis B
                  </label>
                  <input
                    onChange={handleHeptitisCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> Covid 19
                  </label>
                  <input
                    onChange={handleCovidCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
                  />
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
    </div>
  );
}
