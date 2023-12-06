import Navbar from "../Navbar/Navbar.js";
import HeroSection from "./HeroSection.js";
import "./LandingPage.css";
import Properties from "./PropertiesSection.js";
import Footer from "./../Footer/Footer.js";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Properties />
      <Footer />
    </div>
  );
}
