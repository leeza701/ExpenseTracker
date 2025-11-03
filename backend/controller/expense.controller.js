import Expense from "../models/expense.model.js";
import mongoose from "mongoose";
export const getExpense=async(req,res)=>{
    try {
        const expense= await Expense.find({});
        return res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }

};

export const addExpense=async(req,res)=>{
    try {
        const {title,amount,category} = req.body;
        if(!title||!amount||!category){
            return res.status(200).json({message:"all feilds are required"});
        }
        const expense=new Expense({title,amount,category});
        expense.save();
        return res.status(200).json(expense);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }
};


export const deleteExpense=async(req,res)=>{
    try {
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:"invalid user"});
        }
        const deleteUser=await Expense.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json("user not found")
        }
        return res.status(200).json({message:"user deleted succesfuly"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }
};


export const monthlyExpense= async(req,res)=>{
     try {
    const summary = await Expense.aggregate([
      { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } },
      { $sort: { "_id": 1 } }
    ]);
    res.json(summary);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }

}; 

export const categoryExpense= async(req,res)=>{
    try {
   const summary = await Expense.aggregate([
     {
       $group: {
         _id: "$category",
         total: { $sum: "$amount" }
       }
     }
   ]);
   res.json(summary);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
};

export const updateExpense=async(req,res)=>{
    const {id}=req.params;
    const {title,amount,category}=req.body;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"invalid user"});
    }
    const updateProduct=await Expense.findByIdAndUpdate(id,{title,amount,category} ,{new:true});
    if(!updateProduct){
        return res.status(404).json({message:"product not found"});
    }
    return res.status(200).json({message:"updated successfully"});
    } catch (error) {
        return res.status(500).json({message:"internal server error"});
    }
}