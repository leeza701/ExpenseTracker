// import { useState } from "react";
// import { useAuthstore } from "../store/useAuthStore.js";

// export const LoginPage=()=>{
//     const [formData,setFormData]=useState({
//         email:"",
//         password:"",
//     });
//     const {login} =useAuthstore();

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         await login(formData);
//     }

//     return(
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Create an Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={(e)=>setFormData({...formData,email:e.target.value})}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={(e)=>setFormData({...formData,password:e.target.value})}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* login  Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             login
//           </button>
//         </form>
//       </div>
//     </div>
//     );
// };






import { useState } from "react";
import {useAuthstore} from "../store/useAuthStore.js";

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuthstore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Optional Signup Link */}
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={() => window.location.href = "/signup"}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};