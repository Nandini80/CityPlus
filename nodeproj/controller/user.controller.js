// const path = require("path");
var userschema = require("../modal/user.schema");
var userColRef = userschema();
var webtoken = require("jsonwebtoken");

async function signup(req,resp)
{ 
   var obj = new userColRef(req.body);
   await obj.save().then((obj)=>{
    resp.send("Signed up succesfullyy");
   }).catch((err)=>{
    resp.send(err);
   });
}; 

async function login(req,resp)
{  
   const count = await userColRef.find({email:req.body.email}).count();
   if(count==0)
   {
      resp.json({status:false,message:"Invalid user id "});
      return ;
   }
   else 
   {
      var user =  await userColRef.findOne({email:req.body.email,pass:req.body.pass});
      if(user!=null)
      {
         var token = webtoken.sign({email:user.email,desig:user.desig},process.env.sec_key,{expiresIn:'1h'});
         resp.json({status:true,user,token,message:"Valid User"});
         return;
      }
      else
      {
        resp.json({status:false,message:"Invalid Password"});
        return ;
      }
   }
};

async function CurrentUser(req,resp)
{
   const count = await userColRef.find({email:req.email}).count();
   if(count==0)
   {
      resp.json({status:false,message:"Invalid user id "});
      return ;
   }
   else
   {
      var user =  await userColRef.findOne({email:req.email});
      resp.json({status:true,message:"OK user id",user});
      return ;
   }
};
module.exports ={signup,login,CurrentUser};