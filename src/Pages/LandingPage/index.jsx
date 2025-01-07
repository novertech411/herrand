import AboutSection from "../../Components/AboutSection";
import DownComp from "../../Components/DownComp";
import HeroSection from "../../Components/HeroSection";
import OurApp from "../../Components/OurApp";
import OurFeature from "../../Components/OurFeature";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

import "./style.css";
import Terms from "./Terms";
import { useEffect, useState } from "react";
import Privacy from "./Privacy";
import Testimoner from "../../Components/Testimoner";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <HeroSection />
      <div className=" bg-blue-100 py-3 text-center font-poppins font-[400] md:text-[36px] text-[20px] text-[#0775F2]">
        {" "}
        Save Time. Make Money. Live Better.{" "}
      </div>
      <AboutSection />
      <OurApp />
      <div className="our-fer" id="our-feature-section">
        <OurFeature />
      </div>
      <Testimoner />

      <DownComp />

      <Footer
        handleTermsOpenClick={handleTermsOpenClick}
        handlePrivacyOpenClick={handlePrivacyOpenClick}
      />
    </div>
  );
};

export default LandingPage;
