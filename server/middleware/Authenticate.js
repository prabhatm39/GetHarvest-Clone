

const Authenticate= (req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).send("you are not authorized")
    }else{
        token = req.headers.authorization.split(" ")[1];

    }
}