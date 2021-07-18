import React, { Component } from 'react';
import Form from '../formSubscrible/formSubscrible';
import "./Footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="footer__main">
                    <div className="footer__header"></div>
                    <div className="footer__body">
                        <div className="footer__left">
                            <div className="footer__leftTitle">LIGHTBOOST</div>
                            <ul className="left__item">
                                <li className="left__list">
                                    <a href="/#" className="left__link home__link">HOME</a>
                                </li>
                                <li className="left__list">
                                    <a href="/#" className="left__link about__link">ABOUT US</a>
                                </li>
                                <li className="left__list">
                                    <a href="/#" className="left__link">SHOP</a>
                                </li>
                                <li className="left__list">
                                    <a href="#contact" className="left__link contact__link">CONTACTS</a>
                                </li>
                            </ul>
                            <div className="left__footer">WoW © 2021. All Rights Reserved</div>
                        </div>
                        <div className="footer__right">
                            <div className="footer__rightTitle">Subscribe to newsletter</div>
                            <Form />
                            <ul className="right__pay">
                                <li className="pay__item pay__visa">
                                    <a href="/#" className="pay__link"></a>
                                </li>
                                <li className="pay__item pay__mastercard">
                                    <a href="/#" className="pay__link"></a>
                                </li>
                                <li className="pay__item pay__paypal">
                                    <a href="/#" className="pay__link"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default Footer;