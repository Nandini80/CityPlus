var express=require("express");
var jsonwebtoken= require("jsonwebtoken");
var dotenv = require("dotenv");

dotenv.config(); // adding sec_key in process.env object
var app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true})); 

app.post("/login",(req,resp)=>{
    console.log(process.env.sec_key);
    var {email,pass}= req.body;
    console.log(email,pass);
    try{
        //creating json web token
        var token = jsonwebtoken.sign({email,pass},process.env.sec_key,{expiresIn:60*2});//2 min
        resp.json({message:"Successful",token:token});
    }

    catch(err)
    {
        resp.json({message:"Server error ",error:err.message});
    }
});

app.post("/decode",(req,resp)=>{
    try{
        var token=req.body.token;
        var decordedToken = jsonwebtoken.decode(token,process.env.sec_key);
        resp.json({message : "Successfully decorded ",data : decordedToken});
    }
    catch(err)
    {
        resp.json({message: "Server error",error:err});
    }
});

app.post("/verify",(req,resp)=>{
  try{
    var token =req.boby.token;
    var verifiedToken = jsonwebtoken.verify(token,process.env.sec_key);
    resp.json({message:"Successfullyy Verified",data :verifiedToken});
  }
  catch(err)
  {
    resp.json({message:"Token expired ",error:err});
  }
});

app.listen(2000,function(){
    console.log("     SERVER STARTED       ");
});