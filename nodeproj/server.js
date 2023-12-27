var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var userrouter = require("./routers/user.router");
var clientrouter = require("./routers/client.router");
var providerrouter = require("./routers/provider.router");
var bp = require("body-parser");

var app = express();
var env = require("dotenv");
app.use("/uploads",express.static('uploads'));
var fileupload = require("express-fileupload");
app.use(fileupload());

env.config();

app.use(cors());
app.use(bp.urlencoded({extended:true}));
app.listen(2000,()=>{
    console.log("          SERVER STARTED            ");
});

var config = require("./config/dbConfig");
const dburl = config.dburl;

var dbCon = mongoose.connect(dburl).then(() => {
    console.log("***********Connected*************");
}).catch((err) => {
    console.log("****" + err.toString());
    process.exit();
});


app.use(express.json({extended:true})); //data will be converted into json first  

app.use("/user",userrouter);
app.use("/client",clientrouter);
app.use("/provider",providerrouter);