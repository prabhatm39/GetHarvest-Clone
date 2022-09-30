const express= require("express");
const cors= require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./controller/user.controller");
const Authentication = require("./middleware/Authenticate");
const { ProjectRouter } = require("./controller/project.controller");
const { clientRoute } = require("./controller/client.controller");
require("dotenv").config();
const app= express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("Welcome!!!")
})

app.use("/user",userRouter );
app.use(Authentication);
app.use("/project",ProjectRouter);
app.use("/client", clientRoute);
app.listen(PORT, async()=>{
  try{
    await connection;
    console.log("DB connected successfully");
  }
  catch{
    console.log("DB connection failed");
  }
  console.log(`server started at port no. ${PORT}`);
})