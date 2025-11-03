import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/util.js";
export const signupRoute=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        if(!name||!email||!password){
            return res.status(200).json({message:"all feilds are requirede"});
        }
        if(password.length<6)
        {
            return res.status(200).json({message:"password is too short"});
        }
        const hashedPasword= await bcrypt.hash(password,10);
        const newUser=new User({name,email,password:hashedPasword});
        newUser.save();
        if(newUser){
            generateToken(newUser._id,res);
            return res.status(200).json({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email
            })
        }else
        {
            return res.status(400).json({message:"invalid user data"});
        }
        return res.status(400).json({message:newUser});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal sever error"});
    }
};

export const loginRoute=async(req,res)=>{
    const{email,password}=req.body;
    try {
        if(!email||!password){
            return res.status(401).json({message:"all fields required"});
        }
        const user = await User.findOne({email});
        if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
       }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"password is incorrect"});
        }
        generateToken(user._id,res);
        return res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }
};

export const logoutRoute=(req,res)=>{
   try {
    res.clearCookie("token"); // ✅ clear the auth cookie
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const checkAuth = (req, res) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}
