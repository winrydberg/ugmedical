import React, {useState, useEffect} from "react";
import axios from 'axios';
import LoadingModal from "./LoadingModal";
import { SurveyContext } from "./App";

const baseURL = "https://sts.ug.edu.gh/services/medical/save";

export default function GenderScreening({ setstep, set_gendescreen, setreachstep }) {
  const data = React.useContext(SurveyContext);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");

  //page data
  const [cervical_cancer_screening, setCervicalCancer] = useState("");
  const [breast_cancer_screening, setBreastCancer] = useState("");
  const [breast_cancer_screen_date, setBreastCancerScreenDate] = useState("");
  const [breast_cancer_result, setBreastCancerScreenResult] = useState("");

  const [prostrate_cancer_screen, setProstrateCancer] = useState("");
  const [prostrate_cancer_screen_date, setProstrateCancerScreenDate] =
    useState("");
  const [prostrate_cancer_screen_result, setProstrateCancerScreenResult] =
    useState("");

  const [yellow_fever_card, setYellowFeverCard] = useState("");
  const [heptitis_fever_card, setHeptitisCard] = useState("");
  const [convid_fever_card, setCovidCard] = useState("");

  const handleCerivicCancerScreenStateChange = (e) =>
    setCervicalCancer(e.target.value);
  const handleBreastCancerScreenStateChange = (e) =>
    setBreastCancer(e.target.value);
  const handleBreastCancerScreenDateChange = (e) =>
    setBreastCancerScreenDate(e.target.value);
  const handleBreastCancerScreenResultChange = (e) =>
    setBreastCancerScreenResult(e.target.value);

  const handleProstrateCancerScreenStateChange = (e) =>
    setProstrateCancer(e.target.value);
  const handleProstrateCancerScreenDateChange = (e) =>
    setProstrateCancerScreenDate(e.target.value);
  const handleProstrateCancerScreenResultChange = (e) =>
    setProstrateCancerScreenResult(e.target.value);

  const handleYellowFeverCardChange = (e) => setYellowFeverCard(e.target.value);
  const handleHeptitisCardChange = (e) => setHeptitisCard(e.target.value);
  const handleCovidCardChange = (e) => setCovidCard(e.target.value);

  useEffect(() => {
    setreachstep(11);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    set_gendescreen({
      cervical_cancer_screening,
      breast_cancer_screening,
      breast_cancer_screen_date,
      breast_cancer_result,
      prostrate_cancer_screen_date,
      prostrate_cancer_screen_result,
      yellow_fever_card,
      heptitis_fever_card,
      convid_fever_card,
    });

    setLoading(true);

    console.log(data);
    axios.post(baseURL, {
      id: "",
      sid: data.user.student_id,
      type: data.user.offering_type,
      hall: data.user.hall,
      address: "N/A",
      dateOfCompletion: new Date(),
      consent: data.consent,
      interviewLang: "English",
      interviewTime: new Date().toTimeString().split(' ')[0],
      familySurname: data.user.student_name.split(",")[0],
      firstName: data.user.student_name.split(",")[1],
      mobileNumber: data.phoneno,
      //DEMOGRAPHICS
      gender: data.demographic.sex,
      dateOfBirth: data.demographic.dob,
      schoolYears: data.demographic.yrsinsch,
      highestEduLevel: data.demographic.edulevel,
      tribe: data.demographic.ethnic,
      maritalStatus: data.demographic.maricalsrtatus,
      occupation: data.demographic.workstatus,
      PeopleInHousehold: data.demographic.household_age,
      householdEarnings:
        data.demographic.avg_earning + " " + data.demographic.avg_earning_rate,
      householdIncomeEstimate: data.demographic.house_hold_income,
      //TOBACCO
      useTobaccoProduct: data.tobacco?.tb_status,
      useTobaccoProductDaily: data.tobacco?.tb_daily_use,
      ageStartedSmoking: data.tobacco?.age_tb_use,
      smokingHowLong: data.tobacco?.useduration,
      averageSmokingProductStats: data.tobacco?.useduration_val,
      triedStopSmoking: data.tobacco?.try_stop,
      advisedQuitSmoking: data.tobacco?.advice_by_doc,
      smokeTobaccoInPast: data.tobacco?.past_use,
      smokeTobaccoInPastDaily: data.tobacco?.past_use_daily,
      ageStoppedSmoking: data.tobacco?.age_of_stop,
      stopSmokingHowLong: data.tobacco?.duration_of_stop,
      useSmokelessProduct: data.tobacco?.currently_using,
      useSmokelessProductDaily: data.tobacco?.currently_using_smokeless,
      averageSmokelessProductUsage: {
        mouth: data.tobacco?.snuff_by_mouth,
        node: data.tobacco?.snuff_by_node,
        chewing: data.tobacco?.snuff_by_chewing,
        betel: data.tobacco?.snuff_by_betel_quid,
      },
      useSmokelessProductInPast: data.tobacco?.past_use_status,
      useSmokelessProductInPastDaily: data.tobacco?.past_use_status_daily,
      someoneSmokeHome: data.tobacco?.smoke_in_home,
      someoneSmokeWorkplace: data.tobacco?.smoke_in_work,

      //ALCOHOL
      useAlcohol: data.alcohol?.dring_alcohol,
      useAlcoholPastMonth: data.alcohol?.dring_alcohol_past_year,
      stoppedDrinking: data.alcohol?.stop_drinking_health,
      alcoholUsageFrequency: data.alcohol?.past_year_freq,
      consumeAlcoholPast: data.alcohol?.past_month_intake,
      alcoholOccasions: data.alcohol?.drink_occasion,
      alcoholOccasionsStandard: data.alcohol?.standard_drink_in_occasion,
      alcoholOccasionsStandardLargest: data.alcohol?.largest_drink,
      alcoholOccasionsStandardSix: data.alcohol?.six_more_drink,
      alcoholOccasionsStandardEachDay: data.alcohol?.week_standard_drink,

    //   EXPANDED ALCOHOL
      consumeAcoholHomebrewed: "",
      consumeAcoholHomebrewedStats: "",
      pastAlcoholStopDrinking: "",
      pastAlcoholFailedExpected: "",
      pastAlcoholFirstDrink: "",
      pastAlcoholFamilyProblems: "",

      eatFruitDays: data.diets?.eat_fruits,
      eatFruitServings: data.diets?.fruit_servings,
      eatVegetablesDays: data.diets?.eat_veges,
      eatVegetablesServings: data.diets?.vegies_servings,
      addSaltWhenEating: data.diets?.salty_sause,
      addSaltWhenPreparing: data.diets?.salty_sause_inhouse,
      eatProcessedFood: data.diets?.processed_foods_high_in_salt,
      saltysauceConsume: data.diets?.salty_sause_consume,
      saltLoweringImportance: data.diets?.lower_salt_importance,
      thinkSaltCauseHealthProblem: data.diets?.idea_on_excess_salt,
      limitProcessedFoodConsumption: data.diets?.lowering_salt_actions.limit_processed_foods,
      lookAtSaltContent: data.diets?.lowering_salt_actions.check_salt_content_of_labels,
      buySaltAlternatives: data.diets?.lowering_salt_actions.buy_low_salt_foods,
      useSpiceWhenCooking: data.diets?.lowering_salt_actions.use_spice_inplace_salt,
      avoidPreparedFoodOutside: data.diets?.lowering_salt_actions.avoid_outide_food,
      thingsControlSaltIntake: data.diets?.lowering_salt_actions.do_other_things,
      //   specifyOthersThing: data.diets.lowering_salt_actions.specify_others, //not included
      workInvolvesActivityVigorous: data.physical_excercise?.work_involves_activity,
      activityVigorousDays: data.physical_excercise?.days_of_vigorous_ex,
      activityVigorousTime: data.physical_excercise?.mod_excerise_in_week,
      workInvolvesActivityModerate: data.physical_excercise?.work_inv_moderate_excercise,
      activityModerateDays: data.physical_excercise?.work_mod_intencity_excercise,
      activityModerateTime: data.physical_excercise?.time_spent_excerise,
      walkOrUseBicycle: data.physical_excercise?.pedal_cycling,
      walkOrUseBicycleDays: data.physical_excercise?.days_spent_pedal_cycling,
      walkOrUseBicycleTime: data.physical_excercise?.time_spent_cycling,
      doVigorousSports: data.physical_excercise?.vig_sports,
      doVigorousSportsDays: data.physical_excercise?.weekly_vig_sports,
      doVigorousSportsTime: data.physical_excercise?.timespent_vig_sports,
      doModerateSports: data.physical_excercise?.vig_sports_increasing_bresdth,
      doModerateSportsDays: data.physical_excercise?.days_spent_invig_sports,
      doModerateSportsTime: data.physical_excercise?.time_spent_vigsport_daily,
      doSittingTime: data.physical_excercise?.time_spent_sitting, //**missing inmy form. to be done by my */

      bloodPressureMeasured: data.bloodpressure?.measure_blood_pressure,
      bloodPressureMeasuredTold: data.bloodpressure?.raised_bllod_pressure,
      bloodPressureMeasuredToldPast: data.bloodpressure?.bp_raised_in_past_year,
      bloodPressureMedicationTaken: data.bloodpressure?.taken_bp_drug_in_past_weeks,
      bloodPressureTraditional: data.bloodpressure?.contacted_nativedoc_on_bp,
      bloodPressureTakingHerbal: data.bloodpressure?.currently_taking_herbal_med_bp,

      bloodSugarMeasured: data.diabetes?.bs_measure,
      bloodSugarMeasuredTold: data.diabetes?.bs_measure_raised,
      bloodSugarMeasuredToldPast: data.diabetes?.bs_raised_past_yr,
      bloodSugarMeasuredTakenDrugs: data.diabetes?.taken_bs_med_past_week,
      bloodSugarMeasuredInsulin: data.diabetes?.curr_taken_insulin,
      bloodSugarMeasuredTraditional: data.diabetes?.seen_trad_healer_for_bs,
      bloodSugarTakingHerbal: data.diabetes?.curr_taking_herbal_med_for_insulin,

      cholesterolMeasured: data.cholestrol?.cols_measureby_doc,
      cholesterolMeasuredTold: data.cholestrol?.raised_cols_level,
      cholesterolMeasuredToldPast: data.cholestrol?.raised_cols_past_year,
      cholesterolMeasuredMedication: data.cholestrol?.taken_oral_cols_med_pastweeks,
      cholesterolMeasuredTradtional: data.cholestrol?.seen_trad_for_cols,
      cholesterolMeasuredHerbal: data.cholestrol?.curr_taking_herbmed_forcols,
      cholesterolMeasuredTakingHerbal: data.cholestrol?.curr_taking_herbmed_forcols,

      hadHeartAttack: data.cardiovascular?.heart_attack,
      takingAspirin: data.cardiovascular?.curr_takes_aspirin,
      takingStatins: data.cardiovascular?.curr_takes_statins,
      visitedDoctor: data.cardiovascular?.visi_doc_past_year,
      advisedQuitTobacco: data.cardiovascular?.during_visit.quit_smoking,
      advisedSaltIntake: data.cardiovascular?.during_visit.reduce_salt,
      advisedTakingFruits: data.cardiovascular?.during_visit.eat_fruit_veges_daily,
      advisedFatIntake: data.cardiovascular?.during_visit.reduce_fat_intake,
      advisedExercise: data.cardiovascular?.during_visit.do_physical_excercise,
      advisedLoseWeight: data.cardiovascular?.during_visit.body_weight,
      advisedReduceSugar: data.cardiovascular?.during_visit.reduce_sugar_intake,
    },{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if(res.data.status =='success'){
            setstep(12)
        }else{
            localStorage.setItem('survey', JSON.stringify(data))
            alert('Unable to save survey reports')
        }
        setLoading(false);
    }).catch(error => {
        localStorage.setItem('survey', JSON.stringify(data))
        alert('NETWORK ERROR: Unable to save survey reports')
    });
  };

  const handleBack = () => {
    setstep(1);
  };

  const saveAndContinue = () => {
    axios.post("/url", {});
  };

  const renderBreastCancer = () => {
    if (breast_cancer_screening == "Yes") {
      return (
        <>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(II).</strong> Date of last screening
              </label>
              <input
                onChange={handleBreastCancerScreenDateChange}
                type="date"
                className="form-control"
                name="breast_cancer_date"
              />
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(III).</strong> Result
              </label>
              <select
                onChange={handleBreastCancerScreenResultChange}
                defaultValue={""}
                className="form-control"
              >
                <option value="" disabled>
                  --Select an option--
                </option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
        </>
      );
    }
  };

  const renderProstrateCancer = () => {
    if (prostrate_cancer_screen == "Yes") {
      return (
        <>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(II).</strong> Date of last screening
              </label>
              <input
                onChange={handleProstrateCancerScreenDateChange}
                type="date"
                className="form-control"
                name="prostrate_cancer_date"
              />
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="choice">
                <strong>(III).</strong> Result
              </label>
              <select
                onChange={handleProstrateCancerScreenResultChange}
                defaultValue={""}
                className="form-control"
              >
                <option value="" disabled>
                  --Select an option--
                </option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
              {/* <span style="color:red;font-style:italic"></span> */}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              CORE (for women only): Cervical Cancer Screening
            </strong>
            <p>
              The next question asks about cervical cancer prevention. Screening
              tests for cervical cancer prevention can be done in different
              ways, including Visual Inspection with Acetic Acid/vinegar (VIA),
              pap smear and Human Papillomavirus (HPV) test. VIA is an
              inspection of the surface of the uterine cervix after acetic acid
              (or vinegar) has been applied to it. For both pap smear and HPV
              test, a doctor or nurse uses a swab to wipe from inside your
              vagina, take a sample and send it to a laboratory. It is even
              possible that you were given the swab yourself and asked to swab
              the inside of your vagina. The laboratory checks for abnormal cell
              changes if a pap smear is done, and for the HP virus if an HPV
              test is done.:
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
                    <strong>1.</strong> Have you ever had a screening test for
                    cervical cancer, using any of these methods described above?
                  </label>
                  <select
                    onChange={handleCerivicCancerScreenStateChange}
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

              <div className="col-md-12">
                <strong>2. BREAST CANCER SCREENING</strong>
              </div>
              <br />
              <br />

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(I).</strong> Have you ever had Breast Cancer
                    Screening? Yes / No
                  </label>
                  <select
                    onChange={handleBreastCancerScreenStateChange}
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

              {renderBreastCancer()}
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              3. CORE (for men only): PROSTATE CANCER SCREENING
            </strong>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>(I).</strong> Have you ever had Prostate Cancer
                    Screening? Yes / No
                  </label>
                  <select
                    onChange={handleProstrateCancerScreenStateChange}
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

              {renderProstrateCancer()}
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              VACCINATION CARD
            </strong>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>4.</strong> Yellow Fever
                  </label>
                  <input
                    onChange={handleYellowFeverCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>5.</strong> Hepatitis B
                  </label>
                  <input
                    onChange={handleHeptitisCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>6.</strong> Covid 19
                  </label>
                  <input
                    onChange={handleCovidCardChange}
                    type="text"
                    className="form-control"
                    name="prostrate_cancer_date"
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
              className="btn btn-success btn-block"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-send"></i> Submit
            </button>
          </div>
        </div>
      </form>

      {/* <LoadingModal
        show={loading}
        text={loadingText}
        handleClose={() => {
          setLoading(false);
        }}
      ></LoadingModal> */}
    </div>
  );
}
