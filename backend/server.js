import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import authRoutes from "./routes/user.route.js";
import expenseRoutes from "./routes/expense.route.js";
import cors from "cors";
dotenv.config();
const app=express();

const port=process.env.PORT;



app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
  
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/expense", expenseRoutes);

app.listen(port,()=>{
    connectDB();
    console.log(`srver is running on ${port}`);
})