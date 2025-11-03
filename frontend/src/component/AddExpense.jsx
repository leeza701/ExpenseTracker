// import { useExpenseStore } from "../store/useExpenseStore.js";
// import {useState} from "react";
// import toast from "react-hot-toast";
// const AddExpense = () => {
//   const[formData,setformData]=useState({
//     title:"",
//     amount:"",
//     category:""
//   });
   
//   const {addExpense}=useExpenseStore();
//   // const handleSubmit=async(e)=>{
//   //   e.preventDefault();
//   //   await addExpense(formData);
//   //   setformData({title:"",amount:"",category:""})
//   // }

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await addExpense(formData);
//     toast.success("Expense added successfully!");
//     setformData({ title: "", amount: "", category: "" });
//   } catch (err) {
//     toast.error("Failed to add expense.");
//   }
// };



//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Add New Expense
//         </h2>

//         <form  onSubmit={handleSubmit} className="space-y-5">
//           {/* Title Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Coffee"
//               value={formData.title}
//               onChange={(e)=>setformData({...formData,title:e.target.value})}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//               required
//             />
//           </div>

//           {/* Amount Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Amount (₹)
//             </label>
//             <input
//               type="number"
//               placeholder="e.g. 200"
//               value={formData.amount}
//               onChange={(e)=>setformData({...formData,amount:e.target.value})}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//               required
//             />
//           </div>

//           {/* Category Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Category
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Food, Travel, Rent"
//               value={formData.category}
//               onChange={(e)=>setformData({...formData,category:e.target.value})}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="button" // changed to button to prevent form submit
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition"
//           >
//             Add Expense
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddExpense;



import { useState } from "react";
import {useExpenseStore} from "../store/useExpenseStore.js";

const ExpenseForm = () => {
  const { addExpense } = useExpenseStore();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(formData);
    setFormData({ title: "", amount: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Expense
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Coffee"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 200"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Category Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g. Food, Travel, Rent"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;