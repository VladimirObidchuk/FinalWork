import React, { Component } from 'react';
import "./Advantages.scss";

import timer from "./advantages_timer.svg";
import hange from "./advantages_hange.svg";
import wallet from "./advantages_wallet.svg";
import discounts from "./advantages_discounts.svg";

class Advantages extends React.Component {
    render() {
        return (
            <div className="advantages" id="advantages">
                <div className="advantages__main">
                    <h3 className="advantages__title">OUR ADVANTAGES</h3>
                    <div className="advantages__body">
                        <ul className="advantages__list">
                            <li className="advantages__item">
                                <div className="advantages__imegList">
                                    <img
                                        src={timer}
                                        alt="timer"
                                        className="advantage__image"
                                    />
                                </div>
                                <a href="/#" className="advantages__link">Fast execution</a>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__imegList">
                                    <img
                                        src={hange}
                                        alt="hange"
                                        className="advantage__image"
                                    />
                                </div>

                                <a href="/#" className="advantages__link">Warranty service 24/7</a>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__imegList">
                                    <img
                                        src={wallet}
                                        alt="wallet"
                                        className="advantage__image"
                                    />
                                </div>

                                <a href="/#" className="advantages__link">Сonvenient payment</a>
                            </li>
                            <li className="advantages__item">
                                <div className="advantages__imegList">
                                    <img
                                        src={discounts}
                                        alt="discounts"
                                        className="advantage__image"
                                    />
                                </div>

                                <a href="/#" className="advantages__link">Discounts for customers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    };
};
export default Advantages;