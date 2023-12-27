var mongoose = require("mongoose");
function GetProviderschema()
{
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: {type:String,required:true,unique:true,index:true}, //For unique id
        mobile:String,
        name:String,
        state:String,
        city:String,
        address:String,
        idProof:String,
        exp:String,
        expIn:String,
        shop:String,
        cat:String
    },{
        versionKey:false // to avoid __v field in table come by default 
    });
    
    var ProviderColRef= mongoose.model("Providerschema",colSchema);
    return ProviderColRef;
};
module.exports=GetProviderschema;