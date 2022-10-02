const {Router}= require("express");
const { clientModel } = require("../models/client.model");


const clientRoute= Router();

clientRoute.get("/",async(req,res)=>{
    const {userID} = req.body;
const clients= await clientModel.find({userId:userID});
res.send(clients)
});

clientRoute.post("/create",async(req,res)=>{
    const {userID,clientName,address,pCurrency}= req.body;
    const newClient= new clientModel({
        clientName,address,pCurrency,userId:userID
    })
    await newClient.save();
    res.send("new client created successfully")
});

clientRoute.put("/edit/:clientid", async(req,res)=>{
    const {userID}= req.body;
    const {clientid}= req.params;
    const client= await clientModel.findOneAndUpdate({_id:clientid, userId:userID},{...req.body});
    if(client){
        res.status(201).send("update successfull")
    }else{
        res.status(404).send("client not found")
    }
})

clientRoute.delete("/delete/:clientid",async(req,res)=>{
    const {userID}= req.body;
    const {clientid}= req.params;
    const client= await clientModel.findOneAndDelete({_id:clientid, userId:userID});
    if(client){
        res.status(201).send("delete successfull")
    }else{
        res.status(404).send("client not found")
    }
})

module.exports={clientRoute}