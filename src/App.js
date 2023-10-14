import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
