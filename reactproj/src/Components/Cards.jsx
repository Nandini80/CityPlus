import React from "react";
import cstyle from  "../Styling/card.module.css";


const Cards=(objProp)=>{
return(
    <>
 <div className={cstyle.outter}>
    <img src={`http://localhost:2000/uploads/${objProp.img}`}  width="100%" height="180" />
      <div className="ms-2 mt-2">
        Name : {objProp.Name}
        <br />
        Email : {objProp.Email}
     <br />
        Contact : {objProp.Mobile}
     <br />
        City : {objProp.City}
    <br />
        Address : {objProp.address}
     <br />
        Profession : {objProp.pro}
     <br />
     </div>
 </div>
 </>
)};

export default Cards;