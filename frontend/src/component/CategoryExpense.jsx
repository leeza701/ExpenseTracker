// import { useEffect } from "react";
// import {useExpenseStore} from "../store/useExpenseStore.js";

// export const CategoryExpense = () => {
//   const { fetchCategoryExpense, categoryExpense } = useExpenseStore();

//   useEffect(() => {
//     fetchCategoryExpense();
//   }, [fetchCategoryExpense]);

//   // Optional: assign colors to categories for visual distinction
//   const categoryColors = {
//     food: "bg-red-100 text-red-800",
//     transport: "bg-blue-100 text-blue-800",
//     entertainment: "bg-yellow-100 text-yellow-800",
//     shopping: "bg-green-100 text-green-800",
//     other: "bg-gray-100 text-gray-800",
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//         Category-wise Expense Summary
//       </h2>
//       <ul className="space-y-3">
//         {categoryExpense.map((item, index) => {
//           const categoryName = item.category || item._id;
//           const colorClass = categoryColors[categoryName.toLowerCase()] || categoryColors.other;

//           return (
//             <li
//               key={index}
//               className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg px-4 py-3 shadow-sm"
//             >
//               <span className={px-2 py-1 rounded-full text-sm font-medium ${colorClass}}>
//                 {categoryName}
//               </span>
//               <span className="font-bold text-gray-900">Rs. {item.total}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };



import { useEffect } from "react";
import { useExpenseStore } from "../store/useExpenseStore.js";

export const CategoryExpense = () => {
  const { fetchCategoryExpense, categoryExpense } = useExpenseStore();

  useEffect(() => {
    fetchCategoryExpense();
  }, [fetchCategoryExpense]);

  // Optional: assign colors to categories for visual distinction
  const categoryColors = {
    food: "bg-red-100 text-red-800",
    transport: "bg-blue-100 text-blue-800",
    entertainment: "bg-yellow-100 text-yellow-800",
    shopping: "bg-green-100 text-green-800",
    other: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Category-wise Expense Summary
      </h2>

      <ul className="space-y-3">
        {categoryExpense.length > 0 ? (
          categoryExpense.map((item, index) => {
            const categoryName = item.category || item._id || "Other";
            const colorClass =
              categoryColors[categoryName.toLowerCase()] || categoryColors.other;

            return (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg px-4 py-3 shadow-sm"
              >
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${colorClass}`}
                >
                  {categoryName}
                </span>
                <span className="font-bold text-gray-900">
                  ₹ {item.total}
                </span>
              </li>
            );
          })
        ) : (
          <li className="text-center text-gray-500 italic">
            No category-wise data found.
          </li>
        )}
      </ul>
    </div>
  );
};
