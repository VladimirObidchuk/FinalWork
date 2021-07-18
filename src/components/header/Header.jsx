import React from "react";
import "./Header.scss";
import Button from "../button/Button";

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
            <Button type="outlined" />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
