import { create } from "zustand";   
import {axiosInstance} from "../lib/axios.js";
import { toast} from "react-hot-toast";
import { monthlyExpense } from "../../../backend/controller/expense.controller.js";

export const useExpenseStore=create((set)=>({
    Expense:[],
    categoryExpense:[],
    monthlyExpense:[],

    FetchExpense:async()=>{
        try {
            const res=await axiosInstance.get("/expense");
            set({Expense:res.data});
        } catch (error) {
            console.error("Error fetching expense data:", error);
        }
    },

    // addExpense:async(formData)=>{
    //     try {
    //         const res=await axiosInstance.post("/expense",formData);
    //         set((state) => ({
    //     expense: [...state.expense, res.data],
    //   }));
    //     } catch (error) {
    //         console.log(error);
    //         console.error("error in adding expense",error);
    //     }
    // },


    addExpense: async (data) => {
    try {
      const res = await axiosInstance.post("/expense", data);
      set((state) => ({
        expense: [...state.Expense, res.data],
      }));
      toast.success("expense added succesfully")
    } catch (error) {
       console.error("Error adding expense:", error);
      toast.error("expense not added");
    }
  },

  deleteExpense:async(id)=>{
   try {
    const res=await axiosInstance.delete(`/expense/${id}`);
   set((state)=>({
    Expense:state.Expense.filter((e)=>e._id!==id),}));
   toast.success("expense deleted succesfully");
   } catch (error) {
   console.error("Error deleting expense:", error);
    toast.error("expense deleted unsucessfuly");
   }
  },

  fetchMonthlyExpense:async()=>{
    try {
        const res=await axiosInstance.get("/expense/monthlyExpense");
         set({monthlyExpense:res.data});

    } catch (error) {
        console.error("error in fetching monthly expense",error);
    }
  },


   fetchCategoryExpense:async()=>{
    try {
        const res=await axiosInstance.get("/expense/categoryExpense");
         set({categoryExpense:res.data});

    } catch (error) {
        console.error("error in fetching  category expense",error);
    }
  },



}))