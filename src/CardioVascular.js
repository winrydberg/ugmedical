import React, {useState, useEffect} from "react";

export default function CardioVascular({ setstep, set_cardiovascular, setreachstep }) {
  const [heart_attack, setHeardAttack] = useState("");
  const [curr_takes_aspirin, setCurrTakesAspirin] = useState("");
  const [curr_takes_statins, setCurrTakesStatin] = useState("");
  const [visi_doc_past_year, setVisitDocInPastYear] = useState("");
  const [during_visit, setDuringVisitAadvise] = useState({
    quit_smoking: "",
    reduce_salt: "",
    eat_fruit_veges_daily: "",
    reduce_fat_intake: "",
    do_physical_excercise: "",
    body_weight: "",
    reduce_sugar_intake: "",
  });

  const handleHeartAttackChange = (e) => setHeardAttack(e.target.value);
  const handleCurrTakesAspirinChange = (e) =>
    setCurrTakesAspirin(e.target.value);
  const handleCurrTakesStatinsChange = (e) =>
    setCurrTakesStatin(e.target.value);
  const handleVisitDocPastYearChange = (e) =>
    setVisitDocInPastYear(e.target.value);

  useEffect(() => {
    setreachstep(10);
  }, []);

  const handleAdviceDuringVisit = (val) => (e) => {
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

  const saveAndContinue = () => {};

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
                    <strong>2.</strong> Are you currently taking aspirin
                    regularly to prevent or treat heart disease?
                  </label>
                  <select
                    onChange={handleCurrTakesAspirinChange}
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
                    <strong>3.</strong> Are you currently taking statins
                    (Lovastatin/Simvastatin/Atorvastatin or any other statin)
                    regularly to prevent or treat heart disease?
                  </label>
                  <select
                    onChange={handleCurrTakesStatinsChange}
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
            <strong style={{ textTransform: "uppercase" }}>
              CORE: Lifestyle Advice
            </strong>
            <p>Questions:</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> During the past 12 months, have you
                    visited a doctor or other health worker?
                  </label>
                  <select
                    onChange={handleVisitDocPastYearChange}
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
                    onChange={() => handleAdviceDuringVisit(1)}
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
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(II).</strong> Reduce salt in your diet
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(2)}
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
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(III).</strong> Eat at least five servings of fruit
                    and/or vegetables each day
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(3)}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(IV).</strong> Reduce fat in your diet
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(4)}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(V).</strong> Start or do more physical activity
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(5)}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(VI).</strong> Maintain a healthy body weight or
                    lose weight
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(6)}
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

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(VII).</strong> Reduce sugary beverages in your diet
                  </label>
                  <select
                    onChange={() => handleAdviceDuringVisit(7)}
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
