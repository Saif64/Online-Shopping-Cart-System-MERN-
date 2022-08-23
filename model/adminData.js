const mongoose = require("mongoose")


//create a schema
const adminSchema = new mongoose.Schema({
  username : {
    type     : String,
    required : true,
  },
  password : {
    type     : String,
    required : true,
  },
})



const adminData = mongoose.model("adminData", adminSchema)
module.exports = adminData
