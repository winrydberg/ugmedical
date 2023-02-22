import React from 'react'

export default function FinalStage() {
  return (
    <div>
      <div className="row">
        <div
          className="col-md-12"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: "#2da44e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <i className="fa fa-check fa-3x" style={{ color: "white" }}></i>
          </div>
          <p>
            <strong>END:</strong> Thank you for completing the survey. You can
            go ahead and download your responses in PDF.
          </p>

          <div className="col-md-3">
            <button
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i style={{ color: "white" }} className="fa fa-download"></i>{" "}
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
