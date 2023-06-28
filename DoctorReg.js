const mongoose = require("mongoose");


const doctorSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    phone:{
      type: Number,
      required: true,
      unique: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    password:{
      type: String,
      required: true
    }
})

const DoctorReg = new mongoose.model("DoctorReg", doctorSchema);
module.exports = DoctorReg;
