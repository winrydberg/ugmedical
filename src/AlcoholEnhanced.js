import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import { SurveyContext } from "./App";
import LoadingModal from "./LoadingModal";
import SubmitSurvey from "./SubmitSurvey";

export default function AlcoholEnhanced({ setstep, set_alcohol_exp, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const alcexp = value.alcoholexp;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [con_home_brewed, setConsHomeBrewed] = useState(alcexp != null ? alcexp.con_home_brewed : "");
  const [home_brewed_spirit, setHomeBrewedSpirit] = useState(alcexp != null ? alcexp.home_brewed_spirit : "");
  const [home_brewed_beer, setHomeBrewedBeer] = useState(alcexp != null ? alcexp.home_brewed_beer : "");
  const [border_alcohol, setBorderAlcohol] = useState(alcexp != null ? alcexp.border_alcohol : "");
  const [alcohol_not_drinking, setAlcoholNotForDrinking] = useState(alcexp != null ? alcexp.alcohol_not_drinking : "");
  const [untaxed, setUntaxedAlc] = useState(alcexp != null ? alcexp.untaxed : "");
  const [stop_drink_once_started, setStopDrinkOnceStarted] = useState(alcexp != null ? alcexp.stop_drink_once_started : "");
  const [do_what_expected, setDoWhatsExpected] = useState(alcexp != null ? alcexp.do_what_expected : "");
  const [first_drink_moorning, setFirstDrinkMorning] = useState(alcexp != null ? alcexp.first_drink_moorning : "");
  const [family_problems, setFamilyProblems] = useState(alcexp != null ? alcexp.family_problems : "");

  const handleHomeBrewed = (e) => setConsHomeBrewed(e.target.value);
  const handleHomeBrewedSpirit = (e) => setHomeBrewedSpirit(e.target.value);
  const handleHomeBrewedBeer = (e) => setHomeBrewedBeer(e.target.value);
  const handleBorderAlcohol = (e) => setBorderAlcohol(e.target.value);
  const handleAlcoholNotForDrinking = (e) => setAlcoholNotForDrinking(e.target.value);
  const handleUntaxedAlcohol = (e) => setUntaxedAlc(e.target.value);
  const handleStopOnceStarted = (e) => setStopDrinkOnceStarted(e.target.value);
  const handleDoWhatsExpected = (e) => setDoWhatsExpected(e.target.value);
  const handleFirstDrinkMorning = (e) => setFirstDrinkMorning(e.target.value);
  const handleFanilyProblems = (e) => setFamilyProblems(e.target.value);

  useEffect(() => {
    setGlobalState();
    setreachstep(4);
  }, [con_home_brewed,home_brewed_spirit,home_brewed_beer,border_alcohol,alcohol_not_drinking,untaxed,stop_drink_once_started,do_what_expected,first_drink_moorning,family_problems,]);

  const handleNext = (e) => {
    e.preventDefault();
    set_alcohol_exp({
      con_home_brewed,home_brewed_spirit,home_brewed_beer,border_alcohol,alcohol_not_drinking,untaxed,stop_drink_once_started,do_what_expected,first_drink_moorning,family_problems,
    });
    setstep(5);
  };

  const setGlobalState = () => {
    set_alcohol_exp({
      con_home_brewed,home_brewed_spirit,home_brewed_beer,border_alcohol,alcohol_not_drinking,untaxed,stop_drink_once_started,do_what_expected,first_drink_moorning,family_problems,
    });
  }

  const handleBack = () => {
    setstep(3);
  };
  const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 4;
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
   */
  const renderAverageHomeDrinks = () => {
    if(con_home_brewed != 'No'){
      return (
        <>
          <p>
          <strong>2. </strong> On average, how many standard drinks of the
          following did you consume during the past 7 days?
        </p>
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
                    value={home_brewed_spirit}
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
                  value={home_brewed_beer}
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
                  value={border_alcohol}
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
                  value={alcohol_not_drinking}
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
                    value={untaxed}
                    className="form-control"
                    onChange={handleUntaxedAlcohol}
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
            <strong className="col-md-12" style={{ textTransform: "uppercase",  }}>CORE: Alcohol Consumption, continued</strong>
            <p className="col-md-12">
              <i className="fa fa-info-circle"></i>  I have just asked you about your consumption of alcohol during the
              past 7 days. 
            </p>

            <p className="col-md-12"><i className="fa fa-info-circle"></i>  The questions were about alcohol in general, while
              the next questions refer to your consumption of homebrewed
              alcohol, alcohol brought over the border/from another country, any
              alcohol not intended for drinking or other untaxed alcohol. </p>

              <p className="col-md-12"><i className="fa fa-info-circle"></i>  Please
              only think about these types of alcohol when answering the next
              questions.</p>
        </div>
        <br />
        <div className='col-md-12' >
          <img src={require('./alc.jpeg')} style={{width: '100%', }}/>
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
                    defaultValue={con_home_brewed}
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
        <br />

        
        {renderAverageHomeDrinks()}

        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>3.</strong> During the past 12 months, how often
                    have you found that you were not able to stop drinking once
                    you had started?
                  </label>
                  <select
                    required
                    defaultValue={stop_drink_once_started}
                    onChange={handleStopOnceStarted}
                    className="form-control"
                  >
                    <option value="" disabled>
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

              <br />

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> During the past 12 months, how often
                    have you failed to do what was normally expected from you
                    because of drinking?
                  </label>
                  <select
                    onChange={handleDoWhatsExpected}
                    required
                    defaultValue={do_what_expected}
                    className="form-control"
                  >
                    <option value="" disabled>--Select an option--</option>
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> During the past 12 months, how often
                    have you needed a first drink in the morning to get yourself
                    going after a heavy drinking session?
                  </label>
                  <select
                    defaultValue={first_drink_moorning}
                    onChange={handleFirstDrinkMorning}
                    className="form-control"
                  >
                    <option value="" disabled>
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

              <br />

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> During the past 12 months, have you had
                    family problems or problems with your partner due to someone
                    else’s drinking?
                  </label>
                  <select
                    onChange={handleFanilyProblems}
                    required
                    defaultValue={family_problems}
                    className="form-control"
                  >
                    <option value="">--Select an option--</option>
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
            type="button"
              onClick={() => handleBack()}
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
