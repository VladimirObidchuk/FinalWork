import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import "./Menu.scss";

function Menu() {
  const [open, setOpen] = useState(null);
  const handleClick = () => {
    setOpen(!open);
  };
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="menu">
      <div className="menu__main">
        <div className="menu__logo">
          <h3 className="menu__name">LIGHTBOOST</h3>
        </div>
        <nav className="menu__header" id="menu__header">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__link home__link">
                HOME
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/aboutUs" className="menu__link about__link">
                About Us
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/contact" className="menu__link contact__link">
                contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile__login">
          <a href="#login" className="login__item item1" onClick={handleLogin}>
            <div className="item1"></div>
          </a>
        </div>
        {open ? (
          <nav className="mobile__menu" id="mobile__menu">
            <ul className="mobile__list">
              <li className="mobile__item">
                <Link to="/" className="mobile__link home__link">
                  HOME
                </Link>
              </li>
              <li className="mobile__item">
                <Link to="/aboutUs" className="mobile__link about__link">
                  About Us
                </Link>
              </li>
              <li className="mobile__item">
                <Link to="/contact" className="mobile__link contact__link">
                  contacts
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
        <div className="burger" id="burger" onClick={handleClick}>
          <div className="burger__stule">
            <span className="burger__button"></span>
          </div>
        </div>
        <div className="menu__login" id="menu__login">
          <a href="#login" className="footer__item" onClick={handleLogin}>
            login
          </a>
        </div>
      </div>
      {showLogin ? <Login onClose={closeLogin} /> : null}
    </div>
  );
}
export default Menu;
