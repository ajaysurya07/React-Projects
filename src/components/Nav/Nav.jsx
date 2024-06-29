import React, { useContext, useState } from "react";
import "./Nav.css";
import logo from "../Assets/logo.png";
import carticon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import DataContext from "../../context/dataContext";
const Nav = () => {
  const [menu, setMenu] = useState("Shop");

  const {  getTotalItems} = useContext(DataContext);

  return (
    <main className="NavBar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>shopper</p>
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link className="link_bar" to = "/" > Shop</Link>
          {menu == "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >  
          <Link className="link_bar" to = "/men" >Men</Link>
           {menu == "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >  <Link className="link_bar" to = "/women" >Women</Link>
           {menu == "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >  <Link className="link_bar" to = '/kids' >Kids</Link>
           {menu == "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="login_cart">
        <Link className="link_bar" to= './LoginSignup'><button>Login</button></Link>
       <Link className="link_bar" to = 'cart'> <img src={carticon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </main>
  );
};

export default Nav;
