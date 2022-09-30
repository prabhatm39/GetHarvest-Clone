const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/user.model");
const passport = require("../config/googleauth.js")
const userRouter = Router();



userRouter.post("/signup",async(req,res)=>{
    const {fname,lname,cname,email,password}= req.body;
    const user= await UserModel.findOne({email});
    if(user){
        res.status(409).send("user already register")
    }else{
        bcrypt.hash(password,6).then(async(hash)=>{
            const newUser= new UserModel({
                fname,
                lname,
                cname,
                email,
                password: hash
            });
            await newUser.save();
            res.status(200).send("registration successful")
        }).catch((err)=> res.status(500).send("something went wrong"))
    }
})

userRouter.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));
userRouter.get( '/auth/google/callback',
    passport.authenticate( 'google', {failureRedirect: '/user/abc' , session:false}),
    function(req,res){
        console.log("respone")
        res.redirect("/")
    }
    );
userRouter.get("/abc",(req,res)=>{
    res.send("abc")
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}= req.body;
    const user= await UserModel.findOne({email});
    if(user){
    const hash= user.password
    bcrypt.compare(password,hash).then((result)=>{
        if(result){
            const token= jwt.sign({userID:user._id}, process.env.SECRET_KEY,{expiresIn:'1h'});
            res.status(200).send({"message":"Login Success" , "token": token});
        }else{
            res.status(501).send("invalid credentials")
        }
    }).catch((err)=> res.status(500).send("something went wrong"))
    }else{
        res.status(404).send("no user found")
    }   
})
userRouter.put("/edit/:email",async(req,res)=>{
const {email} = req.params;
const user = await UserModel.updateOne({email}, {$set:req.body});
if(user){
    res.status(201).send("success");
}else{
    res.status(400).send("something went wrong")
}
})



module.exports={
    userRouter
}