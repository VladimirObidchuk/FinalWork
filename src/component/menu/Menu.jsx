import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Menu.scss";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu" >
                <div className="menu__main">
                    <div className='menu__logo'>
                        <h3 className='menu__name'>LIGHTBOOST</h3>
                    </div>
                    <nav className="menu__header" id="menu__header" >
                        <ul className="menu__list" >
                            <li className="menu__item" >
                                <Link to='/Home' className="menu__link home__link">HOME</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/aboutUs" className="menu__link about__link">About Us</Link>
                            </li>
                            <li className="menu__item">
                                <a href="#news" className="menu__link shop">SHOP</a>
                            </li>
                            <li className="menu__item" >
                                <Link to="/contact" className="menu__link contact__link">contacts</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="mobile__login">
                        <a href="#login" className="login__item item1"><div className="item1"></div></a>
                        <a href="#registered" className="login__item item2" target="_blank"><div className="item2"></div> </a>
                    </div>
                    <nav className="mobile__menu" id="mobile__menu">
                        <ul className="mobile__list" >
                            <li className="mobile__item" >
                                <a href="/#" className="mobile__link home__link" > HOME</a>
                            </li>
                            <li className="mobile__item" >
                                <a href="/#" className="mobile__link about__link"> About Us</a>
                            </li>
                            <li className="mobile__item" >
                                <a href="#news" className="mobile__link shop" > SHOP</a>
                            </li>
                            <li className="mobile__item" >
                                <a href="#contact" className="mobile__link contact__link" > contacts</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="burger" id="burger" >
                        <div className="burger__stule" >
                            <span className="burger__button" ></span>
                        </div>
                    </div>
                    <div className="menu__login" id="menu__login" >
                        <a href="#login" className="footer__item" >login</a>
                        <a href="#registered" className="footer__item" target="_blank"> registered</a>
                    </div>
                </div>
            </div>
        );
    };
};
export default Menu;