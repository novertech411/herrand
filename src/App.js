import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
// import Dashboard from "./Pages/Dashboard";
import Customer from "./Pages/Customer";
import Agent from "./Pages/Agent";
import Errand from "./Pages/Errand";
import Payout from "./Pages/Payout";
import AdminLogin from "./Pages/AdminLogin";
import Password from "./Pages/Password";
// import ClearLocalStorageOnInactivity from "./clearLocal";
// import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import Terms from "./Pages/LandingPage/Terms";
import { Privacy } from "./Pages/Privacy";
import { Safety } from "./Pages/Safety";
import { Guides } from "./Pages/Guides";
import Deletion from "./Pages/Deletion";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    // <ClearLocalStorageOnInactivity>
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route
            path="/dashboard"              
            element={<ProtectedRoute element={<Dashboard />} />}
          /> */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/errand" element={<Errand />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/setpass" element={<Password />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/deletion" element={<Deletion />} />
      </Routes>
    </div>
    // </ClearLocalStorageOnInactivity>
  );
}

export default App;
