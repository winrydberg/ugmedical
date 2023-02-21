import React from "react";

export default function GenderScreening({ setstep }) {
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
            CORE (for women only): Cervical Cancer Screening
          </strong>
          <p>
            The next question asks about cervical cancer prevention. Screening
            tests for cervical cancer prevention can be done in different ways,
            including Visual Inspection with Acetic Acid/vinegar (VIA), pap
            smear and Human Papillomavirus (HPV) test. VIA is an inspection of
            the surface of the uterine cervix after acetic acid (or vinegar) has
            been applied to it. For both pap smear and HPV test, a doctor or
            nurse uses a swab to wipe from inside your vagina, take a sample and
            send it to a laboratory. It is even possible that you were given the
            swab yourself and asked to swab the inside of your vagina. The
            laboratory checks for abnormal cell changes if a pap smear is done,
            and for the HP virus if an HPV test is done.:
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
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
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
                  <strong>(II).</strong> Date of last screening
                </label>
                <input
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
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
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
                  <strong>(II).</strong> Date of last screening
                </label>
                <input
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
                <select name="sex" id="sex" className="form-control">
                  <option value="">--Select an option--</option>
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
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
            className="btn btn-success btn-block"
            style={{ cursor: "pointer" }}
          >
            <i className="fa fa-send"></i> Submit
          </button>
        </div>
      </div>
    </div>
  );
}
