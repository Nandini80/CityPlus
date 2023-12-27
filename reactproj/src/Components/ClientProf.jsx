import axios from "axios";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Profile() 
{
  const [validated, setValidated] = useState(false);
  const [eml, getEml] = useState("");
  const [obj, doSetObj] = useState({
    email: "",
    mobile: "",
    name: "",
    state: "",
    city: "",
    address: "",
    pp: null,
    idProof: null
  });
  const [proof,setProof] = useState();
  const [profile,setProfile] = useState();

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

  //For prev of profile picture
  function changeProfile(pimg)
  {
    const reader = new FileReader();
    reader.onload=()=>{
      setProfile(reader.result);
    };
    reader.readAsDataURL(pimg);
  }

  //For prev of proof picture
  function changeProof(imgId)
  {
    const reader = new FileReader();
    reader.onload=()=>{
      setProof(reader.result);
    };
    reader.readAsDataURL(imgId);
  }

  // Taking inpout box values
  const doSetObjValue = (event) => {
    const { name, value } = event.target;
    doSetObj({ ...obj, [name]: value });
  };

  function SetPic(event)
  {
    var value = event.target.files[0];
    var {name} = event.target;
    doSetObj({ ...obj, [name]: value });

    if(name==="pp")
    {
      changeProfile(value);
    }
    else
    {
      changeProof(value);
    }
  }

  //axios request fire
  async function doSaveInfo() {
    var url = "http://localhost:2000/client/profile";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));
  };

  async function doUpdateInfo(){
    var url = "http://localhost:2000/client/doUpdate";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));
  }

  async function doFetchInfo(){
    var url = "http://localhost:2000/client/doFetch?email="+obj.email;
    var resp = await axios.post(url);
    // alert(JSON.stringify(resp.data));

    doSetObj({...obj,
      name:resp.data.name,
      mobile:resp.data.mobile,
      state:resp.data.state,
      city:resp.data.city,
      address:resp.data.address,
      pp:resp.data.pp,
      idProof:resp.data.idProof
    });
  };

  return (
    <div>
      <center>
        <h1>Client Profile</h1>
      </center>
      <Form validated={validated} onSubmit={handleSubmit} method="post">
        <Row className="mb-1">
          <Form.Group as={Col} md="4" className="mt-1 me-5" style={{ marginLeft: "300px" }}>
            <Form.Label>Email id</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="email"
              value={eml}
              onBlur={FillEmail} //For email 
              // disabled
            />
          </Form.Group>
          <Form.Group as={Col} className="mt-4 ms-5">
            <Button type="button" as={Col} onClick={doFetchInfo}>Fetch</Button>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full name"
              name="name"
              onChange={doSetObjValue} 
              value={obj.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ margin: "40px" }} controlId="validationCustom02">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="phone number"
              name="mobile"
              onChange={doSetObjValue}
              value={obj.mobile}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="5" className="ms-5" controlId="validationCustom03">
            <Form.Label>Adderss</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={doSetObjValue} value={obj.address} name="address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={doSetObjValue} value={obj.city} name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" onChange={doSetObjValue} value={obj.state} placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
 {/*==================How to set pic after click on fetch button======================  */}
        <Row className="mb-3">
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control
              required
              type="file"
              name="pp"
              onChange={SetPic}
              // value={JSON.stringify(obj.pp)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Id proof picture</Form.Label>
            <Form.Control
              required
              type="file"
              name="idProof"
              onChange={SetPic}
              // value={obj.idProof}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" style={{ marginLeft: "40px" }}>
            <img src={profile} name="ppic" alt="" height="100px" weight="100px"></img>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ marginLeft: "80px" }}> 
            <img src={proof} name="idpic" alt="" height="100px" weight="100px"></img>
          </Form.Group>

        </Row>
        <center>
          <Button md="1" as={Col} onClick={doSaveInfo}>Save</Button>
          <Button md="1" as={Col} className='ms-5' onClick={doUpdateInfo}>Update</Button>
        </center>
      </Form>
    </div>
  );
}

export default Profile;