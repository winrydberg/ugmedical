import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import { SurveyContext } from "./App";
import LoadingModal from "./LoadingModal";
import SubmitSurvey from "./SubmitSurvey";

export default function CardioVascular({ setstep, set_cardiovascular, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const cardio = value.cardiovascular;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [heart_attack, setHeardAttack] = useState(cardio != null ? cardio.heart_attack : "");
  const [curr_takes_aspirin, setCurrTakesAspirin] = useState(cardio != null ? cardio.curr_takes_aspirin : "");
  const [curr_takes_statins, setCurrTakesStatin] = useState(cardio != null ? cardio.curr_takes_statins : "");
  const [visi_doc_past_year, setVisitDocInPastYear] = useState(cardio != null ? cardio.visi_doc_past_year : "");

  const [during_visit, setDuringVisitAadvise] = useState({
    quit_smoking: cardio != null ? cardio.during_visit?.quit_smoking : "",
    reduce_salt: cardio != null ? cardio.during_visit?.reduce_salt : "",
    eat_fruit_veges_daily: cardio != null ? cardio.during_visit?.eat_fruit_veges_daily : "",
    reduce_fat_intake: cardio != null ? cardio.during_visit?.reduce_fat_intake : "",
    do_physical_excercise: cardio != null ? cardio.during_visit?.do_physical_excercise : "",
    body_weight: cardio != null ? cardio.during_visit?.body_weight : "",
    reduce_sugar_intake: cardio != null ? cardio.during_visit?.reduce_sugar_intake : "",
  });

  const handleHeartAttackChange = (e) => setHeardAttack(e.target.value);
  const handleCurrTakesAspirinChange = (e) => setCurrTakesAspirin(e.target.value);
  const handleCurrTakesStatinsChange = (e) => setCurrTakesStatin(e.target.value);
  const handleVisitDocPastYearChange = (e) => setVisitDocInPastYear(e.target.value);

  useEffect(() => {
    setGlobalState();
    setreachstep(10);
  }, [ heart_attack,
    curr_takes_aspirin,
    curr_takes_statins,
    visi_doc_past_year,
    during_visit]);

  const handleAdviceDuringVisit = (e, val) => {
    switch (val) {
      case 1:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          quit_smoking: e.target.value,
        }));

        break;
      case 2:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          reduce_salt: e.target.value,
        }));
        break;
      case 3:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          eat_fruit_veges_daily: e.target.value,
        }));
        break;
      case 4:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          reduce_fat_intake: e.target.value,
        }));
        break;
      case 5:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          do_physical_excercise: e.target.value,
        }));
        break;
      case 6:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          body_weight: e.target.value,
        }));
        break;
      case 7:
        setDuringVisitAadvise((prevState) => ({
          ...prevState,
          reduce_sugar_intake: e.target.value,
        }));
    }
  };



  const setGlobalState = () => {
     set_cardiovascular({
      heart_attack,
      curr_takes_aspirin,
      curr_takes_statins,
      visi_doc_past_year,
      during_visit,
    });
  }

  const handleNext = (e) => {
    e.preventDefault();
    
    set_cardiovascular({
      heart_attack,
      curr_takes_aspirin,
      curr_takes_statins,
      visi_doc_past_year,
      during_visit,
    });
    setstep(11);
  };



  const handleBack = () => {
    setstep(9);
  };

  /**
   * 
   */
  const saveAndContinue = () => {
      setLoadingText("Saving & Exiting... Please wait...");
      setLoading(true);
      value.completed = 0;
      value.stage = 10;
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
              CORE: History of Cardiovascular Diseases
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
                    <strong>1.</strong> Have you ever had a heart attack or
                    chest pain from heart disease (angina) or a stroke
                    (cerebrovascular accident or incident)?
                  </label>
                  <select
                    onChange={handleHeartAttackChange}
                    defaultValue={heart_attack}
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
                    <strong>2.</strong> Are you currently taking aspirin
                    regularly to prevent or treat heart disease?
                  </label>
                  <select
                    onChange={handleCurrTakesAspirinChange}
                    defaultValue={curr_takes_aspirin}
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>3.</strong> Are you currently taking statins
                    (Lovastatin/Simvastatin/Atorvastatin or any other statin)
                    regularly to prevent or treat heart disease?
                  </label>
                  <select
                    onChange={handleCurrTakesStatinsChange}
                    defaultValue={curr_takes_statins}
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
            <strong style={{ textTransform: "uppercase" }}>
              CORE: Lifestyle Advice
            </strong>
            <p>Questions:</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> During the past 12 months, have you
                    visited a doctor or other health worker?
                  </label>
                  <select
                    onChange={handleVisitDocPastYearChange}
                    defaultValue={visi_doc_past_year}
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

        <p>
          <strong>5.</strong> During any of your visits to a doctor or other
          health worker in the past 12 months, were you advised to do any of the
          following?
        </p>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(I).</strong> Quit using tobacco or don’t start
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,1)}
                    defaultValue={during_visit.quit_smoking}
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
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(II).</strong> Reduce salt in your diet
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,2)}
                    defaultValue={during_visit.reduce_salt}
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
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(III).</strong> Eat at least five servings of fruit
                    and/or vegetables each day
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,3)}
                    defaultValue={during_visit.eat_fruit_veges_daily}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(IV).</strong> Reduce fat in your diet
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,4)}
                    defaultValue={during_visit.reduce_fat_intake}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(V).</strong> Start or do more physical activity
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,5)}
                    defaultValue={during_visit.do_physical_excercise}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(VI).</strong> Maintain a healthy body weight or
                    lose weight
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,6)}
                    defaultValue={during_visit.body_weight}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(VII).</strong> Reduce sugary beverages in your diet
                  </label>
                  <select
                    onChange={(e) => handleAdviceDuringVisit(e,7)}
                    defaultValue={during_visit.reduce_sugar_intake}
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
