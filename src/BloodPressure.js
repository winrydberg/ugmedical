import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import { SurveyContext } from './App';
import LoadingModal from './LoadingModal';
import SubmitSurvey from './SubmitSurvey';

export default function BloodPressure({ setstep, set_bloodpressure, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const bp = value.bloodpressure;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [measure_blood_pressure, setMeasureBloodPressure] = useState(bp != null ? bp.measure_blood_pressure : "");
  const [raised_bllod_pressure, setRaisedBloodPressure] = useState(bp != null ? bp.raised_bllod_pressure : "");
  const [bp_raised_in_past_year, setBpRaisedinLastyear] = useState(bp != null ? bp.bp_raised_in_past_year : "");
  const [taken_bp_drug_in_past_weeks, setTakenBPInPastWeeks] = useState(bp != null ? bp.taken_bp_drug_in_past_weeks : "");
  const [contacted_nativedoc_on_bp, setContactNativeDocOnBP] = useState(bp != null ? bp.contacted_nativedoc_on_bp : "");
  const [currently_taking_herbal_med_bp, setCurrTakingHerbalBPMed] = useState(bp != null ? bp.currently_taking_herbal_med_bp : "");

  const handleBPMeasuredChange = (e) => setMeasureBloodPressure(e.target.value);
  const handleBPRasiedChange = (e) => setRaisedBloodPressure(e.target.value);
  const handleBPRaiedPastYearChange = (e) =>setBpRaisedinLastyear(e.target.value);
  const handleBPDrugsInPastWeekChange = (e) => setTakenBPInPastWeeks(e.target.value);
  const handleContactNativeDocChange = (e) => setContactNativeDocOnBP(e.target.value);
  const handleCurrTakingHerbBPMedChange = (e) => setCurrTakingHerbalBPMed(e.target.value);

  useEffect(() => {
    setGlobalState();
    setreachstep(7);
  }, [measure_blood_pressure,raised_bllod_pressure,bp_raised_in_past_year,taken_bp_drug_in_past_weeks,contacted_nativedoc_on_bp,currently_taking_herbal_med_bp,]);

  const setGlobalState = () => {
    set_bloodpressure({
      measure_blood_pressure,raised_bllod_pressure,bp_raised_in_past_year,taken_bp_drug_in_past_weeks,contacted_nativedoc_on_bp,currently_taking_herbal_med_bp,
    });
  }

  const handleNext = (e) => {
    e.preventDefault();
    set_bloodpressure({
      measure_blood_pressure,
      raised_bllod_pressure,
      bp_raised_in_past_year,
      taken_bp_drug_in_past_weeks,
      contacted_nativedoc_on_bp,
      currently_taking_herbal_med_bp,
    });
    setstep(8);
  };

  const handleBack = () => {
    setstep(6);
  };

   /**
   * 
   */
   const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 7;
    setTimeout(function(){
      SubmitSurvey(value).then(res => {
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
   * 
   * 
   */

  const renderInformedOnBloodPressureRise = () => {
    if(raised_bllod_pressure != 'No'){
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>3.</strong> Were you first told in the past 12
                months?
              </label>
              <select
                required
                defaultValue={bp_raised_in_past_year}
                onChange={handleBPRaiedPastYearChange}
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
      )
    }
  }


  /**
   * 
   * 
   */
  const renderTakingHerbalMedication = () => {
    if(contacted_nativedoc_on_bp != "No"){
      return (
          <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="choice">
                      <strong>6.</strong> Are you currently taking any herbal or
                      traditional remedy for your raised blood pressure?
                    </label>
                    <select
                      required
                      defaultValue={currently_taking_herbal_med_bp}
                      onChange={handleCurrTakingHerbBPMedChange}
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
      )
    }
  }


  /**
   * 
   * 
   */

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE: History of Raised Blood Pressure
            </strong>
            <p>Questions:</p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Have you ever had your blood pressure
                    measured by a doctor or other health worker?
                  </label>
                  <select
                    defaultValue={measure_blood_pressure}
                    required
                    onChange={handleBPMeasuredChange}
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

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>2.</strong> Have you ever been told by a doctor or
                    other health worker that you have raised blood pressure or
                    hypertension?
                  </label>
                  <select
                    defaultValue={raised_bllod_pressure}
                    required
                    onChange={handleBPRasiedChange}
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
          <div className="col-md-12">
           
           {renderInformedOnBloodPressureRise()}

            <br />

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> In the past two weeks, have you taken
                    any drugs (medication) for raised blood pressure prescribed
                    by a doctor or other health worker?
                  </label>
                  <select
                    required
                    onChange={handleBPDrugsInPastWeekChange}
                    defaultValue={taken_bp_drug_in_past_weeks}
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
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Have you ever seen a traditional healer
                    for raised blood pressure or hypertension?
                  </label>
                  <select
                    onChange={handleContactNativeDocChange}
                    required
                    defaultValue={contacted_nativedoc_on_bp}
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

            <br />

            {renderTakingHerbalMedication()}

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
              className="btn btn-info btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-right"></i> Continue
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
