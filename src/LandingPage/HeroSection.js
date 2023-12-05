import background from "./../Images/background.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-cont">
      <div className="hero-inner-cont">
        <img src={background} alt="background" className="background-img" />
        <div className="bottom-shape"></div>
      </div>
      <div className="side-content">
          <div className="title">
            Welcome to Tricity Terra Magic The one place for all your needs
          </div>
          <div className="button-cont">
            <button className="Linkto">Get Started</button>
          </div>
        </div>
    </div>
  );
}
