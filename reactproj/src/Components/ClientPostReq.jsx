import axios from "axios";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ClientPostReq() 
{
  const [validated, setValidated] = useState(false);
  const [eml, getEml] = useState("");
  const [obj, doSetObj] = useState({
    email: "",
    task:"",
    contact:"",
    date:"",
    cat:"",
    site:""
  });

  //taking email from localstorage
  useEffect(() => {
    var mail=localStorage.getItem("user_email");
    getEml(mail);
  }, []);

  // Bootstrap validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const FillEmail=()=>{
    doSetObj({ ...obj, ["email"]: eml});
  }

  // Taking inpout box values
  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  };

//   axios request fire
  async function doSaveInfo() 
  {
    var url = "http://localhost:2000/client/PostReq";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));
  };

  return (
    <div>
      <center className="mt-4">
        <h1>Post Requierments</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post">
        <Row className="mb-1">
          <Form.Group as={Col} md="7" className="mt-3" style={{ marginLeft: "310px" }}>
            <Form.Label>Email id</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="email"
              value={eml}
              disabled
            />
          </Form.Group>
        </Row>

        <Row className="mb-3 offset-md-2">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
          <Form.Label>Category</Form.Label>
            <select name="cat" required >
              <option value="" disabled selected> Select </option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="vendor">Vendor</option>
            </select>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ margin: "40px" }} controlId="validationCustom02">
            <Form.Label>Task Details</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task"
              name="task"
              onChange={doSetObjValue}
              onBlur={FillEmail}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 ms-5">
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03">
            <Form.Label>Up to date</Form.Label>
            <Form.Control type="date" placeholder="date" onChange={doSetObjValue} name="date" required />
            <Form.Control.Feedback type="invalid">
              Please provide date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Site of Task" onChange={doSetObjValue} name="site" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Site.
            </Form.Control.Feedback>
          </Form.Group>
      </Row>

      <Row className="mb-3 mt-3 offset-md-3">
          <Form.Group as={Col} md="8" className="ms-5" controlId="validationCustom03">
            <Form.Label>Contact details</Form.Label>
            <Form.Control type="text" placeholder="Contact" onChange={doSetObjValue} name="contact" required />
            <Form.Control.Feedback type="invalid">
              Please provide contact details.
            </Form.Control.Feedback>
          </Form.Group>
      </Row>

      
        <center>
          <Button md="1" as={Col} onClick={doSaveInfo}>Save</Button>
          {/* <Button md="1" as={Col} className='ms-5' onClick={doUpdateInfo}>Update</Button> */}
        </center>
      </Form>
    </div>
  );
}

export default ClientPostReq;