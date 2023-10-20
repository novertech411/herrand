import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Customer from "./Pages/Customer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route index path="/customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
