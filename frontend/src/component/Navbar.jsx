import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ logout, authUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Monthly Expense", href: "/monthly" },
    { name: "Category Expense", href: "/category" },
    { name: "Expense List", href: "/list" },
    { name: "Add Expense", href: "/form" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => navigate("/list")}
        >
          Expense Tracker
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className="px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              {item.name}
            </button>
          ))}

          {authUser ? (
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200"
              >
                Signup
              </button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.href);
                setIsOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              {item.name}
            </button>
          ))}

          {authUser ? (
            <button
              onClick={() => {
                logout();
                navigate("/login");
                setIsOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200"
              >
                Signup
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};