import React, {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import { SurveyContext } from './App';
import LoadingModal from './LoadingModal';
import SubmitSurvey from './SubmitSurvey';

export default function Tobacco({ setstep, set_tobacco, setreachstep }) {
  const value = React.useContext(SurveyContext);
  const tbc = value.tobacco;
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [tb_status, setTobaccoUseStatus] = useState(tbc != null ? tbc.tb_status : "");
  const [tb_daily_use, setTobaccoDailyUse] = useState(tbc != null ? tbc.tb_daily_use : "");
  const [age_tb_use, setAgetbuse] = useState(tbc != null ? tbc.age_tb_use : "");
  const [useduration, setUseDuration] = useState(tbc != null ? tbc.useduration : "");
  const [useduration_val, setUseDurationVal] = useState(tbc != null ? tbc.useduration_val : "");
  const [try_stop, setTryStop] = useState(tbc != null ? tbc.try_stop : "");
  const [advice_by_doc, setAdviceByDoc] = useState(tbc != null ? tbc.advice_by_doc : "");
  const [past_use, setPastUse] = useState(tbc != null ? tbc.past_use : "");
  const [past_use_daily, setPastUseDaily] = useState(tbc != null ? tbc.past_use_daily : "");

  const [age_of_stop, setAgeOfStop] = useState(tbc != null ? tbc.age_of_stop : "");
  const [duration_of_stop, setDurationSinceStop] = useState(tbc != null ? tbc.duration_of_stop : "");

  const [currently_using, setCurrentlyusing] = useState(tbc != null ? tbc.currently_using : "");
  const [currently_using_smokeless, setCurrentlyusingSmokeless] = useState(tbc != null ? tbc.currently_using_smokeless : "");
  const [snuff_by_mouth, setSnuffByMouth] = useState({
    status: tbc != null ? (tbc.snuff_by_mouth?.status != undefined | null ? tbc.snuff_by_mouth?.status : "") : "",
    freq: tbc != null ? (tbc.snuff_by_mouth?.freq != undefined | null ? tbc.snuff_by_mouth?.freq : "") : "",
    no_times: tbc != null ? (tbc.snuff_by_mouth?.no_times != undefined | null ? tbc.snuff_by_mouth?.no_times : "") : "",
  });

  const [snuff_by_nose, setSnuffByNose] = useState({
    status: tbc != null ? (tbc.snuff_by_nose?.status != undefined | null ? tbc.snuff_by_nose?.status : "") : "",
    freq: tbc != null ? (tbc.snuff_by_nose?.freq != undefined | null ? tbc.snuff_by_nose?.freq : "") : "",
    no_times: tbc != null ? (tbc.snuff_by_nose?.no_times != undefined | null ? tbc.snuff_by_nose?.no_times : "") : "",
  });

  const [snuff_by_chewing, setSnuffByChewing] = useState({
    status: tbc != null ? (tbc.snuff_by_chewing?.status != undefined | null ? tbc.snuff_by_chewing?.status : "") : "",
    freq: tbc != null ? (tbc.snuff_by_chewing?.freq != undefined | null ? tbc.snuff_by_chewing?.freq : "") : "",
    no_times: tbc != null ? (tbc.snuff_by_chewing?.no_times != undefined | null ? tbc.snuff_by_chewing?.no_times : "") : "",
  });

  const [snuff_by_betel_quid, setSnuffByBetelQuid] = useState({
    status: tbc != null ? (tbc.snuff_by_betel_quid?.status != undefined | null ? tbc.snuff_by_betel_quid?.status : "") : "",
    freq: tbc != null ? (tbc.snuff_by_betel_quid?.freq != undefined | null ? tbc.snuff_by_betel_quid?.freq : "") : "",
    no_times: tbc != null ? (tbc.snuff_by_betel_quid?.no_times != undefined | null ? tbc.snuff_by_betel_quid?.no_times : "") : "",
  });

  const [man_cigars, setManufacturedCigars] = useState({
    freq: tbc != null ? (tbc.snuff_by_betel_quid?.freq != undefined | null ? tbc.snuff_by_betel_quid?.freq : "") : "",
    no_times: tbc != null ? (tbc.man_cigars?.no_times != undefined | null ? tbc.man_cigars?.no_times : "") : ""
  })

  const [hand_roll_cigars, setHandRolledCigars] = useState({
    freq: tbc != null ? (tbc.man_cigars?.freq != undefined | null ? tbc.man_cigars?.freq : "") : "",
    no_times: tbc != null ? (tbc.hand_roll_cigars?.no_times != undefined | null ? tbc.hand_roll_cigars?.no_times : "") : ""
  })

  const [pipes_of_tobacco, setPipesOfTobacco] = useState({
    freq: tbc != null ? (tbc.pipes_of_tobacco?.freq != undefined | null ? tbc.pipes_of_tobacco?.freq : "") : "",
    no_times: tbc != null ? (tbc.pipes_of_tobacco?.no_times != undefined | null ? tbc.pipes_of_tobacco?.no_times : "") : ""
  })

  const [cheroots_cigars, setCherootCigars] = useState({
    freq: tbc != null ? (tbc.cheroots_cigars?.freq != undefined | null ? tbc.cheroots_cigars?.freq : "") : "",
    no_times: tbc != null ? (tbc.cheroots_cigars?.no_times != undefined | null ? tbc.cheroots_cigars?.no_times : "") : ""
  })

  const [shisha, setShisha] = useState({
    freq: tbc != null ? (tbc.shisha?.freq != undefined | null ? tbc.shisha?.freq : "") : "",
    no_times: tbc != null ? (tbc.shisha?.no_times != undefined | null ? tbc.shisha?.no_times : "") : ""
  })

  const [cigar_others, setCigarOthers] = useState({
    freq: 'others',
    no_times: tbc != null ? (tbc.cigar_others?.no_times != undefined | null ? tbc.cigar_others?.no_times : "") : ""
  })

  const [past_use_status, setPastuseStatus] = useState(tbc != null ? tbc.past_use_status : "");
  const [past_use_status_daily, setPastuseStatusDaily] = useState(tbc != null ? tbc.past_use_status_daily : "");
  const [smoke_in_home, setSmokeInHome] = useState(tbc != null ? tbc.smoke_in_home : "");
  const [smoke_in_work, setSmokeInWork] = useState(tbc != null ? tbc.smoke_in_work : "");

  useEffect(() => {
    setGlobalState()
    setreachstep(2);
  }, [tb_status,tb_daily_use,age_tb_use,useduration,useduration_val,try_stop,advice_by_doc,advice_by_doc,past_use,past_use_daily,age_of_stop,duration_of_stop,currently_using,currently_using_smokeless,snuff_by_mouth,snuff_by_nose,snuff_by_chewing,snuff_by_betel_quid,past_use_status,past_use_status_daily,smoke_in_home,smoke_in_work,man_cigars,hand_roll_cigars,pipes_of_tobacco,cheroots_cigars,shisha,cigar_others]);

  const handleNext = (e) => {
    e.preventDefault();

    set_tobacco({
      tb_status,
      tb_daily_use,
      age_tb_use,
      useduration,
      useduration_val,
      try_stop,
      advice_by_doc,
      advice_by_doc,
      past_use,
      past_use_daily,
      age_of_stop,
      duration_of_stop,
      currently_using,
      currently_using_smokeless,
      snuff_by_mouth,
      snuff_by_nose,
      snuff_by_chewing,
      snuff_by_betel_quid,
      past_use_status,
      past_use_status_daily,
      smoke_in_home,
      smoke_in_work,
      man_cigars,
      hand_roll_cigars,
      pipes_of_tobacco,
      cheroots_cigars,
      shisha,
      cigar_others
    });
    setstep(3);
  };





  const handleTobaccoChange = (e) => setTobaccoUseStatus(e.target.value);
  const handleTbDailyUseChange = (e) => setTobaccoDailyUse(e.target.value);
  const handleAgeOfUseChange = (e) => setAgetbuse(e.target.value);
  const handleUseDuration = (e) => setUseDuration(e.target.value);
  const handleUseDurationValue = (e) => setUseDurationVal(e.target.value);
  const handleTryStop = (e) => setTryStop(e.target.value);
  const handleAdviceByDoc = (e) => setAdviceByDoc(e.target.value);
  const handlePastUse = (e) => setPastUse(e.target.value);
  const handlePastUseDaily = (e) => setPastUseDaily(e.target.value);
  const handleAgeOfStop = (e) => setAgeOfStop(e.target.value);
  const handleDurationOfStop = (e) => setDurationSinceStop(e.target.value);
  const handleCurrentUsing = (e) => setCurrentlyusing(e.target.value);
  const handleUurrentUsingSmokeless = (e) =>
    setCurrentlyusingSmokeless(e.target.value);

  const handleSnuffbyMouth = (e, val) => {
    switch (val) {
      case 1:
        setSnuffByMouth((prevState) => ({
          ...prevState,
          status: e.target.value,
        }));

        break;
      case 2:
        setSnuffByMouth((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 3:
        setSnuffByMouth((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleSnuffbyNose = (e, val) => {
    switch (val) {
      case 1:
        setSnuffByNose((prevState) => ({
          ...prevState,
          status: e.target.value,
        }));

        break;
      case 2:
        setSnuffByNose((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 3:
        setSnuffByNose((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleSnuffbyChewing = (e, val) => {
    switch (val) {
      case 1:
        setSnuffByChewing((prevState) => ({
          ...prevState,
          status: e.target.value,
        }));

        break;
      case 2:
        setSnuffByChewing((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 3:
        setSnuffByChewing((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleSnuffbyBetelQuid = (e, val) => {
    switch (val) {
      case 1:
        setSnuffByBetelQuid((prevState) => ({
          ...prevState,
          status: e.target.value,
        }));

        break;
      case 2:
        setSnuffByBetelQuid((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 3:
        setSnuffByBetelQuid((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handlePastUseStatus = (e) => setPastuseStatus(e.target.value);
  const handlePastUseStatusDaily = (e) => setPastuseStatusDaily(e.target.value);
  const handleSmokeInHome = (e) => setSmokeInHome(e.target.value);
  const handleSmokeInWork = (e) => setSmokeInWork(e.target.value);

  const handleManufacturedCigars = (e, val) => {
    switch (val) {
      case 1:
        setManufacturedCigars((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 2:
        setManufacturedCigars((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleHandRolledCigars = (e, val) => {
    switch (val) {
      case 1:
        setHandRolledCigars((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 2:
        setHandRolledCigars((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handlePipesOfTobacco = (e, val) => {
    switch (val) {
      case 1:
        setPipesOfTobacco((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 2:
        setPipesOfTobacco((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleCherootCigars = (e, val) => {
    switch (val) {
      case 1:
        setCherootCigars((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 2:
        setCherootCigars((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleShishaCigars = (e, val) => {
    switch (val) {
      case 1:
        setShisha((prevState) => ({
          ...prevState,
          freq: e.target.value,
        }));
        break;
      case 2:
        setShisha((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

  const handleOtherCigars = (e, val) => {
    switch (val) {
      case 1:
        setCigarOthers((prevState) => ({
          ...prevState,
          freq: 'others',
        }));
        break;
      case 2:
        setCigarOthers((prevState) => ({
          ...prevState,
          no_times: e.target.value,
        }));
    }
  };

/**
 * 
 * 
 * 
 */
  const setGlobalState = () => {
    set_tobacco({tb_status,tb_daily_use,age_tb_use,useduration,useduration_val,try_stop,advice_by_doc,advice_by_doc,past_use,past_use_daily,age_of_stop,duration_of_stop,currently_using,currently_using_smokeless,snuff_by_mouth,snuff_by_nose,snuff_by_chewing,snuff_by_betel_quid,past_use_status,past_use_status_daily,smoke_in_home,smoke_in_work,man_cigars,hand_roll_cigars,pipes_of_tobacco,cheroots_cigars,shisha,cigar_others
    });
  }

/**
 * 
 * 
 */
  const handleBack = () => {
    setstep(1);
  };



 /**
   * 
   * 
   */
 const renderTobaccoSmokeDaily = () => {
  if(tb_status != "No"){
    return(
      <>
        <div className="col-md-12">
        <p className="row">
          <strong>5.</strong>  On average, how many of the following products do you smoke each day/week? (IF LESS THAN DAILY, RECORD WEEKLY) (RECORD FOR EACH TYPE, USE SHOWCARD)
        </p>
        
      </div>
        <div className="row">
          <div className="col-md-12">
            <p><strong>(I).</strong>Manufactured cigarettes</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                     Frequency
                  </label>
                  <select
                    required
                    defaultValue={man_cigars.freq}
                    className="form-control"
                    onChange={(e) => handleManufacturedCigars(e,1)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    No. Of Times
                  </label>
                  <input
                    required
                    value={man_cigars.no_times}
                    onChange={(e) => handleManufacturedCigars(e,2)}
                    type="text"
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p><strong>(II).</strong> Hand-rolled cigarettes</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">
                  Frequency
                </label>
                <select
                  defaultValue={hand_roll_cigars.freq}
                  required
                  className="form-control"
                  onChange={(e) => handleHandRolledCigars(e,1)}
                >
                  <option value="" disabled >
                    -- Select an option --
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">No. Of Times</label>
                <input
                  required
                  value={hand_roll_cigars.no_times}
                  onChange={(e) => handleHandRolledCigars(e,2)}
                  type="text"
                  className="form-control"
                  id="yearsinsch"
                  name="yearsinsch"
                />
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
        <p><strong>(III).</strong> Pipes full of tobacco</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">Frequency</label>
                <select
                  defaultValue={pipes_of_tobacco.freq}
                  required
                  className="form-control"
                  onChange={(e) => handlePipesOfTobacco(e,1)}
                >
                  <option value="" disabled >
                    -- Select an option --
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">No. Of Times</label>
                <input
                  value={pipes_of_tobacco.no_times}
                  onChange={(e) => handlePipesOfTobacco(e,2)}
                  type="text"
                  required
                  className="form-control"
                  id="yearsinsch"
                  name="yearsinsch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
         <p><strong>(IV).</strong> Cigars, cheroots, cigarillos</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">Frequency</label>
                <select
                  defaultValue={cheroots_cigars.freq}
                  required
                  className="form-control"
                  onChange={(e) => handleCherootCigars(e,1)}
                >
                  <option value="" disabled >
                    -- Select an option --
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">No. Of Times</label>
                <input
                value={cheroots_cigars.no_times}
                  onChange={(e) => handleCherootCigars(e,2)}
                  required
                  type="number"
                  className="form-control"
                />
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p><strong>(V).</strong> Number of Shisha sessions</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">Frequency</label>
                <select
                  defaultValue={shisha.freq}
                  required
                  className="form-control"
                  onChange={(e) => handleShishaCigars(e,1)}
                >
                  <option value="" disabled >
                    -- Select an option --
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">No. Of Times</label>
                <input
                value={shisha.no_times}
                  onChange={(e) => handleShishaCigars(e,2)}
  
                  type="number"
                  className="form-control"
                />
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="row">
        <div className="col-md-12">
        <p><strong>(VI).</strong> Others  </p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="yearsinsch">Specify</label>
                <input className="form-control" value={cigar_others.no_times} onChange={(e) => handleOtherCigars(e, 2)} />
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
  const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 2;
    setTimeout(function(){
      SubmitSurvey(value).then(res => {
        setLoading(false);
        if(res.data.status == 'success'){
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
   * @returns 
   * 
   * 
   */
  const renderCurrentlySmokeTobaccoProductsDaily = () => {
    if(tb_status !== 'No'){
      return (
        <div className="col-md-5">
            <div className="form-group">
                  <label htmlFor="staffid"> <strong>2.</strong> Do you currently smoke tobacco products daily?</label>
                  <select
                    onChange={handleTbDailyUseChange}
                    required
                    name="tobacco"
                    id="tobacco"
                    defaultValue={tb_daily_use}
                    className="form-control"
                  >
                    <option value="" disabled >
                      Select an option
                    </option>
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
 * @returns 
 */
  const renderSmokingDurationValInput = () => {
    if(useduration !== "Don't Remember"){
      return (
        <div className="col-md-2">
            <div className="form-group">
                  <label htmlFor="yearsinsch">
                  <i className="fa fa-question-circle"></i> Enter Value
                  </label>
                  <input
                    required
                    value={useduration_val}
                    onChange={handleUseDurationValue}
                    type="number"
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
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
  const renderPastSmokeDaily = () => {
    if(past_use !== 'No'){
      return(
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="stop_advice">
                    <strong>9.</strong> In the past, did you ever smoke daily?
                </label>
                <select
                    name="stop_advice"
                    required
                    defaultValue={past_use_daily}
                    onChange={handlePastUseDaily}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled >
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
          </div>
      )
    }
  }


  /**
   * 
   * 
   */
  const renderAgeStoppedSmoking = () => {
    if(past_use !== 'No'){
      return (

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              
              <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="yearsinsch">
                        <strong>10.</strong> How old were you when you stopped
                        smoking?
                    </label>
                      <input
                        required
                        value={age_of_stop}
                        onChange={handleAgeOfStop}
                        type="number"
                        className="form-control"
                        id="yearsinsch"
                        name="yearsinsch"
                      />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>11.</strong> How long ago did you stop smoking?
                  </label>
                  <input
                    onChange={handleDurationOfStop}
                    type="number"
                    value={duration_of_stop}
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                </div>
              </div>

            </div>
          </div>
        </div> 
      )
    }
  }



  /**
   * 
   * 
   * 
   * 
   */
  const renderCurrentUseSomkelessTobacco = () => {
    if(currently_using !== 'No'){
      return (
        <div className="col-md-12">
            <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>13.</strong> Do you currently use smokeless tobacco
                    products daily?
                  </label>
                  <select
                    defaultValue={currently_using_smokeless}
                    className="form-control"
                    onChange={handleUurrentUsingSmokeless}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
            </div>
        </div>
      )
    }
  }


  /**
   * 
   * 
   */
  const renderSnuffingTobacco = () => {
    if(currently_using !== 'No'){
      return(
        <>
          <div className="col-md-12">
          <p className="row">
            <strong>14.</strong>
            On average, how many times a day/week do you use
            ................... (IF LESS THAN DAILY, RECORD WEEKLY)
          </p>
          
        </div>
          <div className="row">
          <p className='col-md-12'><strong>(I).</strong> Snuff, by mouth</p>
            <div className="col-md-12">
              <div className="row">
                {/* <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="yearsinsch">
                      <strong>(I)</strong> Snuff, by mouth
                    </label>
                    <select
                      defaultValue={snuff_by_mouth.status}
                      required
                      className="form-control"
                      onChange={(e) => handleSnuffbyMouth(e,1)}
                    >
                      <option value="" disabled >
                        -- Select an option --
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    
                  </div>
                </div> */}
               
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="yearsinsch">
                       Frequency
                    </label>
                    <select
                      required
                      defaultValue={snuff_by_mouth.freq}
                      className="form-control"
                      onChange={(e) => handleSnuffbyMouth(e,2)}
                    >
                      <option value="" disabled >
                        -- Select an option --
                      </option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                    </select>
                    {/* <span style="color:red;font-style:italic"></span> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="yearsinsch">
                      No. Of Times
                    </label>
                    <input
                      required
                      value={snuff_by_mouth.no_times}
                      onChange={(e) => handleSnuffbyMouth(e,3)}
                      type="text"
                      className="form-control"
                      id="yearsinsch"
                      name="yearsinsch"
                    />
                    {/* <span style="color:red;font-style:italic"></span> */}
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="row">
        <p className='col-md-12'><strong>(II).</strong> Snuff, by nose</p>
          <div className="col-md-12">
            
            <div className="row">
              {/* <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(IV)</strong>Snuff, by nose
                  </label>
                  <select
                    defaultValue={snuff_by_nose.status}
                    required
                    className="form-control"
                    onChange={(e) => handleSnuffbyNose(e,1)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    Frequency
                  </label>
                  <select
                    defaultValue={snuff_by_nose.freq}
                    required
                    className="form-control"
                    onChange={(e) => handleSnuffbyNose(e,2)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                    required
                    value={snuff_by_nose.no_times}
                    onChange={(e) => handleSnuffbyNose(e,3)}
                    type="text"
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        <p className='col-md-12'><strong>(III).</strong> Chewing tobacco</p>
          <div className="col-md-12">
            <div className="row">
              {/* <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Chewing tobacco</label>
                  <select
                    className="form-control"
                    required
                    defaultValue={snuff_by_chewing.status}
                    onChange={(e) => handleSnuffbyChewing(e,1)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                 
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Frequency</label>
                  <select
                    defaultValue={snuff_by_chewing.freq}
                    required
                    className="form-control"
                    onChange={(e) => handleSnuffbyChewing(e,2)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                    value={snuff_by_chewing.no_times}
                    onChange={(e) => handleSnuffbyChewing(e,3)}
                    type="text"
                    required
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        <p className='col-md-12'><strong>(IV).</strong> Betel, quid</p>
          <div className="col-md-12">
            <div className="row">
              {/* <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Betel, quid</label>
                  <select
                    defaultValue={snuff_by_betel_quid.status}
                    required
                    className="form-control"
                    onChange={(e) => handleSnuffbyBetelQuid(e, 1)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Frequency</label>
                  <select
                    defaultValue={snuff_by_betel_quid.freq}
                    required
                    className="form-control"
                    onChange={(e) => handleSnuffbyBetelQuid(e,2)}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                  value={snuff_by_betel_quid.no_times}
                    onChange={(e) => handleSnuffbyBetelQuid(e,3)}
                    required
                    type="number"
                    className="form-control"
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
 */
const renderPastUseSmokelessTobaccoProduct = () => {
  if(past_use_status !== 'No'){
    return(
      <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="yearsinsch">
          <strong>16.</strong> In the past, did you ever use smokeless
          tobacco products such as [snuff, chewing tobacco, or betel]
          daily?
        </label>
        <select
          className="form-control"
          defaultValue={past_use_status_daily}
          onChange={handlePastUseStatusDaily}
        >
          <option value="" disabled >
            -- Select an option --
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
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
  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <strong className="col-md-12" style={{ textTransform: "uppercase",  }}>CORE: Tobacco Use</strong>
          
          <p className='col-md-12'>Now I am going to ask you some questions about tobacco use.</p>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1</strong> Do you currently smoke any tobacco
                    products, such as cigarettes, cigars or pipes?
                  </label>
                  <select
                    onChange={handleTobaccoChange}
                    name="tobacco"
                    id="tobacco"
                    required
                    defaultValue={tb_status}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {renderCurrentlySmokeTobaccoProductsDaily()}
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>3.</strong> How old were you when you first started
                    smoking?
                  </label>
                  <input
                    required
                    value={age_tb_use}
                    onChange={handleAgeOfUseChange}
                    type="number"
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="edulevel">
                    <strong>4.</strong> Do you remember how long ago it was?
                  </label>
                  <select
                    name="edulevel"
                    required
                    defaultValue={useduration}
                    onChange={handleUseDuration}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="In Years">In Years</option>
                    <option value="In Months">In Months</option>
                    <option value="In Weeks">In Weeks</option>
                    <option value="Don't Remember">Don't Remember</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              {renderSmokingDurationValInput()}
            </div>
          </div>
        </div>


        <br />
          {renderTobaccoSmokeDaily()}
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="stop_smoking">
                    <strong>6.</strong> During the past 12 months, have you
                    tried to stop smoking?
                  </label>
                  <select
                    required
                    onChange={handleTryStop}
                    defaultValue={try_stop}
                    name="stop_smoking"
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled >
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="stop_advice">
                    <strong>7.</strong> During any visit to a doctor or other
                    health worker in the past 12 months, were you advised to
                    quit smoking tobacco?
                  </label>
                  <select
                    name="stop_advice"
                    id="edulevel"
                    required
                    defaultValue={advice_by_doc}
                    onChange={handleAdviceByDoc}
                    className="form-control"
                  >
                    <option value="" disabled >
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="No visit during the past 12 months">
                      No visit during the past 12 months
                    </option>
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
                  <label htmlFor="stop_smoking">
                    <strong>8.</strong> In the past, did you ever smoke any
                    tobacco products?
                  </label>
                  <select
                    required
                    name="stop_smoking"
                    defaultValue={past_use}
                    onChange={handlePastUse}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled >
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              {renderPastSmokeDaily()}

            </div>
          </div>
        </div>
        
        <br />

        <div className='row'>
          <div className="col-md-12">
            <strong  style={{ textTransform: "uppercase" }}>EXTENDED: Tobacco Use</strong>
            <p>Question:</p>
            <hr />
          </div>
        </div>

        <br />

        {renderAgeStoppedSmoking()}

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>12.</strong> Do you currently use any smokeless
                    tobacco products such as [snuff, chewing tobacco, betel]?
                  </label>
                  <select
                  defaultValue={currently_using}
                    className="form-control"
                    onChange={handleCurrentUsing}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              {renderCurrentUseSomkelessTobacco()}


            </div>
          </div>
        </div>

        <br />

        {renderSnuffingTobacco()}

       

        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>15.</strong> In the past, did you ever use smokeless
                    tobacco products such as [snuff, chewing tobacco, or betel]?
                  </label>
                  <select
                    defaultValue={past_use_status}
                    className="form-control"
                    onChange={handlePastUseStatus}
                  >
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
             
             {renderPastUseSmokelessTobaccoProduct()}


            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>17.</strong> During the past 30 days, did someone
                    smoke in your home?
                  </label>
                  <select className="form-control" defaultValue={smoke_in_home} onChange={handleSmokeInHome}>
                    <option value="" disabled >
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
                  <label htmlFor="yearsinsch">
                    <strong>18.</strong>During the past 30 days, did someone
                    smoke in closed areas in your workplace (in the building, in
                    a work area or a specific office)?
                  </label>
                  <select className="form-control" defaultValue={smoke_in_work} onChange={handleSmokeInWork}>
                    <option value="" disabled >
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Don't work in a closed area">
                      Don't work in a closed area
                    </option>
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
        <br />
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
