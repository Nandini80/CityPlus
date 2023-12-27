var express = require("express");
var controller = require("../controller/user.controller");
var app = express.Router();
var {jawth} = require("../middleware/auth"); //middleware

app.post("/Signup",controller.signup);
app.post("/Login",controller.login);
app.get("/CurrentUser",jawth,controller.CurrentUser);

module.exports=app;