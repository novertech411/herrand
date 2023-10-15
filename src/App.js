import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
