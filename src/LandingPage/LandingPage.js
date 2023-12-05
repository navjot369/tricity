import Navbar from "../Navbar/Navbar.js";
import HeroSection from "./HeroSection.js";
import "./LandingPage.css";

export default function LandingPage() {
    return(<div>
        <Navbar />
        <div className="landing-cont" >
            <HeroSection />
        </div>
    </div>);
}