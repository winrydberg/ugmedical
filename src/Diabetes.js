import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import { SurveyContext } from "./App";
import LoadingModal from "./LoadingModal";
import SubmitSurvey from "./SubmitSurvey";

export default function Diabetes({ setstep, set_diabetes, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const diab = value.diabetes;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [bs_measure, setBloodSugarMeasure] = useState(diab != null ? diab.bs_measure : "");
  const [bs_measure_raised, setBloodSugarRaised] = useState(diab != null ? diab.bs_measure_raised : "");
  const [bs_raised_past_yr, setBSRaisedPastYear] = useState(diab != null ? diab.bs_raised_past_yr : "");
  const [taken_bs_med_past_week, setTakenBSMedPastWeek] = useState(diab != null ? diab.taken_bs_med_past_week : "");
  const [curr_taken_insulin, setCurrTakingInsulin] = useState(diab != null ? diab.curr_taken_insulin : "");
  const [seen_trad_healer_for_bs, setSeenTradHealerForBS] = useState(diab != null ? diab.seen_trad_healer_for_bs : "");
  const [curr_taking_herbal_med_for_insulin, setCurTakingHerbalDiabetes] =
    useState(diab != null ? diab.curr_taking_herbal_med_for_insulin : "");

  const handleBSMeasureChange = (e) => setBloodSugarMeasure(e.target.value);
  const handleBSRaisedChange = (e) => setBloodSugarRaised(e.target.value);
  const handleBSRaisedPastYearChange = (e) =>
    setBSRaisedPastYear(e.target.value);
  const handleTakenBSMedPastWeekChange = (e) =>
    setTakenBSMedPastWeek(e.target.value);
  const handleCurrTakingInsulinChange = (e) =>
    setCurrTakingInsulin(e.target.value);
  const handleSeenTradHealerChange = (e) =>
    setSeenTradHealerForBS(e.target.value);
  const handleCurrTakingHerbMedInsulinChange = (e) =>
    setCurTakingHerbalDiabetes(e.target.value);

  useEffect(() => {
    setGlobalState();
    setreachstep(8);
  }, [bs_measure,bs_measure_raised,bs_raised_past_yr,taken_bs_med_past_week,curr_taken_insulin,seen_trad_healer_for_bs,curr_taking_herbal_med_for_insulin,]);

  const handleNext = (e) => {
    e.preventDefault();
    set_diabetes({
      bs_measure,bs_measure_raised,bs_raised_past_yr,taken_bs_med_past_week,curr_taken_insulin,seen_trad_healer_for_bs,curr_taking_herbal_med_for_insulin,
    });
    setstep(9);
  };


  const setGlobalState = () => {
    set_diabetes({
      bs_measure,bs_measure_raised,bs_raised_past_yr,taken_bs_med_past_week,curr_taken_insulin,seen_trad_healer_for_bs,curr_taking_herbal_med_for_insulin,
    });
  }

  const handleBack = () => {
    setstep(7);
  };

  /**
   * 
   */
  const saveAndContinue = () => {
      setLoadingText("Saving & Exiting... Please wait...");
      setLoading(true);
      value.completed = 0;
      value.stage = 8;
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


  const renderInformedOfDiabetesStatus = () => {
    if(bs_measure_raised != 'No'){
      return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>3.</strong> Were you first told in the past 12
                    months?
                  </label>
                  <select
                    onChange={handleBSRaisedPastYearChange}
                    defaultValue={bs_raised_past_yr}
                    required
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


  

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE: History of Diabetes
            </strong>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Have you ever had your blood sugar
                    measured by a doctor or other health worker?
                  </label>
                  <select
                    onChange={handleBSMeasureChange}
                    defaultValue={bs_measure}
                    required
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
                      other health worker that you have raised blood sugar or
                      diabetes?
                    </label>
                    <select
                      onChange={handleBSRaisedChange}
                      defaultValue={bs_measure_raised}
                      required
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
            
            {renderInformedOfDiabetesStatus()}

            <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="choice">
                      <strong>4.</strong> In the past two weeks, have you taken
                      any drugs (medication) for diabetes prescribed by a doctor
                      or other health worker?
                    </label>
                    <select
                      defaultValue={taken_bs_med_past_week}
                      onChange={handleTakenBSMedPastWeekChange}
                      required
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
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Are you currently taking insulin for
                    diabetes prescribed by a doctor or other health worker?
                  </label>
                  <select
                    defaultValue={curr_taken_insulin}
                    onChange={handleCurrTakingInsulinChange}
                    required
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
                    <strong>6.</strong> Have you ever seen a traditional healer
                    for diabetes or raised blood sugar?
                  </label>
                  <select
                    defaultValue={seen_trad_healer_for_bs}
                    onChange={handleSeenTradHealerChange}
                    required
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
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Are you currently taking any herbal or
                    traditional remedy for your diabetes?
                  </label>
                  <select
                    defaultValue={curr_taking_herbal_med_for_insulin}
                    onChange={handleCurrTakingHerbMedInsulinChange}
                    required
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
              type="button"
              onClick={handleBack}
              className="btn btn-danger btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              onClick={saveAndContinue}
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
