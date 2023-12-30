import React from "react";
import "./Body.css";
import logo from "../Assets/fb-img.png";
const Body = () => {
  return (
    <div className="container">
      {/* For The left content */}
      <div className="left">
        <img src={logo} alt="" className="img" />
        <h4 className="description">
          Facebook helps you connect and share with the people in your life.
        </h4>
      </div>
      {/* For the right content */}
      <div className="right">
        <form action="" className="form-class">
          <input type="email" placeholder="Email address or phone number" />
          <input type="password" name="" id="password" placeholder="password" />
          <button className="button-1" type="submit">
            Log In
          </button>
        </form>

        <div className="extra-options">
          <a href="#">Forgot Password?</a>
          <span>·</span>
          <button className="button-2">Create new Account</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
