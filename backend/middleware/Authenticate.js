const jwt = require('jsonwebtoken');

const Authentication= (req,res,next)=>{
    if(!req.headers.authorization){
        res.send("please login")
    }
    const token = req.headers?.authorization?.split(" ")[1];
    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
       if(err){
           res.status(401).send("You are not authorized")
       }
       else{
            req.body.userID= decode.userID
           next();
       } 
    })
}


module.exports = Authentication;