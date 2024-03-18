import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Header_Navbar from './Header_Navbar';

function Login() {
  const navigate = useNavigate();
  const [errobj, doUpdateErr] = useState({ email: "", pass: "" });

  const doCheck = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";
    
    if (name === "email") {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim() === "") {
        errorMessage = "Please Enter your Email";
      } else if (!emailRegex.test(value)) {
        errorMessage = "Invalid email format";
      }
    } 

    doUpdateErr({ ...errobj, [name]: errorMessage });
  };

  const handle_Login_Submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const url = "/user/Login";
    try {
      const resp = await axios.post(url, formdata);
      if (resp.data.status === false) {
        alert(resp.data.message);
      } else {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user_email", resp.data.user.email);
        navigate(resp.data.user.desig === "client" ? "/client" : "/provider");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
      <Header_Navbar />
      <div className="signup-container mt-5">
        <form method="post" id="login-form" onSubmit={handle_Login_Submit}>
          <center>
            <h2>Login here</h2>
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
            <button value="button" form="login-form">Login</button>
          </center>
        </form>
      </div>
    </>
  );
}

export default Login;