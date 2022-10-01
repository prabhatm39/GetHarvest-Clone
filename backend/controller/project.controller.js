const {Router}= require("express");
const { ProjectModel } = require("../models/projects.model");


const ProjectRouter= Router();

ProjectRouter.get("/",async(req,res)=>{
    const {userID}= req.body;
    const projects= await ProjectModel.find({userId:userID});
    res.send(projects)
})
ProjectRouter.get("/:projectid",async(req,res)=>{
    const {userID}= req.body;
    const {projectid} = req.params;
    const project= await ProjectModel.find({_id:projectid, userId:userID});
    res.send(project)
})
ProjectRouter.get("/dates/:date",async(req,res)=>{
    const {userID}= req.body;
    const date= req.params;
    const projects= await ProjectModel.find({userId:userID , date:date});
    res.send(projects)
})

ProjectRouter.post("/create",async(req,res)=>{
    const {userID}= req.body;
    const { date,project,purpose,notes,time}= req.body;
    const newProject= new ProjectModel({date,project,purpose,notes,time, userId:userID})
    await newProject.save();
    res.send("project created successfully")
}) 

ProjectRouter.put("/edit/:projectid",async(req,res)=>{
    const {userID}= req.body;
    const {projectid}= req.params;
    const update= await ProjectModel.findOneAndUpdate({_id:projectid, userId:userID},{...req.body});
    if(update){
        res.status(201).send("project updated")
    }else{
        res.status(404).send("project not found")
    }
})

ProjectRouter.delete("/delete/:projectid",async(req,res)=>{
    const {userID}= req.body;
    const {projectid}= req.params;
    const deleteproject= await ProjectModel.findOneAndDelete({_id:projectid, userId:userID});
    if(deleteproject){
        res.status(201).send("deleted successfully")
    }else{
        res.status(404).send("no project found")
    }
});

module.exports= {ProjectRouter}