import React, {useState} from "react";

export default function Diabetes({ setstep }) {

  const [bs_measure, setBloodSugarMeasure] = useState("");
  const [bs_measure_raised, setBloodSugarRaised] = useState("");
  const [bs_raised_past_yr, setBSRaisedPastYear] = useState("");
  const [taken_bs_med_past_week, setTakenBSMedPastWeek] = useState("");
  const [curr_taken_insulin, setCurrTakingInsulin] = useState("");
  const [seen_trad_healer_for_bs, setSeenTradHealerForBS] = useState("");
  const [curr_taking_herbal_med_for_insulin, setCurTakingHerbalDiabetes] = useState("");

  const handleBSMeasureChange = (e) => setBloodSugarMeasure(e.target.value);
  const handleBSRaisedChange = (e) => setBloodSugarRaised(e.target.value);
  const handleBSRaisedPastYearChange = (e) => setBSRaisedPastYear(e.target.value);
  const handleTakenBSMedPastWeekChange = (e) => setTakenBSMedPastWeek(e.target.value);
  const handleCurrTakingInsulinChange = (e) => setCurrTakingInsulin(e.target.value);
  const handleSeenTradHealerChange = (e) => setSeenTradHealerForBS(e.target.value);
  const handleCurrTakingHerbMedInsulinChange = (e) => setCurTakingHerbalDiabetes(e.target.value);


  const handleNext = () => {
    setstep(9);
  };

  const handleBack = () => {
    setstep(7);
  };

  const saveAndContinue = () => {

  };

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE: History of Diabetes
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
                    <strong>1.</strong> Have you ever had your blood sugar
                    measured by a doctor or other health worker?
                  </label>
                  <select
                    onChange={handleBSMeasureChange}
                    defaultValue={""}
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
                    defaultValue={""}
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
                    <strong>3.</strong> Were you first told in the past 12
                    months?
                  </label>
                  <select
                    onChange={handleBSRaisedPastYearChange}
                    defaultValue={""}
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
                    <strong>4.</strong> In the past two weeks, have you taken
                    any drugs (medication) for diabetes prescribed by a doctor
                    or other health worker?
                  </label>
                  <select
                    defaultValue={""}
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
                    defaultValue={""}
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
                    defaultValue={""}
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
                    defaultValue={""}
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
    </div>
  );
}
