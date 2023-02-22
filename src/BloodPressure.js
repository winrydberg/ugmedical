import React, {useState} from 'react'

export default function BloodPressure({setstep}) {

    const [measure_blood_pressure, setMeasureBloodPressure] = useState("");
    const [raised_bllod_pressure, setRaisedBloodPressure] = useState("");
    const [bp_raised_in_past_year, setBpRaisedinLastyear] = useState("");
    const [taken_bp_drug_in_past_weeks, setTakenBPInPastWeeks] = useState("");
    const [contacted_nativedoc_on_bp, setContactNativeDocOnBP] = useState("");
    const [currently_taking_herbal_med_bp, setCurrTakingHerbalBPMed] = useState("");



    const handleBPMeasuredChange = (e) => setMeasureBloodPressure(e.target.value);
    const handleBPRasiedChange = (e) => setRaisedBloodPressure(e.target.value);
    const handleBPRaiedPastYearChange = (e) => setBpRaisedinLastyear(e.target.value);
    const handleBPDrugsInPastWeekChange = (e) => setTakenBPInPastWeeks(e.target.value);
    const handleContactNativeDocChange = (e) => setContactNativeDocOnBP(e.target.value);
    const handleCurrTakingHerbBPMedChange = (e) => setCurrTakingHerbalBPMed(e.target.value);



        

    const handleNext = () => {
    setstep(8);
    };

    const handleBack = () => {
    setstep(6);
    };

    const saveAndContinue = () => {

    }

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
                    // defaultValue={""}
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
                    // defaultValue={""}
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
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>3.</strong> Were you first told in the past 12
                    months?
                  </label>
                  <select
                    required
                    defaultValue={""}
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

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> In the past two weeks, have you taken
                    any drugs (medication) for raised blood pressure prescribed
                    by a doctor or other health worker?
                  </label>
                  <select
                    required
                    onChange={handleBPDrugsInPastWeekChange}
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
                    <strong>5.</strong> Have you ever seen a traditional healer
                    for raised blood pressure or hypertension?
                  </label>
                  <select
                    onChange={handleContactNativeDocChange}
                    required
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

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> Are you currently taking any herbal or
                    traditional remedy for your raised blood pressure?
                  </label>
                  <select
                    required
                    defaultValue={""}
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
    </div>
  );
}
