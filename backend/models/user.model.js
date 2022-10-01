const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    fname: String,
    lname:String,
    cname:String,
    email:String,
    password:String,
    team: String,
    role:String,
    industry:String,
    via:String
})

const UserModel= mongoose.model("user",userSchema);


module.exports = { UserModel }