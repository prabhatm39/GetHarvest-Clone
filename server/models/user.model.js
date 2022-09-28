const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    fname: String,
    lname:String,
    cname:String,
    email:String,
    password:String
})

const UserModel= mongoose.model("user",userSchema);


module.exports={UserModel}