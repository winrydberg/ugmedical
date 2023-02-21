import React, {useState} from "react";

export default function AlcoholEnhanced({ setstep }) {

    
    const [con_home_brewed, setConsHomeBrewed] = useState("");
    const [home_brewed_spirit, setHomeBrewedSpirit] = useState("");
    const [home_brewed_beer, setHomeBrewedBeer] = useState("");
    const [border_alcohol, setBorderAlcohol] = useState("");
    const [alcohol_not_drinking, setAlcoholNotForDrinking] = useState("");
    const [untaxed, setUntaxedAlc] = useState("");
    const [stop_drink_once_started, setStopDrinkOnceStarted] = useState("");
    const [do_what_expected, setDoWhatsExpected] = useState("");
    const [first_drink_moorning, setFirstDrinkMorning] = useState("");
    const [family_problems, setFamilyProblems] = useState("");



      const handleHomeBrewed = (e) => setConsHomeBrewed(e.target.value); 
      const handleHomeBrewedSpirit = (e) => setHomeBrewedSpirit(e.target.value); 
      const handleHomeBrewedBeer = (e) => setHomeBrewedBeer(e.target.value); 
      const handleBorderAlcohol = (e) => setBorderAlcohol(e.target.value); 
      const handleAlcoholNotForDrinking = (e) =>
        setAlcoholNotForDrinking(e.target.value); 
      const handleUntaxedAlcohol = (e) => setUntaxedAlc(e.target.value);
      const handleStopOnceStarted = (e) =>
        setStopDrinkOnceStarted(e.target.value);
      const handleDoWhatsExpected = (e) => setDoWhatsExpected(e.target.value); 
      const handleFirstDrinkMorning = (e) => setFirstDrinkMorning(e.target.value); 
      const handleFanilyProblems = (e) => setFamilyProblems(e.target.value); 

         



    const handleNext = () => {
      setstep(5);
    };

    const handleBack = () => {
      setstep(4);
    };
    const saveAndContinue = () => {
    };



  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <h4>CORE: Alcohol Consumption, continued</h4>
            <p>
              I have just asked you about your consumption of alcohol during the
              past 7 days. The questions were about alcohol in general, while
              the next questions refer to your consumption of homebrewed
              alcohol, alcohol brought over the border/from another country, any
              alcohol not intended for drinking or other untaxed alcohol. Please
              only think about these types of alcohol when answering the next
              questions.
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
                    <strong>1. </strong> During the past 7 days, did you consume
                    any homebrewed alcohol, any alcohol brought over the
                    border/from another country, any alcohol not intended for
                    drinking or other untaxed alcohol?
                  </label>
                  <select
                    onChange={handleHomeBrewed}
                    defaultValue={"null"}
                    required
                    className="form-control"
                  >
                    <option value="null" disabled>
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
        <br />

        <h5>
          <strong>2. </strong> On average, how many standard drinks of the
          following did you consume during the past 7 days?
        </h5>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>(I).</strong> Homebrewed spirits, e.g. moonshine
                  </label>
                  <input
                    required
                    className="form-control"
                    onChange={handleHomeBrewedSpirit}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>(II).</strong>Homebrewed beer or wine, e.g. beer,
                    palm or fruit wine
                  </label>
                  <input
                    className="form-control"
                    onChange={handleHomeBrewedBeer}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>(III).</strong> Alcohol brought over the border/from
                    another country
                  </label>
                  <input
                    className="form-control"
                    required
                    onChange={handleBorderAlcohol}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>(IV).</strong> Alcohol not intended for drinking,
                    e.g. alcohol-based medicines, perfumes, after shaves
                  </label>
                  <input
                    className="form-control"
                    required
                    onChange={handleAlcoholNotForDrinking}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>(V).</strong>Other untaxed alcohol in the country
                  </label>
                  <input
                    className="form-control"
                    onChange={handleUntaxedAlcohol}
                  />
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
                    <strong>3.</strong> During the past 12 months, how often
                    have you found that you were not able to stop drinking once
                    you had started?
                  </label>
                  <select
                    required
                    defaultValue={"null"}
                    onChange={handleStopOnceStarted}
                    className="form-control"
                  >
                    <option value="null" disabled>
                      --Select an option--
                    </option>
                    <option value="Daily or almost daily">
                      Daily or almost daily
                    </option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Less than monthly">Less than monthly</option>
                    <option value="Never">Never</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> During the past 12 months, how often
                    have you failed to do what was normally expected from you
                    because of drinking?
                  </label>
                  <select
                    onChange={handleDoWhatsExpected}
                    required
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="Daily or almost daily">
                      Daily or almost daily
                    </option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Less than monthly">Less than monthly</option>
                    <option value="Never">Never</option>
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
                    <strong>5.</strong> During the past 12 months, how often
                    have you needed a first drink in the morning to get yourself
                    going after a heavy drinking session?
                  </label>
                  <select
                    defaultValue={"null"}
                    onChange={handleFirstDrinkMorning}
                    className="form-control"
                  >
                    <option value="null" disabled>
                      --Select an option--
                    </option>
                    <option value="Daily or almost daily">
                      Daily or almost daily
                    </option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Less than monthly">Less than monthly</option>
                    <option value="Never">Never</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> During the past 12 months, have you had
                    family problems or problems with your partner due to someone
                    else’s drinking?
                  </label>
                  <select
                    onChange={handleFanilyProblems}
                    required
                    defaultValue={"null"}
                    className="form-control"
                  >
                    <option value="null">--Select an option--</option>
                    <option value="Yes, more than monthly">
                      Yes, more than monthly
                    </option>
                    <option value="Yes, monthly ">Yes, monthly </option>
                    <option value="Yes, several times but less than monthly">
                      Yes, several times but less than monthly
                    </option>
                    <option value="Yes, once or twice ">
                      Yes, once or twice{" "}
                    </option>
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
              onClick={() => handleNext()}
              className="btn btn-danger btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-save"></i> Save & Continue Later
            </button>
          </div>
          <div className="col-md-3">
            <button
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
