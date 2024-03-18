const mongoose = require("mongoose");

module.exports.connectDB=async(url)=>{
  return mongoose.connect(url)
}




