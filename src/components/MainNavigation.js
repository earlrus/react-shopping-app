import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MainNavigation.css";

const MainNavigation = () => {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <nav className="header">
      <div className="header-logo">
        <img
          src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
          alt="logo"
        />
        <h1>Smart Shoppe</h1>
      </div>
      <div className="header-actions">
        {!isLogin && (
          <Link to="/login" className="nav-link anim-fade-in">
            Login
          </Link>
        )}
        {isLogin && (
          <Link to="/logout" className="nav-link anim-fade-in">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
