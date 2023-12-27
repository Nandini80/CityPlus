var mongoose = require("mongoose");
function GetReactUserschema()
{
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        //Same name as given in collection/signup page
        email: {type:String,required:true,unique:true,index:true}, //For unique id
        pass:String,
        desig:String,
        dos:{type:Date,default:Date.now},
    },{
        versionKey:false // to avoid __v field in table come by default 
    });
    
    var userColRef= mongoose.model("userschema",colSchema);
    return userColRef;
};
module.exports=GetReactUserschema;