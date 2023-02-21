import React from "react";

export default function Diabetes({ setstep }) {
  const handleNext = () => {
    setstep(3);
  };

  const handleBack = () => {
    setstep(1);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <strong style={{ textTransform: "uppercase" }}>
            CORE: History of Diabetes
          </strong>
          <p>Questions:</p>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>1.</strong> Have you ever had your blood sugar
                  measured by a doctor or other health worker?
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>2.</strong> Have you ever been told by a doctor or
                  other health worker that you have raised blood sugar or
                  diabetes?
                </label>
                <select name="sex" id="sex" className="form-control">
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
                  <strong>3.</strong> Were you first told in the past 12 months?
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>4.</strong> In the past two weeks, have you taken any
                  drugs (medication) for diabetes prescribed by a doctor or
                  other health worker?
                </label>
                <select name="sex" id="sex" className="form-control">
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
                  <strong>5.</strong> Are you currently taking insulin for
                  diabetes prescribed by a doctor or other health worker?
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>6.</strong> Have you ever seen a traditional healer
                  for diabetes or raised blood sugar?
                </label>
                <select name="sex" id="sex" className="form-control">
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
                  <strong>5.</strong> Are you currently taking any herbal or
                  traditional remedy for your diabetes?
                </label>
                <select name="sex" id="sex" className="form-control">
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
        <div className="col-md-2">
          <button
            className="btn btn-danger btn-block"
            style={{ cursor: "pointer", color: "white" }}
          >
            <i className="fa fa-arrow-left"></i> Back
          </button>
        </div>
        <div className="col-md-3">
          <button
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
    </div>
  );
}