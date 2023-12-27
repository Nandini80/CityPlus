var mongoose = require("mongoose");
function GetClientschema()
{
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: {type:String,required:true,unique:true,index:true}, //For unique id
        mobile:String,
        name:String,
        state:String,
        city:String,
        address:String,
        pp:String,
        idProof:String
    },{
        versionKey:false // to avoid __v field in table come by default 
    });
    
    var ClientColRef= mongoose.model("Clientschema",colSchema);
    return ClientColRef;
};
module.exports=GetClientschema;