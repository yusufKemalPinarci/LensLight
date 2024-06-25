
import User from "../models//userModel.js"
import jwt from "jsonwebtoken"

const authanticateToken= async(req,res,next)=>{
try {  

    const token= req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    print(token)


    if(!token){
        return res.status(401).json({
            succeded:false,
            error: "token no avalibale"
        })
    }

    req.user= await User.findById(
        jwt.verify(token,process.env.JWT_SECRET).userId
    );
    next();


    
} catch (error) {
    res.status(401).json({
        succeded: false,
        error: 'not authorized'
    }) 
}
};


export{authanticateToken}