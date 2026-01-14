import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLLogin}) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        &#9776;
      </div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <Link to='/' className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>home</Link>
        <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>menu</a>
        <a href='#food-display' className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>dishes</a>
        <a href='#boca' className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact us</a>
      </ul>

      <div className='navbar-right'>
        <div className='navbar-right' id="search">
          <input style={{borderRadius:20, padding:5 }} type="text" placeholder='Order your favourite....' />
        <img src={assets.search_icon} alt="" />
        </div>
        <button onClick={()=>setShowLLogin(true)}>sign in</button>
        <div className='navbar-search-icon'>
          <Link to="/cart">
          <img src={assets.basket_icon} alt="" />
          </Link>
          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
