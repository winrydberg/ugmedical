import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import { SurveyContext } from "./App";
import LoadingModal from "./LoadingModal";
import SubmitSurvey from "./SubmitSurvey";

export default function Cholesterol({ setstep, set_cholesterol, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const coles = value.cholestrol;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [cols_measureby_doc, setColsmeasuredByDoc] = useState(coles != null ? coles.cols_measureby_doc : "");
  const [raised_cols_level, setRaisedColsLevel] = useState(coles != null ? coles.raised_cols_level : "");
  const [raised_cols_past_year, setColsRaisedPastYear] = useState(coles != null ? coles.raised_cols_past_year : "");
  const [taken_oral_cols_med_pastweeks, setTakenColsMedPastWeeks] = useState(coles != null ? coles.taken_oral_cols_med_pastweeks: "");
  const [seen_trad_for_cols, setSeentradForCols] = useState(coles != null ? coles.seen_trad_for_cols : "");
  const [curr_taking_herbmed_forcols, setCurrTakingHerbMedForCols] = useState(coles != null ? coles.curr_taking_herbmed_forcols : "");

  const handleBPMeasuredChange = (e) => setColsmeasuredByDoc(e.target.value);
  const handleRaisedColsLevelChange = (e) => setRaisedColsLevel(e.target.value);
  const handleRaisedColsPastYearChange = (e) => setColsRaisedPastYear(e.target.value);
  const handleTakenColsMedPastWeekChange = (e) => setTakenColsMedPastWeeks(e.target.value);
  const handleSeenTradForColsMedChange = (e) => setSeentradForCols(e.target.value);
  const handleCurrTakingHerbmedForColsChange = (e) => setCurrTakingHerbMedForCols(e.target.value);

  useEffect(() => {
    setGlobalState();
    setreachstep(9);
  }, [cols_measureby_doc,raised_cols_level,raised_cols_past_year,taken_oral_cols_med_pastweeks,seen_trad_for_cols,curr_taking_herbmed_forcols,]);

  const setGlobalState = () => {
    set_cholesterol({
      cols_measureby_doc,raised_cols_level,raised_cols_past_year,taken_oral_cols_med_pastweeks,seen_trad_for_cols,curr_taking_herbmed_forcols,
    });
  }

  const handleNext = (e) => {
    e.preventDefault();
    set_cholesterol({
      cols_measureby_doc,raised_cols_level,raised_cols_past_year,taken_oral_cols_med_pastweeks,seen_trad_for_cols,curr_taking_herbmed_forcols,
    });
    setstep(10);
  };

  const handleBack = () => {
    setstep(8);
  };

  /**
   * 
   */
  const saveAndContinue = () => {
      setLoadingText("Saving & Exiting... Please wait...");
      setLoading(true);
      value.completed = 0;
      value.stage = 9;
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

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE: History of Raised Total Cholesterol
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
                    <strong>1.</strong> Have you ever had your cholesterol (fat
                    levels in your blood) measured by a doctor or other health
                    worker?
                  </label>
                  <select
                    onChange={handleBPMeasuredChange}
                    defaultValue={cols_measureby_doc}
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
                    other health worker that you have raised cholesterol?
                  </label>
                  <select
                    onChange={handleRaisedColsLevelChange}
                    defaultValue={raised_cols_level}
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
                    onChange={handleRaisedColsPastYearChange}
                    defaultValue={raised_cols_past_year}
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
                    any oral treatment (medication) for raised total cholesterol
                    prescribed by a doctor or other health worker?
                  </label>
                  <select
                    onChange={handleTakenColsMedPastWeekChange}
                    defaultValue={taken_oral_cols_med_pastweeks}
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
                    <strong>5.</strong>Have you ever seen a traditional healer
                    for raised cholesterol?
                  </label>
                  <select
                    onChange={handleSeenTradForColsMedChange}
                    defaultValue={seen_trad_for_cols}
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
                    <strong>6.</strong> Are you currently taking any herbal or
                    traditional remedy for your raised cholesterol?
                  </label>
                  <select
                    onChange={handleCurrTakingHerbmedForColsChange}
                    defaultValue={curr_taking_herbmed_forcols }
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
