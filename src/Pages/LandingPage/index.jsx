import AboutSection from "../../Components/AboutSection";
import DownComp from "../../Components/DownComp";
import HeroSection from "../../Components/HeroSection";
import HowItWorks from "../../Components/HowItWorks";
import OurApp from "../../Components/OurApp";
import OurFeature from "../../Components/OurFeature";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

import "./style.css";
import Terms from "./Terms";
import { useState } from "react";
import Privacy from "./Privacy";

const LandingPage = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const handlePrivacyOpenClick = () => {
    setIsPrivacyOpen(true);
  };
  const handlePrivacyCloseClick = () => {
    setIsPrivacyOpen(false);
  };
  const handleTermsOpenClick = () => {
    setIsTermsOpen(true);
  };
  const handleTermsCloseClick = () => {
    setIsTermsOpen(false);
  };
  return (
    <div className="land-relat">
      {isTermsOpen && (
        <div className="land-lay flex">
          <Terms handleTermsCloseClick={handleTermsCloseClick} />
        </div>
      )}
      {isPrivacyOpen && (
        <div className="land-lay flex">
          <Privacy handlePrivacyCloseClick={handlePrivacyCloseClick} />
        </div>
      )}
      <Navbar />
      <div className="landing-page-container">
        <HeroSection />
        <AboutSection />
        <OurApp />
        <div className="our-fer" id="our-feature-section">
          <OurFeature />
        </div>
        <HowItWorks />
        <div className="download-boxx">
          <DownComp />
        </div>
      </div>

      <Footer
        handleTermsOpenClick={handleTermsOpenClick}
        handlePrivacyOpenClick={handlePrivacyOpenClick}
      />
    </div>
  );
};

export default LandingPage;
