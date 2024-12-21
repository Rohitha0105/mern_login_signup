const User = require('../model/Signup')
const jwt = require('jsonwebtoken')

const secret = "Rohi@05"

const verifyTokens = async(req,res,next) => {
    const token = req.headers.token;
    if(!token){
        res.status(400).json({message:"Invalid token or token is required"})
    }
    try{
        const decoded = await jwt.verify(token,secret);
        const UserToken = await User.findById(decoded.userId)
    if(!UserToken){
        res.status(400).json({message: "User Not Found"})
    }
    req.UserId = UserToken._id;
    next();
    } catch(error) {
        console.log(error);  
    }
}

module.exports = verifyTokens;