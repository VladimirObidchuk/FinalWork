import "./ProductSection.scss";
import ProductSlider from "../ProductSlider/ProductSlider";

const ProductSection = ({ title, images }) => {
  return (
    <div className="product-section">
      <h3 className="product-section__title">{title}</h3>
      <div className="product-section__cards">
        <ProductSlider images={images} />
      </div>
    </div>
  );
};
export default ProductSection;
