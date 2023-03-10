import axios from 'axios';
import { save_endpoint } from './endpoints';
const baseURL = save_endpoint;

export default  async function SubmitSurvey(data) {
    
    // console.log( data.gender_screen);
    var response = await axios.post(baseURL, {
        // id: "",
        sid: data.user.student_id,
        type: 'STUDENT',
        hall: data.user.hall,
        address: "N/A",
        dateOfCompletion: new Date(),
        consent: data.consent,
        interviewLang: "English",
        interviewTime: new Date().toTimeString().split(' ')[0],
        familySurname: data.user.student_name.split(",")[0],
        firstName: data.user.student_name.split(",")[1],
        mobileNumber: data.demographic.phoneno,
        //DEMOGRAPHICS
        gender: data.demographic.sex,
        dateOfBirth: data.demographic.dob,
        schoolYears: data.demographic.yrsinsch,
        highestEduLevel: data.demographic.edulevel,
        tribe: data.demographic.ethnic,
        maritalStatus: data.demographic.maricalsrtatus,
        occupation: data.demographic.workstatus,
        peopleInHousehold: data.demographic.household_age,
        householdEarnings:
          data.demographic.avg_earning + ":" + data.demographic.avg_earning_rate,
        householdIncomeEstimate: data.demographic.house_hold_income,
        //TOBACCO
        useTobaccoProduct: data.tobacco?.tb_status,
        useTobaccoProductDaily: data.tobacco?.tb_daily_use,
        ageStartedSmoking: data.tobacco?.age_tb_use ,
        smokingHowLong:   data.tobacco?.useduration_val +":"+data.tobacco?.useduration, //problem with it in DB
        averageSmokingProductStats: JSON.stringify({
          man_cigars: data.tobacco?.man_cigars == undefined|null ? "": data.tobacco?.man_cigars,
          hand_roll_cigars: data.tobacco?.hand_roll_cigars == undefined|null ? "" : data.tobacco?.hand_roll_cigars,
          pipes_of_tobacco: data.tobacco?.pipes_of_tobacco == undefined|null ? "" : data.tobacco?.pipes_of_tobacco,
          cheroots_cigars: data.tobacco?.cheroots_cigars == undefined|null ? "" : data.tobacco?.cheroots_cigars,
          shisha: data.tobacco?.shisha ==undefined|null ? "": data.tobacco?.shisha,
          cigar_others: data.tobacco?.cigar_others == undefined|null ? "" : data.tobacco?.cigar_others,
        }),
        triedStopSmoking: data.tobacco?.try_stop,
        advisedQuitSmoking: data.tobacco?.advice_by_doc,
        smokeTobaccoInPast: data.tobacco?.past_use,
        smokeTobaccoInPastDaily: data.tobacco?.past_use_daily,
        ageStoppedSmoking: data.tobacco?.age_of_stop,
        stopSmokingHowLong: data.tobacco?.duration_of_stop,
        useSmokelessProduct: data.tobacco?.currently_using,
        useSmokelessProductDaily: data.tobacco?.currently_using_smokeless,
        averageSmokelessProductUsage: JSON.stringify({
          mouth: data.tobacco?.snuff_by_mouth == undefined|null ? "" : data.tobacco?.snuff_by_mouth,
          nose: data.tobacco?.snuff_by_nose == undefined|null ? "" : data.tobacco?.snuff_by_nose,
          chewing: data.tobacco?.snuff_by_chewing == undefined|null ? "" : data.tobacco?.snuff_by_chewing,
          betel: data.tobacco?.snuff_by_betel_quid ==undefined|null ? "" : data.tobacco?.snuff_by_betel_quid,
        }),
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
        consumeAcoholHomebrewed: data.alcoholexp?.con_home_brewed,
        consumeAcoholHomebrewedStats: JSON.stringify({
          spirit: data.alcoholexp?.home_brewed_spirit == undefined|null ? "" : data.alcoholexp?.home_brewed_spirit,
          beer: data.alcoholexp?.home_brewed_beer == undefined|null ? "" : data.alcoholexp?.home_brewed_beer,
          border: data.alcoholexp?.border_alcohol == undefined|null ? "" : data.alcoholexp?.border_alcohol,
          nondrink: data.alcoholexp?.alcohol_not_drinking == undefined|null ? "" : data.alcoholexp?.alcohol_not_drinking,
          untaxed: data.alcoholexp?.untaxed == undefined|null ? "" : data.alcoholexp?.untaxed
        }),
        pastAlcoholStopDrinking: data.alcoholexp?.stop_drink_once_started,
        pastAlcoholFailedExpected: data.alcoholexp?.do_what_expected,
        pastAlcoholFirstDrink: data.alcoholexp?.first_drink_moorning,
        pastAlcoholFamilyProblems: data.alcoholexp?.family_problems,
  
        //DIETS
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

        cervicalCancerScreening: data.gender_screen?.cervical_cancer_screening,
        breastCancerScreening: data.gender_screen?.breast_cancer_screening,
        breastCancerScreeningDate: data.gender_screen?.breast_cancer_screen_date ,
        breastCancerScreeningResult : data.gender_screen?.breast_cancer_result ,
        prostateCancerScreening : data.gender_screen?.prostrate_cancer_screen ,
        prostateCancerScreeningDate : data.gender_screen?.prostrate_cancer_screen_date ,
        prostateCancerScreeningResult : data.gender_screen?.prostrate_cancer_screen_result ,
        yellowFeverCard : data.gender_screen?.yellow_fever_card ,
        hepatitisBCard : data.gender_screen?.heptitis_fever_card ,
        covid19Card : data.gender_screen?.convid_fever_card ,

        stage: data.stage,
        completed: data.completed
      },{
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
    })

    return response;
      
      
    //   .then(res => {
    //       if(res.data.status =='success'){
    //           setstep(12)
    //       }else{
    //           localStorage.setItem('survey', JSON.stringify(data))
    //           alert('Unable to save survey reports')
    //       }
    //       setLoading(false);
    //   }).catch(error => {
    //       localStorage.setItem('survey', JSON.stringify(data))
    //       alert('NETWORK ERROR: Unable to save survey reports')
    //   });
}