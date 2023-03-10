import React from 'react'
import topbg from "./login2.jpg";
import logo from "./icon.png";

export default function Header() {
  return (
    <div>
         <div className="row" style={{marginBottom: 10}}>
            <div
              className=""
              style={{
                width: "100%",
                backgroundImage: "url(" + topbg + ")",
                backgroundPosition: "top",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <img src={logo} />
              <h5 style={{ color: "white" }}>UNIVERSITY OF GHANA</h5>
              <h2 style={{ color: "white", fontWeight: "bold" }}>
                STAFF & STUDENT MEDICALS
              </h2>
            </div>
          </div>
    </div>
  )
}
