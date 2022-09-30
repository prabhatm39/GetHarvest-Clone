const mongoose= require("mongoose");


const projectSchema= mongoose.Schema({
    date:String,
    project:String,
    purpose:String,
    notes:String,
    time:String,
    userId:String
});


const ProjectModel= mongoose.model("project",projectSchema);

module.exports={ProjectModel}