import React from "react";
import "./hero.css";
import handicon from "../Assets/hand_icon.png";
import heroimg from "../Assets/hero_image.png";
import arrowIcon from "../Assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival</h2>
        <div>
          <div className="hand-hand-logo">
            <p>New</p>
            <img src={handicon} alt="handicoon" />
          </div>
          <p>Collections</p>
          <p>for everyone </p>
        </div>
        <div className="hero_latest_btn">
          <div>Latest Colletion </div>
          <img src={arrowIcon} alt="arrowicon" />
        </div>
      </div>
      <div className="hero_right">
        <img src={heroimg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
