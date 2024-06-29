import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="loginSigu_conttainer">
        <p>Sign up</p>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text " placeholder="Email Adddress" />
          <input type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have a account ? <span>login Here </span>
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id=" " />
          <p>I argee to continue the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
