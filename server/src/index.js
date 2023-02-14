const express = require("express");
const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");

// app.use(express.json())
app.get("/crm", (req, res)=>{
  res.status(200).send("Test")
})

app.listen(3001)