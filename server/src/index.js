const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const {PORT} = require("./config/config");

//db  
require("./config/database")

//routers
const userRouter = require("./api/routers/users");
app.use("/user", userRouter);

//server
app.listen(PORT, function(){
  console.log(`Serwer słucha... ${PORT}`);
});