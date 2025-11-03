import { Route, Routes } from 'react-router-dom'
import {SignupPage} from "./pages/SignupPage.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {Toaster} from 'react-hot-toast';
import {Navbar} from "./component/Navbar.jsx";
import ExpenseForm from "./component/AddExpense.jsx";
import {ExpenseList} from "./component/ExpenseList.jsx";
import {MonthlyExpense} from "./component/MonthlyExpense.jsx";
import { CategoryExpense } from './component/CategoryExpense.jsx';
import {useAuthstore} from "./store/useAuthStore.js";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
function App() {
  const {checkAuth,isAuthenticated,isCheckingAuth,authUser,logout}=useAuthstore();
  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  if(isCheckingAuth){
    return <div>
      loading....
    </div>
  }

  return (
    <div>
      {/* <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form" element={<ExpenseForm />} />
        <Route path="/list" element={<ExpenseList />} />
        <Route path="/monthly" element={<MonthlyExpense />} />
        <Route path="category" element={<CategoryExpense />} />
        </Routes> */}

        <Navbar logout={logout} authUser={authUser} />
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/form" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignupPage /> : <Navigate to="/form" />}
        />
        <Route
          path="/form"
          element={isAuthenticated ? <ExpenseForm /> : <Navigate to="/login" />}
        />
        <Route
          path="/list"
          element={isAuthenticated ? <ExpenseList /> : <Navigate to="/login" />}
        />
        <Route
          path="/monthly"
          element={isAuthenticated ? <MonthlyExpense /> : <Navigate to="/login" />}
        />
        <Route
          path="/category"
          element={isAuthenticated ? <CategoryExpense /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/form" : "/login"} />}
        />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
