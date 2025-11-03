import express from "express";
import {addExpense,getExpense,deleteExpense,monthlyExpense,categoryExpense,updateExpense} from "../controller/expense.controller.js";
const router=express.Router();

router.post("/",addExpense);
router.get("/monthlyExpense",monthlyExpense);
router.get("/categoryExpense",categoryExpense);  
router.get("/",getExpense);
router.delete("/:id",deleteExpense);
router.put("/:id",updateExpense);

export default router;