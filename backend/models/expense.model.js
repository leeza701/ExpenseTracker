import mongoose from "mongoose";

const expenseSchema=new mongoose.Schema({
    title:{
        type:String,
        requierd:true,
    },
    category:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
        requireed:true,
    },
},{timestamps:true});

const Expense=mongoose.model("Expense",expenseSchema);

export default Expense;