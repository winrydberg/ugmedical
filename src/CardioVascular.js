import React from "react";

export default function CardioVascular({ setstep }) {
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
            CORE: CORE: History of Cardiovascular Diseases
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
                  <strong>1.</strong> Have you ever had a heart attack or chest
                  pain from heart disease (angina) or a stroke (cerebrovascular
                  accident or incident)?
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
                  <strong>2.</strong> Are you currently taking aspirin regularly
                  to prevent or treat heart disease?
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
                  <strong>3.</strong> Are you currently taking statins
                  (Lovastatin/Simvastatin/Atorvastatin or any other statin)
                  regularly to prevent or treat heart disease?
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
          <strong style={{ textTransform: "uppercase" }}>
            CORE: Lifestyle Advice
          </strong>
          <p>Questions:</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>4.</strong> During the past 12 months, have you
                  visited a doctor or other health worker?
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

      <p>
        <strong>5.</strong> During any of your visits to a doctor or other
        health worker in the past 12 months, were you advised to do any of the
        following?
      </p>

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(I).</strong> Quit using tobacco or don’t start
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(II).</strong> Reduce salt in your diet
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(III).</strong> Eat at least five servings of fruit
                  and/or vegetables each day
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(IV).</strong> Reduce fat in your diet
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(V).</strong> Start or do more physical activity
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(VI).</strong> Maintain a healthy body weight or lose
                  weight
                </label>
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {/* <span style="color:red;font-style:italic"></span> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="choice">
                  <strong>(VII).</strong> Reduce sugary beverages in your diet
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
