const mongoose = require("mongoose");


const conn1 = mongoose.connect("mongodb://0.0.0.0:27017/patientsDB")
.then(() => {
  console.log('connection succesful');
}).catch((e) => {
  console.log(e);
})
