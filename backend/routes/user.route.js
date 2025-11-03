import express from "express";
import { signupRoute,loginRoute,logoutRoute,checkAuth } from "../controller/user.controller.js";
const router=express.Router();

router.post("/signup",signupRoute);
router.post("/login",loginRoute);
router.get("/logout",logoutRoute);
router.get("/check",checkAuth);


export default router;