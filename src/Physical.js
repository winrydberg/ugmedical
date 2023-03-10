import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import { SurveyContext } from './App';
import LoadingModal from './LoadingModal';
import SubmitSurvey from './SubmitSurvey';

export default function Physical({ setstep, set_physical_excercise, setreachstep }) {

  const value = React.useContext(SurveyContext);
  const physic = value.physical_excercise;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [work_involves_activity, setWorkActivity] = useState(physic != null ? physic.work_involves_activity : "");
  const [days_of_vigorous_ex, setDaysOfVigorousExcercise] = useState(physic != null ? physic.days_of_vigorous_ex : "");
  const [mod_excerise_in_week, setModerateExerciseInWeek] = useState(physic != null ? physic.mod_excerise_in_week : "");
  const [work_inv_moderate_excercise, setWorkModerateExcercise] = useState(physic != null ? physic.work_inv_moderate_excercise : "");
  const [work_mod_intencity_excercise, setWorkmodItencityExcerise] = useState(physic != null ? physic.work_mod_intencity_excercise : "");
  const [time_spent_excerise, setTimeSpentExercising] = useState(physic != null ? physic.time_spent_excerise : "");
  const [pedal_cycling, setPedalCycling] = useState(physic != null ? physic.pedal_cycling : "");
  const [days_spent_pedal_cycling, setDaysSpentPedalCycling] = useState(physic != null ? physic.days_spent_pedal_cycling : "");
  const [time_spent_cycling, setTimeSpentMedalCycling] = useState(physic != null ? physic.time_spent_cycling : "");

  const [vig_sports, setVigSports] = useState(physic != null ? physic.vig_sports : "");
  const [weekly_vig_sports, setWeeklyVigSports] = useState(physic != null ? physic.weekly_vig_sports : "");
  const [timespent_vig_sports, setTimeSpentInVigSports] = useState(physic != null ? physic.timespent_vig_sports : "");
  const [vig_sports_increasing_bresdth, setVigSportsIncreaseBreadth] = useState(physic != null ? physic.vig_sports_increasing_bresdth : "");
  const [days_spent_invig_sports, setDaysSpentVigSports] = useState(physic != null ? physic.days_spent_invig_sports : "");
  const [time_spent_vigsport_daily, setTimeSpentVigSportsDaily] = useState(physic != null ? physic.time_spent_vigsport_daily : "");
  const [time_spent_sitting, setTimeSpentSitting] = useState(physic != null ? physic.time_spent_sitting : "");

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

  const handleTimeSpentSittingChange = (e) => setTimeSpentSitting(e.target.value);

  const handleNext = (e) => {
    e.preventDefault();
    set_physical_excercise({
      work_involves_activity,
      days_of_vigorous_ex,
      mod_excerise_in_week,
      work_inv_moderate_excercise,
      work_mod_intencity_excercise,
      time_spent_excerise,
      pedal_cycling,
      days_spent_pedal_cycling,
      time_spent_cycling,
      vig_sports,
      weekly_vig_sports,
      timespent_vig_sports,
      vig_sports_increasing_bresdth,
      days_spent_invig_sports,
      time_spent_vigsport_daily,
      time_spent_sitting
    });
    setstep(7);
  };

  useEffect(() => {
    setGlobalState();
    setreachstep(6);
  }, [work_involves_activity,days_of_vigorous_ex,mod_excerise_in_week,work_inv_moderate_excercise,work_mod_intencity_excercise,time_spent_excerise,pedal_cycling,days_spent_pedal_cycling,time_spent_cycling,vig_sports,weekly_vig_sports,timespent_vig_sports,vig_sports_increasing_bresdth,days_spent_invig_sports,time_spent_vigsport_daily,time_spent_sitting]);

  const setGlobalState = () => {
    set_physical_excercise({
      work_involves_activity,days_of_vigorous_ex,mod_excerise_in_week,work_inv_moderate_excercise,work_mod_intencity_excercise,time_spent_excerise,pedal_cycling,days_spent_pedal_cycling,time_spent_cycling,vig_sports,weekly_vig_sports,timespent_vig_sports,vig_sports_increasing_bresdth,days_spent_invig_sports,time_spent_vigsport_daily,time_spent_sitting
    });
  }

  const handleBack = () => {
    setstep(5);
  };

   /**
    * 
   */
   const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 6;
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
              CORE: Physical Activity
            </strong>
            <p>
            <i className="fa fa-info-circle"></i> Next I am going to ask you about the time you spend doing
              different types of physical activity in a typical week. 
            </p>

            <p><i className="fa fa-info-circle"></i> Please answer these questions even if you do not consider yourself to be
              a physically active person.</p>

            <p><i className="fa fa-info-circle"></i> Think first about the time you spend
              doing work. Think of work as the things that you have to do such
              as paid or unpaid work, study/training, household chores,
              harvesting food/crops, fishing or hunting for food, seeking
              employment.</p>
            <p>
            <i className="fa fa-info-circle"></i> In answering the following
              questions 'vigorous-intensity activities' are activities that
              require hard physical effort and cause large increases in
              breathing or heart rate, 'moderate-intensity activities' are
              activities that require moderate physical effort and cause small
              increases in breathing or heart rate.
            </p>
          </div>
        </div>

        <hr />

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
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
                    defaultValue={work_involves_activity}
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
            </div>
            <br />
            <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="avg_earning">
                      <strong>2.</strong> In a typical week, on how many days do
                      you do vigorous-intensity activities as part of your work?
                    </label>
                    <input
                      value={days_of_vigorous_ex}
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>3.</strong> In a typical week, on how many days do
                    you do moderate-intensity activities as part of your work?
                  </label>
                  <input
                    required
                    value={mod_excerise_in_week}
                    onChange={handleModExcerciseInWeekChange}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-md-12">
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
                      defaultValue={work_inv_moderate_excercise}
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
                    value={work_mod_intencity_excercise}
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
                    moderate-intensity activities at work on a typical day? (Hrs:mins)
                  </label>
                  <input
                    required
                    value={time_spent_excerise}
                    onChange={handleTimeSpentExcercisingChange}
                    type="time"
                    className="html-duration-picker form-control" data-hide-seconds
                    id="avg_earning"
                    name="hse_count"
                  />
  
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
              <i className="fa fa-info-circle"></i> The next questions exclude the physical activities at work that
              you have already mentioned. Now I would like to ask you about the
              usual way you travel to and from places. For example to work, for
              shopping, to market, to place of worship. 
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
                    defaultValue={pedal_cycling}
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
                    value={days_spent_pedal_cycling}
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
                    bicycling for travel on a typical day? (Hrs:mins)
                  </label>
                  <input
                    required
                    value={time_spent_cycling}
                    onChange={handleTimeSpentPedalCyclingChange}
                    type="time"
       
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    className="html-duration-picker form-control" data-hide-seconds
                    // className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
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
             <i className="fa fa-info-circle"></i> The next questions exclude the work and transport activities that
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>10.</strong> Do you do any vigorous-intensity
                    sports, fitness or recreational (leisure) activities that
                    cause large increases in breathing or heart rate like
                    [running or football] for at least 10 minutes continuously?
                  </label>
                  <select
                    defaultValue={vig_sports}
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
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="avg_earning">
                        <strong>11.</strong> In a typical week, on how many days do
                        you do vigorous-intensity sports, fitness or recreational
                        (leisure) activities?
                      </label>
                      <input
                        value={weekly_vig_sports}
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
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    <strong>12.</strong>How much time do you spend doing
                    vigorous-intensity sports, fitness or recreational
                    activities on a typical day? (Hrs:mins)
                  </label>
                  <input
                    required
                    value={timespent_vig_sports}
                    onChange={handleTimeSpentInVigSportsChange}
                    type="text"
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
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
                      defaultValue={vig_sports_increasing_bresdth}
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
                    value={days_spent_invig_sports}
                    onChange={handleDaysSpentVigSportsChange}
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
                    <strong>15.</strong> How much time do you spend doing
                    moderate-intensity sports, fitness or recreational (leisure)
                    activities on a typical day? (Hrs:mins)
                  </label>
                  <input
                    required
                    value={time_spent_vigsport_daily}
                    onChange={handleTimeSpentVigSportsChange}
                    type="time"
                    className="html-duration-picker form-control" data-hide-seconds
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    // className="form-control"
                    id="avg_earning"
                    name="hse_count"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="avg_earning">
                  <strong>16.</strong> How much time do you usually spend sitting or reclining on a typical day? (Hrs:mins)
                </label>
                <input
                  required
                  onChange={handleTimeSpentSittingChange}
                  type="time"
                  pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}:[0-9]{2}"
                  value={time_spent_sitting}
                  className="html-duration-picker form-control" data-hide-seconds
                  // className=""
                  id="avg_earning"
                  name="hse_count"
                />
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
