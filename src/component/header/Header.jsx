import React, { Component } from 'react';
import "./Header.scss";

class Header extends React.Component {
    render() {
        return (
            <div className="header" id="header">
                <div className="header__main">
                    <div className="header__left">
                        <h2 className="header__title">RBG RATING CARRY</h2>
                        <p className="header__text">
                            Winning Rated Battlegrounds requires a high level of coordination,
                            team play, and a strong lead to organize a team of...
                        </p>
                        <button type="menu" className="header__button">buy now</button>
                    </div>
                    {/* <div className="header__right">
                        <div className="header__content">
                            <div className="slide__1 header__body"></div>
                            {/* <div className="slide__2 header__body"></div>
                            <div className="slide__3 header__body"></div>
                            <div className="slide__4 header__body"></div> 
                        </div> 
                    </div>*/}
                </div>
            </div>

        );
    };
};
export default Header;