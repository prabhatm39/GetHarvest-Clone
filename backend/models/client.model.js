const mongoose= require("mongoose");

const clientSchema= mongoose.Schema({
    clientName:String,
    address: String,
    pCurrency: String,
    userId:String
});

const clientModel= mongoose.model("client",clientSchema);

module.exports={clientModel};