const mongoose = require("mongoose")

const expensesSchema = mongoose.Schema({
    date:String,
    project:String,
    category:String,
    notes:String,
    Amount:Number,
    userId:String  
})

const ExpensesModel = mongoose.model("expense", expensesSchema)

module.exports = {ExpensesModel}
