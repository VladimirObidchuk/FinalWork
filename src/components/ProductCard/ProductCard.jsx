import Button from "../button/Button";
import "./ProductCard.scss";

function ProductCard({ image }) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(180deg, rgba(31, 39, 27, 0) 0%, rgba(31, 39, 27, 0.87) 100%), url(${
          process.env.PUBLIC_URL + "/img/" + image
        }) center no-repeat`,
      }}
    >
      <div className="card__header">
        <h3 className="card__title">RGD RATING CARRY</h3>
        <p className="card__text">
          <span className="card__cycle"></span> Best of the best
        </p>
      </div>
      <div className="card__footer">
        <div className="card__footerText">
          <p className="card__subText">cost</p>
          <p className="card__subTitle">$39</p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default ProductCard;
