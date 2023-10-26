import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Customer from "./Pages/Customer";
import Agent from "./Pages/Agent";
import Errand from "./Pages/Errand";
import Payout from "./Pages/Payout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route index path="/customer" element={<Customer />} />
        <Route index path="/agent" element={<Agent />} />
        <Route index path="/errand" element={<Errand />} />
        <Route index path="/payout" element={<Payout />} />
      </Routes>
    </div>
  );
}

export default App;
