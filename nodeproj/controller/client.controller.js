var ClientSchema = require("../modal/client.schema");
var ClientColRef = ClientSchema();

var ClientSchemaForReq = require("../modal/client.schema2");
var ClientColRef2 = ClientSchemaForReq();

var path = require("path");

async function SaveProfile(req,resp)
{
   const pp = req.files?.pp;
   if(pp)
   {
     var fpath1 = path.join(__dirname,"..","uploads",pp.name); 
     pp.mv(fpath1);
   }

   const idProof = req.files?.idProof;
   if(idProof)
   {
     var fpath2 = path.join(__dirname,"..","uploads",idProof.name);
     idProof.mv(fpath2);
   }

   req.body.pp = pp.name;
   req.body.idProof = idProof.name;

   var obj = new ClientColRef(req.body);
   console.log(req.body);

   await obj.save().then((doc)=>{
    resp.send("Saved Successfullyyy!!");
   }).catch((err)=>{
    resp.send(err);
   });
}

async function updateProfile(req,resp)
{
  const {email,mobile,name,state,city,address} = req.body;
  const pp = req.files?.pp;
   if(pp)
   {
     var fpath1 = path.join(__dirname,"..","uploads",pp.name); 
     pp.mv(fpath1);
   }

   const idProof = req.files?.idProof;
   if(idProof)
   {
     var fpath2 = path.join(__dirname,"..","uploads",idProof.name);
     idProof.mv(fpath2);
   }
   const data ={name,mobile,state,city,address};

   if(pp)
   {
     data.pp = pp.name;
   }
   if(idProof)
   {
    data.idProof = idProof.name;
   }

  await ClientColRef.updateOne({email},{$set:data }).then((result)=>{
    resp.send("Data updated");
  }).catch((err)=>{
    resp.send(err);
  }); 
};

async function fetchProfile(req,resp)
{
  console.log(req.query);
  await ClientColRef.findOne({email:req.query.email}).then((doc)=>{
    resp.send(doc);
  }).catch((err)=>{
    resp.send(err.message);
  });
};

async function postReq(req,resp)
{
  var obj = new ClientColRef2(req.body);
  console.log(req.body);

  await obj.save().then((doc)=>{
   resp.send("Saved Successfullyyy!!");
  }).catch((err)=>{
   resp.send(err);
  });
};

async function distCity(req,resp)
   {
      try{
       const user = await ClientColRef.distinct("city");
       resp.json({user,status:true});
       return;
      }
      catch(err)
      {
        resp.status(500).json({message:"Something went wrong",status:false});
        console.log(err);
      }
  };

  async function fetchClient(req,resp)
  {
    console.log(req.body);
    await ClientColRef.find({city : req.body.c1}).then((res)=>{
      resp.send(res);
    }).catch((e)=>{
      console.log(e);
    })
  };

module.exports ={SaveProfile,updateProfile,fetchProfile,postReq,distCity,fetchClient };