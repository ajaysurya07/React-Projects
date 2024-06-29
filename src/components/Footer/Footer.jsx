import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerlogo">
        <img src={footer_logo} alt="footer_logo" />
        <h1>Shopper</h1>
      </div>
      <ul className="footer_links">
        <li>company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footr_copy_right">
        <hr />
           <p>copy right @ 2023 All rights resvered</p>
      </div>
    </footer>
  );
};

export default Footer;
