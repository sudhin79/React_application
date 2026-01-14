import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
          />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Login" ? null : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {/* <input type="password" placeholder="Conform Password" required /> */}
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className='login-popup-footer'>
          <p>
            {currState === "Login" ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}>
              {currState === "Login" ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
