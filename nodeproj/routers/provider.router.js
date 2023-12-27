var express = require("express");
var app = express.Router();
var controller = require("../controller/provider.controller");
// var {jawth} = require("../middleware/auth");

app.post("/profile",controller.SaveProfile);
app.post("/doUpdate",controller.updateProfile);
app.post("/doFetch",controller.fetchProfile);
app.get("/distinct-services",controller.distServices);
app.post("/fetchprovider",controller.fetchprovider);

module.exports = app;