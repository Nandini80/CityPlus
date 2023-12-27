var express = require("express");
var app = express.Router();
var controller = require("../controller/client.controller");

app.post("/profile",controller.SaveProfile);
app.post("/doUpdate",controller.updateProfile);
app.post("/doFetch",controller.fetchProfile);
app.post("/PostReq",controller.postReq);
app.get("/distinct-city",controller.distCity);
app.post("/fetchClient",controller.fetchClient);

module.exports = app;