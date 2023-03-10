import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { SurveyContext } from './App';
import LoadingModal from './LoadingModal';
import SubmitSurvey from './SubmitSurvey';

const url = "https://sts.ug.edu.gh/services/medical/getinfo";

export default function DemographicInfo({
  setstep,
  set_demographic,
  setreachstep ,
}) {
  const value = React.useContext(SurveyContext);
  const demographic = value.demographic;
  const student = value.user;
  const phoneno = value.phoneno
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading... Please wait...");
  const [sex, setSex] = useState(demographic != null ? demographic.sex : "");
  const [dob, setDob] = useState(demographic != null ? demographic.dob : "");
  const [yrsinsch, setYrsSch] = useState(demographic != null ? demographic.yrsinsch : "");
  const [edulevel, setEduLevel] = useState(demographic != null ? demographic.edulevel : "");
  const [ethnic, setEthnic] = useState(demographic != null ? demographic.ethnic : "");
  const [maricalsrtatus, setMaritalStatus] = useState(demographic != null ? demographic.maricalsrtatus : "");
  const [workstatus, setWorkStatus] = useState(demographic != null ? demographic.workstatus : "");
  const [household_age, setHouseHoldAge] = useState(demographic != null ? demographic.household_age : "");
  const [avg_earning_rate, setEarningRate] = useState(demographic != null ? demographic.avg_earning_rate : "");
  const [avg_earning, setEarning] = useState(demographic != null ? demographic.avg_earning : "");
  const [house_hold_income, setHouseHolincome] = useState(demographic != null ? demographic.house_hold_income : "");


  useEffect(() => {
    setGlobalState();
    setreachstep(1);
    setStudentInfo();
  }, [sex,
    dob,
    yrsinsch,
    edulevel,
    ethnic,
    maricalsrtatus,
    workstatus,
    household_age,
    avg_earning_rate,
    avg_earning,
    house_hold_income,])

  const setGlobalState = () => {
      set_demographic({
        sex,dob,yrsinsch,edulevel,ethnic,maricalsrtatus,workstatus,household_age,avg_earning_rate,avg_earning,house_hold_income,
      });
  }

  const setStudentInfo = () => {
    
   if(student != null){
    // alert(student.gender)
    if(student.gender == "M"){
      setSex("Male")
    }else if(student.gender == "F"){
      setSex("Female")
    }
    setDob(student.dob)
   }
  }



  const handleNext = (e) => {
    e.preventDefault();
    set_demographic({
      sex,
      dob,
      yrsinsch,
      edulevel,
      ethnic,
      maricalsrtatus,
      workstatus,
      household_age,
      avg_earning_rate,
      avg_earning,
      house_hold_income,
      phoneno
    });
    setstep(2);
  };



  const saveAndContinue = () => {
    setLoadingText("Saving & Exiting... Please wait...");
    setLoading(true);
    value.completed = 0;
    value.stage = 1;
    setTimeout(function(){
      SubmitSurvey(value).then(res => {
        setLoading(false);
        if(res.data.status == 'success'){
          // console.log('returned Data' ,res.data.data);
          Swal.fire("Success", 'Data successully saved. Remember to come back and complete it.', 'success');
        }else{
          Swal.fire("Error", 'Oops, somehting went wrong. Please try again later.', 'error');
          // console.log(error);
        }
        
      }).catch(error => {
        Swal.fire("Error", 'NETWORK ERROR: Oops, somehting went wrong. Please try again later.', 'error');
        console.log(error);
        setLoading(false);
      })

    }, 3000)
  };

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



  /**
   * 
   * 
   */
  const renderIncomeInputField = () => {
    if(avg_earning_rate  !== 'Refused'){
      return (
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="avg_earning"><strong>8.</strong> Enter Amount</label>
                  <input
                    onChange={handleEarning}
                    required
                    value={avg_earning}
                    type="number"
                    className="form-control"
                    id="avg_earning"
                    name="hse_count"
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
  return (
    <div>
      <form onSubmit={handleNext} >
        <div className="row">
          <div className="col-md-12">
            <strong style={{ textTransform: "uppercase" }}>
              Demographic Information
            </strong>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="row" style={{display:'none'}}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="choice">
                    <strong>1.</strong> Sex
                  </label>
                  <select
                    disabled
                    name="sex"
                    id="sex"
                    onChange={handleSexChange}
                    required
                    defaultValue={sex}
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
                    value={dob}
                    type="date"
                    disabled
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
                    <strong>1.</strong> In total, how many years have you spent
                    at school and in full-time study (excluding pre-school)/
                    Kindergaten?
                  </label>
                  <input
                    value={yrsinsch}
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
                    <strong>2.</strong> What is the highest level of education
                    you have completed?
                  </label>
                  <select
                    name="edulevel"
                    required
                    id="edulevel"
                    defaultValue={edulevel}
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
                    <strong>3.</strong> What is your ethnic group / racial group
                    / cultural subgroup background?
                  </label>
                  <select
                    onChange={handleEthicGroup}
                    name="ethnicgroup"
                    required
                    defaultValue={ethnic}
                    id="ethnicgroup"
                    className="form-control"
                  >
                    <option value="" disabled>Select an option</option>
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
                    <strong>4.</strong> What is your marital status?
                  </label>
                  <select
                    onChange={handleMaritalStatus}
                    name="ethnicgroup"
                    id="ethnicgroup"
                    required
                    defaultValue={maricalsrtatus}
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
                    <strong>5.</strong> Which of the following best describes
                    your main work status over the past 12 months?
                  </label>
                  <select
                  defaultValue={workstatus}
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
                    <strong>6.</strong> How many people older than 18 years,
                    including yourself, live in your household?
                  </label>
                  <input
                    onChange={handleHouseHoldAge}
                    required
                    value={household_age}
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
                    <strong>7.</strong> Taking the past year, can you tell me
                    what the average earnings of the household have been?
                  </label>
                  <select
                    required
                    defaultValue={avg_earning_rate}
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

              {renderIncomeInputField()}
              
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
                    <strong>9.</strong> Can you give an estimate of the annual
                    household income if I read some options to you? Is it
                  </label>
                  <select
                    required
                    name="emp_status"
                    defaultValue={house_hold_income}
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
              type="button"
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
