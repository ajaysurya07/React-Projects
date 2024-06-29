import React from "react";
import "./offer.css";
import exclusiveOffer_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <main className="offers">
      <div className="offer_left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      
      </div>
      <div className="offer_right">
        <img src={exclusiveOffer_image} alt="exclusiveOffer_image" />
      </div>
    </main>
  );
};

export default Offers;
  