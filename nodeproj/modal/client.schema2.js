var mongoose = require("mongoose");
function GetClientschema2()
{
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: String, 
        cat:String,
        task:String,
        date:String,
        site:String,
        contact:String
    });
    var ClientColRef2= mongoose.model("Clientschema2",colSchema);
    return ClientColRef2;
};
module.exports=GetClientschema2;