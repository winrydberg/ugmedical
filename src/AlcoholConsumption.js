import React, {useState,useEffect} from 'react'
import alc from "./alc.jpeg";
import Swal from 'sweetalert2'
import { SurveyContext } from './App';
import LoadingModal from './LoadingModal';
import SubmitSurvey from './SubmitSurvey';

export default function AlcoholConsumption({ setstep, set_alcohol, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const alc = value.alcohol;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [dring_alcohol, setAlcolhosState] = useState(alc!=null?alc.dring_alcohol:"");
  const [dring_alcohol_past_year, setPastYrAlcohol] = useState(alc!=null?alc.dring_alcohol_past_year : "");
  const [stop_drinking_health, setStopDrikingDueHealth] = useState(alc!=null?alc.stop_drinking_health : "");
  const [past_year_freq, setPastYrFreq] = useState(alc!=null?alc.past_year_freq : "");
  const [past_month_intake, setPastMonthIntake] = useState(alc!=null?alc.past_month_intake : "");
  const [drink_occasion, setDrinkOccasion] = useState(alc!=null?alc.drink_occasion : "");
  const [standard_drink_in_occasion, setStandardDrinkInOccation] = useState(alc!=null?alc.standard_drink_in_occasion : "");
  const [largest_drink, setLargestDrink] = useState(alc!=null?alc.largest_drink : "");
  const [six_more_drink, setSixMoreDrinks] = useState(alc != null ? alc.six_more_drink : "");
  const [week_standard_drink, setWeekStandardDrink] = useState(alc!=null?alc.week_standard_drink : "");

  useEffect(() => {
    setGlobalState()
    setreachstep(3);
  }, [ dring_alcohol,dring_alcohol_past_year,stop_drinking_health,past_year_freq,past_month_intake,drink_occasion,standard_drink_in_occasion,largest_drink,six_more_drink,week_standard_drink,]);

  const handleNext = (e) => {
    e.preventDefault();
    set_alcohol({
      dring_alcohol,
      dring_alcohol_past_year,
      stop_drinking_health,
      past_year_freq,
      past_month_intake,
      drink_occasion,
      standard_drink_in_occasion,
      largest_drink,
      six_more_drink,
      week_standard_drink,
    });
    setstep(4);
  };

  const setGlobalState = () => {
    set_alcohol({
      dring_alcohol,dring_alcohol_past_year,stop_drinking_health,past_year_freq,past_month_intake,drink_occasion,standard_drink_in_occasion,largest_drink,six_more_drink,week_standard_drink,
    });
  }


  const handleAlcConsumption = (e) => setAlcolhosState(e.target.value);
  const handlePastYrConsumption = (e) => setPastYrAlcohol(e.target.value);
  const handleStopDrinkingDueToHealth = (e) => setStopDrikingDueHealth(e.target.value);
  const handleUseDuration = (e) => setPastYrFreq(e.target.value);
  const handlePastMonthYearIntake = (e) => setPastMonthIntake(e.target.value);
  const handleDrinkingOccasion = (e) => setDrinkOccasion(e.target.value);
  const handleDrinkingDrinkOnOccasion = (e) => setStandardDrinkInOccation(e.target.value);
  const handleLargestDrink = (e) => setLargestDrink(e.target.value);
  const handleSixOrMoreDrink = (e) => setSixMoreDrinks(e.target.value);
  const handleWeekStandardDrink = (e) => setWeekStandardDrink(e.target.value);


  const handleBack = () => {
    setstep(3);
  };

  const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 3;
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
        Swal.fire("Error", 'NETWORK ERROR: Oops, somehting went wrong. Please try again later.', 'error');
        setLoading(false);
      })
    }, 3000)
  };


  /**
   * 
   * 
   * 
   * 
   */
  const renderConsumedAlcoholPastMonth = () => {
    if(dring_alcohol != 'No'){
      return (
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="choice">
              <strong>2.</strong> Have you consumed any alcohol within the
              past 12 months?
            </label>
            <select
              defaultValue={dring_alcohol_past_year}
              className="form-control"
              onChange={handlePastYrConsumption}
            >
              <option value="" disabled>--Select an option--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {/* <span style="color:red;font-style:italic"></span> */}
          </div>
        </div>
      )
    }
  }


  /**
   * 
   * 
   * 
   */

  const renderHasConsumedAlcoholBefore = () => {
   if(dring_alcohol != 'No'){
    return (
      <>
         <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>3.</strong> Have you stopped drinking due to health
                    reasons, such as a negative impact on your health or on the
                    advice of your doctor or other health worker?
                  </label>
                  <select
                    defaultValue={stop_drinking_health}
                    onChange={handleStopDrinkingDueToHealth}
                    className="form-control"
                  >
                    <option value="" disabled >
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
                    <strong>4.</strong> During the past 12 months, how
                    frequently have you had at least one standard alcoholic
                    drink?
                  </label>
                  <select onChange={handleUseDuration} defaultValue={past_year_freq} className="form-control">
                    <option value="" disabled >
                      --Select an option--
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="5-6 days per week">5-6 days per week</option>
                    <option value="3-4 days per week">3-4 days per week</option>
                    <option value="1-2 days per week">1-2 days per week</option>
                    <option value="1-3 days per month">
                      1-3 days per month
                    </option>
                    <option value="Less than once a month">
                      Less than once a month
                    </option>
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
                    <strong>5.</strong> Have you consumed any alcohol within the
                    past 30 days?
                  </label>
                  <select
                    defaultValue={past_month_intake}
                    onChange={handlePastMonthYearIntake}
                    className="form-control"
                  >
                    <option value="" disabled >
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
                    <strong>6.</strong> During the past 30 days, on how many
                    occasions did you have at least one standard alcoholic
                    drink?
                  </label>
                  <input
                    value={drink_occasion}
                    onChange={handleDrinkingOccasion}
                    required
                    type="number"
                    className="form-control"
                    name="noalc_days"
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
                    <strong>7.</strong> During the past 30 days, when you drank
                    alcohol, how many standard drinks on average did you have
                    during one drinking occasion?
                  </label>
                  <input
                    value={standard_drink_in_occasion}
                    required
                    onChange={handleDrinkingDrinkOnOccasion}
                    type="number"
                    className="form-control"
                    name="avd_alc_intake"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>8.</strong> During the past 30 days, what was the
                    largest number of standard drinks you had on a single
                    occasion, counting all types of alcoholic drinks together?
                    (Largest No.)
                  </label>
                  <input
                    value={largest_drink}
                    required
                    onChange={handleLargestDrink}
                    type="number"
                    className="form-control"
                    name="avd_alc_intake"
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
                    <strong>9.</strong> During the past 30 days, how many times
                    did you have six or more standard drinks in a single
                    drinking occasion?
                  </label>
                  <input
                    value={six_more_drink }
                    onChange={handleSixOrMoreDrink}
                    required
                    type="number"
                    className="form-control"
                    name="avd_alc_intake"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>10.</strong> During each of the past 7 days, how
                    many standard drinks did you have each day?
                  </label>
                  <input
                    value={week_standard_drink}
                    onChange={handleWeekStandardDrink}
                    type="number"
                    className="form-control"
                    name="avd_alc_intake"
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


  /**
   * 
   * 
   * 
   */
  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <strong className="col-md-12" style={{ textTransform: "uppercase" }}>CORE: Alcohol Consumption</strong>
          <p className="col-md-12">
            <i className='fa fa-info-circle'></i> The next questions ask about the consumption of alcohol. Use the picture below as a guide to answer these set of questions.
          </p>
        </div>

        <div className='col-md-12' >
          <img src={require('./alc.jpeg')} style={{width: '100%', }}/>
        </div>

        <br />
        <p><strong>ANSWER THE FOLLOWING QUESTIONS</strong></p>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Have you ever consumed any alcohol such
                    as beer, wine, spirits?
                  </label>
                  <select name="alcsomp" id="alcsomp" onChange={handleAlcConsumption} defaultValue={dring_alcohol} className="form-control">
                    <option
                      value=""
                      disabled
                    >
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

             {renderConsumedAlcoholPastMonth()}
            </div>
          </div>
        </div>

        <br />

        {renderHasConsumedAlcoholBefore()}
       
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
