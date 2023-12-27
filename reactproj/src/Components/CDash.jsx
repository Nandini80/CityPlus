import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PDashCSS.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CDash() {
  var [eml, getEml] = useState("");
  var [obj, setobj] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getEml(localStorage.getItem("user_email"));
    if (token) {
      getUser();
    }
    else 
      navigate("/");
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:2000/user/CurrentUser",
      {
        headers: {
          'Authorization': token
        }
      });
    if (res.data.status === false) {
      alert(res.data.message);
    }
    else {
      setobj(res.data.user);
    }
  }

  const doLogout = ()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  }

  const doNavigate = (btnId) => {
    if (btnId == 1)
      navigate('/cProfile');
    else if (btnId == 2)
      navigate('/cRequire');
    else if(btnId==3)
    navigate('/ServiceP');
  };

  return (
    <div>
      <center>
        <h1 className='mt-3 offset-md-4'>WELCOME {eml}
        <Button variant="primary" id="logout" name="logout" className='offset-md-6' onClick={doLogout}>Logout</Button> </h1>
      </center>
      <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/profile.jpg" />
          <Card.Body>
            <Card.Title><center>Profile Page</center></Card.Title>
            <center> <Button variant="primary" id="profile" name="profile" onClick={() => doNavigate(1)}>Click here</Button></center>
          </Card.Body>
        </Card>
      </div>
      <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/s6.jpg" height="280px"/>
          <Card.Body>
            <Card.Title><center>Requiremnts</center></Card.Title>
            <center> <Button variant="primary" id="req" name="req" onClick={() => doNavigate(2)}>Click here</Button></center>
          </Card.Body>
        </Card>
      </div>
      <div className='cards'>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="pics/s8.jpg" height="280px"/>
          <Card.Body>
            <Card.Title><center>Serach Vendors</center></Card.Title>
            <center> <Button variant="primary" id="req" name="req" onClick={() => doNavigate(3)}>Click here</Button></center>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default CDash;