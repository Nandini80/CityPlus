import React, { useState } from 'react';
import axios from 'axios';
import '../Styling/SignupCSS.css';
import { signupservice } from '../services/user';
import Header_Navbar from './Header_Navbar';

function Signup() {
  const [errobj, doUpdateErr] = useState({ email: "", pass: "", desig: "" });

  const doCheck = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";
    
    if (name === "email" && value.trim() === "") {
      errorMessage = "Please Enter your Email";
    } else if (name === "pass" && value.trim() === "") {
      errorMessage = "Please Enter your Password";
    } else if (name === "email" && value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorMessage = emailRegex.test(value) ? "Correct" : "Invalid email format";
    } else if (name === "pass" && value.trim() !== "") {
      const zxcvbn = require('zxcvbn');
      const passwordStrength = zxcvbn(value);
      errorMessage = passwordStrength.score < 3 ? "Weak password. Please use a stronger one." : "Correct";
    }

    doUpdateErr({ ...errobj, [name]: errorMessage });
  };

  const handle_SignUp_Submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    try {
      const res = await signupservice(formdata);
      alert(JSON.stringify(res.data));
    } catch (error) {
      console.error("Signup failed:", error);
      alert("An error occurred during signup. Please try again later.");
    }
  };

  return (
    <>
      <Header_Navbar />
      <div className="signup-container mt-4">
        <form method="post" id="signup-form" onSubmit={handle_SignUp_Submit}>
          <center>
            <h2>Signup here</h2>
            <div className="input-container">
              <label>Email:</label>
              <input type="email" name="email" onChange={doCheck} required />
              <p>{errobj.email}</p>
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input type="password" name="pass" onChange={doCheck} required />
              <p>{errobj.pass}</p>
            </div>
            <div className="input-container">
              <label>Designation:</label>
              <select name="desig"  required defaultValue="">
                <option value="" disabled>Select</option>
                <option value="client">Client</option>
                <option value="provider">Service Provider</option>
              </select>
              <p>{errobj.desig}</p>
            </div>
            <button value="Submit" form="signup-form">Sign Up</button>
          </center>
        </form>
      </div>
    </>
  );
}

export default Signup;
