const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
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



const PatientReg = new mongoose.model("PatientReg", patientSchema);
module.exports = PatientReg;
