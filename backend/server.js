const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./controller/user.controller");
const Authentication = require("./middleware/Authenticate");
const { expensesRouter } = require("./controller/expenses.controller");
require("dotenv").config();
const app= express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("Welcome!!!")
})

app.use("/user",userRouter);
app.use(Authentication);
app.use("/expenses",expensesRouter)

app.listen(PORT, async()=>{
  try{
    await connection;
    console.log("DB connected successfully");
  }
  catch(err){
    console.log("DB connection failed");
    console.log(err)
  }
  console.log(`server started at port no. ${PORT}`);
})
