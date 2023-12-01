import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Customer from "./Pages/Customer";
import Agent from "./Pages/Agent";
import Errand from "./Pages/Errand";
import Payout from "./Pages/Payout";
import AdminLogin from "./Pages/AdminLogin";
import Password from "./Pages/Password";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/errand" element={<Errand />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/setpass" element={<Password />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
