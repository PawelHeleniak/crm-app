const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/crm",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB Connect successfull");
}).catch((err)=>{
  console.log(err.message);
})