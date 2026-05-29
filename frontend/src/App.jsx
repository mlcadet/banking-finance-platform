import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import BranchPerformance from "./pages/BranchPerformance";
import Transactions from "./pages/Transactions";


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Branch Performance */}
        <Route path="/branch-performance" element={<BranchPerformance />} />
      
        {/* Transactions */}
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      
    </Router>
  );
}

export default App;

