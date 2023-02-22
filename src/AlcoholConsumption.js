import React, {useState,useEffect} from 'react'

export default function AlcoholConsumption({ setstep, set_alcohol, setreachstep }) {
  const [dring_alcohol, setAlcolhosState] = useState("");
  const [dring_alcohol_past_year, setPastYrAlcohol] = useState("");
  const [stop_drinking_health, setStopDrikingDueHealth] = useState("");
  const [past_year_freq, setPastYrFreq] = useState("");
  const [past_month_intake, setPastMonthIntake] = useState("");
  const [drink_occasion, setDrinkOccasion] = useState("");
  const [standard_drink_in_occasion, setStandardDrinkInOccation] = useState("");
  const [largest_drink, setLargestDrink] = useState("");
  const [six_more_drink, setSixMoreDrinks] = useState("");
  const [week_standard_drink, setWeekStandardDrink] = useState("");

  useEffect(() => {
    setreachstep(3);
  }, []);

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

  const handleBack = () => {
    setstep(3);
  };
  const saveAndContinue = () => {};

  const handleAlcConsumption = (e) => setAlcolhosState(e.target.value);
  const handlePastYrConsumption = (e) => setPastYrAlcohol(e.target.value);
  const handleStopDrinkingDueToHealth = (e) =>
    setStopDrikingDueHealth(e.target.value);
  const handleUseDuration = (e) => setPastYrFreq(e.target.value);
  const handlePastMonthYearIntake = (e) => setPastMonthIntake(e.target.value);
  const handleDrinkingOccasion = (e) => setDrinkOccasion(e.target.value);
  const handleDrinkingDrinkOnOccasion = (e) =>
    setStandardDrinkInOccation(e.target.value);
  const handleLargestDrink = (e) => setLargestDrink(e.target.value);
  const handleSixOrMoreDrink = (e) => setSixMoreDrinks(e.target.value);
  const handleWeekStandardDrink = (e) => setWeekStandardDrink(e.target.value);

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="col-md-12">
          <h3 className="box-title row">CORE: Alcohol Consumption</h3>
          <p className="row">
            Now I am going to ask you some questions about tobacco use.
          </p>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Have you ever consumed any alcohol such
                    as beer, wine, spirits{" "}
                  </label>
                  <select name="alcsomp" id="alcsomp" className="form-control">
                    <option
                      value=""
                      disabled
                      selected="selected"
                      onChange={handleAlcConsumption}
                    >
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
                    <strong>2.</strong> Have you consumed any alcohol within the
                    past 12 months?
                  </label>
                  <select
                    name="sex"
                    id="sex"
                    className="form-control"
                    onChange={handlePastYrConsumption}
                  >
                    <option value="">--Select an option--</option>
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
                    <strong>3.</strong> Have you stopped drinking due to health
                    reasons, such as a negative impact on your health or on the
                    advice of your doctor or other health worker?
                  </label>
                  <select
                    onChange={handleStopDrinkingDueToHealth}
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
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
                  <select onChange={handleUseDuration} className="form-control">
                    <option value="" disabled selected="selected">
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
                    onChange={handlePastMonthYearIntake}
                    className="form-control"
                  >
                    <option value="" selected="selected">
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
    </div>
  );
}
