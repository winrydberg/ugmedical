import React, {useState,useEffect} from 'react'

export default function Tobacco({ setstep, set_tobacco, setreachstep }) {
  const [tb_status, setTobaccoUseStatus] = useState("");
  const [tb_daily_use, setTobaccoDailyUse] = useState("");
  const [age_tb_use, setAgetbuse] = useState("");
  const [useduration, setUseDuration] = useState("");
  const [useduration_val, setUseDurationVal] = useState("");
  const [try_stop, setTryStop] = useState("");
  const [advice_by_doc, setAdviceByDoc] = useState("");
  const [past_use, setPastUse] = useState("");
  const [past_use_daily, setPastUseDaily] = useState("");

  const [age_of_stop, setAgeOfStop] = useState("");
  const [duration_of_stop, setDurationSinceStop] = useState("");

  const [currently_using, setCurrentlyusing] = useState("");
  const [currently_using_smokeless, setCurrentlyusingSmokeless] = useState("");
  const [snuff_by_mouth, setSnuffByMouth] = useState({
    status: "",
    freq: "",
    no_times: "",
  });

  const [snuff_by_node, setSnuffByNose] = useState({
    status: "",
    freq: "",
    no_times: "",
  });

  const [snuff_by_chewing, setSnuffByChewing] = useState({
    status: "",
    freq: "",
    no_times: "",
  });

  const [snuff_by_betel_quid, setSnuffByBetelQuid] = useState({
    status: "",
    freq: "",
    no_times: "",
  });

  const [past_use_status, setPastuseStatus] = useState("");
  const [past_use_status_daily, setPastuseStatusDaily] = useState("");
  const [smoke_in_home, setSmokeInHome] = useState("");
  const [smoke_in_work, setSmokeInWork] = useState("");

  useEffect(() => {
    setreachstep(2);
  }, []);

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
      snuff_by_node,
      snuff_by_chewing,
      snuff_by_betel_quid,
      past_use_status,
      past_use_status_daily,
      smoke_in_home,
      smoke_in_work,
    });
    setstep(3);
  };

  const handleBack = () => {
    setstep(1);
  };
  const saveAndContinue = () => {
    console.log({
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
      snuff_by_node,
      snuff_by_chewing,
      snuff_by_betel_quid,
      past_use_status,
      past_use_status_daily,
      smoke_in_home,
      smoke_in_work,
    });
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

  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="col-md-12">
          <h3 className="box-title">CORE: Tobacco Use</h3>
          <p>Now I am going to ask you some questions about tobacco use.</p>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Do you currently smoke any tobacco
                    products, such as cigarettes, cigars or pipes?
                  </label>
                  <select
                    onChange={handleTobaccoChange}
                    name="tobacco"
                    id="tobacco"
                    required
                    defaultValue={""}
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
                      Select an option
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="staffid">
                    <strong>2.</strong> Do you currently smoke tobacco products
                    daily?
                  </label>
                  <select
                    onChange={handleTbDailyUseChange}
                    name="tobacco"
                    id="tobacco"
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
                      Select an option
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
                  <label htmlFor="yearsinsch">
                    <strong>3.</strong> How old were you when you first started
                    smoking?
                  </label>
                  <input
                    required
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
                    onChange={handleUseDuration}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
                      Select an option
                    </option>
                    <option value="No formal schooling">In Years</option>
                    <option value="Less than primary  school">In Months</option>
                    <option value="Primary school completed">In Weeks</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>5.</strong> Enter Value
                  </label>
                  <input
                    required
                    onChange={handleUseDurationValue}
                    type="number"
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
                    name="stop_smoking"
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
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
                    onChange={handleAdviceByDoc}
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
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
                    onChange={handlePastUse}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
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
                    <strong>9.</strong> In the past, did you ever smoke daily?
                  </label>
                  <select
                    name="stop_advice"
                    required
                    onChange={handlePastUseDaily}
                    id="edulevel"
                    className="form-control"
                  >
                    <option value="" disabled selected="selected">
                      Select an option
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

        <div className="col-md-12">
          <h3 className="box-title">EXTENDED: Tobacco Use</h3>
          <p>Question:</p>
          <hr />
        </div>

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
                    onChange={handleAgeOfStop}
                    type="number"
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
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
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>12.</strong> Do you currently use any smokeless
                    tobacco products such as [snuff, chewing tobacco, betel]?
                  </label>
                  <select
                    className="form-control"
                    onChange={handleCurrentUsing}
                  >
                    <option value="" disabled selected="selected">
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
                    <strong>13.</strong> Do you currently use smokeless tobacco
                    products daily?
                  </label>
                  <select
                    className="form-control"
                    onChange={handleUurrentUsingSmokeless}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
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

        <div className="col-md-12">
          <h4 className="row">
            <strong>14.</strong>On average, how many times a day/week do you use
            …. (IF LESS THAN DAILY, RECORD WEEKLY)
          </h4>
          <p></p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(I)</strong> Snuff, by mouth
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyMouth(e,1)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(II).</strong> Frequency
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyMouth(e,2)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(III)</strong>No. Of Times
                  </label>
                  <input
                    onChange={(e) => handleSnuffbyMouth(e,3)}
                    type="number"
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
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(IV)</strong>Snuff, by nose
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyNose(e,1)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>(V)</strong> Frequency
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyNose(e,2)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                    onChange={(e) => handleSnuffbyNose(e,3)}
                    type="number"
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
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Chewing tobacco</label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyChewing(e,1)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Frequency</label>
                  <select
                    className="form-control"
                    onChange={(e) => handleSnuffbyChewing(e,2)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                    onChange={(e) => handleSnuffbyChewing(e,3)}
                    type="number"
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
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Betel, quid</label>
                  <select
                    className="form-control"
                    onChange={() => handleSnuffbyBetelQuid(1)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">Frequency</label>
                  <select
                    className="form-control"
                    onChange={() => handleSnuffbyBetelQuid(2)}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
                    </option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="yearsinsch">No. Of Times</label>
                  <input
                    onChange={() => handleSnuffbyBetelQuid(3)}
                    type="number"
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
                    className="form-control"
                    onChange={handlePastUseStatus}
                  >
                    <option value="" disabled selected="selected">
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
                    <strong>16.</strong> In the past, did you ever use smokeless
                    tobacco products such as [snuff, chewing tobacco, or betel]
                    daily?
                  </label>
                  <select
                    className="form-control"
                    onChange={handlePastUseStatusDaily}
                  >
                    <option value="" disabled selected="selected">
                      -- Select an option --
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

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    <strong>17.</strong> During the past 30 days, did someone
                    smoke in your home?
                  </label>
                  <select className="form-control" onChange={handleSmokeInHome}>
                    <option value="" disabled selected="selected">
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
                  <select className="form-control" onChange={handleSmokeInWork}>
                    <option value="" disabled selected="selected">
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
              onClick={handleBack}
              className="btn btn-danger btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="col-md-3">
            <button
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
    </div>
  );
}
