import React, {useState} from 'react'

export default function Physical({setstep}) {

    const [work_involves_activity, setWorkActivity] = useState("");
    const [days_of_vigorous_ex, setDaysOfVigorousExcercise] = useState("");
    const [mod_excerise_in_week, setModerateExerciseInWeek] = useState("");
    const [work_inv_moderate_excercise, setWorkModerateExcercise] = useState("");
    const [work_mod_intencity_excercise, setWorkmodItencityExcerise] = useState("");
    const [time_spent_excerise, setTimeSpentExercising] = useState("");
    const [pedal_cycling, setPedalCycling] = useState("");
    const [days_spent_pedal_cycling, setDaysSpentPedalCycling] = useState("");
    const [time_spent_cycling, setTimeSpentMedalCycling] = useState("");

    const [vig_sports, setVigSports] = useState("");
    const [weekly_vig_sports, setWeeklyVigSports] = useState("");
    const [timespent_vig_sports, setTimeSpentInVigSports] = useState("");
    const [vig_sports_increasing_bresdth, setVigSportsIncreaseBreadth] = useState("");
    const [days_spent_invig_sports, setDaysSpentVigSports] = useState("");
    const [time_spent_vigsport_daily, setTimeSpentVigSportsDaily] = useState("");



    const handleWorkInvolvesActivityChange = (e) => setWorkActivity(e.target.value);
    const handleDaysVigExcerciseChange = (e) => setDaysOfVigorousExcercise(e.target.value);
    const handleModExcerciseInWeekChange = (e) => setModerateExerciseInWeek(e.target.value);
    const handleWorkModExcerciseChange = (e) => setWorkModerateExcercise(e.target.value);
    const handleWorkModIntencityExcerciseChange = (e) => setWorkmodItencityExcerise(e.target.value);
    const handleTimeSpentExcercisingChange = (e) => setTimeSpentExercising(e.target.value);
    const handlePedalCyclingChange = (e) => setPedalCycling(e.target.value);
    const handleDaysSpentPedalCyclingChange = (e) => setDaysSpentPedalCycling(e.target.value);
    const handleTimeSpentPedalCyclingChange = (e) => setTimeSpentMedalCycling(e.target.value);
    const handleVigSportsChange = (e) => setVigSports(e.target.value);
    const handleWeeklyVigSportsChange = (e) => setWeeklyVigSports(e.target.value);
    const handleTimeSpentInVigSportsChange = (e) => setTimeSpentInVigSports(e.target.value);
    const handleVigSportsIncreaseBreadthChange = (e) => setVigSportsIncreaseBreadth(e.target.value);
    const handleDaysSpentVigSportsChange = (e) => setDaysSpentVigSports(e.target.value);
    const handleTimeSpentVigSportsChange = (e) => setTimeSpentVigSportsDaily(e.target.value);

    






    const handleNext = () => {
      console.log(work_involves_activity);
      setstep(7);
    };

    const handleBack = () => {
      setstep(5);
    };


    const saveAndContinue = () => {};



  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE: Physical Activity
            </strong>
            <p>
              Next I am going to ask you about the time you spend doing
              different types of physical activity in a typical week. Please
              answer these questions even if you do not consider yourself to be
              a physically active person. Think first about the time you spend
              doing work. Think of work as the things that you have to do such
              as paid or unpaid work, study/training, household chores,
              harvesting food/crops, fishing or hunting for food, seeking
              employment.
            </p>
            <p>
              [Insert other examples if needed]. In answering the following
              questions 'vigorous-intensity activities' are activities that
              require hard physical effort and cause large increases in
              breathing or heart rate, 'moderate-intensity activities' are
              activities that require moderate physical effort and cause small
              increases in breathing or heart rate.
            </p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>1.</strong> Does your work involve
                    vigorous-intensity activity that causes large increases in
                    breathing or heart rate like [carrying or lifting heavy
                    loads, digging or construction work] for at least 10 minutes
                    continuously?
                  </label>
                  <select
                    required
                    defaultValue={""}
                    className="form-control"
                    onChange={handleWorkInvolvesActivityChange}
                  >
                    <option value="" disabled>
                      --Select an option--
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Don't know">Don't know</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>2.</strong> In a typical week, on how many days do
                    you do vigorous-intensity activities as part of your work?
                  </label>
                  <input
                    required
                    onChange={handleDaysVigExcerciseChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
                  <label htmlFor="avg_earning">
                    <strong>3.</strong> In a typical week, on how many days do
                    you do moderate-intensity activities as part of your work?
                  </label>
                  <input
                    required
                    onChange={handleModExcerciseInWeekChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>4.</strong> Does your work involve
                    moderate-intensity activity that causes small increases in
                    breathing or heart rate such as brisk walking [or carrying
                    light loads] for at least 10 minutes continuously?
                  </label>
                  <select
                    onChange={handleWorkModExcerciseChange}
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
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>5.</strong> In a typical week, on how many days do
                    you do moderate-intensity activities as part of your work?
                  </label>
                  <input
                    required
                    onChange={handleWorkModIntencityExcerciseChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>6.</strong> How much time do you spend doing
                    moderate-intensity activities at work on a typical day?
                  </label>
                  <input
                    required
                    onChange={handleTimeSpentExcercisingChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
            <strong style={{ textTransform: "uppercase" }}>
              Travel to and from places
            </strong>
            <p>
              The next questions exclude the physical activities at work that
              you have already mentioned. Now I would like to ask you about the
              usual way you travel to and from places. For example to work, for
              shopping, to market, to place of worship. [Insert other examples
              if needed]
            </p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>7.</strong> Do you walk or use a bicycle (pedal
                    cycle) for at least 10 minutes continuously to get to and
                    from places?
                  </label>
                  <select
                    required
                    defaultValue={""}
                    onChange={handlePedalCyclingChange}
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
                  <label htmlFor="avg_earning">
                    <strong>8.</strong> In a typical week, on how many days do
                    you walk or bicycle for at least 10 minutes continuously to
                    get to and from places?
                  </label>
                  <input
                    required
                    onChange={handleDaysSpentPedalCyclingChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
                  <label htmlFor="avg_earning">
                    <strong>9.</strong>How much time do you spend walking or
                    bicycling for travel on a typical day?
                  </label>
                  <input
                    required
                    onChange={handleTimeSpentPedalCyclingChange}
                    type="time"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
            <strong style={{ textTransform: "uppercase" }}>
              Recreational activities
            </strong>
            <p>
              The next questions exclude the work and transport activities that
              you have already mentioned. Now I would like to ask you about
              sports, fitness and recreational activities (leisure), [Insert
              relevant terms].
            </p>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>10.</strong> Do you do any vigorous-intensity
                    sports, fitness or recreational (leisure) activities that
                    cause large increases in breathing or heart rate like
                    [running or football] for at least 10 minutes continuously?
                  </label>
                  <select
                    defaultValue={""}
                    required
                    onChange={handleVigSportsChange}
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
                  <label htmlFor="avg_earning">
                    <strong>11.</strong> In a typical week, on how many days do
                    you do vigorous-intensity sports, fitness or recreational
                    (leisure) activities?
                  </label>
                  <input
                    onChange={handleWeeklyVigSportsChange}
                    required
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
                  <label htmlFor="avg_earning">
                    <strong>12.</strong>How much time do you spend doing
                    vigorous-intensity sports, fitness or recreational
                    activities on a typical day?
                  </label>
                  <input
                    required
                    onChange={handleTimeSpentInVigSportsChange}
                    type="text"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>13.</strong> Do you do any moderate-intensity
                    sports, fitness or recreational (leisure) activities that
                    cause a small increase in breathing or heart rate such as
                    brisk walking, [cycling, swimming, volleyball] for at least
                    10 minutes continuously?
                  </label>
                  <select
                    onChange={handleVigSportsIncreaseBreadthChange}
                    className="form-control"
                    defaultValue={""}
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
                  <label htmlFor="avg_earning">
                    <strong>14.</strong> In a typical week, on how many days do
                    you do moderate-intensity sports, fitness or recreational
                    (leisure) activities?
                  </label>
                  <input
                    required
                    onChange={handleDaysSpentVigSportsChange}
                    type="time"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>15.</strong> How much time do you spend doing
                    moderate-intensity sports, fitness or recreational (leisure)
                    activities on a typical day? (Hrs:mins)
                  </label>
                  <input
                    required
                    onChange={handleTimeSpentVigSportsChange}
                    type="text"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="avg_earning">
                  <strong>16.</strong> How much time do you spend doing
                  moderate-intensity sports, fitness or recreational (leisure)
                  activities on a typical day? (Hrs:mins)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="avg_earning"
                  name="hse_count"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
            type='submit'
            onClick={saveAndContinue}
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-save"></i> Save & Continue Later
            </button>
          </div>
          <div className="col-md-3">
            <button
            type='submit'
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
