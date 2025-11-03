import { useEffect } from "react";
import {useExpenseStore} from "../store/useExpenseStore.js";

export const MonthlyExpense = () => {
  const { fetchMonthlyExpense, monthlyExpense } = useExpenseStore();

  useEffect(() => {
    fetchMonthlyExpense();
  }, [fetchMonthlyExpense]);
    
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Monthly Expense Summary
      </h2>
      <ul className="divide-y divide-gray-200">
        {monthlyExpense.map((item, index) => {
          const monthNumber = Number(item.month || item._id); 
          const monthName = monthNames[monthNumber - 1] || monthNumber; 
          return (
            <li
              key={index}
              className="flex justify-between items-center py-4 hover:bg-gray-50 transition-colors rounded-md px-4"
            >
              <span className="text-gray-700 font-medium">{monthName}</span>
              <span className="text-gray-900 font-bold">Rs. {item.total}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};