import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { DistinctCatService,fetchProviders } from '../services/user';
import Cards from './Cards';

function FindserviceProvider() 
{
    var c1="";
    var c2="";
    const [jsonCat,setCategory] = useState([]); 
    const [jsonCity,setCity] = useState([]); 
    const [jsonAry,setAry] = useState([]);

    useEffect(()=>{
        console.log("Use effect called");
        doFetchCat();
    },[]); //Dependency ar  ray

    // console.log("comp rendered");

    const doFetchCat=async()=>{
        const res = await DistinctCatService();
        setCategory(res.data.user[0]);
        setCity(res.data.user[1]);
       };   

       const doSearch=async()=>{
        if(c1==="" || c2==="")
        {
          alert("Please select all the feilds");
        }
        else 
        {
          const resp = await fetchProviders({c1,c2});
          alert(JSON.stringify(resp));
          setAry(resp.data);
        }
       }

  return (
    <div>
       <center>
       <h1 className='mt-3'>Find Services</h1> 
       </center>
       <Form method="post">
        <Row className='offset-md-2'>
       <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>City</Form.Label>
            <select name="city" required onChange={(e)=>c1= e.target.value}>
              <option value="" disabled selected> Select </option>
              {
                jsonCity.map((obj)=> <option value={obj}>{obj}</option>)
              }
            </select>
          </Form.Group>

          <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Category</Form.Label>
            <select name="" required onChange={(e)=>c2=e.target.value}>
              <option value="" disabled selected> Select </option>
              {
                jsonCat.map((obj)=> <option value={obj}>{obj}</option>)
              }
            </select>
          </Form.Group>
          </Row>
          <Row>
          {
            jsonAry.map((obj)=>{
                return(
                    <Cards img={obj.idProof} Name={obj.name} Email={obj.email} Mobile={obj.mobile} City={obj.city} address={obj.address} pro={obj.cat}></Cards>
                )
            })
          }
          </Row>
          <Button md="1" as={Col} className='offset-md-6' variant="primary" onClick={doSearch}>Search</Button>
       </Form>
    </div>
  )
}

export default FindserviceProvider;