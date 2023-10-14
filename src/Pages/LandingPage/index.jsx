import AboutSection from "../../Components/AboutSection";
import DownComp from "../../Components/DownComp";
import HeroSection from "../../Components/HeroSection";
import HowItWorks from "../../Components/HowItWorks";
import OurApp from "../../Components/OurApp";
import OurFeature from "../../Components/OurFeature";
import "./style.css";

const LandingPage = () => {
  return (
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
  );
};

export default LandingPage;
