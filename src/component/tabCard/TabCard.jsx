import React from "react";
import "./TabCard.scss";

function TabCard(props) {
  return props.images.map((image) => (
    <div
      className="tab__card"
      key={image}
      style={{
        background: `url(${
          process.env.PUBLIC_URL + "/img/" + image
        }) no-repeat`,
        backgroundSize: `container`,
      }}
    >
      <div className="tab__main">
        <div className="tab__leftSide">
          <h3 className="title__card">RGD RATING CARRY</h3>
          <button type="submit" className="tab__button">
            buy now
          </button>
        </div>
        <div className="tab__rightSide">
          <div className="tab__rightImg">$39</div>
        </div>
      </div>
    </div>
  ));
}
export default TabCard;
