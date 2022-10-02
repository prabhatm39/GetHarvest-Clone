const {Router} = require("express");
const { ExpensesModel } = require("../models/expenses.model");
//const {ExpensesModel} = require("../controller/expenses.controller")

const expensesRouter = Router()

expensesRouter.get("/", async (req,res)=>{
    const {userID} = req.body;
     const expenses= await ExpensesModel.find({userId:userID});
    res.send(expenses)
})

expensesRouter.get("/:expensesid",async(req,res)=>{
    const {userID}= req.body;
    const {expensesid} = req.params;
    
    const expenses = await ExpensesModel.find({_id:expensesid, userId:userID});
    if(expenses){
        res.status(201).send(expenses)
    }else{
        res.status(404).send("Nahi hai")
    }
   
})  

expensesRouter.get("/dates/:date",async(req,res)=>{
    const {userID}= req.body;
    const date = req.params;
    const expenses = await ExpensesModel.find({userId:userID , date:date});
    if(expenses){
        res.status(201).send(expenses)
    }else{
        res.status(404).send("Nahi hai")
    }

})

expensesRouter.post("/create",async(req,res)=>{
    const {userID}= req.body;
    const { date, project, category,notes, amount } = req.body;
    const pleasehoja=  new ExpensesModel({date, project, category,notes, amount, userId:userID})
    await pleasehoja.save()
    res.send("expenses created successfully")
}) 

expensesRouter.put("/edit/:expensesid",async(req,res)=>{
    const {userID}= req.body;
    const {expensesid}= req.params;
    const update= await ExpensesModel.findOneAndUpdate({_id:expensesid, userId:userID},{...req.body});
    if(update){
        res.status(201).send("expenses updated")
    }else{
        res.status(404).send("expenses not found")
    }
})

expensesRouter.delete("/delete/:expensesid",async(req,res)=>{
    const {userID}= req.body;
    const {expensesid}= req.params;
    const deleteexpenses= await ExpensesModel.findOneAndDelete({_id:expensesid, userId:userID});
    if(deleteexpenses){
        res.status(201).send("deleted successfully")
    }else{
        res.status(404).send("no expenses found")
    }
});

module.exports = { expensesRouter }
