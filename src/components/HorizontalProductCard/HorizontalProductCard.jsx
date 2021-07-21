import Button from "../button/Button";
import "./HorizontalProductCard.scss";

function HorizontalProductCard({ image }) {
  return (
    <div
      className="product-card-h"
      key={image}
      style={{
        background: `url(${process.env.PUBLIC_URL + "/img/" + image})no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="product-card-h__main">
        <div className="product-card-h__leftSide">
          <h3 className="product-card-h__title">RGD RATING CARRY</h3>
          <Button type="blurred">buy now</Button>
        </div>
        <div className="product-card-h__rightSide">
          <div className="product-card-h__rightImg">$39</div>
        </div>
      </div>
    </div>
  );
}
export default HorizontalProductCard;
