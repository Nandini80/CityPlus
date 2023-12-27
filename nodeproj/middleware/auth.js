var webtoken = require("jsonwebtoken");

exports.jawth = (req,resp,next)=>
{
 const token = req.headers['authorization']; 
 if(token==undefined)
 {
   resp.json({status:false,message:"No token received"});
   return;
 }  
//  var ary = token.split(' ');
//  console.log(ary[1]);
 const isvalid = webtoken.verify(token,process.env.sec_key);

 console.log("valid = "+ JSON.stringify(isvalid));
 if(isvalid){
    const dectoken = webtoken.decode(token,process.env.sec_key);
   // const user = webtoken.decode(token);
    req.email = dectoken.email ;
    next();
 }
 else
 {
    resp.json({status:false,message:"Invalid token"});
    return;
 }
}