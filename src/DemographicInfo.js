import React, {useState} from 'react'

export default function DemographicInfo({ setstep }) {

  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [yrsinsch, setYrsSch] = useState("");
  const [edulevel, setEduLevel] = useState("");
  const [ethnic, setEthnic] = useState("");
  const [maricalsrtatus, setMaritalStatus] = useState("");
  const [workstatus, setWorkStatus] = useState("");
  const [household_age, setHouseHoldAge] = useState("");
  const [avg_earning_rate, setEarningRate] = useState("");
  const [avg_earning, setEarning] = useState("");
  const [house_hold_income, setHouseHolincome] = useState("");

  const handleNext = () => {
    console.log(sex, dob, house_hold_income, avg_earning, avg_earning_rate);
    setstep(2);
  };

  const saveAndContinue = () => {
    console.log(sex, dob, house_hold_income, avg_earning, avg_earning_rate);
  }

  const handleSexChange = (e) => setSex(e.target.value);
  const handleDOBChange = (e) => setDob(e.target.value);
  const handleYrsInSchChange = (e) => setYrsSch(e.target.value);
  const handleHighestEduLevel = (e) => setEduLevel(e.target.value);
  const handleEthicGroup = (e) => setEthnic(e.target.value);
  const handleMaritalStatus = (e) => setMaritalStatus(e.target.value);
  const handleWorkStatus = (e) => setWorkStatus(e.target.value);
  const handleHouseHoldAge = (e) => setHouseHoldAge(e.target.value);
  const handleEarningRate = (e) => setEarningRate(e.target.value);
  const handleEarning = (e) => setEarning(e.target.value);
  const handleHouseIncome = (e) => setHouseHolincome(e.target.value);

  
  
  return (
    <div>
      <form onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Sex
                  </label>
                  <select
                    name="sex"
                    id="sex"
                    onChange={handleSexChange}
                    required
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="staffid">
                    {" "}
                    <strong>2.</strong> Date Of Birth
                  </label>
                  <input
                    type="date"
                    required
                    onChange={handleDOBChange}
                    className="form-control"
                    id="dob"
                    name="dob"
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
                    <strong>3.</strong> In total, how many years have you spent
                    at school and in full-time study (excluding pre-school)/
                    Kindergaten?
                  </label>
                  <input
                    required
                    type="number"
                    onChange={handleYrsInSchChange}
                    className="form-control"
                    id="yearsinsch"
                    name="yearsinsch"
                  />
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="edulevel">
                    <strong>4.</strong> What is the highest level of education
                    you have completed?
                  </label>
                  <select
                    name="edulevel"
                    required
                    id="edulevel"
                    onChange={handleHighestEduLevel}
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="No formal schooling">
                      No formal schooling
                    </option>
                    <option value="Less than primary  school">
                      Less than primary school
                    </option>
                    <option value="Primary school completed">
                      Primary school completed
                    </option>
                    <option value="Secondary school completed">
                      Secondary school completed
                    </option>
                    <option value="High school completed">
                      High school completed
                    </option>
                    <option value="College/University completed">
                      College/University completed
                    </option>
                    <option value="Post graduate degree">
                      Post graduate degree
                    </option>
                    <option value="Refused">Refused</option>
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
                  <label htmlFor="edulevel">
                    <strong>5.</strong> What is your ethnic group / racial group
                    / cultural subgroup background?
                  </label>
                  <select
                    onChange={handleEthicGroup}
                    name="ethnicgroup"
                    required
                    id="ethnicgroup"
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="Akan">Akan</option>
                    <option value="Ga">Ga</option>
                    <option value="Ewe">Ewe</option>
                    <option value="Fante">Fante</option>
                    <option value="Others">Others</option>

                    <option value="Refused">Refused</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="yearsinsch">
                    {" "}
                    <strong>6.</strong> What is your marital status?
                  </label>
                  <select
                    onChange={handleMaritalStatus}
                    name="ethnicgroup"
                    id="ethnicgroup"
                    required
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="Never married">Never married</option>
                    <option value="Currently married">Currently married</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Cohabitating">Cohabitating</option>
                    <option value="Refused">Refused</option>
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
                  <label htmlFor="edulevel">
                    <strong>7.</strong> Which of the following best describes
                    your main work status over the past 12 months?
                  </label>
                  <select
                    onChange={handleWorkStatus}
                    name="emp_status"
                    required
                    id="emp_status"
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="Government employee">
                      Government employee
                    </option>
                    <option value="Non-government employee">
                      Non-government employee
                    </option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Non-paid">Non-paid</option>
                    <option value="Student">Student</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Retired">Retired</option>
                    <option value="Unemployed (able to work)">
                      Unemployed (able to work)
                    </option>
                    <option value="Unemployed (unable to work)">
                      Unemployed (unable to work)
                    </option>

                    <option value="Refused">Refused</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="hse_count">
                    <strong>8.</strong> How many people older than 18 years,
                    including yourself, live in your household?
                  </label>
                  <input
                    onChange={handleHouseHoldAge}
                    required
                    type="number"
                    className="form-control"
                    id="hse_count"
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
                  <label htmlFor="edulevel">
                    <strong>9.</strong> Taking the past year, can you tell me
                    what the average earnings of the household have been?
                  </label>
                  <select
                    required
                    onChange={handleEarningRate}
                    name="emp_status"
                    id="emp_status"
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="Per Week">Per Week</option>
                    <option value="Per Month">Per Month</option>
                    <option value="Per Year">Per Year</option>
                    <option value="Refused">Refused</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="avg_earning">
                    {" "}
                    <strong>10.</strong>Enter Amount
                  </label>
                  <input
                    onChange={handleEarning}
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
                  <label htmlFor="edulevel">
                    <strong>11.</strong> Can you give an estimate of the annual
                    household income if I read some options to you? Is it
                  </label>
                  <select
                    required
                    name="emp_status"
                    onChange={handleHouseIncome}
                    id="emp_status"
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="<= Quintile (Q) 1">
                      Less Than Quintile (Q) 1
                    </option>
                    <option value="More than Quintile (Q) 1, Less Than Q2">
                      Per Month
                    </option>
                    <option value="More than Quintile Q2, Less Than Q3">
                      More than Q2, Less Q3
                    </option>

                    <option value="More than Quintile Q3, Less Than Q4">
                      More than Quintile Q3, Less Than Q4
                    </option>

                    <option value="More than Q 4">More than Q 4</option>
                    <option value="Don't Know">Don't Know</option>
                    <option value="Refused">Refused</option>
                  </select>
                  {/* <span style="color:red;font-style:italic"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-3">
            <button
              type='button'
              onClick={() => saveAndContinue()}
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
