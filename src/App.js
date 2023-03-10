import React from 'react';
import logo from "./icon.png";
import bg from "./main_bgr.png";
import topbg from "./login2.jpg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import DemographicInfo from "./DemographicInfo";
import Tobacco from "./Tobacco";
import AlcoholConsumption from "./AlcoholConsumption";
import AlcoholEnhanced from "./AlcoholEnhanced";
import Diet from "./Diet";
import Physical from "./Physical";
import BloodPressure from "./BloodPressure";
import Diabetes from "./Diabetes";
import Cholesterol from "./Cholesterol";
import CardioVascular from "./CardioVascular";
import GenderScreening from "./GenderScreening";
import FinalStage from './FinalStage';
import Header from './Header';

const url = "#";

export const SurveyContext = React.createContext();

function App() {


  const [step, setStep] = useState(1);
  const [reach_step, setStepReached] = useState(1);
  const [consent, setConsent] = useState("");
  const [consent_sort, setConsentSort] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [completed, setCompleted] = useState(0);

  const [student_info, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  //survey sections
  const [demographic, setDemographic] = useState(null); //done
  const [tobacco, setTobacco] = useState(null);   //partialy done
  const [alcohol, setAlcohol] = useState(null);  //done
  const [alcoholexp, setAlcoholExp] = useState(null); //done
  const [diets, setDiets] = useState(null);
  const [physical_excercise, setPhysicalExcercise] = useState(null);
  const [bloodpressure, setBloodPressure] = useState(null); //done
  const [diabetes, setDiabetes] = useState(null);  //dome
  const [cholestrol, setCholesterol] = useState(null);   //done
  const [cardiovascular, setCardioVascular] = useState(null);  //done
  const [gender_screen, setGenderScreen] = useState(null);

  //complteted info
  const [completed_info, setCompletedInfo] = useState(null);

  const handleConsentChange = (e) => setConsent(e.target.value);
  const handlePhoneNoChange = (e) => setPhoneNo(e.target.value);


  useEffect(() => {
    getPrevSubmission();
    getLocalInformation()
    getLoggedInStudentInfo();
  }, [])


  
  const getPrevSubmission = () => {
    axios.get(url).then(res =>{
     console.log(res.data.data)
       if(res.data.status=='success'){
         var data = res.data.data
         if(data!=null){
          
            setStep(data.stage != null ? data.stage : 1);
            setStepReached(data.stage != null ? data.stage : 1);
            if(data.completed == 1){
              setCompletedInfo(res.data.data);
              setCompleted(1)
              setStepReached(12);
            }
            setDemographic({
              phoneno: phoneno,
              sex: data.gender !=null ? data.gender:'',
              dob: data.dateOfBirth != null ? data.dateOfBirth: '',
              yrsinsch: data.schoolYears != null ? data.schoolYears : '',
              edulevel: data.highestEduLevel != null ? data.highestEduLevel : '',
              ethnic: data.tribe != null ? data.tribe : '',
              maricalsrtatus: data.maritalStatus != null ? data.maritalStatus : '',
              workstatus: data.occupation != null ? data.occupation : '',
              household_age: data.peopleInHousehold != null ? data.peopleInHousehold : '',
              avg_earning_rate: data.householdEarnings !=null ? data.householdEarnings.split(":")[1] : '',
              avg_earning: data.householdEarnings !=null ? data.householdEarnings.split(":")[0] : '',
              house_hold_income: data.householdIncomeEstimate != null ? data.householdIncomeEstimate : '',
            })

            const smokedata = JSON.parse(data.averageSmokingProductStats);
            const snuffdata = JSON.parse(data.averageSmokelessProductUsage);
            // console.log("test", JSON.parse(data.averageSmokingProductStats))
            // man_cigars,
            // hand_roll_cigars,
            // pipes_of_tobacco,
            // cheroots_cigars,
            // shisha,
            // cigar_others
            var smoke_duration = data.smokingHowLong != null ? data.smokingHowLong.split(":") : null
            setTobacco({
              tb_status: data.useTobaccoProduct != null ? data.useTobaccoProduct : '',
              tb_daily_use: data.useTobaccoProductDaily != null ? data.useTobaccoProductDaily : '',
              age_tb_use: data.ageStartedSmoking != null ? data.ageStartedSmoking : '',
              useduration: smoke_duration != null ? (smoke_duration[1]!= undefined ? smoke_duration[1] : "") : '',
              useduration_val: smoke_duration != null ? smoke_duration[0] : '',

              man_cigars: smokedata != null ? smokedata.man_cigars : '',
              hand_roll_cigars: smokedata != null ? smokedata.hand_roll_cigars : '',
              pipes_of_tobacco: smokedata != null ? smokedata.pipes_of_tobacco : '',
              cheroots_cigars: smokedata != null ? smokedata.cheroots_cigars : '',
              shisha: smokedata != null ? smokedata.shisha : '',
              cigar_others: smokedata != null ? smokedata.cigar_others : '',

              try_stop: data.triedStopSmoking  != null ? data.triedStopSmoking : '',
              advice_by_doc: data.advisedQuitSmoking != null ? data.advisedQuitSmoking : '',
              past_use: data.smokeTobaccoInPast  != null ? data.smokeTobaccoInPast : '',
              // past_use: data.smokeTobaccoInPastDaily != null ? data.smokeTobaccoInPastDaily : '',
              past_use_daily: data.smokeTobaccoInPastDaily != null ? data.smokeTobaccoInPastDaily : '',
              age_of_stop: data.ageStoppedSmoking != null ? data.ageStoppedSmoking : '', 
              duration_of_stop: data.stopSmokingHowLong != null ? data.stopSmokingHowLong : '', 
              currently_using: data.useSmokelessProduct != null ? data.useSmokelessProduct : '',  
              currently_using_smokeless: data.useSmokelessProductDaily != null ? data.useSmokelessProductDaily : '',
              
              snuff_by_mouth: snuffdata != null ? snuffdata.mouth : '',
              snuff_by_nose: snuffdata != null ? snuffdata.nose : '',
              snuff_by_chewing: snuffdata != null ? snuffdata.chewing : '',
              snuff_by_betel_quid: snuffdata != null ? snuffdata.betel : '',

              past_use_status: data.useSmokelessProductInPast != null ? data.useSmokelessProductInPast : '',
              past_use_status_daily: data.useSmokelessProductInPastDaily != null ? data.useSmokelessProductInPastDaily : '',
              smoke_in_home: data.someoneSmokeHome != null ? data.someoneSmokeHome : '',
              smoke_in_work: data.someoneSmokeWorkplace != null ? data.someoneSmokeWorkplace : '',
            })

            setAlcohol({
              dring_alcohol : data.useAlcohol != null ? data.useAlcohol  : "",
              dring_alcohol_past_year : data.useAlcoholPastMonth != null ? data.useAlcoholPastMonth : '',
              stop_drinking_health : data.stoppedDrinking != null ? data.stoppedDrinking : '',
              past_year_freq : data.alcoholUsageFrequency != null ? data.alcoholUsageFrequency : '',
              past_month_intake : data.consumeAlcoholPast != null ? data.consumeAlcoholPast : '',
              drink_occasion : data.alcoholOccasions != null ? data.alcoholOccasions : '',
              standard_drink_in_occasion : data.alcoholOccasionsStandard != null ? data.alcoholOccasionsStandard : '',
              largest_drink : data.alcoholOccasionsStandardLargest != null ? data.alcoholOccasionsStandardLargest : '',
              six_more_drink : data.alcoholOccasionsStandardSix != null ? data.alcoholOccasionsStandardSix : '',
              week_standard_drink : data.alcoholOccasionsStandardEachDay != null ? data.alcoholOccasionsStandardEachDay : '',
            })


            var alcexpstats = data.consumeAcoholHomebrewedStats != null ? JSON.parse(data?.consumeAcoholHomebrewedStats) : null;
            setAlcoholExp({
              con_home_brewed : data.consumeAcoholHomebrewed != null ? data.consumeAcoholHomebrewed : "",
              home_brewed_spirit : alcexpstats?.spirit,
              home_brewed_beer : alcexpstats?.beer,
              border_alcohol : alcexpstats?.border,
              alcohol_not_drinking : alcexpstats?.nondrink,
              untaxed : alcexpstats?.untaxed,
              stop_drink_once_started :data.pastAlcoholStopDrinking != undefined|null ? data.pastAlcoholStopDrinking : "" ,
              do_what_expected : data.pastAlcoholFailedExpected != null ? data.pastAlcoholFailedExpected : "",
              first_drink_moorning : data.pastAlcoholFirstDrink != null ? data.pastAlcoholFirstDrink : "",
              family_problems : data.pastAlcoholFamilyProblems != null ? data.pastAlcoholFamilyProblems : "",
            })

            setBloodPressure({
              measure_blood_pressure : data.bloodPressureMeasured !=null ? data.bloodPressureMeasured : '',
              raised_bllod_pressure : data.bloodPressureMeasuredTold !=null ? data.bloodPressureMeasuredTold : '',
              bp_raised_in_past_year : data.bloodPressureMeasuredToldPast !=null ? data.bloodPressureMeasuredToldPast : '',
              taken_bp_drug_in_past_weeks : data.bloodPressureMedicationTaken !=null ? data.bloodPressureMedicationTaken : '',
              contacted_nativedoc_on_bp : data.bloodPressureTraditional !=null ? data.bloodPressureTraditional : '',
              currently_taking_herbal_med_bp : data.bloodPressureTakingHerbal !=null ? data.bloodPressureTakingHerbal : '',
            })


            var spec_diet = data!=null ? data.thingsControlSaltIntake?.split(":") : null
            setDiets({
              eat_fruits : data.eatFruitDays != null ? data.eatFruitDays : "",
              fruit_servings : data.eatFruitServings != null ? data.eatFruitServings : "",
              eat_veges : data.eatVegetablesDays != null ? data.eatVegetablesDays : "",
              vegies_servings : data.eatVegetablesServings != null ? data.eatVegetablesServings : "",
              salty_sause : data.addSaltWhenEating != null ? data.addSaltWhenEating : "",
              salty_sause_inhouse : data.addSaltWhenPreparing != null ? data.addSaltWhenPreparing : "",
              processed_foods_high_in_salt : data.eatProcessedFood != null ? data.eatProcessedFood : "",
              salty_sause_consume : data.saltysauceConsume != null ? data.saltysauceConsume : "",
              lower_salt_importance : data.saltLoweringImportance != null ? data.saltLoweringImportance : "",
              idea_on_excess_salt : data.thinkSaltCauseHealthProblem != null ? data.thinkSaltCauseHealthProblem : "",
              lowering_salt_actions : {
                limit_processed_foods: data.limitProcessedFoodConsumption != null ? data.limitProcessedFoodConsumption : "",
                check_salt_content_of_labels : data.lookAtSaltContent != null ? data.lookAtSaltContent : "",
                buy_low_salt_foods : data.buySaltAlternatives != null ? data.buySaltAlternatives : "",
                use_spice_inplace_salt : data.useSpiceWhenCooking != null ? data.useSpiceWhenCooking : "",
                avoid_outide_food : data.avoidPreparedFoodOutside != null ? data.avoidPreparedFoodOutside : "",
                do_other_things : spec_diet != null ? spec_diet[0] : "",
                specify_others: spec_diet != null ? spec_diet[1] : ""
              },
            })



            setDiabetes({
              bs_measure : data.bloodSugarMeasured != null ? data.bloodSugarMeasured : '',
              bs_measure_raised : data.bloodSugarMeasuredTold != null ? data.bloodSugarMeasuredTold : '',
              bs_raised_past_yr : data.bloodSugarMeasuredToldPast != null ? data.bloodSugarMeasuredToldPast : '',
              taken_bs_med_past_week : data.bloodSugarMeasuredTakenDrugs != null ? data.bloodSugarMeasuredTakenDrugs : '',
              curr_taken_insulin : data.bloodSugarMeasuredInsulin != null ? data.bloodSugarMeasuredInsulin : '',
              seen_trad_healer_for_bs : data.bloodSugarMeasuredTraditional != null ? data.bloodSugarMeasuredTraditional : '',
              curr_taking_herbal_med_for_insulin : data.bloodSugarTakingHerbal != null ? data.bloodSugarTakingHerbal : '',
            })

            setCholesterol({
              cols_measureby_doc: data.cholesterolMeasured != null ? data.cholesterolMeasured: '',
              raised_cols_level: data.cholesterolMeasuredTold != null ? data.cholesterolMeasuredTold: '',
              raised_cols_past_year: data.cholesterolMeasuredToldPast != null ? data.cholesterolMeasuredToldPast: '',
              taken_oral_cols_med_pastweeks: data.cholesterolMeasuredMedication != null ? data.cholesterolMeasuredMedication: '',
              seen_trad_for_cols: data.cholesterolMeasuredTradtional != null ? data.cholesterolMeasuredTradtional: '',
              curr_taking_herbmed_forcols: data.cholesterolMeasuredTakingHerbal != null ? data.cholesterolMeasuredTakingHerbal: '',
            })

            setCardioVascular({
              heart_attack: data.hadHeartAttack != null ? data.hadHeartAttack : '',
              curr_takes_aspirin: data.takingAspirin != null ? data.takingAspirin: '',
              curr_takes_statins: data.takingStatins != null ? data.takingStatins: '',
              visi_doc_past_year: data.visitedDoctor != null ? data.visitedDoctor: '',
              during_visit: {
                quit_smoking: data.advisedQuitTobacco  != null ? data.advisedQuitTobacco : '',
                reduce_salt: data.advisedSaltIntake != null ? data.advisedSaltIntake : '',
                eat_fruit_veges_daily: data.advisedTakingFruits != null ? data.advisedTakingFruits : '',
                reduce_fat_intake: data.advisedFatIntake != null ? data.advisedFatIntake : '',
                do_physical_excercise: data.advisedExercise != null ? data.advisedExercise : '',
                body_weight: data.advisedLoseWeight != null ? data.advisedLoseWeight : '',
                reduce_sugar_intake: data.advisedReduceSugar != null ? data.advisedReduceSugar : '',
              },
            })

            setPhysicalExcercise({
              work_involves_activity : data.workInvolvesActivityVigorous != null ? data.workInvolvesActivityVigorous : "",
              days_of_vigorous_ex : data.activityVigorousDays != null ? data.activityVigorousDays : "",
              mod_excerise_in_week : data.activityVigorousTime != null ? data.activityVigorousTime : "",
              work_inv_moderate_excercise : data.workInvolvesActivityModerate != null ? data.workInvolvesActivityModerate : "",
              work_mod_intencity_excercise : data.activityModerateDays != null ? data.activityModerateDays : "",
              time_spent_excerise : data.activityModerateTime != null ? data.activityModerateTime : "",
              pedal_cycling : data.walkOrUseBicycle != null ? data.walkOrUseBicycle : "",
              days_spent_pedal_cycling : data.walkOrUseBicycleDays != null ? data.walkOrUseBicycleDays : "",
              time_spent_cycling : data.walkOrUseBicycleTime != null ? data.walkOrUseBicycleTime : "",
              vig_sports : data.doVigorousSports != null ? data.doVigorousSports : "",
              weekly_vig_sports : data.doVigorousSportsDays != null ? data.doVigorousSportsDays : "",
              timespent_vig_sports : data.doVigorousSportsTime != null ? data.doVigorousSportsTime : "",
              vig_sports_increasing_bresdth : data.doModerateSports != null ? data.doModerateSports : "",
              days_spent_invig_sports : data.doModerateSportsDays != null ? data.doModerateSportsDays : "",
              time_spent_vigsport_daily : data.doModerateSportsTime != null ? data.doModerateSportsTime : "",
              time_spent_sitting : data.doSittingTime != null ? data.doSittingTime : ""
            })

            setGenderScreen({
              cervical_cancer_screening : data.cervicalCancerScreening != null ? data.cervicalCancerScreening : "",
              breast_cancer_screening : data.breastCancerScreening != null ? data.breastCancerScreening : "",
              breast_cancer_screen_date : data.breastCancerScreeningDate != null ? data.breastCancerScreeningDate : "",
              breast_cancer_result : data.breastCancerScreeningResult != null ? data.breastCancerScreeningResult : "",
              prostrate_cancer_screen :   data.prostateCancerScreening != null ? data.prostateCancerScreening : "",
              prostrate_cancer_screen_date : data.prostateCancerScreeningDate != null ? data.prostateCancerScreeningDate : "",
              prostrate_cancer_screen_result : data.prostateCancerScreeningResult != null ? data.prostateCancerScreeningResult : "",
              yellow_fever_card : data.yellowFeverCard != null ? data.yellowFeverCard : "",
              heptitis_fever_card : data.hepatitisBCard != null ? data.hepatitisBCard : "",
              convid_fever_card : data.covid19Card != null ? data.covid19Card : "",
            })

           

         }
         
         
        
       }
    })
}
  


  /**
   * 
   */
  const getLocalInformation =async() => {
      var cons = localStorage.getItem('consent');
      var prevData = JSON.parse(await localStorage.getItem('survey'));

      if(cons != null){
        setConsent(cons);
        setConsentSort(cons);
      }

      if(prevData != null){
        setDemographic(prevData.demographic);
        setTobacco(prevData.tobacco);
        setAlcohol(prevData.alcohol);
        setAlcoholExp(prevData.alcoholexp);
        setDiets(prevData.diets);
        setPhysicalExcercise(prevData.physical_excercise);
        setBloodPressure(prevData.bloodpressure);
        setDiabetes(prevData.diabetes);
        setCholesterol(prevData.cholestrol);
        setCardioVascular(prevData.cardiovascular);
      }
  }

  /**
   * 
   */
  const getLoggedInStudentInfo = () => {
      axios.get("https://sts.ug.edu.gh/services/medical/getstudentinfo").then(res => {
        setLoading(false);
        if(res.data.status === 'success'){
          console.log(res.data)
            setStudentInfo(res.data.data);
        }else{
          alert("Unable to get student info. Refresh to load details")
        }
      }).catch(error => {
        setLoading(false);
      });
  }

  /**
   * 
   * @param {*} val 
   */
  const stepCallbackHandler = (val) => {
    setStep(val);
  };


  /**
   * 
   * @param {*} val 
   */
  const setreachStep = (val) => {
    if(val>reach_step){
      setStepReached(val);
    }
  };

  const jumpToTab = (currentTabVal) => {
    if(currentTabVal < reach_step){
      setStep(currentTabVal);
    }
  };

  const confirmConsentAgreement = () => {
    if(consent == 'No'){
      alert("You cannot proceed without agreeing. ")
    }
    setConsentSort(consent)
    localStorage.setItem('consent', consent);
  }





  const renderStepperheader = () => {
    return (
      <div className="col-md-12" style={{ marginTop: 10, width:'100%' }}>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => jumpToTab(1)}
            className="col-md-1"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 1 ? "#281564" : step < 1 ? "#d6d6d6" : "#b08b57",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                1
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(2)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 2 ? "#281564" : step < 2 ? "#d6d6d6" : "#b08b57",
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                2
              </p>
            </div>
            {/* <p
              style={{
                textAlign: "center",
                fontWeight: step === 2 ? "500" : "",
              }}
            >
              Behavioural Measurements
            </p> */}
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(3)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 3 ? "#281564" : (step < 3 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                3
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(4)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 4 ? "#281564" : (step < 4 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", alignSelf: "center", marginTop: 15 }}>
                4
              </p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(5)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 5 ? "#281564" : (step < 5 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>5</p>
            </div>
          </div>
          <div
            className="col-md-1"
            onClick={() => jumpToTab(6)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 6 ? "#281564" : (step < 6 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>6</p>
            </div>
          </div>
          <div
            className="col-md-1"
            onClick={() => jumpToTab(7)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 7 ? "#281564" : (step < 7 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>7</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(8)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 8 ? "#281564" : (step < 8 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>8</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(9)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 9 ? "#281564" : (step < 9 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>9</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(10)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 10 ? "#281564" : (step < 10 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>10</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(11)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 11 ? "#281564" : (step < 11 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>11</p>
            </div>
          </div>

          <div
            className="col-md-1"
            onClick={() => jumpToTab(12)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: step === 12 ? "#281564" : (step < 12 ? "#d6d6d6" : "#b08b57"),
              }}
            >
              <p style={{ color: "white", marginTop: 15 }}>12</p>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        // setreachStep(step);
        return (
          <DemographicInfo
            statedata={demographic}
            setreachstep = {setreachStep}
            setstep={stepCallbackHandler}
            set_demographic={setDemographic}
          />
        );
      case 2:
        // setreachStep(step);
        return (
          <Tobacco
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_tobacco={setTobacco}
          />
        );
      case 3:
        // setreachStep(step);
        return (
          <AlcoholConsumption
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_alcohol={setAlcohol}
          />
        );
      case 4:
        // setreachStep(step);
        return (
          <AlcoholEnhanced
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_alcohol_exp={setAlcoholExp}
          />
        );
      case 5:
        // setreachStep(step);
        return (
          <Diet
            setstep={stepCallbackHandler}
            set_diets={setDiets}
            setreachstep={setreachStep}
          />
        );
      case 6:
        // setreachStep(step);
        return (
          <Physical
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_physical_excercise={setPhysicalExcercise}
          />
        );
      case 7:
        // setreachStep(step);
        return (
          <BloodPressure
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_bloodpressure={setBloodPressure}
          />
        );
      case 8:
        // setreachStep(step);
        return (
          <Diabetes
            setstep={stepCallbackHandler}
            set_diabetes={setDiabetes}
            setreachstep={setreachStep}
          />
        );
      case 9:
        // setreachStep(step);
        return (
          <Cholesterol
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_cholesterol={setCholesterol}
          />
        );
      case 10:
        // setreachStep(step);
        return (
          <CardioVascular
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_cardiovascular={setCardioVascular}
          />
        );
      case 11:
        // setreachStep(step);
        return (
          <GenderScreening
            setreachstep={setreachStep}
            setstep={stepCallbackHandler}
            set_gendescreen={setGenderScreen}
            set_completed_info={setCompletedInfo}
          />
        );
    
      case 12:
        // setreachStep(step);
        return <FinalStage setreachstep={setreachStep} />;
      
    }
  };

  const welcomeMessage = () => {
    if(student_info != null){
      return (
        <h4 style={{ textAlign: "center" }}>
          Hello {student_info.student_name}, Welcome to Staff & Student Medical Survey
        </h4>
      );
    }else{
      <p>Unable to get Student Information</p>
    }
  }



  const consentSorting = () => {
    if(consent_sort === "Yes"){
        return (
          <div className="" style={{ padding: "2rem" }}>
            {renderStepperheader()}

            {renderStep()}
          </div>
        );
    }else{
       return (
         <form onSubmit={confirmConsentAgreement}>
           <div className="container">
             <div className="col-md-12">
               <strong style={{ textTransform: "uppercase" }}>
                 Survey Information
               </strong>
             </div>
           </div>
           <br />
           <div className="container">
             <div className="col-md-12">
               <div className="row">
                 <div className="col-md-6">
                   <div className="form-group">
                     <label htmlFor="choice">
                       <strong>1.</strong> Consent has been read and agreed
                     </label>
                     <select
                       onChange={handleConsentChange}
                       required
                       defaultValue={""}
                       className="form-control"
                     >
                       <option value="" disabled>
                         -- Select an option --
                       </option>
                       <option value="Yes">Yes</option>
                       <option value="No">No</option>
                     </select>
                     {/* <span style="color:red;font-style:italic"></span> */}
                   </div>
                 </div>

                 <div className="col-md-6">
                   <div className="form-group">
                     <label htmlFor="staffid">
                       {" "}
                       <strong>2.</strong> Phone No.
                     </label>
                     <input
                       type="text"
                       required
                       onChange={handlePhoneNoChange}
                       className="form-control"
                     />
                     {/* <span style="color:red;font-style:italic"></span> */}
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-3">
               <button type="submit" className="btn btn-warning btn-block ">
                 Continue
               </button>
             </div>
           </div>
         </form>
       );
    }
  }




  const renderSurvey = () => {
    if(loading){
        return (
          <div className="row col-md-12" style={{display:'flex', minHeight: '100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
            <i className="fa fa-spinner fa-spin fa-3x" style={{marginBottom: 20}}></i>
            <p>Loading Information... Please wait...</p>
          </div>
        );
    }else{
      return (
        // <div className="container-fluid">
          <div className="container" style={{marginBottom: 30}}>
            <div className='card box-shadow-1'>
                <div className="card-header">
                    <h4 className="card-title center"><i className="ft-user"></i> MEDICAL SURVEY</h4>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor:'white'}}
                >
                  <div
                    className="col-md-12"
                    style={{ marginTop: 50, marginBottom: 50, alignItems: "center" }}
                  >
                    {welcomeMessage()}
                  </div>

                  {consentSorting()}
                </div>
            </div>
        </div>
        // </div>
      );
    }
  }

  return (
    <SurveyContext.Provider
      value={{
        consent: consent,
        phoneno:phoneno,
        user: student_info,
        demographic: demographic,
        tobacco: tobacco,
        alcohol: alcohol,
        alcoholexp: alcoholexp,
        diets: diets,
        physical_excercise: physical_excercise,
        bloodpressure: bloodpressure,
        diabetes: diabetes,
        cholestrol: cholestrol,
        cardiovascular: cardiovascular,
        gender_screen: gender_screen,
        phoneno: phoneno,
        consent: consent,
        complete_data: completed_info
      }}
    >
      <div style={{ backgroundImage: "url(" + bg + ")" }}>
         
          <Header />

          {renderSurvey()}

        {/* <div
          className="footer"
          style={{
            height: 40,
            backgroundColor: "#281564",
            flexDirection: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <span style={{ color: "white" }}>
              UG -Medical Survey | All Rights Reserved @{" "}
              {new Date().getFullYear()}
            </span>
          </div>
        </div> */}
      </div>
    </SurveyContext.Provider>
  );
}

export default App;
