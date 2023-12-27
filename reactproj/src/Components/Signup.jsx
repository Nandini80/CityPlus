import React, { useState } from 'react';
import axios from 'axios';
import '../Styling/SignupCSS.css';  
import { signupservice } from '../services/user';

function Signup() {
  const [obj, dosignup] = useState({ email: "", pass: "", desig: "" });
  const [errobj, doUpdateErr] = useState({ email: "", pass: "", desig: "" })

  const doUpdatetxt = (event) => {
    var { name, value } = event.target;
    dosignup({ ...obj, [name]: value });
  };

  const doCheck = (event) => {
    var { name, value } = event.target;
    if (name === "email" && value == "") {
      doUpdateErr({ ...errobj, ["email"]: "Please Enter your Email " });
      return;
    }

    if (name === "pass" && value == "") {
      doUpdateErr({ ...errobj, ["pass"]: "Please Enter your Password" });
      return;
    }

    if (name === "desig" && value == "") {
      doUpdateErr({ ...errobj, ["desig"]: "Please Enter your Designation" });
      return;
    }

    if (name === "pass" && value != "") {
      doUpdateErr({ ...errobj, ["pass"]: "Correct" });
    }

    if (name === "email" && value != "") {
      doUpdateErr({ ...errobj, ["email"]: "Correct" });
    }

    if (name === "desig" && value != "") {
      doUpdateErr({ ...errobj, ["desig"]: "Correct" });
    }
  }

  // const doSign = async () => {
  //   var url = "http://localhost:2000/user/Signup";
  //   var resp = await axios.post(url,{
  //     email :obj.email,
  //     pass: obj.pass,
  //     desig:obj.desig
  //   });
  //   alert(JSON.stringify(resp.data));
  // }; 
  
     const doSign=async()=>{
      const res = await signupservice(obj);
      alert(JSON.stringify(res.data));
     }

  return (
    <div className="signup-container mt-4">
      <form method="post">
        <center>
          <h2>Signup here</h2>
          <div className="input-container">
            <label>Email:</label>
            <input type="email" name="email" onChange={doUpdatetxt} onBlur={doCheck} required />
            <p>{errobj.email}</p>
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input type="password" name="pass" onChange={doUpdatetxt} onBlur={doCheck} required />
            <p>{errobj.pass}</p>
          </div>
          <div className="input-container">
            <label>Designation:</label>
            <select name="desig" onChange={doUpdatetxt} onBlur={doCheck} required >
              <option value="" disabled selected> Select </option>
              <option value="client">Client</option>
              <option value="provider">Service Provider</option>
            </select>
            <p>{errobj.desig}</p>
          </div>
          <button value="Submit" onClick={doSign}>Sign Up</button>
        </center>
      </form>
    </div>
  );
}

export default Signup;