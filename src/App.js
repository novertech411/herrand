import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
