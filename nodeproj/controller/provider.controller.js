var providerSchema = require("../modal/provider.schema");
var ProviderColRef = providerSchema();
var path = require("path");

async function SaveProfile(req,resp)
{
   const idProof = req.files?.idProof;
   if(idProof)
   {
     var fpath2 = path.join(__dirname,"..","uploads",idProof.name);
     idProof.mv(fpath2);
   }

   req.body.idProof = idProof.name;

   var obj = new ProviderColRef(req.body);
   console.log(req.body);

   await obj.save().then((doc)=>{
    resp.send("Saved Successfullyyy!!");
   }).catch((err)=>{
    resp.send(err);
   });
}

async function updateProfile(req,resp)
{
  const {email,mobile,name,state,city,address,cat,exp,expIn,shop} = req.body;

   const idProof = req.files?.idProof;
   if(idProof)
   {
     var fpath2 = path.join(__dirname,"..","uploads",idProof.name);
     idProof.mv(fpath2);
   }
   const data ={name,mobile,state,city,address,cat,exp,expIn,shop};

   if(idProof)
   {
    data.idProof = idProof.name;
   }

  await ProviderColRef.updateOne({email},{$set:data }).then((result)=>{
    resp.send("Data updated");
  }).catch((err)=>{
    resp.send(err);
  }); 
};

async function fetchProfile(req,resp)
{
  console.log(req.query);
  await ProviderColRef.findOne({email:req.query.email}).then((doc)=>{
    resp.send(doc);
  }).catch((err)=>{
    resp.send(err.message);
  });
};

async function distServices(req,resp)
   {
      try{
       const user = await Promise.all([ ProviderColRef.distinct("cat"), ProviderColRef.distinct("city") ]);
       resp.json({user,status:true});
       return;
      }
      catch(err)
      {
        resp.status(500).json({message:"Something went wrong",status:false});
        console.log(err);
      }
  };

  async function fetchprovider(req,resp)
  {
    console.log(req.body);
    await ProviderColRef.find({city : req.body.c1,cat : req.body.c2}).then((res)=>{
      resp.send(res);
    }).catch((e)=>{
      console.log(e);
    })
  };

module.exports ={SaveProfile,updateProfile,fetchProfile,distServices,fetchprovider};