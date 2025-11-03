import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js";
import toast from "react-hot-toast";
export const useAuthstore=create((set)=>({
       authUser:null,
       isSigningUp:false,
       isLoggingIn:false,
       isAuthenticated: false,
      isCheckingAuth: true,

       signup:async(data)=>{
        set({isSigningUp:true});
          try {
            const res=await axiosInstance.post("/auth/signup",data);
            set({ authUser: res.data.user,isSigningUp: false,isAuthenticated: false });
            toast.success("signup successful");
          } catch (error) {
            console.log(error);
            set({ authUser: null,isSigningUp: false });
            toast.error(error.response?.data?.message||"signup unsucccesful");
          }
       },


       login:async(data)=>{
        set({isLoggingIn:true});
        try {
          const res=await axiosInstance.post("/auth/login",data);
          set({authUser:res.data,isLoggingIn:false,isAuthenticated: true});
          toast.success("login succesfull");
        } catch (error) {
          console.log(error);
          set({authUser:null,isLoggingIn:false});
          toast.error(error.response?.data?.message||"login unsuccesful");
        }
       },

    logout: async () => {
    try {
      await axiosInstance.get("/auth/logout"); 
      set({ authUser: null, isAuthenticated: false });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      const user = res.data.user || null;
      set({ authUser: user, isAuthenticated: !!user });
    } catch (error) {
      console.error("Error checking auth status:", error);
      set({ authUser: null, isAuthenticated: false });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));