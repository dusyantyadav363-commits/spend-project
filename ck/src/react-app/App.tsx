import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Reports from "./pages/Reports";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/add-expense" element={<AddExpense />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;