import React, {useRef} from 'react'
import logo from "./icon.png";
import jsPDF from 'jspdf';

export default function ResponsePDF({data}) {
    const doc = new jsPDF();

    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};


  return (
    <>
    <div id='pdf' ref={reportTemplateRef}>
        <div className='' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
            <img src={logo} style={{height: 100,width: 100}}/>
            <p>UNIVERSITY OF GHANA</p>
            <h3><strong>FRESHMEN'S MEDICALS</strong></h3>
        </div>
        <br/>
        <table className="table table-bordered table-striped">
            <thead style={{backgroundColor:'#F4F0EF'}}>
                <tr>
                    <th>Location and Date</th>
                    <th>Response</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Student / Staff ID</td>
                    <td>{data.user.student_id}</td>
                </tr>
                <tr>
                    <td>Residential/ Non-residential</td>
                    <td>{data.user.hall}</td>
                </tr>
                <tr>
                    <td>Residential Hall/ Address &GPS code</td>
                    <td>{data.user.hall}</td>
                </tr>
                <tr>
                    <td>Date of completion of the instrument</td>
                    <td>10417250</td>
                </tr>
            </tbody>
        </table>

        <table className="table table-striped">
            <thead style={{backgroundColor:'#F4F0EF'}}>
                <tr>
                    <th>Consent, Interview Language and Name</th>
                    <th>Response</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Consent has been read and obtained</td>
                    <td>{data.consent}</td>
                </tr>
                <tr>
                    <td>Interview Language  </td>
                    <td>{data.language}</td>
                </tr>
                <tr>
                    <td>Time of interview </td>
                    <td>{data.user.student_id}</td>
                </tr>
                <tr>
                    <td>Family Surname</td>
                    <td>10417250</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>10417250</td>
                </tr>
                <tr>
                    <td>Contact phone number where possible</td>
                    <td>10417250</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="col-md-3">
            <button
            onClick={handleGeneratePdf}
              className="btn btn-warning btn-block"
              style={{ cursor: "pointer", color: "white" }}
            >
              <i style={{ color: "white" }} className="fa fa-download"></i>{" "}
              Download PDF
            </button>
          </div>
    </>
  )
}
