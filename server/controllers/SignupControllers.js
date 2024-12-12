const Signup = require("../model/Signup")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = "Rohi@05"

const Signups= async(req,res) =>{
    const{email,password}= req.body;

try{
    const sign = await Signup.findOne({email:email});

    const hashpassword = await bcrypt.hash(password, 10);

    if(sign){
        res.status(400).json({message:"User Already Exist"})
    }else{
        const user = await Signup.create({
            email,
            password: hashpassword
        });
    if(user){
        res.status(200).json({message:"User registered sucessfully"})
        console.log("Registration Completed")
    } else{
        res.status(400).json({message:"Error"})
    }
    }
} catch(error) {
    console.log(error)
}

};

const Logins = async(req , res) =>{
    const{email,password} = req.body;
 
    try{
       const login = await Signup.findOne ({email: email});
     if (!login || !(await bcrypt.compare(password, login.password))){
        res.status(400).json({message: "Invalid email or password"})
     } else{
        const token = await jwt.sign({userId: login._id}, secret,{
            expiresIn: "30h",
        });
        res.status(200).json({message: "User login sucessfull"})
     }
    } catch(error){
        console.log(error)
    };
 }
module.exports = {Signups,Logins};