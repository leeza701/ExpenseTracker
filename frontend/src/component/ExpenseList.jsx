import { useEffect } from "react";
import {useExpenseStore} from "../store/useExpenseStore.js";
import { useNavigate } from "react-router-dom";

export const ExpenseList = () => {
  const { FetchExpense, Expense, deleteExpense } = useExpenseStore();
  const navigate = useNavigate();

  useEffect(() => {
    FetchExpense();
  }, [FetchExpense]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Expense List
          </h2>
          <button
            onClick={() => navigate("/form")}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            + Add Expense
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-3 px-4 rounded-tl-lg">Title</th>
                <th className="py-3 px-4">Amount (₹)</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4 text-center rounded-tr-lg">Actions</th>
              </tr>
            </thead>

            <tbody>
              {Expense.length > 0 ? (
                Expense.map((exp) => (
                  <tr
                    key={exp._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 text-gray-800">{exp.title}</td>
                    <td className="py-3 px-4 text-gray-800">{exp.amount}</td>
                    <td className="py-3 px-4 text-gray-800">{exp.category}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => deleteExpense(exp._id)}
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-3 py-1.5 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-500 py-6 italic"
                  >
                    No expenses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
