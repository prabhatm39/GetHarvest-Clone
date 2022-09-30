const {Router} = require("express");
const {ExpensesModel} = require("../controller/expenses.controller")
const expensesRouter = Router();

expensesRouter.get("/", async(req,res)=>{
    const {userID}= req.body;
    const expenses= await ExpensesModel.find({userId:userID});
    res.send(expenses)
})
expensesRouter.get("/:expensesid",async(req,res)=>{
    const {userID}= req.body;
    const {expensesid} = req.params;
    const expenses = await ExpensesModel.find({_id:expensesid, userId:userID});
    res.send(expenses)
})  

expensesRouter.get("/dates/:date",async(req,res)=>{
    const {userID}= req.body;
    const date= req.params;
    const expenses= await ExpensesModel.find({userId:userID , date:date});
    res.send(expenses)
})

expensesRouter.post("/create",async(req,res)=>{
    //const {userID}= req.body;
    const { date, project, category,notes, Amount } = req.body;
    const newexpenses= new ExpensesModel({date, project, category,notes, Amount, userId:userID})
    await newexpenses.save();
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

module.exports= {expensesRouter}