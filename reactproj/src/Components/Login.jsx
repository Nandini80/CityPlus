import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Header_Navbar from './Header_Navbar';
function Login() 
{
  const navigate = useNavigate();
  const [obj,dologin] =useState({email:"",pass:""}); 
  const [errobj, doUpdateErr] = useState({ email: "", pass: "" })
 
  const doUpdatetxt = (event)=>
  {
     var {name,value} = event.target;
     dologin({...obj,[name]: value});
  }

  const doCheck = (event) => {
    var { name, value } = event.target;
    if (name === "email" && value.trim() == "") {
      doUpdateErr({ ...errobj, ["email"]: "Please Enter your Email " });
      return;
    }

    if (name === "pass" && value.trim() == "") {
      doUpdateErr({ ...errobj, ["pass"]: "Please Enter your Password" });
      return;
    }

    if (name === "email" && value.trim() !== "") {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        doUpdateErr({ ...errobj, ["email"]: "Invalid email format" });
      } else {
        doUpdateErr({ ...errobj, ["email"]: "Correct" });
      }
    }
    if (name === "pass" && value.trim() !== "") { 
      const zxcvbn = require('zxcvbn');
      const passwordStrength = zxcvbn(value);
      if (passwordStrength.score < 3) {
        doUpdateErr({ ...errobj, ["pass"]: "Weak password. Please use a stronger one." });
      } else {
        doUpdateErr({ ...errobj, ["pass"]: "Correct" });
      }
      
    }
  }

  const doSubmit=async ()=>{
    //For post
     var url = "https://cityplusbackend.onrender.com/user/Login"; 
     var resp = await axios.post(url,obj);
    //  alert(JSON.stringify(resp.data));
     if(resp.data.status===false)
     {
      alert(resp.data.message);
     }
     else
     {
      //  alert(resp.data.message);
       localStorage.setItem("token",resp.data.token);//add key value pair in browser memory
       localStorage.setItem("user_email",resp.data.user.email);
       if(resp.data.user.desig==="client")
       {
        navigate("/client");
       }
      else
      {
        navigate("/provider");
      }
     }
  };

  return (
    <>
    <Header_Navbar>

    </Header_Navbar>
    <div className="signup-container mt-5">
      <form method="post">
        <center>
          <h2>Login here</h2>
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
          <button value="button" onClick={doSubmit}>Login</button>
        </center>
      </form>
    </div></>
  );
}

export default Login;
